import React from 'react';
import { Check } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';

const Pricing = () => {
    const packages = [
        {
            name: 'The Tune-Up',
            price: 150,
            description: 'Quick recovery for the active man',
            features: [
                '60 min Sports Massage',
                'Muscle Balm Application',
                'Stretching Session',
                'Post-Session Hydration'
            ]
        },
        {
            name: 'Executive Reset',
            price: 220,
            description: 'De-stress and recharge',
            features: [
                '90 min Deep Tissue Massage',
                'Scalp & Neck Focus',
                'Hot Towel Treatment',
                'Private Lounge Access',
                'Complimentary Drink'
            ],
            popular: true
        },
        {
            name: 'Ultimate Recovery',
            price: 350,
            description: 'Complete body overhaul',
            features: [
                '120 min Custom Therapy',
                'Full Body Scrub',
                'Facial Cleanse',
                'Private Suite Access',
                'Premium Refreshments'
            ]
        }
    ];

    return (
        <div className="bg-background">
            <PageHeader
                title="Pricing & Memberships"
                subtitle="Transparent pricing for premium male grooming and wellness."
                image="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80"
            />

            <section className="py-20 px-6 container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl p-8 border ${pkg.popular ? 'border-primary ring-2 ring-primary/20 shadow-xl relative' : 'border-secondary/20 shadow-sm'} flex flex-col`}
                        >
                            {pkg.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                                    Best Value
                                </div>
                            )}

                            <h3 className="text-2xl font-serif font-bold text-dark mb-2">{pkg.name}</h3>
                            <p className="text-text/60 mb-6">{pkg.description}</p>

                            <div className="mb-8">
                                <span className="text-4xl font-bold text-primary">${pkg.price}</span>
                                <span className="text-text/60">/session</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-text/80">
                                        <Check className="w-5 h-5 text-primary shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to="/booking"
                                className={`w-full py-3 rounded-full text-center font-medium transition-colors ${pkg.popular
                                        ? 'bg-primary text-white hover:bg-primary/90'
                                        : 'bg-secondary/20 text-dark hover:bg-secondary/30'
                                    }`}
                            >
                                Book Now
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Membership CTA */}
            <section className="py-20 bg-secondary/10">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-serif font-bold text-dark mb-4">Mantra Membership</h2>
                    <p className="text-text/80 max-w-2xl mx-auto mb-8">
                        Commit to your health. Join our membership program for monthly sessions, priority booking, and exclusive perks.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-dark text-white px-8 py-3 rounded-full hover:bg-dark/90 transition-colors"
                    >
                        Inquire About Membership
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
