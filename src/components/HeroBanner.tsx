import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroBanner = () => {
    return (
        <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80")'
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="block text-white/90 text-lg md:text-xl font-medium mb-4 tracking-wider uppercase"
                >
                    Premium Men's Wellness
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight"
                >
                    Refine. Recover. Relax.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
                >
                    The ultimate sanctuary for the modern man. Experience specialized treatments designed for your recovery and relaxation.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        to="/booking"
                        className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-medium transition-all transform hover:scale-105"
                    >
                        Book Your Session
                    </Link>
                    <Link
                        to="/services"
                        className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full text-lg font-medium transition-all"
                    >
                        Our Services
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroBanner;
