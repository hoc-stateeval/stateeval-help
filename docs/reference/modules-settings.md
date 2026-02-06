---
sidebar_position: 6
title: Modules and Settings
roles: [DA, SA]
---

# Modules and Settings

District Administrators configure which features (modules) are available and how they behave (settings). School Administrators can override some settings if the district allows it.

## Modules

Modules are features that can be enabled or disabled. Some are required, others optional.

### Required Modules

These are always active:

- **Artifacts** — Evidence documents and files
- **Prompt Bank** — Pre-defined questions for observations and reflections
- **Student Growth** — Goal setting and achievement tracking
- **Summative** — End-of-year evaluation and final reports
- **YTD Evidence** — Collaborative evidence collection
- **Report Archives** — Access to completed evaluation reports

### Optional Modules

Districts can enable or disable these:

| Module | Default | Notes |
|--------|---------|-------|
| **Observations** | On for Teachers, Off for Principals | Required for teacher evaluations |
| **Coded Notes** | On | Evaluator notes linked to rubric criteria |
| **Self Assessments** | On | Evaluatee reflection (not included in Summative) |
| **Mid Year** | Off | Mid-year review checkpoint |
| **Resources** | On | Documents and links available in evaluations |
| **Training Videos** | On | Video resources from BERC Group |

For each optional module, the DA can allow schools to override the district default.

---

## Key Settings

These are the settings administrators most commonly configure.

### Workflow Mode (Simple vs. Formal)

Controls whether the evaluatee must review and acknowledge before a report is sealed.

| Setting | Modules Affected | Default |
|---------|-----------------|---------|
| Use Simple Workflow | Observations | Formal |
| Use Simple Workflow | Summative | Formal |
| Use Simple Workflow for Goal Setting | Student Growth | Formal |
| Use Simple Workflow for Goal Achievement | Student Growth | Formal |

**Formal mode** (default): Evaluatee reviews and acknowledges before sealing. Provides digital signatures from both parties.

**Simple mode**: Evaluator completes directly. Evaluatee is notified but doesn't sign. Useful for high-volume observation cycles.

:::tip When to Use Each
- **Observations**: Simple mode works well for frequent walkthroughs; Formal for formal observations
- **Summative**: Formal mode recommended — it's the legal record requiring both signatures
- **Student Growth**: Simple mode can help meet tight deadlines like November goal-setting
:::

See [Completion Modes](./workflows.md#completion-modes-in-detail) for details.

### Scoring Options

Controls whether rubric scoring is available during evidence collection.

| Setting | Who It Affects | Default |
|---------|---------------|---------|
| Allow Rubric Scoring (Observations) | Evaluators | Enabled |
| Allow Rubric Scoring (Coded Notes) | Evaluators | Enabled |
| Allow Rubric Scoring (Self Assessments) | Evaluatees | Enabled |
| Allow Focused Rubric Component Scoring | Evaluators | Disabled |

When disabled, the scoring interface doesn't appear for that evidence type.

See [Scoring in eVAL](./scoring.md) for how scoring works.

### Plan Type Sync

When an evaluatee's plan type changes mid-year (Comprehensive ↔ Focused), these settings control whether existing work updates automatically.

| Setting | What It Affects |
|---------|----------------|
| Keep Observation Plan Type in Sync | Existing observations |
| Keep Artifact Plan Type in Sync | Existing artifacts |
| Keep Coded Notes Plan Type in Sync | Existing coded notes |

Default: All disabled (existing work keeps its original plan type).

### Assignment Delegation

| Setting | Effect |
|---------|--------|
| Assignments Delegated | When enabled, School Admins assign evaluators for their school. When disabled, only District Admins manage assignments. |

Default: Disabled (District Admin assigns all).

### Summative Requirements

These settings control what evaluators must complete before finalizing a Summative.

| Setting | What It Requires | Default |
|---------|-----------------|---------|
| Criteria Statement of Performance Required | Written statement for each criterion | Disabled |
| Next Year Plan Type Required | Proposed plan type for next year | Disabled |
| Evaluator Final Recommendation Required | Final recommendation text | Disabled |

### Focused Evaluation Settings

| Setting | What It Controls | Default |
|---------|-----------------|---------|
| Carry Forward Years Limit | How many years scores can carry forward before requiring a new Comprehensive | 6 years |
| Allow Focused Rubric Component Scoring | Whether evaluators can score components in Focused evaluations | Disabled |

### Critical Attributes (Danielson Only)

For districts using the Danielson Framework:

| Setting | What It Controls | Default |
|---------|-----------------|---------|
| Critical Attributes Enabled | Show critical attributes in rubric displays | Enabled |
| Critical Attributes Reference Only | Display as reference text only (vs. checkable items) | Enabled |

---

## Teacher vs. Principal Differences

| Feature | Teachers | Principals |
|---------|----------|------------|
| Observations | Required module | Optional module |
| Student Growth Goal Setting | Enabled by default | Disabled by default |
| Critical Attributes | Available (Danielson) | Not applicable |

---

## Settings Inheritance

Settings follow an inheritance pattern:

- **District settings** are the baseline
- **School settings** can override (where allowed)
- Settings apply based on the **evaluator's** position, not the evaluatee's

See [How Settings Are Inherited](./settings-inheritance.md) for details.

---

## Related Topics

- [How Workflows Work](./workflows.md) — Simple vs. Formal completion modes
- [How Settings Are Inherited](./settings-inheritance.md) — District and school configuration
- [Scoring in eVAL](./scoring.md) — How scoring works
- [Start of Year Setup](../getting-started/start-of-year.md) — When to configure settings
