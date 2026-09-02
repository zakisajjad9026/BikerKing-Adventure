"use client";

import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Navbar({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('HOME');

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'DESTINATIONS', href: '#destinations' },
    { name: 'BIKE RENTAL', href: '#bikes' },
    { name: 'TAXI SERVICE', href: '#taxi-services' },
    { name: 'PACKAGES', href: '#packages' },
    { name: 'HOTELS', href: '#hotels' },
    { name: 'ABOUT US', href: '#about-us' },
    { name: 'CONTACT US', href: '#contact' },
  ];

  const handleNavClick = (name, href) => {
    setActiveNav(name);
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container-custom" style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo with Compass Emblem */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <BrandLogo size={56} showText={true} />
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '22px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${activeNav === link.name ? 'active' : ''}`}
              onClick={() => handleNavClick(link.name, link.href)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => onOpenBooking && onOpenBooking()}
            className="btn-primary-orange"
            style={{ padding: '10px 22px', fontSize: '0.8125rem' }}
          >
            BOOK NOW
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle navigation menu"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: 'var(--slate-800)',
              cursor: 'pointer',
              padding: '6px'
            }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: 'var(--white)',
          borderBottom: '1px solid var(--slate-200)',
          padding: '16px 20px 24px 20px',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.name, link.href)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: activeNav === link.name ? 'var(--primary-orange)' : 'var(--slate-700)',
                  textDecoration: 'none',
                  padding: '6px 0',
                  borderBottom: '1px solid var(--slate-100)'
                }}
              >
                {link.name}
              </a>
            ))}
            <div style={{ paddingTop: '8px' }}>
              <a 
                href="tel:9797948265"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--slate-800)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  marginBottom: '12px'
                }}
              >
                <Phone size={16} style={{ color: 'var(--primary-orange)' }} />
                <span>Call: 9797948265</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenBooking) onOpenBooking();
                }}
                className="btn-primary-orange"
                style={{ width: '100%' }}
              >
                BOOK YOUR RIDE
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 1023px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
