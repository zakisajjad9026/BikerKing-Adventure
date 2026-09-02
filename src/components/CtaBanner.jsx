"use client";

import React from 'react';
import Image from 'next/image';

export default function CtaBanner({ onOpenBooking, onScrollToContact }) {
  return (
    <div className="cta-sunset-banner">
      {/* Background Image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        <Image
          src="/images/cta-sunset.webp"
          alt="Sunset Camping in Leh Ladakh"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
        />
      </div>

      {/* Dark Overlay */}
      <div className="cta-sunset-overlay" />

      {/* Content */}
      <div className="cta-sunset-content">
        <h3 className="cta-sunset-title">
          READY TO START<br />
          YOUR ADVENTURE?
        </h3>
        <p className="cta-sunset-text">
          Book your journey today and make memories for a lifetime!
        </p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button
            onClick={() => onOpenBooking && onOpenBooking()}
            className="btn-primary-orange"
            style={{ padding: '8px 20px', fontSize: '0.75rem' }}
          >
            BOOK NOW
          </button>
          <a
            href="#contact"
            onClick={(e) => {
              if (onScrollToContact) {
                e.preventDefault();
                onScrollToContact();
              }
            }}
            className="btn-ghost-white"
            style={{ padding: '8px 20px', fontSize: '0.75rem' }}
          >
            CONTACT US
          </a>
        </div>
      </div>
    </div>
  );
}
