import React from 'react';
import { Award, Shield, Users, Clock, Target, VolumeX, Coffee, Check } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const About = () => {
    return (
        <div className="bg-background">
            <PageHeader
                title="About Mantra"
                subtitle="A sanctuary designed for the modern man's wellness journey."
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
            />

            {/* Our Story */}
            <section className="py-24 px-6 container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-primary font-medium tracking-wider uppercase">Our Mission</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mt-4 mb-8">Wellness for Men, by Men</h2>
                        <p className="text-text/80 mb-6 leading-relaxed text-lg">
                            Mantra was founded on a simple yet powerful belief: men deserve a dedicated space for relaxation and recovery that understands their unique needs. For too long, the spa industry has treated men as an afterthought, offering generic services in environments that don't feel quite right.
                        </p>
                        <p className="text-text/80 mb-8 leading-relaxed text-lg">
                            We bridge that gap by combining clinical precision with high-end luxury. Our therapies are designed to target the specific stress points of the male body—whether from the boardroom, the gym, or the daily grind. At Mantra, you're not just getting a massage; you're investing in your performance and longevity.
                        </p>
                        <div className="flex gap-8">
                            <div>
                                <p className="text-4xl font-bold text-primary mb-1">5k+</p>
                                <p className="text-text/60 text-sm uppercase tracking-wide">Clients Served</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-primary mb-1">15+</p>
                                <p className="text-text/60 text-sm uppercase tracking-wide">Expert Therapists</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-primary mb-1">4.9</p>
                                <p className="text-text/60 text-sm uppercase tracking-wide">Average Rating</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
                            alt="Gym/Spa Detail 1"
                            className="rounded-2xl w-full h-80 object-cover mt-12 shadow-xl"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1591343395082-e21f174bd081?auto=format&fit=crop&q=80"
                            alt="Spa Detail 2"
                            className="rounded-2xl w-full h-80 object-cover shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* The Mantra Code */}
            <section className="py-24 bg-dark text-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-primary font-medium tracking-wider uppercase">Our Philosophy</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mt-4">The Mantra Code</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-6 text-white">
                                <Target className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-4">Precision</h3>
                            <p className="text-white/70 leading-relaxed">
                                We don't do "fluff". Every stroke, stretch, and technique has a purpose. Our therapists are trained to identify and resolve tension with anatomical accuracy.
                            </p>
                        </div>
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-6 text-white">
                                <VolumeX className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-4">Silence</h3>
                            <p className="text-white/70 leading-relaxed">
                                True recovery requires mental stillness. Our suites are soundproofed sanctuaries where you can disconnect from the noise of the world and find clarity.
                            </p>
                        </div>
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-6 text-white">
                                <Shield className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-4">Privacy</h3>
                            <p className="text-white/70 leading-relaxed">
                                Your comfort is paramount. We operate with the highest discretion, ensuring a private experience from check-in to check-out.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Sanctuary */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-primary font-medium tracking-wider uppercase">The Facility</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mt-4">The Sanctuary</h2>
                        <p className="text-text/80 mt-4 max-w-2xl mx-auto">
                            Designed with masculine aesthetics and premium comfort in mind. Every corner of Mantra is curated to help you unwind.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="relative group overflow-hidden rounded-2xl h-96">
                            <img
                                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80"
                                alt="Private Suite"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                                <div>
                                    <h3 className="text-white text-2xl font-bold mb-2">Private Suites</h3>
                                    <p className="text-white/80">Spacious, soundproofed rooms with en-suite showers.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-2xl h-96">
                            <img
                                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80"
                                alt="Recovery Lounge"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                                <div>
                                    <h3 className="text-white text-2xl font-bold mb-2">Recovery Lounge</h3>
                                    <p className="text-white/80">Relax before or after your session with premium amenities.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="relative group overflow-hidden rounded-2xl h-64">
                            <img
                                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80"
                                alt="Sauna"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                <h3 className="text-white text-xl font-bold">Infrared Sauna</h3>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-2xl h-64">
                            <img
                                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80"
                                alt="Cold Plunge"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                <h3 className="text-white text-xl font-bold">Cold Plunge</h3>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-2xl h-64">
                            <img
                                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80"
                                alt="Grooming Station"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                <h3 className="text-white text-xl font-bold">Grooming Station</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Standards */}
            <section className="py-24 bg-secondary/10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-primary font-medium tracking-wider uppercase">The Mantra Standard</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mt-4 mb-8">Uncompromising Quality</h2>
                            <p className="text-text/80 mb-8 text-lg">
                                We set the bar high because you deserve the best. From the linens we use to the training our therapists undergo, every detail is scrutinized.
                            </p>

                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary mt-1">
                                        <Check className="w-4 h-4 stroke-[3]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark text-lg">Hospital-Grade Hygiene</h4>
                                        <p className="text-text/60">We use EPA-registered disinfectants and run HEPA air purifiers in every suite.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary mt-1">
                                        <Check className="w-4 h-4 stroke-[3]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark text-lg">Premium Products</h4>
                                        <p className="text-text/60">Only organic, hypoallergenic oils and lotions that are good for your skin.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary mt-1">
                                        <Check className="w-4 h-4 stroke-[3]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark text-lg">Continuous Training</h4>
                                        <p className="text-text/60">Our therapists undergo monthly advanced training to stay at the top of their field.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-secondary/20">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <Coffee className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-dark">Complimentary Perks</h3>
                                    <p className="text-text/60">Included with every visit</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-4 bg-background rounded-xl">
                                    <span className="font-medium text-dark">Espresso & Herbal Tea</span>
                                    <CheckCircle className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex justify-between items-center p-4 bg-background rounded-xl">
                                    <span className="font-medium text-dark">Hot Towel Service</span>
                                    <CheckCircle className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex justify-between items-center p-4 bg-background rounded-xl">
                                    <span className="font-medium text-dark">Aromatherapy Choice</span>
                                    <CheckCircle className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex justify-between items-center p-4 bg-background rounded-xl">
                                    <span className="font-medium text-dark">Post-Session Shower</span>
                                    <CheckCircle className="w-5 h-5 text-primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Helper component for the perks list
const CheckCircle = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
);

export default About;
