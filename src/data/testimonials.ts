export interface Testimonial {
    id: string;
    name: string;
    role: string;
    content: string;
    rating: number;
    image: string;
}

export const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Robert Fox',
        role: 'Marathon Runner',
        content: 'The Sports Recovery massage is a game changer. James really knows how to work out the knots after a long run. Highly recommended for athletes.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80'
    },
    {
        id: '2',
        name: 'Thomas Anderson',
        role: 'Software Engineer',
        content: 'I sit at a desk all day and my back was killing me. The Executive Stress Relief session was exactly what I needed. I feel like a new man.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80'
    },
    {
        id: '3',
        name: 'William Turner',
        role: 'Architect',
        content: 'Great atmosphere, very professional. It is hard to find a place that understands men\'s massage needs so well. Will definitely be back.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80'
    }
];
