import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    'index',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'doc',
        id: 'getting-started/index',
      },
      items: [
        'getting-started/start-of-year',
        'getting-started/work-areas',
      ],
    },
    'artifacts/index',
    {
      type: 'category',
      label: 'Evidence View',
      link: {
        type: 'doc',
        id: 'evidence/index',
      },
      items: [
        'evidence/rubric-navigator',
        'evidence/collected-evidence',
        'evidence/rubric-notes',
        'evidence/rubric-alignment',
        'evidence/evidence-packages',
      ],
    },
    {
      type: 'category',
      label: 'Role Guides',
      items: [
        'role-guides/district-admin',
        'role-guides/school-admin',
        'role-guides/evaluator',
        'role-guides/teacher',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/evaluation-basics',
        'reference/evidence-collection',
        'reference/plan-type-changes',
        'reference/workflows',
        'reference/state-framework',
        'reference/modules-settings',
        'reference/settings-inheritance',
      ],
    },
    'faq',
  ],
};

export default sidebars;
