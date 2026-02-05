---
sidebar_position: 5
title: Start of Year Setup
roles: [DA, SA]
---

# Start of Year Setup

At the beginning of each school year, administrators must complete several setup tasks before evaluations can begin.

:::info Users Can't Access eVAL?
If users are seeing "Framework Setup Incomplete" or "Evaluation Setup Incomplete" messages, see [Access Issues](../faq.md#access-issues) in the FAQ.
:::

## Setup Tasks at a Glance

| Task | District Admin | School Admin | Required? |
|------|:--------------:|:------------:|:---------:|
| [Framework Selection](#task---framework-selection) | ✓ Required | — | ✓ Blocks all users |
| [Modules & Settings](#task---modules-and-settings) | ✓ Sets defaults | If allowed | Optional |
| [Evaluator Assignments](#task---evaluator-assignments) | ✓ Always | If delegated | ✓ Required |
| [Plan Types](#task---plan-type-configuration) | ✓ Always | If delegated | ✓ Required |
| [Prompt Bank](#task---prompt-bank-setup) | ✓ Yes | ✓ Yes | Recommended |
| [Resources](#task---resources-setup) | ✓ Yes | ✓ Yes | Optional |
| [District Viewers](#task---district-viewer-setup) | ✓ Yes | — | If needed |

---

## Task - Framework Selection

:::warning This Blocks Everyone
Until a District Admin selects at least one evaluation framework, **no other users can access eVAL**. They'll see a "Waiting for Setup" message. This is the most time-sensitive task.
:::

**Where:** Evaluation Setup > Evaluation Program Setup

### What You're Choosing

| Evaluation Type | Who It's For | Must Enable? |
|-----------------|--------------|--------------|
| Teacher Evaluations | Classroom teachers | Usually yes |
| Principal Evaluations | Principals/APs | Optional |

### Framework Options

**For Teacher Evaluations:**
- Charlotte Danielson's Framework for Teaching (2022)
- Marzano's Teacher Evaluation Model
- CEL 5D+ Teacher Evaluation Rubric 3.0

**For Principal Evaluations:**
- The AWSP Leadership Framework
- Marzano School Leadership Evaluation Model

For detailed information about each framework, see [OSPI Frameworks and Rubrics](https://ospi.k12.wa.us/educator-support/teacherprincipal-evaluation-program/frameworks-and-rubrics).

### What Happens After Selection

Once you select a framework:
- The status changes from "Not Active" to "Ready for use"
- Related work areas become available for all users with those roles
- You can proceed to the remaining setup tasks

:::caution Irreversible Decision
Framework selection cannot be changed after the year begins. Choose carefully based on your district's adopted frameworks.
:::

---

## Task - Modules and Settings

**Where:** Settings

After selecting frameworks, configure which features are enabled and how they behave.

### Modules

Modules are features that can be enabled or disabled. Some are required, others optional.

**Teacher Evaluations:**

| Module | Required? | Default |
|--------|:---------:|:-------:|
| Observations | ✓ Required | On |
| Summative Evaluation | ✓ Required | On |
| Student Growth | ✓ Required | On |
| Self-Assessment | Optional | On |
| Mid-Year Review | Optional | Off |
| Coded Notes | Optional | Off |
| YTD Evidence | Optional | On |
| Artifacts | Optional | On |

**Principal Evaluations:**

| Module | Required? | Default |
|--------|:---------:|:-------:|
| Observations | Optional | Off |
| Summative Evaluation | ✓ Required | On |
| Student Growth | Optional | Off |
| Self-Assessment | Optional | On |
| Mid-Year Review | Optional | Off |
| Coded Notes | Optional | Off |
| YTD Evidence | Optional | On |
| Artifacts | Optional | On |

:::tip School Override
For each optional module, the DA can decide whether to allow School Admins to override the district default.
:::

### Important Settings

Beyond enabling modules, configure how they behave:

**Workflow Mode (Simple vs Formal)**

Applies to: Observations, Student Growth, Summative Evaluation

| Mode | How It Works |
|------|--------------|
| **Simple** | Evaluator archives the report directly. Evaluatee is not involved in the final submission workflow. |
| **Formal** | Evaluatee must review and acknowledge before the report is archived. Provides digital signatures. |

See [Completion Modes](../reference/workflows.md#completion-modes-simple-vs-formal) for guidance on when to use each.

**Scoring Options**

| Setting | What It Controls |
|---------|------------------|
| Allow Observation Scoring | Whether evaluators can assign rubric scores during observations |
| Allow Self-Assessment Scoring | Whether evaluatees can assign rubric scores in self-assessments |
| Allow Coded Notes Scoring | Whether evaluators can assign rubric scores in coded notes |

**Plan Type Sync**

When an evaluatee's plan type changes mid-year (Comprehensive ↔ Focused), these settings control whether existing work updates automatically:

| Setting | Effect When Enabled |
|---------|---------------------|
| Keep Observation Plan Type in Sync | Existing observations update to match new plan type |
| Keep Artifact Plan Type in Sync | Existing artifacts update to match new plan type |
| Keep Coded Notes Plan Type in Sync | Existing coded notes update to match new plan type |

**Critical Attributes (Danielson Framework Only)**

For districts using the Danielson Framework for Teaching:

| Setting | What It Controls |
|---------|------------------|
| Critical Attributes Enabled | Whether critical attributes are displayed in the rubric |
| Critical Attributes Reference Only | When enabled, critical attributes are shown for reference but not used for scoring |

**Report Settings**

Configure the title and layout of archived reports. Each report type (Summative, Observation, Mid-Year, Self-Assessment, Coded Note, Student Growth) can be customized with a custom title and which sections to include.

**Where:** Evaluation Setup > Report Settings

See [Modules and Settings](../reference/modules-settings.md) for the complete list of module settings.

---

## Task - Evaluator Assignments

**Who:** District Admin (or School Admin if delegated)
**Where:** Assignments

Each evaluatee needs an assigned evaluator before their evaluation can begin.

### Delegation

By default, the DA assigns evaluators for all schools. The DA can delegate assignment responsibility to schools:

| Responsibility | Who Assigns Evaluators |
|----------------|------------------------|
| **District** (default) | DA assigns evaluators for this school |
| **School** | School Admin assigns evaluators for their school |

From the Assignments Summary page, toggle per school or use "Delegate to All Schools" for all at once.

:::tip District Size
Large districts benefit from delegation to reduce central workload. Small districts may prefer central control for consistency.
:::

### Assignment Rules

| Evaluatee | Can Be Assigned To |
|-----------|-------------------|
| Teachers | Principal at their school, or DTE |
| Assistant Principals | Head Principal at their school, or DPE |
| Head Principals | DPE |

---

## Task - Plan Type Configuration

**Who:** District Admin (or School Admin if delegated)
**Where:** Assignments

Each evaluatee needs a plan type assigned:

| Plan Type | Who's Eligible | What It Means |
|-----------|---------------|---------------|
| Comprehensive | Everyone | All 8 criteria evaluated |
| Focused | Must have prior Proficient/Distinguished rating | One criterion (evaluatee chooses) |

:::tip New Staff
New teachers and principals typically start with Comprehensive evaluations.
:::

---

## Task - Prompt Bank Setup

**Where:** Prompt Bank

Pre-define prompts that will be available during evaluations. Best done at the start of the year, especially for prompts that are auto-assigned to new evaluations.

### Prompt Types

| Prompt Type | Used In | Who Creates |
|-------------|---------|-------------|
| Pre-Conference | Observation pre-conference | DA, SA, Evaluator |
| Post-Conference | Observation post-conference | DA, SA, Evaluator |
| Student Growth Goal Setting | Student growth goals | DA, SA, Evaluator |
| Student Growth Achievement | End-of-year growth review | DA, SA, Evaluator |
| Summative Reflection | End-of-year summative conference | DA, SA, Evaluator |

### How Prompts Layer

Prompts from different levels combine (additive pattern):
- District prompts are available to everyone
- School prompts are available to that school
- Evaluator prompts are available only to that evaluator

### Timing Considerations

- **Before year starts**: Add prompts for observations and student growth goals
- **Before November**: Ensure student growth goal prompts are ready
- **Before EOY**: Add summative reflection prompts
- **Anytime**: Can add new prompts for future use

---

## Task - Resources Setup

**Where:** Resources

Add optional resources that evaluatees and evaluators can access during evaluations.

### What Are Resources?

Resources are links or documents that support the evaluation process:
- Framework reference materials
- District evaluation guidelines
- Professional development links
- Rubric guides

### How Resources Layer

Like prompts, resources follow an additive pattern:
- District resources are visible to all
- School resources are visible to that school's evaluations

---

## Task - District Viewer Setup

**Where:** District Viewer Setup

District Viewers are read-only users who can view evaluation data for oversight purposes.

### Configuration

1. Select a District Viewer from the dropdown
2. Assign which schools they can view
3. They'll see principal evaluation data for those schools

:::info When to Configure
Only needed if your district uses the District Viewer role for oversight purposes.
:::

---

## Ongoing: Monitor Progress

**Where:** Dashboard

Once setup is complete, use the dashboard to monitor:
- Evaluation completion rates
- Outstanding observations
- Student growth goal status
- Upcoming deadlines

---

## Timeline Checklist

| When | Task | Who |
|------|------|-----|
| Before school starts | Select evaluation frameworks | DA |
| Before school starts | Configure modules & settings | DA |
| First week | Verify staff data imported correctly | DA |
| First two weeks | Complete evaluator assignments | DA/SA |
| First two weeks | Assign plan types | DA/SA |
| First month | Set up prompt banks | DA, SA, Evaluators |
| First month | Add resources | DA, SA |
| By November | Ensure student growth prompts ready | DA, SA |

---

## Troubleshooting

**Staff member missing from eVAL**
- Verify they exist in your district's employee data system (EDS)
- Contact your district data administrator

**Evaluator dropdown is empty when assigning**
- Ensure valid evaluators exist at that location
- For principals, ensure a DPE has the DPE role assigned

**School Admin can't change a setting**
- DA hasn't enabled school-level override for that setting

---

## Related Topics

- [Understanding Work Areas](./work-areas.md)
- [Modules and Settings](../reference/modules-settings.md)
- [Settings Inheritance](../reference/settings-inheritance.md)
- [District Admin Guide](../role-guides/district-admin.md)
- [School Admin Guide](../role-guides/school-admin.md)
