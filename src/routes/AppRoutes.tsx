import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import ServiceDetail from '../pages/ServiceDetail';
import Pricing from '../pages/Pricing';
import Gallery from '../pages/Gallery';
import Therapists from '../pages/Therapists';
import Testimonials from '../pages/Testimonials';
import Contact from '../pages/Contact';
import Booking from '../pages/Booking';
import ThankYou from '../pages/ThankYou';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/therapists" element={<Therapists />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
    );
};

export default AppRoutes;
