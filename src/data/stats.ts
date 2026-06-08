export interface Stat {
  value: string;
  /** i18n key segment — resolves to hero:stat-{key} */
  key: string;
  icon: string;
}

export const stats: Stat[] = [
  { value: '23+', key: 'projects',    icon: 'rocket' },
  { value: '4+',  key: 'experience',  icon: 'code' },
  { value: '3+',  key: 'delivered',   icon: 'zap' },
];
