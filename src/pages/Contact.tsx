import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import FAQAccordion from '../components/FAQAccordion';

const Contact = () => {
    return (
        <div className="bg-background">
            <PageHeader
                title="Get in Touch"
                subtitle="We are here to answer any questions you may have."
                image="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80"
            />

            <section className="py-20 px-6 container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info & Form */}
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-dark mb-6">Send us a Message</h2>
                        <p className="text-text/80 mb-8">
                            Whether you have a question about our services, pricing, or availability, our team is ready to help.
                        </p>
                        <ContactForm />
                    </div>

                    {/* Info & Map */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/20">
                            <h3 className="text-xl font-serif font-bold text-dark mb-6">Contact Information</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-dark">Address</p>
                                        <p className="text-text/80">123 Wellness Avenue, Serenity City, SC 12345</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-dark">Phone</p>
                                        <p className="text-text/80">(555) 123-4567</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-dark">Email</p>
                                        <p className="text-text/80">hello@mantraspa.com</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-dark">Hours</p>
                                        <p className="text-text/80">Mon-Fri: 9am - 8pm<br />Sat: 10am - 6pm<br />Sun: 10am - 4pm</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-secondary/10 h-64 rounded-2xl flex items-center justify-center text-text/60">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1623345678901!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: '1rem' }}
                                allowFullScreen={true}
                                loading="lazy"
                                title="Google Maps"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-secondary/10">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-dark mb-4">Frequently Asked Questions</h2>
                        <p className="text-text/80">Find answers to common questions about our services and policies.</p>
                    </div>
                    <FAQAccordion />
                </div>
            </section>
        </div>
    );
};

export default Contact;
