import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, ArrowLeft, CheckCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { servicesAPI, Service } from '../services/api';

const ServiceDetail = () => {
    const { id } = useParams();
    const [service, setService] = useState<Service | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchService = async () => {
            try {
                const response = await servicesAPI.getById(id!);
                setService(response.data);
            } catch (err) {
                setError('Service not found');
                console.error('Error fetching service:', err);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchService();
        }
    }, [id]);

    if (loading) {
        return (
            <div className="bg-background min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-text/60">Loading service...</p>
                </div>
            </div>
        );
    }

    if (error || !service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-dark mb-4">Service Not Found</h2>
                    <Link to="/services" className="text-primary hover:underline">Back to Services</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-background">
            <PageHeader
                title={service.title}
                image={service.image}
            />

            <section className="py-20 px-6 container mx-auto">
                <div className="max-w-4xl mx-auto">
                    <Link to="/services" className="inline-flex items-center gap-2 text-text/60 hover:text-primary mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Services
                    </Link>

                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-secondary/20">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-secondary/20 pb-8">
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-dark mb-2">{service.title}</h2>
                                <div className="flex items-center gap-2 text-text/60">
                                    <Clock className="w-5 h-5" />
                                    <span>{service.duration} mins</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-3xl font-bold text-primary">${service.price}</p>
                                <Link
                                    to="/booking"
                                    className="inline-block mt-4 bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
                                >
                                    Book This Service
                                </Link>
                            </div>
                        </div>

                        <div className="prose max-w-none text-text/80">
                            <h3 className="text-xl font-serif font-bold text-dark mb-4">Description</h3>
                            <p className="mb-8 text-lg leading-relaxed">
                                {service.description}
                            </p>

                            <h3 className="text-xl font-serif font-bold text-dark mb-4">Benefits</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                {[
                                    'Relieves muscle tension and pain',
                                    'Reduces stress and anxiety',
                                    'Improves circulation',
                                    'Enhances sleep quality',
                                    'Boosts immune system function',
                                    'Increases flexibility and range of motion'
                                ].map((benefit, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
