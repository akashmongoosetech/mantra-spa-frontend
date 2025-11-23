import { Divide, Droplets, Flame, Flower2, Heart, Sparkles } from 'lucide-react';

export interface Service {
    id: string;
    title: string;
    description: string;
    price: number;
    duration: number;
    image: string;
    icon: any;
}

export const services: Service[] = [
    {
        id: 'sports-recovery',
        title: 'Sports Recovery',
        description: 'Designed for active men. Deep muscle work to enhance performance, prevent injury, and speed up recovery time.',
        price: 100,
        duration: 60,
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80',
        icon: Sparkles
    },
    {
        id: 'deep-tissue-men',
        title: 'Deep Tissue for Men',
        description: 'Intense pressure targets the deepest layers of muscle to release chronic tension and knots from stress or workouts.',
        price: 110,
        duration: 60,
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80',
        icon: Flame
    },
    {
        id: 'executive-stress-relief',
        title: 'Executive Stress Relief',
        description: 'A focused treatment for the busy professional. Targets neck, shoulders, and back to melt away office stress.',
        price: 90,
        duration: 45,
        image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80',
        icon: Droplets
    },
    {
        id: 'swedish-relaxation',
        title: 'Classic Relaxation',
        description: 'A traditional full-body massage using long, gliding strokes to induce deep relaxation and improve circulation.',
        price: 85,
        duration: 60,
        image: 'https://images.unsplash.com/photo-1591343395082-e21f174bd081?auto=format&fit=crop&q=80',
        icon: Flower2
    },
    {
        id: 'thai-warrior',
        title: 'Thai Warrior Massage',
        description: 'An invigorating therapy combining stretching and acupressure to improve flexibility and energy flow.',
        price: 120,
        duration: 90,
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80',
        icon: Divide
    },
    {
        id: 'four-hands',
        title: 'Four Hands Experience',
        description: 'The ultimate indulgence. Two therapists work in synchronization to provide a powerful and immersive experience.',
        price: 200,
        duration: 60,
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80',
        icon: Heart
    }
];
