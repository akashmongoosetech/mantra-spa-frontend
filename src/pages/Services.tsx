import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Zap, Moon, Plus, Check, ArrowRight, Star } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';

const Services = () => {
    const enhancements = [
        { name: 'Cupping Therapy', price: 25, description: 'Increases blood circulation and relieves muscle tension.' },
        { name: 'CBD Oil Integration', price: 30, description: 'Reduces inflammation and promotes deeper relaxation.' },
        { name: 'Hot Stone Therapy', price: 20, description: 'Melts away tension and eases muscle stiffness.' },
        { name: 'Percussion Therapy', price: 15, description: 'Rapid bursts of pressure to flush out lactic acid.' },
    ];

    return (
        <div className="bg-background">
            <PageHeader
                title="Our Services"
                subtitle="Specialized treatments designed to restore strength and vitality."
                image="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80"
            />

            {/* Service Categories / Intro */}
            <section className="py-20 px-6 container mx-auto">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-primary font-medium tracking-wider uppercase">Tailored Treatments</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mt-4 mb-6">Find Your Focus</h2>
                    <p className="text-text/80 text-lg">
                        Whether you're training for a marathon, recovering from a stressful week, or simply need to disconnect, we have a modality for you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/20 hover:border-primary/50 transition-colors text-center group">
                        <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <Zap className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-dark mb-3">Performance</h3>
                        <p className="text-text/80">
                            Targeted work for athletes and active individuals. Focus on range of motion, injury prevention, and rapid recovery.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/20 hover:border-primary/50 transition-colors text-center group">
                        <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <Activity className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-dark mb-3">Recovery</h3>
                        <p className="text-text/80">
                            Deep tissue and structural integration to address chronic pain, posture issues, and muscle knots.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/20 hover:border-primary/50 transition-colors text-center group">
                        <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <Moon className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-dark mb-3">Relaxation</h3>
                        <p className="text-text/80">
                            Nervous system regulation. Reduce cortisol, improve sleep quality, and achieve mental clarity.
                        </p>
                    </div>
                </div>

                {/* Main Services Grid */}
                <div className="mb-24">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-serif font-bold text-dark">Core Treatments</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map(service => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                </div>

                {/* Enhancements / Add-ons */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <span className="text-primary font-medium tracking-wider uppercase">Level Up</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mt-4 mb-8">Enhancements</h2>
                        <p className="text-text/80 mb-8 text-lg">
                            Customize your session with these powerful add-ons. Can be added to any 60, 90, or 120-minute treatment.
                        </p>
                        <div className="space-y-6">
                            {enhancements.map((item, index) => (
                                <div key={index} className="flex items-start justify-between p-4 bg-white rounded-xl border border-secondary/20 hover:border-primary/30 transition-colors">
                                    <div className="flex gap-4">
                                        <div className="mt-1 text-primary">
                                            <Plus className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-dark text-lg">{item.name}</h4>
                                            <p className="text-text/60 text-sm">{item.description}</p>
                                        </div>
                                    </div>
                                    <div className="font-bold text-dark shrink-0">
                                        +${item.price}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80"
                            alt="Massage Therapy Detail"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                            <p className="text-white font-medium text-lg">
                                "The cupping therapy completely reset my shoulder mobility. Highly recommend adding it."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Testimonials */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4">What Our Clients Say</h2>
                        <p className="text-text/80 text-lg max-w-2xl mx-auto">
                            Real experiences from our valued clients who have transformed their well-being with our services.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map(testimonial => (
                            <div key={testimonial.id} className="bg-white p-6 rounded-2xl shadow-sm border border-secondary/20">
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

            {/* The Mantra Difference */}
            <section className="py-24 bg-dark text-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">The Mantra Difference</h2>
                        <p className="text-white/80 text-lg max-w-2xl mx-auto">
                            We don't just rub oil on your back. We use clinical modalities to achieve tangible results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                            <h3 className="text-xl font-bold mb-3 text-primary">Myofascial Release</h3>
                            <p className="text-white/70 text-sm leading-relaxed">
                                Sustained pressure into restrictions in the connective tissue to eliminate pain and restore motion.
                            </p>
                        </div>
                        <div className="p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                            <h3 className="text-xl font-bold mb-3 text-primary">Trigger Point</h3>
                            <p className="text-white/70 text-sm leading-relaxed">
                                Deactivating tight nodules in muscle fibers that cause referred pain in other parts of the body.
                            </p>
                        </div>
                        <div className="p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                            <h3 className="text-xl font-bold mb-3 text-primary">PNF Stretching</h3>
                            <p className="text-white/70 text-sm leading-relaxed">
                                Proprioceptive Neuromuscular Facilitation. An advanced form of flexibility training that involves stretching and contracting.
                            </p>
                        </div>
                        <div className="p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                            <h3 className="text-xl font-bold mb-3 text-primary">Sports Taping</h3>
                            <p className="text-white/70 text-sm leading-relaxed">
                                Application of kinesiology tape to support muscles and joints without restricting range of motion.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <Link
                            to="/booking"
                            className="inline-flex items-center gap-2 bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors"
                        >
                            Book Your Session <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Preparation Guide */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
                            <img
                                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80"
                                alt="Spa Preparation"
                                className="rounded-2xl shadow-2xl relative z-10 w-full"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-primary font-medium tracking-wider uppercase">Maximize Your Session</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mt-4 mb-8">How to Prepare</h2>
                            <p className="text-text/80 mb-8 text-lg">
                                To get the most out of your treatment, we recommend a few simple steps before you arrive.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary font-bold text-xl">1</div>
                                    <div>
                                        <h4 className="font-bold text-dark text-lg mb-1">Hydrate</h4>
                                        <p className="text-text/60">Drink plenty of water before and after your session to help flush out toxins released during the massage.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary font-bold text-xl">2</div>
                                    <div>
                                        <h4 className="font-bold text-dark text-lg mb-1">Shower Warm</h4>
                                        <p className="text-text/60">A warm shower relaxes the muscles and prepares the skin for treatment oils.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary font-bold text-xl">3</div>
                                    <div>
                                        <h4 className="font-bold text-dark text-lg mb-1">Arrive Early</h4>
                                        <p className="text-text/60">Arriving 15 minutes early allows you to decompress in our lounge and start relaxing before you even hit the table.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gift Cards */}
            <section className="py-24 bg-secondary/10">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-6">Give the Gift of Strength</h2>
                    <p className="text-text/80 text-lg max-w-2xl mx-auto mb-10">
                        Mantra gift cards are the perfect way to show appreciation. Available for specific treatments or monetary value.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-dark text-white px-10 py-4 rounded-full font-bold hover:bg-dark/90 transition-colors shadow-lg">
                            Purchase Digital Card
                        </button>
                        <button className="bg-white text-dark border border-dark/10 px-10 py-4 rounded-full font-bold hover:bg-gray-50 transition-colors shadow-sm">
                            Mail Physical Card
                        </button>
                    </div>
                </div>
            </section>

            {/* Spa Gallery */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4">Our Spa Gallery</h2>
                        <p className="text-text/80 text-lg max-w-2xl mx-auto">
                            Take a glimpse into our serene environment designed for ultimate relaxation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80" alt="Spa Interior" className="rounded-2xl shadow-lg h-64 object-cover" />
                        <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80" alt="Massage Room" className="rounded-2xl shadow-lg h-64 object-cover" />
                        <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80" alt="Treatment Area" className="rounded-2xl shadow-lg h-64 object-cover" />
                        <img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80" alt="Relaxation Space" className="rounded-2xl shadow-lg h-64 object-cover" />
                        <img src="https://images.unsplash.com/photo-1596178060810-fb4bd482ee2c?auto=format&fit=crop&q=80" alt="Aromatherapy Setup" className="rounded-2xl shadow-lg h-64 object-cover" />
                        <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80" alt="Prenatal Care" className="rounded-2xl shadow-lg h-64 object-cover" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
