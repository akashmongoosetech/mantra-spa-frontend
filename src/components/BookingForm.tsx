import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { services } from '../data/services';
import { therapists } from '../data/therapists';

const BookingForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        serviceId: '',
        therapistId: '',
        date: '',
        time: '',
        name: '',
        email: '',
        phone: '',
        notes: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, we would submit data to backend here
        console.log('Booking Data:', formData);
        navigate('/thank-you');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/20">
            <h3 className="text-2xl font-serif font-bold text-dark mb-6">Book Your Session</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Service Selection */}
                <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-medium text-text mb-2">Select Service</label>
                    <select
                        name="serviceId"
                        value={formData.serviceId}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-secondary/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    >
                        <option value="">Choose a service...</option>
                        {services.map(service => (
                            <option key={service.id} value={service.id}>
                                {service.title} ({service.duration} min - ${service.price})
                            </option>
                        ))}
                    </select>
                </div>

                {/* Therapist Selection */}
                <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-medium text-text mb-2">Select Therapist (Optional)</label>
                    <select
                        name="therapistId"
                        value={formData.therapistId}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-secondary/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    >
                        <option value="">Any available therapist</option>
                        {therapists.map(therapist => (
                            <option key={therapist.id} value={therapist.id}>
                                {therapist.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Date & Time */}
                <div>
                    <label className="block text-sm font-medium text-text mb-2">Date</label>
                    <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text/40" />
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-secondary/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-text mb-2">Time</label>
                    <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text/40" />
                        <select
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-secondary/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        >
                            <option value="">Select time...</option>
                            <option value="09:00">09:00 AM</option>
                            <option value="10:00">10:00 AM</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="12:00">12:00 PM</option>
                            <option value="13:00">01:00 PM</option>
                            <option value="14:00">02:00 PM</option>
                            <option value="15:00">03:00 PM</option>
                            <option value="16:00">04:00 PM</option>
                            <option value="17:00">05:00 PM</option>
                            <option value="18:00">06:00 PM</option>
                        </select>
                    </div>
                </div>

                {/* Personal Info */}
                <div>
                    <label className="block text-sm font-medium text-text mb-2">Full Name</label>
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text/40" />
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-secondary/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-text mb-2">Email</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text/40" />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com"
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-secondary/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        />
                    </div>
                </div>

                <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-medium text-text mb-2">Phone Number</label>
                    <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text/40" />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="(555) 123-4567"
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-secondary/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        />
                    </div>
                </div>

                {/* Notes */}
                <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-medium text-text mb-2">Special Requests</label>
                    <div className="relative">
                        <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-text/40" />
                        <textarea
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            rows={3}
                            placeholder="Any specific areas to focus on or avoid?"
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-secondary/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                        />
                    </div>
                </div>
            </div>

            <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-4 rounded-lg transition-colors"
            >
                Confirm Booking
            </button>
        </form>
    );
};

export default BookingForm;
