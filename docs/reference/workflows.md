---
sidebar_position: 5
title: How Workflows Work
roles: [TR, PR, DPE, DTE, DA, SA]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# How Workflows Work in eVAL

Each evidence collection in eVAL follows a specific workflow that controls how content moves from draft to final state. Understanding these workflows helps you know what to expect and what actions are available at each step.

## Workflow Patterns at a Glance

eVAL uses three main workflow patterns:

<div class="card-grid">
<div class="card">
<div class="card__title">Complex Locking</div>
<p class="card__description">Content goes through review before being locked. Unlocking requires mutual approval.</p>
</div>
<div class="card">
<div class="card__title">Submit & Approve</div>
<p class="card__description">One party submits, the other approves. Unlocking requires mutual approval.</p>
</div>
<div class="card">
<div class="card__title">Share & Unlock</div>
<p class="card__description">Creator works privately, then shares. Can unlock to make revisions and re-share.</p>
</div>
</div>

| Evidence Collection | Pattern | Owner |
|---------------------|---------|-------|
| **Observations** | Complex Locking | Evaluator |
| **Summative Evaluation** | Complex Locking | Evaluator |
| **Coded Notes** | Complex Locking | Evaluator |
| **Student Growth Goals** | Submit & Approve | Evaluatee (Evaluator approves) |
| **Student Growth Achievement** | Submit & Approve | Evaluatee (Evaluator approves) |
| **Self-Assessment** | Share & Unlock | Evaluatee |
| **Artifacts** | Share & Unlock | Either party (separate tracks) |
| **Year-to-Date Evidence** | Always Open | Both parties (collaborative) |

---

## Common Workflow States

Most evidence collections use these states:

| State | What It Means |
|-------|---------------|
| **Draft** | Work in progress. Can be edited freely. |
| **Waiting for Review** | Submitted and waiting for the other party to review. |
| **Viewed** | The other party has seen it but hasn't acknowledged yet. |
| **Locked - Sealed** | Finalized. Cannot be edited without an unlock request. |
| **Shared** | Visible to both parties (for simpler workflows). |

---

## Detailed Workflows

<Tabs>
<TabItem value="observations" label="Observations" default>

### Observation Workflow

Observations follow a review process where the evaluator creates content and optionally the evaluatee reviews and acknowledges the final report.

:::note Completion Mode
The diagram below shows **Formal Mode** with evaluatee review. In **Simple Mode**, the evaluator locks directly from Draft to Sealed without the review steps.
:::

```mermaid
flowchart TD
    A[Draft] --> B[Locked - Waiting for Review]
    B --> C[Locked - Viewed]
    C --> D[Locked - Sealed]
    B --> D

    style A fill:#E5A54B,color:#000
    style B fill:#1F9BCF,color:#fff
    style C fill:#6d9fef,color:#fff
    style D fill:#4BBF73,color:#fff
```

**Draft**
- Evaluator creates and edits observation
- Can send pre/post-conference prompts
- Can link artifacts
- Can share sections with evaluatee
- **Can be deleted** in this state

**Locked - Waiting for Review**
- Evaluator has sent the Final Report
- Evaluatee can view the report
- Evaluator can force-lock (skip evaluatee review)

**Locked - Viewed**
- Evaluatee has viewed the Final Report
- Evaluatee can acknowledge
- Evaluator can lock

**Locked - Sealed**
- Observation is finalized
- Either party can request to unlock (requires other party approval)

</TabItem>
<TabItem value="evaluation" label="Summative Evaluation">

### Summative Evaluation Workflow

The summative evaluation follows a similar pattern to observations, with additional features for district admin override and "drop to paper."

:::note Formal Mode
Summative evaluations typically use **Formal Mode** because they represent your final performance rating and serve as a legal record. This requires evaluatee review and acknowledgment.
:::

```mermaid
flowchart TD
    A[Draft] --> B[Locked - Waiting for Review]
    A --> D[Locked - Sealed]
    B --> C[Locked - Viewed]
    C --> D
    B --> D

    style A fill:#E5A54B,color:#000
    style B fill:#1F9BCF,color:#fff
    style C fill:#6d9fef,color:#fff
    style D fill:#4BBF73,color:#fff
```

**Draft**
- Evaluator works on the evaluation
- Can send reflection prompts to evaluatee
- Can change plan type
- Three paths to lock:
  1. Send for review (standard path)
  2. Lock directly (bypass review)
  3. Drop to paper (terminate in eVAL)

**Locked States**
- Same as observations
- **District Admin can revert** any locked state back to Draft (without needing other party approval)

**Drop to Paper**
- Terminates the digital evaluation
- Evaluation continues using paper forms
- Cannot be reversed

</TabItem>
<TabItem value="student-growth" label="Student Growth">

### Student Growth Workflows

Student Growth has two separate but identical workflows:
1. **Goal Setting** - at the beginning of the year
2. **Achievement** - at the end of the year

Both follow a "submit and approve" pattern where the evaluatee owns the content and the evaluator approves.

:::note Simple Mode
Student Growth typically uses **Simple Mode** - when the evaluator approves, the collection is immediately sealed. This helps manage the November deadline when many teachers are submitting goals simultaneously.
:::

```mermaid
flowchart TD
    A[Draft] --> B[Waiting for Review]
    B --> C[Locked - Sealed]

    style A fill:#E5A54B,color:#000
    style B fill:#1F9BCF,color:#fff
    style C fill:#4BBF73,color:#fff
```

**Draft**
- **Evaluatee** creates and edits goals/achievement data
- Can share work-in-progress with evaluator for feedback
- Evaluator can view shared content (read-only)
- Both parties can add evidence/artifacts

**Waiting for Review**
- Evaluatee has submitted
- Evaluator reviews and approves
- If changes needed, evaluator can request unlock

**Locked - Sealed**
- Goals/achievement data approved
- Either party can request unlock (requires mutual agreement)

:::tip Key Difference
Unlike observations, the **evaluatee controls submission** and the **evaluator only approves**. The evaluator cannot edit goal content directly.
:::

</TabItem>
<TabItem value="self-assessment" label="Self-Assessment">

### Self-Assessment Workflow

Self-assessments are owned and controlled entirely by the evaluatee. They can be kept private, shared with the evaluator, and unlocked for revisions.

```mermaid
flowchart TD
    A[Draft] --> B[Shared]
    A --> C[Deleted]
    B --> A

    style A fill:#E5A54B,color:#000
    style B fill:#4BBF73,color:#fff
    style C fill:#6c757d,color:#fff
```

**Draft**
- Evaluatee creates and edits
- Private - only evaluatee can see
- Can link artifacts
- Can share with evaluator
- Can delete

**Shared**
- Visible to both parties
- Cannot be edited directly
- **Can be unlocked** by the evaluatee to make revisions
- Cannot be deleted (must unlock first, then delete from Draft)

**Revising After Sharing**
1. Evaluatee unlocks the self-assessment (returns to Draft)
2. Make revisions in Draft
3. Re-share to publish the updated version

:::tip
Unlike locked evidence collections, the evaluatee can unlock a self-assessment directly without requesting approval from the evaluator.
:::

</TabItem>
<TabItem value="coded-notes" label="Coded Notes">

### Coded Notes Workflow

Coded notes are evaluator-created notes linked to specific rubric criteria. They follow a locking workflow similar to observations.

:::note Completion Mode
The diagram below shows **Simple Mode** where the coded note locks directly when submitted. In **Formal Mode**, the evaluatee reviews and acknowledges before final lock.
:::

```mermaid
flowchart TD
    A[Draft] --> B[Locked - Sealed]
    A --> C[Deleted]
    B --> D{Unlock Request}
    D --> A

    style A fill:#E5A54B,color:#000
    style B fill:#4BBF73,color:#fff
    style C fill:#6c757d,color:#fff
    style D fill:#1F9BCF,color:#fff
```

**Draft**
- Evaluator creates and edits
- Links notes to rubric criteria
- Private - only evaluator can see
- Can share sections with evaluatee before submission
- Can submit or delete
- **Can only be deleted** in this state

**Locked - Sealed**
- Visible to both parties
- Evidence flows to YTD and Summative views
- Cannot be edited without unlocking
- Either party can request unlock

**Unlocking**
- Either party requests unlock
- Other party approves or declines
- If approved, returns to Draft for revisions
- After revisions, evaluator re-submits to update published evidence

:::note Use Cases
Coded notes are useful for:
- Walkthrough observations
- Informal feedback
- Notes from professional conversations
:::

</TabItem>
<TabItem value="artifacts" label="Artifacts">

### Artifact Workflow

Artifacts have **two parallel workflows** - one for evaluatee artifacts and one for evaluator artifacts. Each party owns and controls their own artifacts.

```mermaid
flowchart TD
    subgraph Evaluatee
        A1[Draft] --> B1[Shared]
        A1 --> C1[Deleted]
        B1 --> A1
        B1 --> C1
    end

    subgraph Evaluator
        A2[Draft] --> B2[Shared]
        A2 --> C2[Deleted]
        B2 --> A2
        B2 --> C2
    end

    style A1 fill:#E5A54B,color:#000
    style B1 fill:#4BBF73,color:#fff
    style C1 fill:#6c757d,color:#fff
    style A2 fill:#E5A54B,color:#000
    style B2 fill:#4BBF73,color:#fff
    style C2 fill:#6c757d,color:#fff
```

**For Both Tracks:**

**Draft**
- Creator uploads files and writes description
- Private to creator
- Can share or delete

**Shared**
- Visible to both parties
- Evidence flows to YTD and Summative views
- Can re-share to push minor updates
- **Can be unlocked** to return to Draft for more significant revisions
- **Can be deleted** by creator

**Revising After Sharing**
- **Quick updates**: Re-share directly from Shared state
- **Significant revisions**: Unlock → Draft → make changes → re-share

:::tip
Artifacts offer the most flexibility for revisions. Unlike other evidence collections, the creator can unlock their own artifact without approval from the other party.
:::

</TabItem>
<TabItem value="ytd" label="Year-to-Date">

### Year-to-Date Evidence Workflow

Year-to-Date (YTD) evidence is the simplest workflow - it's always in Draft state and fully collaborative.

```mermaid
flowchart TD
    A[Draft - Always Active]

    style A fill:#4BBF73,color:#fff
```

**Draft (Permanent)**
- Both parties can add evidence notes
- Both parties can delete notes
- Notes are coded to rubric criteria
- **All notes immediately visible** to both parties
- Never locked or sealed

:::info Collaborative Space
YTD Evidence is designed as an open, collaborative space for ongoing documentation throughout the evaluation year.
:::

</TabItem>
</Tabs>

---

## Completion Modes: Simple vs. Formal

Evidence collections with locking (Observations, Coded Notes, Student Growth, Summative Evaluations) can operate in one of two completion modes:

<div class="card-grid">
<div class="card">
<div class="card__title">Simple Mode</div>
<p class="card__description">Evaluator completes and locks. Evaluatee is notified but doesn't need to review or sign. Faster workflow.</p>
</div>
<div class="card">
<div class="card__title">Formal Mode</div>
<p class="card__description">After evaluator completes, evaluatee must review and acknowledge before final lock. Includes digital signatures.</p>
</div>
</div>

### How Completion Modes Differ

| Aspect | Simple Mode | Formal Mode |
|--------|-------------|-------------|
| **Evaluatee review** | Not required | Required |
| **Digital signatures** | No | Yes |
| **Time to complete** | Faster | Slower (waiting for evaluatee) |
| **Force lock option** | N/A | Evaluator can force-lock if evaluatee doesn't respond |
| **Best for** | High-volume activities | High-stakes final evaluations |

### Which Mode is Used?

| Evidence Collection | Typical Mode | Why |
|---------------------|--------------|-----|
| **Student Growth Goals** | Simple | November deadline crunch with many teachers |
| **Student Growth Achievement** | Simple | Consistent with Goal Setting |
| **Observations** | Simple | Multiple per teacher per year |
| **Coded Notes** | Simple | Informal documentation, high volume |
| **Summative Evaluation** | Formal | Final performance rating, legal record |

:::info District Configuration
Your district may configure which mode is used for each activity type. Check with your administrator if you're unsure which mode applies to your evaluations.
:::

### Safety Nets in Simple Mode

Even when evaluatee review isn't required, safeguards exist:

- **Notifications** - You're notified when scoring is complete
- **Visibility** - You can view scores immediately
- **Unlock requests** - Either party can request to unlock and revise
- **Audit trail** - All actions are logged

---

## Unlocking Published Evidence

When evidence is published (locked or shared), it cannot be edited directly. To make revisions, you must unlock it first. There are two unlocking mechanisms:

### Unlock Requests (Mutual Approval)

For evidence collections with locking workflows (Observations, Coded Notes, Evaluations, Student Growth), either party can request to unlock after it's sealed. The other party must approve.

**How Unlock Requests Work:**

1. One party requests unlock
2. The other party receives the request
3. The other party can **approve** (returns to Draft), **decline** (stays sealed), or the requester can **cancel**
4. If approved, make edits in Draft, then re-submit to update the published evidence

```mermaid
flowchart TD
    A[Locked - Sealed] --> B{Request Unlock}
    B --> C[Evaluatee Requests]
    B --> D[Evaluator Requests]
    C --> E{Evaluator Decision}
    D --> F{Evaluatee Decision}
    E -->|Approve| G[Draft]
    E -->|Decline| A
    F -->|Approve| G
    F -->|Decline| A
    G -->|Re-submit| A

    style A fill:#4BBF73,color:#fff
    style G fill:#E5A54B,color:#000
```

:::tip District Admin Override
For **Summative Evaluations only**, District Admins can revert any locked evaluation to Draft without requiring the other party's approval.
:::

### Direct Unlock (Creator Control)

For evidence collections with sharing workflows (Self-Assessments, Artifacts), the creator can unlock directly without approval from the other party.

| Evidence Collection | Who Can Unlock |
|---------------------|----------------|
| **Self-Assessment** | Evaluatee |
| **Artifact** | The party who created it |

This gives creators flexibility to revise their own shared evidence without waiting for approval.

---

## Workflow Comparison

| Feature | Observation | Evaluation | Coded Notes | Goals/Achievement | Self-Assessment | Artifacts | YTD |
|---------|-------------|------------|-------------|-------------------|-----------------|-----------|-----|
| **Owner** | Evaluator | Evaluator | Evaluator | Evaluatee | Evaluatee | Either | Both |
| **Completion Mode** | Simple* | Formal | Simple* | Simple | N/A | N/A | N/A |
| **Has Locking** | Yes | Yes | Yes | Yes | No | No | No |
| **Evaluatee Review Required** | Configurable | Yes | Configurable | No | N/A | N/A | N/A |
| **Can Delete After Share/Lock** | No | No | No | No | No† | Yes | Yes |
| **DA Override** | No | Yes | No | No | No | No | No |
| **Unlock Mechanism** | Request | Request | Request | Request | Direct | Direct | N/A |

*May use Formal mode depending on district configuration.
†Must unlock first, then delete from Draft.

---

## Tips for Working with Workflows

### For Evaluatees

1. **Self-assessments can be unlocked** - If you need to revise, unlock it, make changes, and re-share
2. **You control student growth submissions** - Your evaluator can only approve, not edit your goals
3. **Use YTD Evidence for ongoing documentation** - It's collaborative and always accessible
4. **Artifacts can be updated** - Unlock or re-share to push revisions

### For Evaluators

1. **Evidence collections can only be deleted in Draft** - Plan deletions before submitting
2. **Coded notes are locked when submitted** - They follow the same locking workflow as observations
3. **Send prompts before locking** - Once sealed, you can't request additional input
4. **Review student growth goals carefully** - You're responsible for approving appropriate goals

### For Both Parties

1. **Locked collections require unlock requests** - One party requests, the other approves
2. **Self-assessments and artifacts allow direct unlock** - The creator doesn't need approval
3. **Draft state is your editing window** - Make all changes before progressing
4. **Unlocking doesn't remove published evidence** - Evidence remains visible while you revise; re-submit to update

---

## Related Topics

- [Evidence Collection](./evidence-collection.md)
- [Understanding Your Evaluation](./evaluation-basics.md)
