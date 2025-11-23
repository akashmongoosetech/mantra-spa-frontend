import React from 'react';
import PageHeader from '../components/PageHeader';
import GalleryGrid from '../components/GalleryGrid';

const Gallery = () => {
    return (
        <div className="bg-background">
            <PageHeader
                title="The Mantra Experience"
                subtitle="A visual tour of our premium facilities."
                image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
            />

            <section className="py-20 px-6 container mx-auto">
                <GalleryGrid />
            </section>
        </div>
    );
};

export default Gallery;
