import React from 'react';
import PageHeader from '../components/PageHeader';
import TherapistCard from '../components/TherapistCard';
import { therapists } from '../data/therapists';

const Therapists = () => {
    return (
        <div className="bg-background">
            <PageHeader
                title="Meet Our Team"
                subtitle="Experienced professionals dedicated to your health and relaxation."
                image="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80"
            />

            <section className="py-20 px-6 container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {therapists.map(therapist => (
                        <TherapistCard key={therapist.id} therapist={therapist} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Therapists;
