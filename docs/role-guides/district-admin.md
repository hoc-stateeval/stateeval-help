---
sidebar_position: 1
title: District Admin Guide
roles: [DA]
---

# District Administrator Guide

As a District Administrator, you select evaluation frameworks, configure settings, manage assignments, and oversee evaluation completion district-wide.

:::tip New School Year?
See [Start of Year Setup](../getting-started/start-of-year.md) for the required sequence of tasks, starting with framework selection.
:::

## Your Responsibilities

| Area | What You Control |
|------|------------------|
| **Framework Setup** | Select evaluation frameworks for the school year |
| **Assignments** | Assign evaluators to evaluatees (or delegate to schools) |
| **Configuration** | Enable/disable modules, configure settings |
| **Prompt Bank** | Pre-define prompts for observations, student growth, summatives |
| **Resources** | Add district-wide resources for evaluations |
| **Oversight** | Monitor progress, generate reports, intervene when needed |

## Key Concepts

### Modules and Settings
You control which features are available and how they behave. See [Modules and Settings](../reference/modules-settings.md):
- **Optional Modules**: Enable/disable features like Coded Notes, Mid-Year, Self-Assessments
- **Settings**: Configure behavior like workflow modes, scoring options, carry-forward limits
- **School Override**: Allow or prevent schools from overriding your settings

### How Settings Flow Down
Your settings are the baseline for all evaluations. Schools can override some settings (if you allow it), but the evaluator's position determines what applies. See [How Settings Are Inherited](../reference/settings-inheritance.md) - this is especially important for understanding why DTE/DPE evaluations bypass school settings.

### Workflow Modes
You configure whether evaluations use [Simple or Formal completion](../reference/workflows.md#completion-modes-simple-vs-formal):
- **Simple**: Faster, evaluator completes directly
- **Formal**: Evaluatee must acknowledge, provides digital signatures

Consider Formal for high-stakes summatives, Simple for high-volume observations.

## Common Questions

**Should I delegate assignments to schools?**
The "Assignments Delegated" setting lets School Admins manage their own evaluator assignments. Useful for large districts; keep centralized for tighter control. See [Administration Settings](../reference/modules-settings.md#administration-settings).

**What happens if I change a setting mid-year?**
Settings apply to new work. Existing observations/evaluations keep their original settings. For plan type changes, consider the "Keep Plan Type in Sync" settings.

**Can I override a locked evaluation?**
Yes - District Admins can revert any summative evaluation to Draft without evaluatee approval. This is the only role with this power. See [Summative Workflow](../reference/workflows.md#detailed-workflows).

## Teacher vs. Principal Evaluations

You configure these separately. Key differences:

| Setting | Teachers | Principals |
|---------|----------|------------|
| Observations | Required | Optional |
| Student Growth Goals | Enabled by default | Disabled by default |
| School-level settings | Apply | Bypassed |

See [Modules and Settings](../reference/modules-settings.md#teacher-vs-principal-differences) for full comparison.
