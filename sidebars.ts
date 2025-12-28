import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    'index',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'doc',
        id: 'getting-started/index',
      },
      items: [
        'getting-started/logging-in',
        'getting-started/work-areas',
        'getting-started/your-role',
      ],
    },
    {
      type: 'category',
      label: 'Staff Management',
      link: {
        type: 'doc',
        id: 'staff-management/index',
      },
      items: [
        'staff-management/adding-staff',
        'staff-management/sending-invitations',
        'staff-management/assigning-evaluators',
        'staff-management/roster-uploads',
      ],
    },
    {
      type: 'category',
      label: 'Artifacts',
      link: {
        type: 'doc',
        id: 'artifacts/index',
      },
      items: [
        'artifacts/submitting-artifacts',
        'artifacts/reviewing-artifacts',
      ],
    },
    {
      type: 'category',
      label: 'Role Guides',
      items: [
        'role-guides/district-admin',
        'role-guides/school-admin',
        'role-guides/evaluator',
        'role-guides/teacher',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/evaluation-basics',
        'reference/evidence-collection',
        'reference/workflows',
        'reference/state-framework',
        'reference/modules-settings',
        'reference/settings-inheritance',
      ],
    },
    'faq',
  ],
};

export default sidebars;
