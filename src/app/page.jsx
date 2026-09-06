"use client";

import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import QuickServices from '../components/QuickServices';
import BikeFleet from '../components/BikeFleet';
import TourPackages from '../components/TourPackages';
import WhyChooseUs from '../components/WhyChooseUs';
import Reviews from '../components/Reviews';
import GetInTouch from '../components/GetInTouch';
import CtaBanner from '../components/CtaBanner';
import ContactInfoCard from '../components/ContactInfoCard';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';
import PackageModal from '../components/PackageModal';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBookingItem, setSelectedBookingItem] = useState(null);
  const [bookingType, setBookingType] = useState('bike');

  const [packageModalOpen, setPackageModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleOpenBooking = (item = null, type = 'bike') => {
    setSelectedBookingItem(item);
    setBookingType(type);
    setBookingModalOpen(true);
  };

  const handleOpenPackageModal = (pkg) => {
    setSelectedPackage(pkg);
    setPackageModalOpen(true);
  };

  const handleBookFromPackage = (pkg) => {
    setSelectedBookingItem(pkg);
    setBookingType('package');
    setBookingModalOpen(true);
  };

  const handleScrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* 1. Top Contact & Social Bar */}
      <TopBar />

      {/* 2. Main Sticky Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking(null, 'bike')} />

      {/* 3. Hero Section */}
      <Hero
        onOpenBooking={() => handleOpenBooking(null, 'bike')}
        onScrollToContact={handleScrollToContact}
      />

      {/* 4. Floating Quick Services Bar */}
      <QuickServices
        onSelectService={(service) => handleOpenBooking(service, 'service')}
      />

      {/* 5. Bike Rental Fleet Showcase */}
      <BikeFleet
        onSelectBike={(bike) => handleOpenBooking(bike, 'bike')}
        onOpenAllBikes={() => handleOpenBooking(null, 'bike')}
      />

      {/* 6. Popular Tour Packages Showcase */}
      <TourPackages
        onSelectPackage={handleOpenPackageModal}
        onOpenAllPackages={() => handleOpenBooking(null, 'package')}
      />

      {/* 7. Lower Multi-Section Experience Grid */}
      <section className="container-custom" style={{ paddingTop: '30px', paddingBottom: '60px' }}>
        
        {/* Row 1: Why Choose Us (Left) & Reviews (Right) */}
        <div className="lower-sections-container">
          <WhyChooseUs />
          <Reviews />
        </div>

        {/* Row 2: Get In Touch (Left) & Ready For Adventure Banner + Contact Info (Right) */}
        <div className="bottom-interactive-grid">
          
          {/* Left: Contact Form */}
          <GetInTouch />

          {/* Right: Adventure CTA Banner + Contact Details Card */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              <CtaBanner
                onOpenBooking={() => handleOpenBooking(null, 'bike')}
                onScrollToContact={handleScrollToContact}
              />
              <ContactInfoCard />
            </div>
          </div>

        </div>

      </section>

      {/* 8. Footer */}
      <Footer onOpenBooking={() => handleOpenBooking(null, 'bike')} />

      {/* 9. Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* 10. Interactive Dynamic Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialItem={selectedBookingItem}
        initialType={bookingType}
      />

      {/* 11. Interactive Tour Package Details Modal */}
      <PackageModal
        pkg={selectedPackage}
        isOpen={packageModalOpen}
        onClose={() => setPackageModalOpen(false)}
        onBookPackage={handleBookFromPackage}
      />

    </main>
  );
}
