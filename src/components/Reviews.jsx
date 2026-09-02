"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { reviewsData } from '../data/reviews';

export default function Reviews() {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : reviewsData.length - 3));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < reviewsData.length - 3 ? prev + 1 : 0));
  };

  // Showing up to 3 cards
  const visibleReviews = reviewsData.slice(startIndex, startIndex + 3);

  return (
    <div className="reviews-box">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <h2 className="reviews-header-title" style={{ margin: 0 }}>
          WHAT RIDERS SAY
        </h2>
        
        {/* Navigation Arrows */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <button
            onClick={handlePrev}
            aria-label="Previous review"
            style={{
              width: '28px',
              height: '28px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--slate-300)',
              background: 'var(--white)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--slate-700)'
            }}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next review"
            style={{
              width: '28px',
              height: '28px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--slate-300)',
              background: 'var(--white)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--slate-700)'
            }}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="reviews-slider-layout">
        
        {/* Google Rating Summary */}
        <div className="google-rating-card">
          <div className="google-rating-score">
            <span>4.9/5</span>
          </div>
          <div className="google-stars-row">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="#F59E0B" stroke="#F59E0B" />
            ))}
          </div>
          <p className="google-rating-sub">Based on 250+ Google Reviews</p>
          <div style={{ marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#4285F4' }}>G</span>
            <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#EA4335' }}>o</span>
            <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#FBBC05' }}>o</span>
            <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#4285F4' }}>g</span>
            <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#34A853' }}>l</span>
            <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#EA4335' }}>e</span>
          </div>
        </div>

        {/* Testimonials List */}
        <div className="testimonial-cards-row">
          {visibleReviews.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span className="testimonial-quote-icon">“</span>
                  <div style={{ display: 'flex', gap: '2px', color: '#F59E0B' }}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={11} fill="#F59E0B" stroke="#F59E0B" />
                    ))}
                  </div>
                </div>
                <p className="testimonial-text">"{item.review}"</p>
              </div>

              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ position: 'relative' }}>
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <h4 className="testimonial-author-name">{item.name}</h4>
                  <p className="testimonial-author-city">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
