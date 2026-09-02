"use client";

import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container-custom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
        {/* Left Side: Contact Info */}
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <a href="tel:9797948265" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Phone size={13} style={{ color: 'var(--primary-orange)' }} />
            <span>9797948265</span>
          </a>
          <a href="mailto:bikerkingadventure98@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Mail size={13} style={{ color: 'var(--primary-orange)' }} />
            <span>bikerkingadventure98@gmail.com</span>
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <MapPin size={13} style={{ color: 'var(--primary-orange)' }} />
            <span>Malpax complex, Leh, Ladakh 194101</span>
          </div>
        </div>

        {/* Right Side: Social Icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--slate-400)' }}>Follow Us :</span>
          <a 
            href="https://www.instagram.com/ridewithbk?igsi=cGFxMWUxbDh3dGRx&utm_source=qr" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Instagram size={14} />
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Facebook"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Facebook size={14} />
          </a>
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="YouTube"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Youtube size={14} />
          </a>
          <a 
            href="https://wa.me/919797948265" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="WhatsApp"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <MessageCircle size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
