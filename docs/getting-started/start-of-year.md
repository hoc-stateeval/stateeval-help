---
sidebar_position: 6
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
| [EDS Staff Setup](#task---eds-staff-setup) | Coordinate with DSM | — | ✓ Prerequisite (in EDS) |
| [Framework Selection](#task---framework-selection) | ✓ Required | — | ✓ Blocks all users |
| [Modules & Settings](#task---modules-and-settings) | ✓ Sets defaults | If allowed | Optional |
| [Evaluator Assignments](#task---evaluator-assignments) | ✓ Always | If delegated | ✓ Required |
| [Plan Types](#task---plan-type-configuration) | ✓ Always | If delegated | ✓ Required |
| [Prompt Bank](#task---prompt-bank-setup) | ✓ Yes | ✓ Yes | Recommended |
| [Resources](#task---resources-setup) | ✓ Yes | ✓ Yes | Optional |
| [Notification Settings](#task---notification-settings) | ✓ Yes | — | Recommended |
| [District Viewers](#task---district-viewer-setup) | ✓ Yes | — | If needed |

---

## Task - EDS Staff Setup

**Who:** District Security Manager (DSM) — done in EDS, not eVAL

**Where:** [EDS](https://eds.ospi.k12.wa.us/), OSPI's Education Data System

eVAL doesn't manage its own accounts. It gets every staff member — along with their building(s) and eVAL role(s) — from **EDS**. Before anyone can use eVAL, their EDS account must exist and be associated with the right building and role. This is set up by your **District Security Manager**, before eVAL setup begins.

:::info This Happens in EDS, Before eVAL
New or changed staff flow into eVAL automatically (a nightly sync, and on the person's first sign-in). If someone is missing from eVAL or has the wrong school or role, the fix is almost always in EDS — see [Troubleshooting](#troubleshooting).
:::

### Your District Security Manager (DSM)

Every district has at least one **DSM** who manages EDS access. If you're onboarding, you likely already know yours; if not, OSPI publishes the [District Security Manager list](https://eds.ospi.k12.wa.us/securitymanagerlist.aspx). The DSM is usually already comfortable with EDS — so this is mainly about telling them what eVAL needs.

### What the DSM Does for eVAL

For each person who will use eVAL, the DSM:

1. **Confirms they have an EDS account.** Most teachers and principals already do — OSPI requires one to register a teaching certificate. Staff in non-certificated roles (a District Admin, for example) may need a new account created.
2. **Associates their building(s) and eVAL role(s)** — for example, *Principal at Lincoln Elementary*, or *District Admin for the district*.

The role assigned in EDS becomes the person's role in eVAL. See [Roles in eVAL](./roles.md) for what each role does.

:::tip Head Principal Covers Principal + School Admin
At a school with more than one principal, assign the lead the **Head Principal** role — it automatically includes the **Principal** and **School Admin** roles, so don't add those separately. At a school with a single principal, just assign **Principal**.
:::

:::caution Match the Role to the Building Type
EDS won't stop you from putting a **district** role on a **school** building, or a **school** role on the **district** — but those mismatches don't work correctly in eVAL. Keep school roles (Teacher, Principal, Head Principal, School Admin) on **schools**, and district roles (District Admin, District Evaluators) on the **district**.
:::

### Start Small — Add Roles Only If Needed

Give each person the fewest roles that cover what they actually do, and add more later only if needed. Two common over-assignments to avoid:

- **District Admin already covers it.** A District Admin can do everything a **District Assignment Manager** (manage assignments) or a **District Viewer** (read-only oversight) can. Don't stack those on top of District Admin — assign the narrower role only to people who *aren't* District Admins.
- **District Teacher Evaluator is for the district, not a school.** Only assign **District Teacher Evaluator** to someone who genuinely works at the district level and evaluates teachers across multiple schools. A principal already evaluates the teachers at their own school through the **Principal** role — they don't need (and shouldn't be given) District Teacher Evaluator.

### Learn More (OSPI)

EDS is an OSPI system, so OSPI maintains the authoritative how-to guides:

- [EDS Administration Manual (2025)](https://ospi.k12.wa.us/sites/default/files/2025-06/eds-administration-manual_2025.pdf) — managing accounts and role associations, including descriptions of every available role
- [EDS Bulk Upload Instructions](https://ospi.k12.wa.us/sites/default/files/2023-08/edsbulkuploadinstructions.pdf) — for larger districts loading many staff at once

---

## Task - Framework Selection

:::warning This Blocks Everyone
Until a District Admin selects at least one evaluation framework, **no other users can access eVAL**. They'll see a "Your Account is Active" message on their Account page with a "Pending" status on their work areas. This is the most time-sensitive task.
:::

**Where:** Evaluation Setup > Framework Setup

When a District Admin first logs in, the Framework Setup page shows the available evaluation types with a "Not configured" status. Click **Choose Framework** to select a framework for each evaluation type.

![Framework Setup - Not Configured](https://raw.githubusercontent.com/hoc-stateeval/stateeval-help/main/static/img/framework-setup-not-configured.png)

### What You're Choosing

| Evaluation Type | Who It's For | Must Enable? |
|-----------------|--------------|--------------|
| Teacher Evaluations | Classroom teachers | Usually yes |
| Principal Evaluations | Principals/APs | Optional |

### Framework Options

Clicking **Choose Framework** opens a modal with the available frameworks for that evaluation type:

![Selecting a Teacher Framework](https://raw.githubusercontent.com/hoc-stateeval/stateeval-help/main/static/img/framework-select-teacher.png)

**For Teacher Evaluations:**
- Charlotte Danielson's Framework for Teaching (2022)
- Marzano's Teacher Evaluation Model
- CEL 5D+ Teacher Evaluation Rubric 3.0

**For Principal Evaluations:**
- The AWSP Leadership Framework
- Marzano School Leadership Evaluation Model

For detailed information about each framework, see [OSPI Frameworks and Rubrics](https://ospi.k12.wa.us/educator-support/teacherprincipal-evaluation-program/frameworks-and-rubrics).

:::caution Irreversible Decision
After selecting a framework, a warning confirms this is an irreversible step. Framework selection cannot be changed after the year begins. Choose carefully based on your district's adopted frameworks.
:::

![Framework Selection Warning](https://raw.githubusercontent.com/hoc-stateeval/stateeval-help/main/static/img/framework-select-teacher-warning.png)

### What Users See Before Setup

While setup is still in progress, other users can log in but may hit **access gates** — instead of full access, eVAL shows them what's still pending. For example, before you load a framework, users with that evaluation type see their work areas as "Pending."

This is a common source of support questions. For a user-facing explanation of these gates — what staff see, and why they might have partial access while setup continues — point them to [Account Status & Access](./account-status.md).

### What Happens After Selection

Once you select a framework:
- The status changes from "Not configured" to "Ready for use"
- The left sidebar menu populates with evaluation activities (Dashboard, Observations, etc.)
- Related work areas become available for all users with those roles
- You can proceed to the remaining setup tasks

---

## Task - Modules and Settings

**Where:** Settings

After selecting frameworks, configure which features are enabled and how they behave.

### Modules

Modules represent the major areas of functionality in eVAL. Most correspond to the activities in the left sidebar menu (Observations, Student Growth, Summative Evaluation, etc.). Each module groups together the settings that control how that area behaves.

Most modules are always on — they define core parts of the evaluation process. A few are optional and can be enabled or disabled by the District Admin.

**Teacher Evaluations:**

| Module | Can Disable? | Default | What It Controls |
|--------|:------------:|:-------:|------------------|
| Artifacts | No | On | Artifact creation, sharing, and evidence alignment |
| Student Growth Goal Setting | No | On | Student growth goal setting conference and goals |
| Student Growth Goal Achievement | No | On | End-of-year student growth results |
| Observations | No | On | Observation workflows, scoring, report settings |
| Self-Assessment | Yes | On | Evaluatee self-reflection (does not contribute to summative score) |
| Summative Evaluation | No | On | End-of-year evaluation, scoring, final report |
| Resources | Yes | On | District/school reference documents and links |

**Principal Evaluations:**

| Module | Can Disable? | Default | What It Controls |
|--------|:------------:|:-------:|------------------|
| Artifacts | No | On | Artifact creation, sharing, and evidence alignment |
| Student Growth Goal Setting | Yes | On | Student growth goal setting conference and goals |
| Student Growth Goal Achievement | No | On | End-of-year student growth results |
| Observations | Yes | On | Classroom/school observations |
| Self-Assessment | Yes | On | Evaluatee self-reflection |
| Summative Evaluation | No | On | End-of-year evaluation, scoring, final report |
| Resources | Yes | On | District/school reference documents and links |

:::tip School Override
For optional modules, the DA can decide whether to allow School Admins to override the district default at their school.
:::

### Important Settings

Beyond enabling modules, configure how they behave:

**Workflow Mode (Simple vs Formal)**

Applies to: Observations, Student Growth, Summative Evaluation

| Mode | How It Works |
|------|--------------|
| **Simple** | Evaluator archives the report directly. Evaluatee is not involved in the final submission workflow. |
| **Formal** | Evaluatee must review and acknowledge before the report is archived. Provides digital signatures. |

See [Completion Modes](../reference/workflows.md#completion-modes-in-detail) for guidance on when to use each.

**Scoring Options**

| Setting | What It Controls |
|---------|------------------|
| Allow Observation Scoring | Whether evaluators can assign rubric scores during observations |
| Allow Self-Assessment Scoring | Whether evaluatees can assign rubric scores in self-assessments |

**Plan Type Sync**

When an evaluatee's plan type changes mid-year (Comprehensive ↔ Focused), these settings control whether existing work updates automatically:

| Setting | Effect When Enabled |
|---------|---------------------|
| Keep Observation Plan Type in Sync | Existing observations update to match new plan type |
| Keep Artifact Plan Type in Sync | Existing artifacts update to match new plan type |

**Critical Attributes (Danielson Framework Only)**

For districts using the Danielson Framework for Teaching:

| Setting | What It Controls |
|---------|------------------|
| Critical Attributes Enabled | Whether critical attributes are displayed in the rubric |
| Critical Attributes Reference Only | When enabled, critical attributes are shown for reference but not used for scoring |

**Report Settings**

Configure the title and layout of archived reports. Each report type (Summative, Observation, Mid-Year, Self-Assessment, Student Growth) can be customized with a custom title and which sections to include.

**Where:** Evaluation Setup > Report Settings

:::tip Configure Early
Set up report configuration at the beginning of the year before any reports are generated. This ensures all reports throughout the year have a consistent format.
:::

See [Report Configuration](../reference/report-configuration.md) for details on customizing reports.

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

## Task - Notification Settings

**Where:** Settings > Notification Settings

Configure which email notifications are required for your district. Every workflow event can generate email notifications in addition to in-app notifications.

### What to Configure

| Setting | Description |
|---------|-------------|
| **Required Notifications** | Events that always send email (users can't opt out) |
| **Default Delivery** | Whether notifications are sent immediately or batched nightly |

### Recommended Required Notifications

Focus on events that require action:
- Report sent for review
- Goals submitted for approval
- Unlock request received

See [Email Notifications](../reference/email-notifications.md) for complete details.

:::tip Remind Evaluators and Evaluatees
Let staff know they can configure their own notification preferences in My Account > Notification Preferences. Encourage them to set this up early in the year.
:::

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
| Before setup begins | Ensure staff have EDS accounts + eVAL building/role associations | DSM (with DA) |
| Before school starts | Select evaluation frameworks | DA |
| Before school starts | Configure modules & settings | DA |
| Before school starts | Configure required notifications | DA |
| First week | Verify staff data imported correctly | DA |
| First two weeks | Complete evaluator assignments | DA/SA |
| First two weeks | Assign plan types | DA/SA |
| First month | Set up prompt banks | DA, SA, Evaluators |
| First month | Add resources | DA, SA |
| First month | Set up notification preferences | Evaluators, Evaluatees |
| By November | Ensure student growth prompts ready | DA, SA |

---

## Troubleshooting

**Staff member missing from eVAL (or wrong school/role)**
- Confirm their EDS account and eVAL building/role association — see [EDS Staff Setup](#task---eds-staff-setup)
- Contact your District Security Manager (DSM)
- New or changed staff appear after the nightly sync or on their first sign-in

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
