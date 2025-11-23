import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Shield } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary/20 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <Link to="/" className="flex items-center gap-2 text-2xl font-serif font-bold text-primary mb-6">
                            <Shield className="w-8 h-8" />
                            <span>MANTRA</span>
                        </Link>
                        <p className="text-text/80 leading-relaxed">
                            The premier destination for men's wellness. Expert therapists, private atmosphere, and treatments designed for the male physique.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-serif font-bold text-dark mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link to="/about" className="text-text/80 hover:text-primary transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-text/80 hover:text-primary transition-colors">Services</Link>
                            </li>
                            <li>
                                <Link to="/therapists" className="text-text/80 hover:text-primary transition-colors">Our Team</Link>
                            </li>
                            <li>
                                <Link to="/booking" className="text-text/80 hover:text-primary transition-colors">Book Now</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-serif font-bold text-dark mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-text/80">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                                <span>123 Wellness Avenue,<br />Serenity City, SC 12345</span>
                            </li>
                            <li className="flex items-center gap-3 text-text/80">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>(555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-text/80">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>hello@mantraspa.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="text-lg font-serif font-bold text-dark mb-6">Opening Hours</h3>
                        <ul className="space-y-2 text-text/80">
                            <li className="flex justify-between">
                                <span>Mon - Fri</span>
                                <span>10:00 AM - 9:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Saturday</span>
                                <span>10:00 AM - 8:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span>11:00 AM - 6:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-secondary/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text/60 text-sm">
                        © {new Date().getFullYear()} Mantra Men's Spa. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-text/60 hover:text-primary transition-colors">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-text/60 hover:text-primary transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-text/60 hover:text-primary transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
