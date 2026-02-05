---
sidebar_position: 2
title: Evidence Collections
roles: [TR, PR, DPE, DTE]
---

# Evidence Collections

In eVAL, each evaluation activity — an observation, an artifact, a student growth goal, a self-assessment, or a coded note — creates an **evidence collection**. An evidence collection is a container that holds the evidence produced by that activity and controls who can see it and when.

## How Evidence Collections Work

Each evidence collection has:

- **A type** — determined by the activity (observation, artifact, student growth, self-assessment, coded note)
- **A scope** — which rubric criteria and components the evidence can be aligned to, based on the evaluatee's plan type
- **A workflow** — rules for how the collection moves from draft to final, who can edit, and when it becomes visible to others

See [How Workflows Work](./workflows.md) for the detailed lifecycle of each type.

## Visibility Within an Observation

Observations are the most complex evidence collection in terms of visibility. Both the evaluator and evaluatee can see the observation, but they see different tabs and content depending on the workflow state.

| Tab | Evaluator | Evaluatee |
|-----|-----------|-----------|
| **Setup** | Edit (conference dates, observation type, etc.) | View only |
| **Pre-Conference** | Select and send prompts; review evaluatee responses; code responses as evidence | View prompts, write responses, share with evaluator |
| **Post-Conference** | Select and send prompts; review evaluatee responses; code responses as evidence | View prompts, write responses, share with evaluator |
| **Evidence View** | Review evidence, create packages, score rubric components | Not visible until evaluator shares or submits observation |
| **Report** | View evolving report | Not visible until evaluator shares or submits observation |

### Conference Prompt Flow

1. **Evaluator selects prompts** — Chooses from the prompt bank and sends to the evaluatee
2. **Evaluatee responds** — Reviews the prompts, writes responses, then shares them with the evaluator
3. **Evaluator reviews and codes** — Reviews responses and optionally "codes" them by selecting sections of text and aligning them to rubric components as evidence

### Sharing Before Submission

At any time before submission, the evaluator can choose to share the Evidence View and Report tabs with the evaluatee. Once the observation is submitted, these tabs become visible automatically.

## Visibility for Other Collections

| Evidence Collection | Private Until... | Then Visible To |
|-------------------|-----------------|----------------|
| **Artifact** | Creator shares the artifact | Both parties; evidence flows to YTD and Summative |
| **Student Growth** | Goals are shared/approved | Both parties; evidence flows to YTD and Summative |
| **Self-Assessment** | Evaluatee shares with evaluator | Both parties; visible in YTD only (not Summative) |
| **Coded Note** | Evaluator shares the note | Both parties; evidence flows to YTD and Summative |
| **YTD Evidence** | Always visible | Both parties immediately |

:::info Why Can't I See Something?
If evidence you expect to see isn't showing up in the YTD or Summative view, the most common reason is that the evidence collection hasn't been shared or submitted yet. Check the workflow state of the source activity.
:::

## How Evidence Is Organized

Evidence is organized by your district's **instructional framework** (such as Danielson, Marzano, or CEL 5D+). Within an evidence collection, evidence can be aligned to:

| Level | What It Is |
|-------|-----------|
| **Criterion** | One of the eight state evaluation areas (e.g., C1 through C8) |
| **Component** | A specific element within a criterion |
| **Indicator** | A detailed descriptor of practice within a component |

This alignment is what makes it possible for YTD and Summative views to aggregate evidence from many different collections and show it organized by rubric component.

## Where Evidence Ends Up

Evidence from individual collections flows into two aggregated views:

| View | What It Shows | Used For |
|------|-------------|----------|
| **YTD Evidence** | All published evidence across the full rubric, regardless of plan type | Running view of everything gathered so far |
| **Summative Evidence** | Published evidence filtered to the evaluatee's plan type scope | End-of-year scoring by the evaluator |

For more on the year-long evidence flow, see [The Evaluation Year](../getting-started/evaluation-year.md).

## Related Topics

- [The Evaluation Year](../getting-started/evaluation-year.md) — Evidence activities, timeline, and summative scoring
- [How Workflows Work](./workflows.md) — Lifecycle of each evidence collection type
- [Evidence View](../evidence/index.md) — The two-pane workspace for reviewing and packaging evidence
- [Working with Artifacts](../artifacts/index.md) — Creating and sharing artifact evidence
