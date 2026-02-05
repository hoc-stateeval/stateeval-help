---
sidebar_position: 2
title: Rubric Navigator
---

# Rubric Navigator

The Rubric Navigator is the right-pane component of the Evidence View. It displays the evaluation framework's criteria and rubric components, allowing you to select components and see evidence and scoring information at a glance.

## Navigator Tabs

The Rubric Navigator has two or three tabs depending on the evidence collection:

### Evidence Tab

The Evidence tab shows the rubric component tree with two count columns:

- **Collected** - The number of individual evidence items aligned to each rubric component
- **Packaged** - The number of evidence packages created for each rubric component

Counts are displayed at both the rubric component level and aggregated at the criteria level.

**Evidence Only checkbox:** When checked, the navigator only displays rubric components that have at least one evidence item. This helps you quickly focus on components with evidence.

### Performance Tab

The Performance tab shows:

- **Score indicators** (U, B, P, D) for each rubric component, with the assigned score highlighted
- **Evidence count tallies** by performance level, showing how many evidence items are aligned to each level

This view is useful for seeing the overall scoring picture and identifying where evidence supports each performance level.

### Report Tab

The Report tab appears in the Summative Evaluation. It works like the Evidence tab but only counts evidence items and packages that have been marked for inclusion in the final report.

## Where Each Tab Appears

| Evidence Collection | Evidence Tab | Performance Tab | Report Tab |
|--------------------|-------------|-----------------|------------|
| Observations | Yes | Yes | |
| Self-Assessments | Yes | Yes | |
| Coded Notes | Yes | Yes | |
| Student Growth | Yes | Yes | |
| YTD Evidence | Yes | Yes | |
| Summative Evaluation | Yes | Yes | Yes |

## Navigating the Rubric

### Expand and Collapse

Criteria rows (e.g., "Planning and Preparation", "The Classroom Environment") can be expanded or collapsed using the +/- toggle. When expanded, the individual rubric components within that criterion are displayed.

### Selecting a Rubric Component

Click on any rubric component row to select it. The left pane will update to show the collected evidence, rubric alignment, and evidence packages for that component.

## Scoring

Scoring availability depends on the evidence collection and your district's settings.

### Rubric Component Scoring

When scoring is enabled, performance level buttons (UNS, BAS, PRO, DIS) appear at the top of the left pane next to the rubric component title. Click a button to assign that performance level to the component.

| Evidence Collection | Scoring Available When |
|--------------------|----------------------|
| Self-Assessment | SA_ALLOW_SCORING is enabled |
| Observation | OBS_ALLOW_SCORING is enabled |
| Coded Note | CODED_NOTE_ALLOW_SCORING is enabled |
| Student Growth | Goal Setting and Achievement components only (required for approval/submission) |
| YTD Evidence | Never |
| Summative Evaluation | Required for C1-C8 criteria to submit |

### Criteria Scoring

Criteria-level scores appear in the Summative Evaluation. The summative score is calculated based on individual student growth rubric component scores and C1-C8 criteria scores.

### Score Display

At the bottom of the Rubric Navigator you may see:

- **Raw Score** - The count of scored components out of total components
- **Summative Score** - The calculated summative score (in Summative Evaluation)
- **View Score** - A button to see score details

## Framework Display

The rubric components shown in the navigator depend on your evaluation type and the evidence collection:

### Comprehensive Evaluations

For comprehensive evaluations, the navigator shows the full framework including all criteria and their components, plus student growth components.

### Focused Evaluations

For focused evaluations, the display depends on the evidence collection:

- **Observations, Self-Assessments, Coded Notes** - Shows the focused criterion's components plus student growth components
- **Student Growth** - Shows only the relevant student growth components
- **Summative Evaluation** - Shows the focused criterion plus student growth
- **YTD Evidence** - Shows the comprehensive (full framework) view

:::note
The specific rubric component names and structure depend on your district's chosen instructional framework (e.g., Danielson, Marzano, CEL 5D+).
:::
