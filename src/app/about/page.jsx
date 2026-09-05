"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Award, 
  Users, 
  Compass, 
  Bike, 
  Mountain, 
  CheckCircle2, 
  Star, 
  Phone, 
  ArrowRight, 
  Wrench, 
  HeartHandshake 
} from 'lucide-react';
import TopBar from '../../components/TopBar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BookingModal from '../../components/BookingModal';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import Reviews from '../../components/Reviews';

export default function AboutPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBookingItem, setSelectedBookingItem] = useState(null);

  const handleOpenBooking = (item = null) => {
    setSelectedBookingItem(item);
    setBookingModalOpen(true);
  };

  const corePillars = [
    {
      icon: Compass,
      title: "100% Local Leh Expertise",
      desc: "Born, raised, and based right in Leh Ladakh. Our team knows every high pass, weather shift, and hidden mountain trail."
    },
    {
      icon: Wrench,
      title: "Peak Mechanical Performance",
      desc: "Every Royal Enfield Himalayan and tourer undergoes rigorous multi-point checks by senior mechanics before handing over the keys."
    },
    {
      icon: ShieldCheck,
      title: "Safety & High-Altitude Support",
      desc: "Equipped with backup support vehicles, medical oxygen cylinders, emergency tow assistance, and complete toolkit spares."
    },
    {
      icon: HeartHandshake,
      title: "Transparent & Rider-First",
      desc: "No hidden charges, fair security deposits, and friendly local assistance for Inner Line Permits (ILP) and route planning."
    }
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f8fafc' }}>
      
      {/* 1. Top Bar */}
      <TopBar />

      {/* 2. Main Sticky Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking(null)} />

      {/* 3. Hero Section */}
      <section className="inner-hero">
        <div className="container-custom">
          <div className="inner-hero-badge">
            <Mountain size={14} />
            <span>Our Himalayan Journey</span>
          </div>
          <h1 className="inner-hero-title">ABOUT BIKER KING ADVENTURE</h1>
          <p className="inner-hero-desc">
            Where Every Turn Is An Adventure. Premier Royal Enfield motorbike rentals, guided Himalayan expeditions, 
            and trusted travel logistics in the heart of Leh Ladakh.
          </p>
          <div className="inner-breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span className="active">About Us</span>
          </div>
        </div>
      </section>

      {/* 4. Stats Banner Grid */}
      <div className="container-custom">
        <div className="stats-banner-grid">
          <div className="stat-card">
            <div className="stat-number">12+</div>
            <div className="stat-label">Years of Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">50+</div>
            <div className="stat-label">Royal Enfield Fleet</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">5,000+</div>
            <div className="stat-label">Happy Explorers</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">4.9 ★</div>
            <div className="stat-label">Customer Satisfaction</div>
          </div>
        </div>
      </div>

      {/* 5. Our Story Section */}
      <section className="container-custom" style={{ padding: '20px 20px 60px 20px' }}>
        <div className="about-story-grid">
          
          {/* Left Narrative */}
          <div className="about-text-content">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary-orange)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '8px', textTransform: 'uppercase' }}>
              <Award size={16} />
              <span>Born in the Himalayas</span>
            </div>
            <h3>Pioneering Mountain Biking Journeys Across Leh Ladakh</h3>
            <p>
              Founded by passionate Ladakhi riders, <strong>Biker King Adventure</strong> was born out of a simple, fierce vision: to empower travelers from around the globe to explore the dramatic heights of Ladakh with complete confidence and safety.
            </p>
            <p>
              Riding the rugged passes of Khardung La (17,982 ft), Chang La (17,688 ft), and Umling La (19,024 ft) is not an ordinary commute. It tests both machine and human grit. We tune our bikes specifically for thin high-altitude air, provide certified high-grade protective gear, and back every rider with genuine 24/7 mountain support.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginTop: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--slate-800)' }}>
                <CheckCircle2 size={18} style={{ color: '#10B981' }} />
                <span>Authorized Leh Rental Operator</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--slate-800)' }}>
                <CheckCircle2 size={18} style={{ color: '#10B981' }} />
                <span>Oxygen & Medical Kit Ready</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--slate-800)' }}>
                <CheckCircle2 size={18} style={{ color: '#10B981' }} />
                <span>Inner Line Permit Assistance</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--slate-800)' }}>
                <CheckCircle2 size={18} style={{ color: '#10B981' }} />
                <span>Mechanic Follow-up Vans</span>
              </div>
            </div>

            <div style={{ marginTop: '32px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button 
                onClick={() => handleOpenBooking(null)}
                className="btn-primary-orange"
                style={{ padding: '12px 28px' }}
              >
                BOOK YOUR MOTORBIKE
              </button>
              <Link
                href="/contact"
                className="btn-secondary-white"
                style={{ padding: '12px 24px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <span>CONTACT LEH DESK</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Visual Card */}
          <div style={{ position: 'relative', width: '100%', height: '420px', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
            <Image
              src="/images/hero-pangong.webp"
              alt="Biker King Adventure Leh Ladakh Team and Fleet"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, transparent 50%)'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '24px',
              left: '24px',
              right: '24px',
              color: 'var(--white)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <div style={{ display: 'flex', color: '#FBBF24' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#FBBF24" />
                  ))}
                </div>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#e2e8f0' }}>Trusted by 5,000+ Himalayan Riders</span>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#cbd5e1', lineHeight: 1.4, margin: 0 }}>
                &ldquo;Biker King Adventure provided us brand-new Himalayan 450s with carrier luggage frames and backup support. The ultimate mountain experience!&rdquo;
              </p>
            </div>
          </div>

        </div>

        {/* 6. Why Choose Our Team Pillars */}
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <div className="section-badge-header">
            <h2 className="title-divider">WHY CHOOSE BIKER KING ADVENTURE</h2>
          </div>
          <p style={{ color: 'var(--slate-600)', maxWidth: '640px', margin: '0 auto 28px auto', fontSize: '0.9rem' }}>
            We combine high-altitude technical mastery with genuine Ladakhi hospitality to ensure your road trip is seamless, safe, and unforgettable.
          </p>

          <div className="features-pillar-grid">
            {corePillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div key={idx} className="pillar-card">
                  <div className="pillar-icon-box">
                    <IconComp size={24} />
                  </div>
                  <h4>{pillar.title}</h4>
                  <p>{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </section>

      {/* 7. Reviews Section */}
      <section className="container-custom" style={{ padding: '0 20px 60px 20px' }}>
        <Reviews />
      </section>

      {/* 8. Call to Action Banner */}
      <section style={{ backgroundColor: '#0f172a', color: 'var(--white)', padding: '60px 20px', borderTop: '2px solid var(--primary-orange)' }}>
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, marginBottom: '12px' }}>
            READY TO RIDE THE ROOF OF THE WORLD?
          </h2>
          <p style={{ color: 'var(--slate-300)', maxWidth: '600px', margin: '0 auto 28px auto', fontSize: '0.95rem' }}>
            Reserve your Royal Enfield, customized tour package, or 4x4 taxi with Leh Ladakh&apos;s leading adventure specialists today.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => handleOpenBooking(null)}
              className="btn-primary-orange"
              style={{ padding: '14px 36px', fontSize: '0.9rem' }}
            >
              BOOK YOUR MOTORBIKE NOW
            </button>
            <a
              href="https://wa.me/919797948265"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-white"
              style={{ padding: '14px 28px', fontSize: '0.9rem' }}
            >
              CHAT ON WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <Footer onOpenBooking={() => handleOpenBooking(null)} />

      {/* 10. Floating WhatsApp */}
      <FloatingWhatsApp />

      {/* 11. Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialItem={selectedBookingItem}
        initialType="bike"
      />

    </main>
  );
}
