"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { bikesData } from '../data/bikes';

export default function BikeFleet({ onSelectBike, onOpenAllBikes }) {
  return (
    <section className="container-custom" id="bikes" style={{ padding: '48px 20px 36px 20px' }}>

      {/* Section Header */}
      <div className="section-badge-header">
        <h2 className="title-divider">
          BIKE RENTAL – RIDE YOUR DREAM
        </h2>
      </div>

      {/* 8 Bikes Grid - 2 Rows & 4 Columns */}
      <div className="bikes-grid">
        {bikesData.map((bike) => (
          <div
            key={bike.id}
            className="bike-card"
            onClick={() => onSelectBike && onSelectBike(bike)}
          >
            {bike.badge && (
              <span className="bike-card-badge">{bike.badge}</span>
            )}
            {/* Bike Image */}
            <div className="bike-card-img-wrap">
              <Image
                src={bike.image}
                alt={bike.name}
                fill
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            {/* Bike Details */}
            <div className="bike-card-details">
              <h3 className="bike-card-title">{bike.name}</h3>
              <p className="bike-card-specs">{bike.specs}</p>
              <div className="bike-card-footer">
                <p className="bike-card-price">
                  <span className="bike-price-val">₹{bike.price.toLocaleString('en-IN')}</span>
                  <span className="bike-price-unit"> / Day</span>
                </p>
                <span className="bike-card-action">Book &rarr;</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Bikes CTA */}
      <div style={{ textAlign: 'center', marginTop: '28px' }}>
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