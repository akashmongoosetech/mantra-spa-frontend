import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "What should I wear for my massage?",
        answer: "Most people undress completely for a full-body massage, but you will be draped with a sheet or towel at all times. Only the area being worked on will be exposed. However, you should undress to your level of comfort."
    },
    {
        question: "How early should I arrive?",
        answer: "We recommend arriving 10-15 minutes before your scheduled appointment time. This gives you enough time to fill out any necessary forms and begin relaxing before your session."
    },
    {
        question: "Do you offer couples massages?",
        answer: "Yes, we have a dedicated couples suite where you can enjoy your massages side-by-side. It's a perfect way to relax with a partner, friend, or family member."
    },
    {
        question: "What is your cancellation policy?",
        answer: "We require at least 24 hours notice for cancellations. Cancellations made within 24 hours of the appointment time may be subject to a cancellation fee of 50% of the service price."
    },
    {
        question: "Do you accept insurance?",
        answer: "We do not bill insurance directly. However, we can provide you with a receipt that you may be able to submit to your insurance provider for reimbursement, depending on your plan."
    }
];

const FAQAccordion = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="border border-secondary/20 rounded-xl overflow-hidden bg-white"
                >
                    <button
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-secondary/5 transition-colors"
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    >
                        <span className="font-medium text-dark">{faq.question}</span>
                        {activeIndex === index ? (
                            <ChevronUp className="w-5 h-5 text-primary" />
                        ) : (
                            <ChevronDown className="w-5 h-5 text-text/40" />
                        )}
                    </button>

                    <AnimatePresence>
                        {activeIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="px-6 pb-4 text-text/80 text-sm leading-relaxed">
                                    {faq.answer}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default FAQAccordion;
