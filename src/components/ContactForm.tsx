import React, { useState } from 'react';
import { User, Mail, Phone, MessageSquare } from 'lucide-react';
import { contactsAPI } from '../services/api';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await contactsAPI.create(formData);
            setSuccess(true);
            setFormData({ name: '', email: '', mobile: '', message: '' });
        } catch (err) {
            setError('Failed to send message. Please try again.');
            console.error('Error submitting contact:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/20">
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            {success && <p className="text-green-500 text-center mb-4">Message sent successfully!</p>}
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-text mb-2">Name</label>
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text/40" />
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-secondary/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            placeholder="Your Name"
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
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-secondary/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            placeholder="your@email.com"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-text mb-2">Mobile</label>
                    <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text/40" />
                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-secondary/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            placeholder="Your Mobile Number"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-text mb-2">Message</label>
                    <div className="relative">
                        <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-text/40" />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-secondary/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                            placeholder="How can we help you?"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? 'Sending...' : 'Send Message'}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
