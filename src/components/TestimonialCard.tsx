import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../services/api';

interface TestimonialCardProps {
    testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
    return (
        <div className="max-w-4xl mx-auto bg-white p-12 rounded-3xl shadow-xl border border-secondary/10 relative overflow-hidden">
            <div className="absolute top-8 right-8">
                <Quote className="w-16 h-16 text-primary/10" />
            </div>

            <div className="text-center mb-8">
                <div className="flex justify-center gap-2 mb-6">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`w-6 h-6 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                    ))}
                </div>

                <blockquote className="text-text/90 text-lg md:text-xl italic leading-relaxed mb-8 font-light">
                    "{testimonial.content}"
                </blockquote>
            </div>

            <div className="flex items-center justify-center gap-6">
                <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover shadow-lg"
                />
                <div className="text-center">
                    <h4 className="font-serif font-bold text-dark text-lg">{testimonial.name}</h4>
                    <p className="text-primary font-medium">{testimonial.role}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
