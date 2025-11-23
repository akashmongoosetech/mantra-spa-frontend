import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Activity, Clock, Award, CheckCircle, Zap, Brain, Heart, Quote } from 'lucide-react';
import HeroBanner from '../components/HeroBanner';
import ServiceCard from '../components/ServiceCard';
import TherapistCard from '../components/TherapistCard';
import TestimonialCard from '../components/TestimonialCard';
import FAQAccordion from '../components/FAQAccordion';
import { services } from '../data/services';
import { therapistsAPI, testimonialsAPI, Therapist, Testimonial } from '../services/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Home = () => {
    const [therapists, setTherapists] = useState<Therapist[]>([]);
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

    useEffect(() => {
        therapistsAPI.getAll()
            .then(res => setTherapists(res.data))
            .catch(err => console.error('Error fetching therapists:', err));

        testimonialsAPI.getAll()
            .then(res => setTestimonials(res.data))
            .catch(err => console.error('Error fetching testimonials:', err));
    }, []);

    const featuredServices = services.slice(0, 3);

    return (
        <div className="bg-background">
            <HeroBanner />

            {/* Intro Section */}
            <section className="py-24 px-6 container mx-auto text-center">
                <span className="text-primary font-medium tracking-wider uppercase">Welcome to Mantra</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mt-4 mb-8">Redefining Men's Wellness</h2>
                <p className="text-text/80 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                    We provide a space where men can relax, recover, and recharge. Our treatments are specifically tailored to the male physique, addressing common issues like muscle tightness, stress, and fatigue. Experience the difference of a therapy designed for you.
                </p>
            </section>

            {/* The Mantra Method */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-primary font-medium tracking-wider uppercase">Our Process</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mt-2">The Mantra Method</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-secondary/30 -z-10" />

                        <div className="bg-white p-6 text-center relative">
                            <div className="w-24 h-24 bg-background border-4 border-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-primary z-10 relative">
                                <span className="text-3xl font-serif font-bold">1</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Consultation</h3>
                            <p className="text-text/80">We start with a brief assessment of your physical condition, stress levels, and recovery goals.</p>
                        </div>

                        <div className="bg-white p-6 text-center relative">
                            <div className="w-24 h-24 bg-primary text-white border-4 border-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg z-10 relative">
                                <span className="text-3xl font-serif font-bold">2</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Custom Treatment</h3>
                            <p className="text-text/80">Your therapist applies targeted techniques to address your specific tension points and muscle groups.</p>
                        </div>

                        <div className="bg-white p-6 text-center relative">
                            <div className="w-24 h-24 bg-background border-4 border-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-primary z-10 relative">
                                <span className="text-3xl font-serif font-bold">3</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Recovery Plan</h3>
                            <p className="text-text/80">Receive post-session advice on stretching, hydration, and maintenance to prolong the benefits.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Services */}
            <section className="py-24 bg-secondary/10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4">Popular Treatments</h2>
                            <p className="text-text/60 text-lg">Therapies designed for your needs.</p>
                        </div>
                        <Link to="/services" className="hidden md:flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                            View All Services <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredServices.map(service => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <Link to="/services" className="inline-flex items-center gap-2 text-primary font-medium">
                            View All Services <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Meet the Founder */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full z-0" />
                            <img
                                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80"
                                alt="Founder"
                                className="rounded-2xl shadow-xl relative z-10 w-full max-w-md mx-auto lg:mx-0"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-primary font-medium tracking-wider uppercase">Meet the Founder</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mt-4 mb-6">A Note from James</h2>
                            <div className="relative mb-8">
                                <Quote className="absolute -top-4 -left-6 w-12 h-12 text-primary/10" />
                                <p className="text-text/80 text-lg leading-relaxed italic relative z-10">
                                    "I started Mantra because I saw a gap in the market. Men need a place where they can feel comfortable prioritizing their recovery without the 'fluff' of traditional spas. We focus on results, anatomy, and performance. My goal is to help every man who walks through our doors feel stronger and more capable."
                                </p>
                            </div>
                            <div>
                                <p className="font-serif font-bold text-xl text-dark">James Sterling</p>
                                <p className="text-primary">Founder & Lead Therapist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Health Benefits Grid */}
            <section className="py-24 bg-dark text-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-primary font-medium tracking-wider uppercase">Why It Matters</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-4 mb-8">Benefits Beyond Relaxation</h2>
                            <p className="text-white/80 mb-12 text-lg leading-relaxed">
                                Regular massage therapy is a crucial component of a high-performance lifestyle. It's not just about feeling good; it's about optimizing your body's function.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0 text-primary">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Boost Recovery</h4>
                                        <p className="text-white/60 text-sm">Accelerate muscle repair after intense workouts.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0 text-primary">
                                        <Brain className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Lower Cortisol</h4>
                                        <p className="text-white/60 text-sm">Reduce stress hormones that kill productivity.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0 text-primary">
                                        <Activity className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Improve Circulation</h4>
                                        <p className="text-white/60 text-sm">Enhance blood flow for better energy levels.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0 text-primary">
                                        <Heart className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Better Sleep</h4>
                                        <p className="text-white/60 text-sm">Achieve deeper, more restorative rest.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
                            <img
                                src="https://images.unsplash.com/photo-1579126038374-6064e9370f0f?auto=format&fit=crop&q=80"
                                alt="Man relaxing"
                                className="rounded-2xl shadow-2xl relative z-10 w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Membership Spotlight */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="bg-background rounded-3xl overflow-hidden shadow-sm border border-secondary/20">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="p-12 lg:p-16 flex flex-col justify-center">
                                <span className="text-primary font-medium tracking-wider uppercase mb-4">Join the Club</span>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-6">Mantra Membership</h2>
                                <p className="text-text/80 text-lg mb-8">
                                    Commit to your well-being with our exclusive membership program. Consistency is key to long-term health benefits.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-center gap-3 text-dark font-medium">
                                        <CheckCircle className="w-5 h-5 text-primary" />
                                        <span>One 60-minute session per month</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-dark font-medium">
                                        <CheckCircle className="w-5 h-5 text-primary" />
                                        <span>Priority booking access</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-dark font-medium">
                                        <CheckCircle className="w-5 h-5 text-primary" />
                                        <span>15% off additional treatments</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-dark font-medium">
                                        <CheckCircle className="w-5 h-5 text-primary" />
                                        <span>Exclusive member-only events</span>
                                    </li>
                                </ul>
                                <div>
                                    <Link
                                        to="/pricing"
                                        className="inline-block bg-dark text-white px-8 py-4 rounded-full font-bold hover:bg-dark/90 transition-colors"
                                    >
                                        View Plans
                                    </Link>
                                </div>
                            </div>
                            <div className="h-64 lg:h-auto relative">
                                <img
                                    src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80"
                                    alt="Luxury Spa Interior"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partner Brands */}
            <section className="py-16 bg-white border-b border-secondary/20">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-text/60 uppercase tracking-widest text-sm mb-8">Trusted by Industry Leaders</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder Logos - In a real app these would be SVGs */}
                        <span className="text-2xl font-serif font-bold text-dark">Aesop.</span>
                        <span className="text-2xl font-serif font-bold text-dark">Theragun</span>
                        <span className="text-2xl font-serif font-bold text-dark">Hyperice</span>
                        <span className="text-2xl font-serif font-bold text-dark">Lululemon</span>
                        <span className="text-2xl font-serif font-bold text-dark">Equinox</span>
                    </div>
                </div>
            </section>

            {/* Therapists */}
            <section className="py-24 bg-secondary/10">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4">Expert Therapists</h2>
                        <p className="text-text/80 text-lg">Skilled professionals who understand male anatomy and recovery.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {therapists.map(therapist => (
                            <TherapistCard key={therapist.id} therapist={therapist} />
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Preview */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4">Common Questions</h2>
                        <p className="text-text/80 text-lg">Everything you need to know before your first visit.</p>
                    </div>
                    <FAQAccordion />
                    <div className="text-center mt-8">
                        <Link to="/contact" className="text-primary font-medium hover:underline">
                            View all FAQs
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-secondary/10">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4">Client Stories</h2>
                        <p className="text-text/80 text-lg">Hear from men who have made Mantra part of their routine.</p>
                    </div>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        className="pb-8"
                    >
                        {testimonials.map(testimonial => (
                            <SwiperSlide key={testimonial.id}>
                                <TestimonialCard testimonial={testimonial} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Ready to Reset?</h2>
                    <p className="text-white/90 max-w-2xl mx-auto mb-10 text-xl">
                        Book your appointment today and experience the difference of a massage tailored for you.
                    </p>
                    <Link
                        to="/booking"
                        className="inline-block bg-white text-primary px-12 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
                    >
                        Book Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;