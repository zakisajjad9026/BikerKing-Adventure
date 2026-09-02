"use client";

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919797948265?text=Hi%20Biker%20King%20Adventure,%20I%20am%20planning%20a%20trip%20to%20Leh%20Ladakh%20and%20want%20to%20inquire%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp whatsapp-pulse"
      aria-label="Chat with us on WhatsApp"
      title="Chat with Biker King on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
