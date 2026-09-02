"use client";

import React from 'react';
import Image from 'next/image';
import { Bike, Car, Compass, Building2 } from 'lucide-react';
import { quickServicesData } from '../data/reviews';

export default function QuickServices({ onSelectService }) {
  const getIcon = (item) => {
    if (item.type === 'image') {
      return (
        <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
          <Image
            src={item.image}
            alt={item.title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      );
    }

    switch (item.iconType) {
      case 'bike':
        return <Bike size={22} style={{ color: 'var(--slate-800)' }} />;
      case 'car':
        return <Car size={22} style={{ color: 'var(--slate-800)' }} />;
      case 'traveler':
        return <Compass size={22} style={{ color: 'var(--slate-800)' }} />;
      case 'hotel':
        return <Building2 size={22} style={{ color: 'var(--slate-800)' }} />;
      default:
        return <Compass size={22} style={{ color: 'var(--slate-800)' }} />;
    }
  };

  return (
    <div className="container-custom" id="destinations">
      <div className="quick-services-bar">
        <div className="quick-services-grid">
          {quickServicesData.map((item) => (
            <div
              key={item.id}
              className="quick-service-item"
              onClick={() => onSelectService && onSelectService(item)}
            >
              <div className="quick-service-icon-box">
                {getIcon(item)}
              </div>
              <div>
                <h3 className="quick-service-title">{item.title}</h3>
                <p className="quick-service-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
