import React from 'react';
import PageHeader from '../components/PageHeader';
import BookingForm from '../components/BookingForm';

const Booking = () => {
    return (
        <div className="bg-background">
            <PageHeader
                title="Book Your Appointment"
                subtitle="Schedule your relaxation session in just a few clicks."
                image="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80"
            />

            <section className="py-20 px-6 container mx-auto">
                <div className="max-w-3xl mx-auto">
                    <BookingForm />
                </div>
            </section>
        </div>
    );
};

export default Booking;
