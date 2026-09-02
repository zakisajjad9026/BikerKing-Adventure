"use client";

import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactInfoCard() {
  const contactDetails = [
    {
      icon: Phone,
      label: "Phone Number",
      value: "9797948265",
      href: "tel:9797948265"
    },
    {
      icon: Mail,
      label: "Email Address",
      value: "bikerkingadventure98@gmail.com",
      href: "mailto:bikerkingadventure98@gmail.com"
    },
    {
      icon: MapPin,
      label: "Office Address",
      value: "Malpax complex ,Leh ,Ladakh 194101",
      href: "https://maps.google.com/?q=Malpax+complex+Leh+Ladakh"
    },
    {
      icon: Clock,
      label: "Working Hours",
      value: "Mon - Sun : 8:00 AM - 8:00 PM",
      href: null
    }
  ];

  return (
    <div style={{
      background: 'var(--white)',
      border: '1px solid var(--slate-200)',
      borderRadius: 'var(--radius-lg)',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div className="contact-info-list">
        {contactDetails.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div key={idx} className="contact-info-item">
              <div className="contact-info-item-icon">
                <IconComp size={18} />
              </div>
              <div>
                <span className="contact-info-label">{item.label}</span>
                {item.href ? (
                  <p className="contact-info-value">
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      style={{ color: 'inherit', textDecoration: 'none' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-orange)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--slate-600)')}
                    >
                      {item.value}
                    </a>
                  </p>
                ) : (
                  <p className="contact-info-value">{item.value}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
