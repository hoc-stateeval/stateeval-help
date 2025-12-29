/**
 * Generates a lightweight search index for use in the main eVAL app.
 * Run after `npm run build` to create app-search-index.json
 *
 * Usage: node scripts/generate-app-search-index.js
 */

const fs = require('fs');
const path = require('path');

const BUILD_DIR = path.join(__dirname, '..', 'build');
const DOCS_DIR = path.join(__dirname, '..', 'docs');

// Read the docusaurus search index to get document list
const searchIndex = require(path.join(BUILD_DIR, 'search-index.json'));
const documents = searchIndex[0].documents;

// Helper to extract text content from markdown (simplified)
function extractKeywords(markdownPath) {
  if (!fs.existsSync(markdownPath)) return [];

  const content = fs.readFileSync(markdownPath, 'utf-8');

  // Extract headings
  const headings = content.match(/^#{1,3}\s+(.+)$/gm) || [];
  const headingText = headings.map(h => h.replace(/^#+\s+/, '').toLowerCase());

  // Extract bold terms (often key concepts)
  const boldTerms = content.match(/\*\*([^*]+)\*\*/g) || [];
  const boldText = boldTerms.map(b => b.replace(/\*\*/g, '').toLowerCase());

  // Combine and dedupe
  const allTerms = [...headingText, ...boldText];
  return [...new Set(allTerms)].slice(0, 20); // Limit to 20 keywords per doc
}

// Map URL to markdown file path
function urlToMarkdownPath(url) {
  let filePath = url.replace(/^\//, '').replace(/\/$/, '');
  if (!filePath) filePath = 'index';

  // Try different possible paths
  const possiblePaths = [
    path.join(DOCS_DIR, `${filePath}.md`),
    path.join(DOCS_DIR, filePath, 'index.md'),
  ];

  for (const p of possiblePaths) {
    if (fs.existsSync(p)) return p;
  }
  return null;
}

// Build the lightweight index
const appSearchIndex = {
  version: '1.0',
  generated: new Date().toISOString(),
  baseUrl: 'https://stateeval-help.onrender.com',
  documents: documents.map(doc => {
    const mdPath = urlToMarkdownPath(doc.u);
    const keywords = mdPath ? extractKeywords(mdPath) : [];

    return {
      id: doc.i,
      title: doc.t,
      url: doc.u,
      breadcrumbs: doc.b,
      keywords: keywords,
    };
  }),
};

// Write the index
const outputPath = path.join(BUILD_DIR, 'app-search-index.json');
fs.writeFileSync(outputPath, JSON.stringify(appSearchIndex, null, 2));

console.log(`Generated ${outputPath}`);
console.log(`Documents: ${appSearchIndex.documents.length}`);
console.log(`Size: ${(fs.statSync(outputPath).size / 1024).toFixed(1)}KB`);
