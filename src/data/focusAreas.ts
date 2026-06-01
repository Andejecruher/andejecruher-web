export interface FocusArea {
  /** i18n key segment — resolves to about:focus-{key}-title / about:focus-{key}-desc */
  key: string;
  icon: string;
}

export const focusAreas: FocusArea[] = [
  { key: 'backend',    icon: 'server'   },
  { key: 'saas',       icon: 'cloud'    },
  { key: 'ai',         icon: 'cpu'      },
  { key: 'messaging',  icon: 'message'  },
  { key: 'devops',     icon: 'settings' },
];
