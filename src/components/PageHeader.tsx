import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    image: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, image }) => {
    return (
        <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative z-10 text-center px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4"
                >
                    {title}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </div>
    );
};

export default PageHeader;
