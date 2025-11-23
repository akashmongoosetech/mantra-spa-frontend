import React from 'react';
import { Therapist } from '../data/therapists';

interface TherapistCardProps {
    therapist: Therapist;
}

const TherapistCard: React.FC<TherapistCardProps> = ({ therapist }) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-secondary/20 group">
            <div className="relative h-80 overflow-hidden">
                <img
                    src={therapist.image}
                    alt={therapist.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm font-medium">
                        {therapist.specialties.join(' • ')}
                    </p>
                </div>
            </div>

            <div className="p-6 text-center">
                <h3 className="text-xl font-serif font-bold text-dark mb-1">
                    {therapist.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                    {therapist.role}
                </p>
                <p className="text-text/60 text-sm">
                    {therapist.experience} Experience
                </p>
            </div>
        </div>
    );
};

export default TherapistCard;
