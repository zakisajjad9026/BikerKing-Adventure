"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { bikesData } from '../data/bikes';

export default function BikeFleet({ onSelectBike, onOpenAllBikes }) {
  return (
    <section className="container-custom" id="bikes" style={{ padding: '60px 20px 40px 20px' }}>
      
      {/* Section Header */}
      <div className="section-badge-header">
        <h2 className="title-divider">
          BIKE RENTAL – RIDE YOUR DREAM
        </h2>
      </div>

      {/* 8 Bikes Grid */}
      <div className="bikes-grid">
        {bikesData.map((bike) => (
          <div
            key={bike.id}
            className="bike-card"
            onClick={() => onSelectBike && onSelectBike(bike)}
          >
            {/* Bike Image */}
            <div className="bike-card-img-wrap">
              <Image
                src={bike.image}
                alt={bike.name}
                fill
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 12vw"
              />
            </div>

            {/* Bike Details */}
            <div>
              <h3 className="bike-card-title">{bike.name}</h3>
              <p className="bike-card-specs">{bike.specs}</p>
              <p className="bike-card-price">{bike.priceDisplay}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Bikes CTA */}
      <div style={{ textAlign: 'center', marginTop: '32px' }}>
        <button
          onClick={() => onOpenAllBikes ? onOpenAllBikes() : onSelectBike(bikesData[0])}
          className="btn-dark-pill"
        >
          VIEW ALL BIKES
        </button>
      </div>

    </section>
  );
}
