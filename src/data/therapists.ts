export interface Therapist {
    id: string;
    name: string;
    role: string;
    image: string;
    experience: string;
    specialties: string[];
}

export const therapists: Therapist[] = [
    {
        id: '1',
        name: 'James Carter',
        role: 'Sports Therapy Specialist',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
        experience: '8 years',
        specialties: ['Sports Recovery', 'Deep Tissue', 'Trigger Point']
    },
    {
        id: '2',
        name: 'Marcus Chen',
        role: 'Senior Massage Therapist',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80',
        experience: '10 years',
        specialties: ['Thai Massage', 'Reflexology', 'Shiatsu']
    },
    {
        id: '3',
        name: 'David Reynolds',
        role: 'Holistic Practitioner',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
        experience: '12 years',
        specialties: ['Swedish', 'Aromatherapy', 'Hot Stone']
    }
];
