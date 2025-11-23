import React from 'react';
import PageHeader from '../components/PageHeader';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
    return (
        <div className="bg-background">
            <PageHeader
                title="Client Stories"
                subtitle="Read about the experiences of our valued clients."
                image="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80"
            />

            <section className="py-20 px-6 container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map(testimonial => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                    {/* Duplicating for demo purposes to fill grid */}
                    {testimonials.map((testimonial, i) => (
                        <TestimonialCard key={`${testimonial.id}-dup-${i}`} testimonial={testimonial} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
