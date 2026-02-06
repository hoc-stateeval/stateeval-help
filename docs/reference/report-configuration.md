---
sidebar_position: 11
title: Report Configuration
roles: [DA, SA]
---

# Report Configuration

District Administrators can customize the appearance and content of archived evaluation reports. Each report type can have a custom title, additional text, and specific sections enabled or disabled.

**Where:** Evaluation Setup > Report Settings

:::tip Configure Early
Set up report configuration at the beginning of the school year, before any reports are generated. This ensures all archived reports have a consistent format throughout the year.
:::

---

## Report Types

Each evidence collection type generates its own report when archived:

| Report Type | When Generated |
|-------------|---------------|
| **Summative** | End-of-year evaluation is completed |
| **Observation** | Observation is locked/archived |
| **Mid-Year** | Mid-year review is completed |
| **Coded Note** | Coded note is shared |
| **Student Growth Goal Setting** | Goals are approved |
| **Student Growth Achievement** | Achievement is approved |

:::note Self-Assessment Reports
Self-Assessments are not archived like other report types. Evaluatees can use the **Create PDF** option to generate a personal copy, but Self-Assessments don't produce archived reports visible to administrators.
:::

---

## What You Can Configure

For each report type, you can set:

| Setting | Description |
|---------|-------------|
| **Report Title** | Custom title displayed at the top of the report |
| **Custom Text** | Additional text displayed in the report header |
| **Sections** | Which sections to include in the report |
| **Allow School Override** | Whether schools can customize this report type |

---

## Available Sections by Report Type

Each report type has different sections available. Some sections are required (always included), others are optional.

### Summative Report

| Section | Required | Description |
|---------|:--------:|-------------|
| Header | Yes | Evaluatee info, dates, plan type |
| Score Table | Yes | Final scores and performance level |
| Observation Summary | No | List of observations conducted |
| Framework Scores | No | Scores by framework component |
| Observation Score Summary | No | Summary of scores from observations |
| Collected Evidence | No | Evidence items aligned to rubric |
| Packaged Evidence | No | Evidence packages with alignments |
| Observation Reports | No | Full observation reports embedded |
| Reflections | No | Summative reflection responses |
| Final Recommendation | No | Evaluator's final recommendation |
| Footer | No | Additional footer content |
| Signature Block | No | Digital signatures from both parties |

### Observation Report

| Section | Required | Description |
|---------|:--------:|-------------|
| Header | Yes | Observation date, type, evaluatee info |
| Score Table | Yes | Scores assigned during observation |
| Framework Scores | No | Detailed framework component scores |
| Notes | No | Observation notes from evaluator |
| Pre-Conference | No | Pre-conference prompts and responses |
| Post-Conference | No | Post-conference prompts and responses |
| Collected Evidence | No | Evidence items from the observation |
| Packaged Evidence | No | Evidence packages created |
| Footer | No | Additional footer content |
| Signature Block | No | Digital signatures |

### Coded Note Report

| Section | Required | Description |
|---------|:--------:|-------------|
| Header | Yes | Date, evaluatee info |
| Score Table | No | Scores if assigned |
| Framework Scores | No | Component scores |
| Notes | No | The coded note content |
| Collected Evidence | No | Evidence items |
| Packaged Evidence | No | Evidence packages |
| Footer | No | Additional footer content |
| Signature Block | No | Signatures |

### Student Growth Reports (Goal Setting & Achievement)

| Section | Required | Description |
|---------|:--------:|-------------|
| Header | Yes | Evaluatee info, dates |
| Framework Scores | No | Student growth component scores |
| Collected Evidence | No | Evidence items |
| Packaged Evidence | No | Evidence packages |
| Signature Block | No | Approval signatures |

### Mid-Year Report

| Section | Required | Description |
|---------|:--------:|-------------|
| Header | Yes | Evaluatee info, date |
| Score Table | No | Scores if assigned |
| Observation Summary | No | Observations to date |
| Framework Scores | No | Component scores |
| Observation Score Summary | No | Aggregated observation scores |
| Collected Evidence | No | Evidence items |
| Packaged Evidence | No | Evidence packages |
| Observation Reports | No | Embedded observation reports |
| Footer | No | Additional footer content |
| Signature Block | No | Signatures |

---

## Default Report Titles

When a framework is set up, reports are initialized with default titles:

| Report Type | Default Title |
|-------------|--------------|
| Summative | eVAL Final Report |
| Observation | eVAL Observation Report |
| Mid-Year | eVAL Mid-year Report |
| Coded Note | eVAL Coded Note Report |
| Student Growth Goal Setting | eVAL Student Growth Goal Setting Report |
| Student Growth Achievement | eVAL Student Growth Goal Achievement Report |

---

## School Override

When "Allow School Override" is enabled for a report type, School Administrators can:
- Change the report title for their school
- Add or modify custom text
- Enable or disable optional sections

School settings override district settings for evaluations at that school.

---

## Tips

- **Keep titles concise** — They appear at the top of printed/PDF reports
- **Use custom text sparingly** — It adds to every report of that type
- **Consider what's useful** — More sections means longer reports; include what evaluators and evaluatees actually need
- **Summative reports are the legal record** — Consider which sections provide necessary documentation

---

## Related Topics

- [Modules and Settings](./modules-settings.md) — Other configurable settings
- [Start of Year Setup](../getting-started/start-of-year.md) — When to configure reports
