"use client";

import React from 'react';
import Image from 'next/image';
import { Utensils, Building2, Bike, FileCheck } from 'lucide-react';
import { packagesData } from '../data/packages';

export default function TourPackages({ onSelectPackage, onOpenAllPackages }) {
  const getAmenityIcon = (name) => {
    switch (name) {
      case 'Meals':
        return <Utensils size={15} />;
      case 'Hotel':
        return <Building2 size={15} />;
      case 'Sightseeing':
        return <Bike size={15} />;
      case 'Permit':
        return <FileCheck size={15} />;
      default:
        return <FileCheck size={15} />;
    }
  };

  return (
    <section className="container-custom" id="packages" style={{ paddingTop: '44px', paddingBottom: '52px' }}>
      
      {/* Section Header */}
      <div className="section-badge-header">
        <h2 className="title-divider">
          POPULAR TOUR PACKAGES
        </h2>
      </div>

      {/* 4 Packages Grid */}
      <div className="packages-grid">
        {packagesData.map((pkg) => (
          <div key={pkg.id} className="package-card">
            
            {/* Image & Day Badge */}
            <div className="package-img-box">
              <span className="package-day-badge">{pkg.duration}</span>
              <Image
                src={pkg.image}
                alt={pkg.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>

            {/* Content Body */}
            <div className="package-card-body">
              <div>
                <h3 className="package-card-title">{pkg.title}</h3>
                <p className="package-card-route">{pkg.route}</p>
                <p className="package-card-price">{pkg.priceDisplay}</p>
              </div>

              {/* Amenities Row */}
              <div>
                <div className="package-amenities-row">
                  {pkg.inclusions.map((inc, i) => (
                    <div key={i} className="package-amenity-item">
                      {getAmenityIcon(inc.name)}
                      <span>{inc.name}</span>
                    </div>
                  ))}
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => onSelectPackage && onSelectPackage(pkg)}
                  className="btn-view-details"
                >
                  VIEW DETAILS
                </button>
              </div>

            </div>

          </div>
        ))}
      </div>

      {/* View All Packages CTA */}
      <div style={{ textAlign: 'center', marginTop: '36px' }}>
        <button
          onClick={() => onOpenAllPackages ? onOpenAllPackages() : onSelectPackage(packagesData[0])}
          className="btn-dark-pill"
        >
          VIEW ALL PACKAGES
        </button>
      </div>

    </section>
  );
}
