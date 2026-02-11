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
| **Evidence Configuration** | For evidence sections: All Evidence vs. Exemplars Only mode |
| **Allow School Override** | Whether schools can customize this report type |

---

## Available Sections by Report Type

Each report type has different sections available. Some sections are required (always included), others are optional.

Sections marked with *(supports display mode)* can be configured with **All Evidence** or **Exemplars Only** mode. See [Evidence Section Configuration](#evidence-section-configuration) below.

### Summative Report

| Section | Required | Description |
|---------|:--------:|-------------|
| Header | Yes | Evaluatee info, dates, plan type |
| Score Table | Yes | Final scores and performance level |
| EC Summary | No | List of observations and coded notes conducted |
| EC Score Summary | No | Summary of scores from each observation/coded note |
| Framework Scores | No | Scores by framework component |
| EC Reports | No | Full observation and coded note reports embedded |
| Collected Evidence | No | Evidence items aligned to rubric *(supports display mode)* |
| Packaged Evidence | No | Evidence packages with alignments *(supports display mode)* |
| EOY Prompts | No | End-of-year conference prompts and responses |
| EOY Summaries | No | Evaluator and evaluatee summaries |
| Final Notes | No | Final notes from evaluator and evaluatee |
| Signature Block | No | Digital signatures from both parties |

### Observation Report

| Section | Required | Description |
|---------|:--------:|-------------|
| Header | Yes | Observation date, type, evaluatee info |
| Framework Scores | No | Detailed framework component scores |
| Collected Evidence | No | Evidence items from the observation *(supports display mode)* |
| Packaged Evidence | No | Evidence packages created *(supports display mode)* |
| Observation Notes | No | Observation notes from evaluator |
| Pre-Conference | No | Pre-conference prompts and responses |
| Post-Conference | No | Post-conference prompts and responses |
| Final Notes | No | Final notes from evaluator and evaluatee |
| Signature Block | No | Digital signatures |

### Coded Note Report

| Section | Required | Description |
|---------|:--------:|-------------|
| Header | Yes | Date, evaluatee info |
| Framework Scores | No | Component scores |
| Collected Evidence | No | Evidence items *(supports display mode)* |
| Packaged Evidence | No | Evidence packages *(supports display mode)* |
| Prompts | No | Conference prompts and responses |
| Final Notes | No | Final notes from evaluator and evaluatee |
| Coded Note | No | The coded note content |
| Signature Block | No | Signatures |

### Student Growth Reports (Goal Setting & Achievement)

| Section | Required | Description |
|---------|:--------:|-------------|
| Header | Yes | Evaluatee info, dates |
| Goals | Yes | The evaluatee's student growth goals |
| Framework Scores | No | Student growth component scores |
| Collected Evidence | No | Evidence items *(supports display mode)* |
| Packaged Evidence | No | Evidence packages *(supports display mode)* |
| Conference Prompts | No | Goal setting or achievement prompts |
| Signature Block | No | Approval signatures |

### Mid-Year Report

| Section | Required | Description |
|---------|:--------:|-------------|
| Header | Yes | Evaluatee info, date |
| EC Summary | No | Observations and coded notes to date |
| EC Score Summary | No | Aggregated observation/coded note scores |
| Framework Scores | No | Component scores |
| EC Reports | No | Embedded observation and coded note reports |
| Collected Evidence | No | Evidence items *(supports display mode)* |
| Packaged Evidence | No | Evidence packages *(supports display mode)* |
| Mid-Year Prompts | No | Mid-year conference prompts and responses |
| Mid-Year Summaries | No | Evaluator and evaluatee summaries |
| Final Notes | No | Final notes from evaluator and evaluatee |
| Signature Block | No | Signatures |

### Self-Assessment Report (PDF Only)

Self-Assessments are not archived like other report types. Evaluatees can generate a PDF copy for their own records, but these reports are not stored in the system.

| Section | Required | Description |
|---------|:--------:|-------------|
| Header | Yes | Evaluatee info, date |
| Framework Scores | No | Self-assessment component scores |
| Collected Evidence | No | Evidence items *(supports display mode)* |
| Packaged Evidence | No | Evidence packages *(supports display mode)* |
| Signature Block | No | Evaluatee signature |

---

## Evidence Section Configuration

The **Collected Evidence** and **Packaged Evidence** sections have additional configuration options that control how evidence appears in reports.

In the Report Section Settings, the Evidence Section row shows a summary of your evidence configuration:

![Report Section Settings showing Evidence Section status](/img/report-sections-config-2.png)

The detailed configuration is in the **Evidence Configuration** section below:

![Evidence Configuration section with Display Mode dropdown](/img/report-evidence-config.png)

### Display Mode

When you enable an evidence section, you can choose how evidence is included:

| Mode | Behavior |
|------|----------|
| **All Evidence** | All collected or packaged evidence appears automatically in the report |
| **Exemplars Only** | Evaluators choose which evidence items to include using the "Include in Final Report" checkbox |

### How "Include in Final Report" Works

When a section uses **Exemplars Only** mode:

1. A checkbox labeled **Include in report** appears on each evidence item in the Evidence View
2. Evaluators check this box on items they want highlighted in the report
3. Only checked items appear in that section of the final report
4. The report section heading displays as "**Collected Evidence Exemplars**" or "**Packaged Evidence Exemplars**"

**Collected Evidence without checkbox** (All Evidence mode or section disabled):

![Collected Evidence in Evidence View - no checkbox](/img/obs-evidence-view-collected-no-include.png)

**Packaged Evidence with checkbox** (Exemplars Only mode):

![Packaged Evidence in Evidence View - with Include in report checkbox](/img/obs-evidence-view-packaged-include.png)

**Report output showing "Exemplars" heading:**

![Report showing Packaged Evidence Exemplars heading](/img/obs-report-view-packaged-exemplars.png)

:::tip When to Use Each Mode
- **All Evidence** — Use when you want a complete record of all evidence collected
- **Exemplars Only** — Use when evaluators should curate the most relevant evidence for the final report
:::

### Configuration Example

| Section | Enabled | Mode | Result |
|---------|:-------:|------|--------|
| Collected Evidence | ✓ | All Evidence | All evidence items appear; no checkbox shown |
| Packaged Evidence | ✓ | Exemplars Only | Checkbox appears; only selected packages appear in report |
| Collected Evidence | ✗ | — | Section not shown in report |

:::note Independent Settings
Collected Evidence and Packaged Evidence can be configured independently. For example, you might want all collected evidence items but only selected packages.
:::

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
- [Evidence View](../evidence/index.md) — Working with collected evidence
- [Evidence Packages](../evidence/evidence-packages.md) — Creating evidence packages
- [Start of Year Setup](../getting-started/start-of-year.md) — When to configure reports
