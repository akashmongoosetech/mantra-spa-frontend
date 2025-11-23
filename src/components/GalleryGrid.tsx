import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const images = [
    'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1591343395082-e21f174bd081?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80',
];

const GalleryGrid = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="relative h-64 rounded-2xl overflow-hidden cursor-pointer group"
                        onClick={() => setSelectedImage(img)}
                    >
                        <img
                            src={img}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <ZoomIn className="text-white w-8 h-8" />
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={selectedImage}
                            alt="Gallery full view"
                            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default GalleryGrid;
