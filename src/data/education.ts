export interface Education {
    institution: string;
    degree: string;
    field: string;
    period: string;
    status: 'completado' | 'en-curso';
    location?: string;
}

export interface Language {
    name: string;
    level: string;
    native?: boolean;
}

export const education: Education[] = [
    {
        institution: 'Universidad IEU',
        degree: 'Licenciatura',
        field: 'Ingeniería de Software',
        period: 'En curso',
        status: 'en-curso',
    },
    {
        institution: 'CBTis No. 169',
        degree: 'Técnico',
        field: 'Programación Informática',
        period: 'Completado',
        status: 'completado',
    },
];

export const languages: Language[] = [
    {
        name: 'Español',
        level: 'Nativo',
        native: true,
    },
    {
        name: 'Inglés',
        level: 'Básico',
        native: false,
    },
];

export const statusLabels: Record<Education['status'], string> = {
    completado: 'Completado',
    'en-curso': 'En curso',
};

export const statusColors: Record<Education['status'], string> = {
    completado: 'badge-success',
    'en-curso': 'badge-accent',
};
