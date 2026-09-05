"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Bike, Compass, Headphones } from 'lucide-react';

export default function Hero({ onOpenBooking, onScrollToContact }) {
  const badges = [
    { label: "Best Price Guarantee", icon: ShieldCheck },
    { label: "Well Maintained Bikes", icon: Bike },
    { label: "Expert Guides", icon: Compass },
    { label: "24/7 Roadside Assistance", icon: Headphones },
  ];

  return (
    <section className="hero-section">
      {/* Background Image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        <Image
          src="/images/hero-pangong.webp"
          alt="Biker King Leh Ladakh Pangong Lake"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
        />
      </div>

      {/* Dark Gradient Overlay */}
      <div className="hero-overlay" />

      {/* Hero Content */}
      <div className="container-custom" style={{ width: '100%' }}>
        <div className="hero-content">
          
          <h1 className="hero-title-main">
            WHERE EVERY TURN
            <span className="hero-title-orange">IS AN ADVENTURE</span>
          </h1>

          <p className="hero-subtitle">
            Explore Leh Ladakh with premium bikes, expert guides and unforgettable memories.
          </p>

          {/* 4 Feature Badges */}
          <div className="hero-badges-grid">
            {badges.map((badge, idx) => {
              const IconComp = badge.icon;
              return (
                <div key={idx} className="hero-badge-item">
                  <div className="hero-badge-icon">
                    <IconComp size={15} />
                  </div>
                  <span>{badge.label}</span>
                </div>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
            <button
              onClick={() => onOpenBooking && onOpenBooking()}
              className="btn-primary-orange"
              style={{ padding: '12px 28px', fontSize: '0.85rem' }}
            >
              BOOK YOUR JOURNEY
            </button>
            <Link
              href="/contact"
              className="btn-ghost-white"
              style={{ padding: '12px 28px', fontSize: '0.85rem' }}
            >
              CONTACT US
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
