import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { Service } from '../data/services';

interface ServiceCardProps {
    service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    const Icon = service.icon;

    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-secondary/20">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-primary">
                    ${service.price}
                </div>
            </div>

            <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-primary">
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium uppercase tracking-wide">Massage</span>
                </div>

                <h3 className="text-xl font-serif font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                </h3>

                <p className="text-text/80 text-sm mb-4 line-clamp-2">
                    {service.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-secondary/20">
                    <div className="flex items-center gap-1 text-text/60 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{service.duration} mins</span>
                    </div>

                    <Link
                        to={`/services/${service.id}`}
                        className="flex items-center gap-1 text-primary font-medium text-sm hover:gap-2 transition-all"
                    >
                        Details <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
