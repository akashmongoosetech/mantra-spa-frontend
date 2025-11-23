import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../data/testimonials';

interface TestimonialCardProps {
    testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/20 relative">
            <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />

            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                ))}
            </div>

            <p className="text-text/80 italic mb-6 leading-relaxed">
                "{testimonial.content}"
            </p>

            <div className="flex items-center gap-4">
                <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                    <h4 className="font-serif font-bold text-dark">{testimonial.name}</h4>
                    <p className="text-sm text-text/60">{testimonial.role}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
