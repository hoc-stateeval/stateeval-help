---
sidebar_position: 6
title: Modules and Settings
roles: [DA, SA]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Modules and Settings

District Administrators can configure which features (modules) are available and how they behave (settings) for evaluations in their district. School Administrators may be able to override some settings for their school if the district allows it.

## Understanding Modules vs. Settings

| Concept | What It Is | Example |
|---------|-----------|---------|
| **Module** | A feature area that can be enabled or disabled | "Coded Notes" module |
| **Setting** | A configuration option within a module | "Allow Rubric Scoring" for Coded Notes |

---

## Module Types

Modules are either **required** or **optional**:

<div class="card-grid">
<div class="card">
<div class="card__title">Required Modules</div>
<p class="card__description">Always enabled. Cannot be turned off. Core to the evaluation process.</p>
</div>
<div class="card">
<div class="card__title">Optional Modules</div>
<p class="card__description">Can be enabled or disabled by the district. Schools may override if allowed.</p>
</div>
</div>

### Required Modules

These modules are always active and cannot be disabled:

| Module | Purpose |
|--------|---------|
| **Artifacts** | Evidence documents and files submitted by evaluators and evaluatees |
| **Prompt Bank** | Pre-defined questions for observations and reflections |
| **Student Growth** | Student growth goal setting and achievement tracking |
| **Summative** | End-of-year evaluation scoring and final reports |
| **YTD Evidence** | Year-to-Date collaborative evidence collection |
| **Report Archives** | Storage and access to archived evaluation reports |

### Optional Modules

Districts can choose to enable or disable these modules:

| Module | Purpose | Default | School Override |
|--------|---------|---------|-----------------|
| **Training Videos** | Video resources from BERC Group and National Board | Enabled | Allowed |
| **Resources** | Documents and web links available within evaluations | Enabled | Allowed |
| **Coded Notes** | Evaluator notes coded to rubric criteria | Enabled | Allowed |
| **Self Assessments** | Evaluatee self-reflection activity | Enabled | Allowed |
| **Observations** | Formal classroom/leadership observations | Required for Teachers, Optional for Principals | Allowed for Principals |
| **Mid Year** | Mid-year review checkpoint | Enabled | Allowed |

:::tip School Override
When "School Override" is allowed, School Administrators can enable or disable the module for their school, regardless of the district setting.
:::

---

## Settings by Module

<Tabs>
<TabItem value="observations" label="Observations" default>

### Observations Module Settings

| Setting | Description | Default | Where It Applies |
|---------|-------------|---------|------------------|
| **Allow Rubric Scoring** | Whether evaluators can assign performance levels during observations | Enabled | Observation rubric view |
| **Keep Plan Type in Sync** | Automatically update observation plan type when evaluatee's Summative plan type changes | Disabled | All observations |
| **Use Simple Workflow** | Skip evaluatee review - evaluator completes directly | Disabled | Observation completion |

#### Use Simple Workflow

This setting controls whether observations follow [Simple or Formal workflow mode](./workflows#completion-modes-simple-vs-formal):

- **Disabled (Formal Mode)**: After the evaluator sends the Final Report, the evaluatee must view and acknowledge it before it's sealed. This provides a digital signature from both parties.

- **Enabled (Simple Mode)**: The evaluator completes and locks the observation directly. The evaluatee is notified but doesn't need to review or sign. Faster for high-volume observation cycles.

</TabItem>
<TabItem value="summative" label="Summative">

### Summative Module Settings

| Setting | Description | Default | Where It Applies |
|---------|-------------|---------|------------------|
| **Criteria Statement of Performance Required** | Evaluator must write a performance statement for each criterion | Disabled | Summative scoring |
| **Next Year Plan Type Required** | Evaluator must propose next year's evaluation plan type | Disabled | Summative completion |
| **Evaluator Final Recommendation Required** | Evaluator must add a final recommendation | Disabled | Summative completion |
| **Allow Collected Evidence Selection** | Evaluator can select which collected evidence appears in final report | Disabled | Final report |
| **Allow Packaged Evidence Selection** | Evaluator can select which packaged evidence appears in final report | Disabled | Final report |
| **Carry Forward Years Limit** | Maximum years scores can carry forward for Focused evaluations | 6 years | Focused evaluations |
| **Allow Focused Rubric Component Scoring** | Whether evaluators can score rubric components in Focused evaluations | Disabled | Focused summative |
| **Use Simple Workflow** | Skip evaluatee review - evaluator completes directly | Disabled | Summative completion |

#### Use Simple Workflow

:::warning Typically Disabled for Summatives
Summative evaluations typically use Formal workflow because they represent the final performance rating and serve as a legal record. This requires evaluatee review and acknowledgment with digital signatures.
:::

See [Completion Modes](./workflows#completion-modes-simple-vs-formal) for details on Simple vs. Formal workflows.

#### Carry Forward Years Limit

When an evaluatee is on a **Focused** evaluation, their scores from the last Comprehensive evaluation carry forward. This setting controls how many years those scores remain valid before requiring a new Comprehensive evaluation.

</TabItem>
<TabItem value="student-growth" label="Student Growth">

### Student Growth Module Settings

| Setting | Description | Default | Where It Applies |
|---------|-------------|---------|------------------|
| **Goal Setting Enabled** | Whether goal setting is part of the evaluation | Teachers: Enabled, Principals: Disabled | Student Growth module |
| **Goal Achievement Enabled** | Whether goal achievement is part of the evaluation | Enabled | Student Growth module |
| **Use Simple Workflow for Goal Setting** | Skip evaluatee review for goal approval | Disabled | Goal Setting completion |
| **Use Simple Workflow for Goal Achievement** | Skip evaluatee review for achievement approval | Disabled | Goal Achievement completion |

#### Goal Setting vs. Achievement

Student Growth has two phases:

1. **Goal Setting** (beginning of year) - Evaluatee creates student growth goals, evaluator approves
2. **Goal Achievement** (end of year) - Evaluatee reports on goal achievement, evaluator approves and scores

Each phase can use Simple or Formal workflow independently.

:::note Principal Evaluations
Goal Setting is typically disabled for Principal evaluations because principals focus on school-wide achievement data rather than individual student growth goals.
:::

#### Simple Workflow for Student Growth

When enabled, the evaluator approves goals/achievement directly without requiring evaluatee acknowledgment. This helps manage high-volume periods like the November goal-setting deadline.

See [Completion Modes](./workflows#completion-modes-simple-vs-formal) for more details.

</TabItem>
<TabItem value="coded-notes" label="Coded Notes">

### Coded Notes Module Settings

| Setting | Description | Default | Where It Applies |
|---------|-------------|---------|------------------|
| **Allow Rubric Scoring** | Whether evaluators can assign performance levels in Coded Notes | Enabled | Coded Notes rubric view |
| **Keep Plan Type in Sync** | Automatically update coded note plan type when evaluatee's Summative plan type changes | Disabled | All coded notes |

#### About Coded Notes

Coded Notes allow evaluators to document informal observations, walkthroughs, and professional conversations throughout the year. Each note can be "coded" (linked) to specific rubric criteria, building evidence over time.

See [Coded Notes Workflow](./workflows#detailed-workflows) for how coded notes move from draft to shared.

</TabItem>
<TabItem value="self-assessment" label="Self Assessment">

### Self Assessment Module Settings

| Setting | Description | Default | Where It Applies |
|---------|-------------|---------|------------------|
| **Allow Rubric Scoring** | Whether evaluatees can assign performance levels in Self Assessments | Enabled | Self Assessment rubric view |

#### About Self Assessments

Self Assessments are evaluatee-owned reflections, typically completed at the beginning of the year. They don't contribute evidence to the Summative evaluation - they're purely for self-reflection.

:::info Not Included in Summative
Evidence from Self Assessments is for reflection purposes and is **not** included in the Summative Evaluation report.
:::

See [Self Assessment Workflow](./workflows#detailed-workflows) for how self assessments work.

</TabItem>
<TabItem value="ytd-evidence" label="YTD Evidence">

### Year-to-Date Evidence Module Settings

| Setting | Description | Default | Where It Applies |
|---------|-------------|---------|------------------|
| **Allow Evaluator to Add Evidence** | Whether evaluators can add evidence notes | Enabled | YTD Evidence screen |
| **Allow Evaluatee to Add Evidence** | Whether evaluatees can add evidence notes | Enabled | YTD Evidence screen |

#### About YTD Evidence

Year-to-Date Evidence is a collaborative space where both parties can add evidence notes throughout the evaluation year. All notes are immediately visible to both parties - there's no approval workflow.

See [Year-to-Date Workflow](./workflows#detailed-workflows) for more details.

</TabItem>
<TabItem value="artifacts" label="Artifacts">

### Artifacts Module Settings

| Setting | Description | Default | Where It Applies |
|---------|-------------|---------|------------------|
| **Keep Plan Type in Sync** | Automatically update artifact plan type when evaluatee's Summative plan type changes | Disabled | All artifacts |

#### Keep Plan Type in Sync

When an evaluatee's plan type changes (e.g., from Comprehensive to Focused), this setting determines whether their existing artifacts automatically update to reflect the new plan type.

- **Disabled**: Artifacts keep their original plan type
- **Enabled**: Artifacts automatically update to match the new plan type

</TabItem>
<TabItem value="framework" label="Framework">

### Framework Module Settings

These settings apply to the Danielson Framework for teacher evaluations:

| Setting | Description | Default | Where It Applies |
|---------|-------------|---------|------------------|
| **Critical Attributes Enabled** | Show critical attributes in the rubric | Enabled | Rubric displays |
| **Critical Attributes Reference Only** | Critical attributes are informational only, not checkable | Enabled | Rubric displays |

#### Critical Attributes

Critical Attributes are specific behaviors or practices listed under each rubric component in the Danielson Framework. They help evaluators identify what to look for at each performance level.

- **Reference Only**: Attributes are displayed as reference text
- **Not Reference Only**: Attributes can be checked off as observed

</TabItem>
<TabItem value="admin" label="Administration">

### Administration Settings

| Setting | Description | Default | Where It Applies |
|---------|-------------|---------|------------------|
| **Assignments Delegated** | Whether schools can manage their own evaluator assignments | Disabled | Staff assignments |

#### Delegated Assignments

When enabled, School Administrators can assign evaluators to evaluatees at their school. When disabled, only District Administrators can manage assignments.

</TabItem>
<TabItem value="reports" label="Report Archives">

### Report Archives Settings

| Setting | Description | Default | Where It Applies |
|---------|-------------|---------|------------------|
| **Show Archived Reports** | Whether archived reports are visible within evaluations | Enabled | Evaluation views |

#### About Report Archives

Report Archives stores completed evaluation reports (observations, summatives, etc.) after they're sealed. Users can access their historical reports through this module.

</TabItem>
</Tabs>

---

## Configuring Settings

### District Administrators

To configure modules and settings:

1. Navigate to **Settings** in the Admin area
2. Select either **Teacher Evaluations** or **Principal Evaluations**
3. Use the tabs to access:
   - **General Settings**: Enable/disable optional modules, manage school overrides
   - **Module Settings**: Configure individual settings within each module

### School Administrators

If your district allows school-level overrides:

1. Navigate to **Settings** in the Admin area
2. Select the evaluation type
3. Only modules where "Allow School Override" is enabled can be changed

---

## Settings Inheritance

Settings follow the [inheritance rules](./settings-inheritance) defined for your district:

- **District settings** are the baseline for all evaluations
- **School settings** can override district settings (where allowed)
- **Override settings** apply based on the evaluator's position, not the evaluatee's

See [How Settings Are Inherited](./settings-inheritance) for complete details.

---

## Teacher vs. Principal Differences

Some modules and settings differ between Teacher and Principal evaluations:

| Feature | Teacher Evaluations | Principal Evaluations |
|---------|--------------------|-----------------------|
| **Observations** | Required | Optional |
| **Student Growth Goal Setting** | Enabled by default | Disabled by default |
| **Critical Attributes** | Available (Danielson) | Not applicable |
| **School-Level Override** | Available for optional modules | Not typically used |

---

## Related Topics

- [How Workflows Work](./workflows) - Understand Simple vs. Formal completion modes
- [How Settings Are Inherited](./settings-inheritance) - Learn about district and school configuration
- [Evidence Collection](./evidence-collection) - Overview of evidence types
