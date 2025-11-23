import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const ThankYou = () => {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-6">
            <div className="text-center max-w-lg">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                    <CheckCircle className="w-10 h-10" />
                </div>

                <h1 className="text-4xl font-serif font-bold text-dark mb-4">Booking Confirmed!</h1>
                <p className="text-text/80 text-lg mb-8">
                    Thank you for choosing Mantra Men's Spa. We have received your booking request and sent a confirmation email to you.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
                    >
                        Return Home
                    </Link>
                    <Link
                        to="/services"
                        className="bg-white border border-secondary/30 text-dark px-8 py-3 rounded-full hover:bg-secondary/10 transition-colors"
                    >
                        Browse Services
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;
