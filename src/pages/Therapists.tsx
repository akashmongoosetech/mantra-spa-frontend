import React from 'react';
import { Users, Award, Heart, Star } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import TherapistCard from '../components/TherapistCard';
import { therapists } from '../data/therapists';
import { testimonials } from '../data/testimonials';

const Therapists = () => {
    return (
        <div className="bg-background">
            <PageHeader
                title="Meet Our Team"
                subtitle="Experienced professionals dedicated to your health and relaxation."
                image="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80"
            />

            {/* Introduction Section */}
            <section className="py-20 px-6 container mx-auto">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-primary font-medium tracking-wider uppercase">Expert Care</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mt-4 mb-6">Our Dedicated Therapists</h2>
                    <p className="text-text/80 text-lg">
                        Our team of certified massage therapists brings years of experience and specialized training to every session. From sports recovery to deep relaxation, we tailor our approach to your unique needs and goals.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {therapists.map(therapist => (
                        <TherapistCard key={therapist.id} therapist={therapist} />
                    ))}
                </div>
            </section>

            {/* Why Choose Our Therapists */}
            <section className="py-20 px-6 container mx-auto bg-gray-50">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4">Why Choose Our Therapists</h2>
                    <p className="text-text/80 text-lg max-w-2xl mx-auto">
                        What sets our team apart and ensures you get the best possible care.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/20 hover:border-primary/50 transition-colors text-center group">
                        <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <Award className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-dark mb-3">Certified Experts</h3>
                        <p className="text-text/80">
                            All our therapists hold advanced certifications and continue their education to stay current with the latest techniques.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/20 hover:border-primary/50 transition-colors text-center group">
                        <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <Users className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-dark mb-3">Personalized Approach</h3>
                        <p className="text-text/80">
                            We take time to understand your specific needs, goals, and preferences to create a customized treatment plan.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/20 hover:border-primary/50 transition-colors text-center group">
                        <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <Heart className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-dark mb-3">Compassionate Care</h3>
                        <p className="text-text/80">
                            Our therapists create a safe, welcoming environment where you can relax and receive the care you deserve.
                        </p>
                    </div>
                </div>
            </section>

            {/* Client Testimonials */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4">What Our Clients Say</h2>
                        <p className="text-text/80 text-lg max-w-2xl mx-auto">
                            Real experiences from clients who have experienced our therapists' expertise.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map(testimonial => (
                            <div key={testimonial.id} className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-secondary/20">
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="font-bold text-dark">{testimonial.name}</h4>
                                        <p className="text-text/60 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-text/80 mb-4">"{testimonial.content}"</p>
                                <div className="flex text-yellow-400">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Therapist Gallery */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4">Our Therapy Environment</h2>
                        <p className="text-text/80 text-lg max-w-2xl mx-auto">
                            Take a look at our serene treatment rooms and professional setup designed for your comfort and healing.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80" alt="Treatment Room" className="rounded-2xl shadow-lg h-64 object-cover" />
                        <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80" alt="Massage Table Setup" className="rounded-2xl shadow-lg h-64 object-cover" />
                        <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80" alt="Relaxation Area" className="rounded-2xl shadow-lg h-64 object-cover" />
                        <img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80" alt="Therapy Equipment" className="rounded-2xl shadow-lg h-64 object-cover" />
                        <img src="https://images.unsplash.com/photo-1596178060810-fb4bd482ee2c?auto=format&fit=crop&q=80" alt="Aromatherapy Station" className="rounded-2xl shadow-lg h-64 object-cover" />
                        <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80" alt="Professional Workspace" className="rounded-2xl shadow-lg h-64 object-cover" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Therapists;
