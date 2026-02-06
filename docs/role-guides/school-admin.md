---
sidebar_position: 2
title: School Admin Guide
roles: [SA]
---

# School Administrator Guide

As a School Administrator, you may configure settings and manage evaluator assignments for your school (depending on what your district allows).

:::tip New School Year?
See [Start of Year Setup](../getting-started/start-of-year.md) for the sequence of tasks. Note: Framework selection must be done by your District Admin first.
:::

## Your Responsibilities

| Area | What You Can Do |
|------|-----------------|
| **Assignments** | Assign evaluators to teachers (if delegated by district) |
| **Settings** | Override district settings (where allowed) |
| **Prompt Bank** | Add school-level prompts for observations and student growth |
| **Resources** | Add school-level resources for evaluations |
| **Oversight** | Monitor evaluation progress at your school |

## What You Control vs. District

| Task | You | District Admin |
|------|-----|----------------|
| Select evaluation frameworks | No | Yes |
| Enable/disable optional modules | If allowed | Yes |
| Override module settings | If allowed | Yes |
| Assign evaluators | If delegated | Yes |
| Configure DTE/DPE assignments | No | Yes |

## Key Concepts

### Settings Inheritance
Your settings layer on top of district settings. See [How Settings Are Inherited](../reference/settings-inheritance.md):
- **Additive areas** (prompts, resources): Your additions combine with district's
- **Override areas** (module settings): Your settings replace district's (if allowed)

### School Override
For each optional module and setting, the district controls whether you can override. Look for the "Allow Schools to Override" toggle - if it's not enabled at the district level, you'll see the setting but can't change it.

See [Modules and Settings](../reference/modules-settings.md) for what each setting does.

### Teacher Evaluations Only
School-level settings only apply to **teacher evaluations conducted by school principals**. They're bypassed for:
- Principal evaluations (always use district settings)
- Teacher evaluations by DTEs (district-level evaluators)

See [Settings Inheritance](../reference/settings-inheritance.md#summary) for the full matrix.

## Common Questions

**Why can't I change a setting?**
The district hasn't enabled school-level override for that setting. Contact your District Admin if you need it changed.

**Why don't my settings apply to a teacher's evaluation?**
Check who the evaluator is. If it's a DTE (not a school principal), district settings apply instead. See [Settings Inheritance](../reference/settings-inheritance.md#summary).

**Can I assign evaluators?**
Only if your district has enabled "Assignments Delegated." Otherwise, the District Admin manages all assignments.

**What prompts/resources will teachers see?**
They'll see everything from the district level plus anything you've added at the school level. The lists combine (additive pattern).
