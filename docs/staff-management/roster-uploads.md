---
sidebar_position: 5
title: Roster Uploads
roles: [DA, SA]
contexts: [staff-admin.district-upload, staff-admin.school-upload]
---

# Roster Uploads

Upload a file to add or update multiple staff members at once.

## File Format

Prepare a CSV or tab-delimited file with the following columns:

| Column | Required | Description |
|--------|----------|-------------|
| FirstName | Yes | Staff member's first name |
| LastName | Yes | Staff member's last name |
| Email | Yes | Email address (must be unique) |
| Role | Yes | Role code (e.g., TEACHER, PRINCIPAL) |
| SchoolCode | Depends | Required for school-based roles |

## Upload Process

1. Go to **Staff Admin** > **District Roster** (or School Roster)
2. Click **Upload**
3. Select your file
4. Review the comparison:
   - **New** - Staff to be added
   - **Updated** - Existing staff with changes
   - **Unchanged** - Staff already in system with no changes
   - **Errors** - Rows with problems
5. Review and fix any errors
6. Click **Apply** to process the upload

## After Upload

- New staff will have status "Needs Account Setup"
- Go to **Invitations** to send them activation emails
- Review any staff marked as updated to confirm changes
