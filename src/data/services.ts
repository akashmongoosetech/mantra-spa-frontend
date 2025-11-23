import { Divide, Droplets, Flame, Flower2, Heart, Sparkles, Users } from 'lucide-react';

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
    },
    {
        id: 'scalp-rescue',
        title: 'Scalp Rescue',
        description: 'Targeted relief for headaches, migraines, and neck tension. A focused treatment that clears the mind.',
        price: 65,
        duration: 30,
        image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80',
        icon: Sparkles
    },
    {
        id: 'reflexology-reset',
        title: 'Reflexology Reset',
        description: 'Ancient pressure point therapy for the feet that restores balance to the entire body and nervous system.',
        price: 75,
        duration: 45,
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80',
        icon: Flower2
    },
    {
        id: 'ultimate-detox',
        title: 'The Ultimate Detox',
        description: 'Lymphatic drainage techniques combined with dry brushing to boost immunity and reduce inflammation.',
        price: 130,
        duration: 75,
        image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80',
        icon: Droplets
    },
    {
        id: 'aromatherapy-bliss',
        title: 'Aromatherapy Bliss',
        description: 'Essential oils combined with gentle massage to promote emotional balance and physical relaxation.',
        price: 95,
        duration: 60,
        image: 'https://images.unsplash.com/photo-1596178060810-fb4bd482ee2c?auto=format&fit=crop&q=80',
        icon: Flower2
    },
    {
        id: 'prenatal-relief',
        title: 'Prenatal Relief',
        description: 'Specialized massage for expectant mothers to alleviate pregnancy discomfort and promote well-being.',
        price: 105,
        duration: 60,
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80',
        icon: Heart
    },
    {
        id: 'couples-retreat',
        title: 'Couples Retreat',
        description: 'Intimate session for two, fostering connection and relaxation in a private setting.',
        price: 180,
        duration: 60,
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80',
        icon: Users
    },
    {
        id: 'hot-stone-therapy',
        title: 'Hot Stone Therapy',
        description: 'Smooth, heated stones placed on key points to melt away tension and ease muscle stiffness.',
        price: 115,
        duration: 75,
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80',
        icon: Flame
    }
];
