---
sidebar_position: 100
title: FAQ
---

# Frequently Asked Questions

## Logging In

### I didn't receive my invitation email
- Check your spam/junk folder
- Verify your email address is correct with your administrator
- Ask your administrator to resend the invitation

### My invitation link expired
Ask your administrator to resend the invitation. This generates a new link.

### I forgot my password
Click **Forgot Password** on the login page and follow the instructions. You'll receive an email with a reset link.

### I'm locked out of my account
Contact your district administrator to reset your account.

---

## Access Issues

### Why do I see "Framework Setup Incomplete"?

Your District Admin hasn't selected an evaluation framework yet. Until at least one framework is selected, only District Admins can access eVAL. All other users see this message:

> Your eVAL district admin has not yet completed the framework selection process for performing evaluations in eVAL. Once this is complete, the individual evaluation setup of assigning evaluators and plan types can begin.

**Who's affected:** School Admins, Evaluators, and Evaluatees (everyone except District Admins)

**Resolution:** Contact your District Admin to complete framework selection in Evaluation Setup > Evaluation Program Setup.

### Why do I see "Evaluation Setup Incomplete"?

You're an evaluatee (teacher or principal being evaluated) and your evaluation hasn't been fully configured. You'll see one or both of these issues listed:

> Before you can access eVAL, your evaluation must be fully configured. The following items need to be completed:
> - You do not have an evaluator assigned
> - You do not have a plan type assigned

**Who's affected:** Only evaluatees (teachers and principals being evaluated)

**Resolution:** Contact your administrator to complete both your evaluator assignment and plan type assignment.

### I'm an evaluator but I don't see any evaluatees

This is expected if assignments aren't complete yet. Evaluators can access eVAL once the framework is selected, but you won't see evaluatees on your dashboard until those staff members have been:
1. Assigned to you as their evaluator
2. Given a plan type (Comprehensive or Focused)

Contact your District Admin or School Admin to check on assignment progress.

### Access requirements summary

| User Type | What They Need | Message If Missing |
|-----------|----------------|-------------------|
| District Admin | Nothing | Always has access |
| School Admin | Framework selected | "Framework Setup Incomplete" |
| Evaluators | Framework selected | "Framework Setup Incomplete" |
| Evaluatees | Framework + Evaluator + Plan Type | "Framework Setup Incomplete" or "Evaluation Setup Incomplete" |

---

## Evaluatees (Teachers & Principals)

### Why can't I edit my self-assessment?
Once you share a self-assessment with your evaluator, it's permanently locked. This is by design - review carefully before sharing. See [Self-Assessment Workflow](./reference/workflows.md#detailed-workflows).

### Why can't I edit my student growth goals?
Your goals may be in a locked state. If they've been approved by your evaluator, you'll need to request an unlock to make changes. See [Unlock Requests](./reference/workflows.md#unlock-requests).

### When will I see my observation feedback?
After your evaluator sends the Final Report. Depending on your district's settings, you may need to acknowledge it before it's sealed.

### Who is my evaluator?
Check your Dashboard or go to My Evaluation. If no evaluator is assigned, contact your administrator.

### What artifacts should I submit?
Quality over quantity. Submit evidence that demonstrates your practice with clear context explaining what it shows. See [Working with Artifacts](./artifacts/index.md).

### What's the difference between Comprehensive and Focused evaluation?
- **Comprehensive**: Evaluates all 8 criteria
- **Focused**: Evaluates one criterion you select (available after Proficient/Distinguished rating)

See [Understanding Your Evaluation](./reference/evaluation-basics.md#plan-types-comprehensive-vs-focused).

---

## Evaluators

### Why can't I edit an observation?
Observations lock after you send the Final Report. You'll need to request an unlock, which the evaluatee must approve. See [Unlock Requests](./reference/workflows.md#unlock-requests).

### What's the difference between Coded Notes and YTD Evidence?
- **Coded Notes**: Your private notes until you share them. You can delete them anytime.
- **YTD Evidence**: Collaborative space - immediately visible to both parties.

Use Coded Notes for working notes; YTD Evidence for shared documentation. See [Evidence Types](./reference/workflows.md#detailed-workflows).

### Do I need to wait for the evaluatee to acknowledge?
Depends on your district's workflow settings. Some use Simple mode (you complete directly), others use Formal mode (evaluatee must acknowledge). See [Completion Modes](./reference/workflows.md#completion-modes-simple-vs-formal).

### Can I change an evaluatee's plan type mid-year?
Yes, in the Summative section while it's in Draft. Check your district's "Keep Plan Type in Sync" setting to see if existing observations/artifacts will update automatically.

---

## Administrators

### Why can't a School Admin change a setting?
The district hasn't enabled school-level override for that setting. Only settings where "Allow Schools to Override" is enabled at the district level can be changed by schools. See [Modules and Settings](./reference/modules-settings.md).

### Why don't school settings apply to a teacher's evaluation?
Check who the evaluator is. If it's a DTE (district-level evaluator) rather than a school principal, school settings are bypassed. See [Settings Inheritance](./reference/settings-inheritance.md#inheritance-by-evaluation-scenario).

### Evaluator dropdown is empty when assigning
- Check that valid evaluators exist at that location (principals must have evaluator role)
- For principals needing evaluation, ensure a DPE exists

### How do I override a locked summative evaluation?
District Admins can revert any summative evaluation to Draft without evaluatee approval. This is the only locked state that DAs can override directly.

---

## Settings & Configuration

### What's the difference between Simple and Formal workflow?
- **Simple**: Evaluator completes directly, evaluatee is notified
- **Formal**: Evaluatee must review and acknowledge before sealing (digital signatures)

See [Completion Modes](./reference/workflows.md#completion-modes-simple-vs-formal).

### What does "Allow Schools to Override" mean?
When enabled, School Admins can change that setting for their school. When disabled, only the district setting applies.

### What happens if I change a setting mid-year?
Settings apply to new work. Existing observations/evaluations keep their original settings.

---

## Still Need Help?

Contact support at [support@stateeval.com](mailto:support@stateeval.com).
