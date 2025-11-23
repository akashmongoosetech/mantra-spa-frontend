import React, { useState } from 'react';
import { User, Mail, MessageSquare } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Contact Data:', formData);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/20">
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
                    className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg transition-colors"
                >
                    Send Message
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
