# 🏍️ Biker King Adventure

<div align="center">
  <h3>Your Ultimate Leh Ladakh Motorbike Rental & Adventure Tour Partner</h3>
  <p><strong>Where Every Turn Is An Adventure</strong></p>
  
  [![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
</div>

---

## 🌄 About Biker King Adventure

**Biker King Adventure** is Leh Ladakh's premier motorcycle rental, taxi service, and tour operator — born and based in the heart of Leh. We offer:

- 🏍️ **Bike Rentals** — Premium Royal Enfield fleet (Himalayan 450, 411, Scram 411, Meteor 350, Hunter 350, Classic 350, Scuty)
- 🚗 **Taxi Service** — Comfortable & safe 4x4 Innova/Fortuner service across Leh Ladakh
- 🏔️ **Tour Packages** — Customized packages for solo, couple & group adventures
- 🏨 **Hotel Availability** — Best hotels & homestays across Ladakh
- 🐆 **Snow Leopard in Winter** — Witness the majestic snow leopard
- 🧊 **Frozen Pangong Lake** — Experience the magical frozen lake in winter

---

## ✨ Features

- **Pixel-perfect reference design** — Exact match to the branded design system
- **Fully Mobile Responsive** — Adapts beautifully across all screen sizes
- **Interactive Booking Modal** — Live rental price estimator with WhatsApp booking
- **Tour Package Details Modal** — Day-by-day itinerary with instant inquiry flow
- **6 Quick Service Highlights** — Floating service bar under the hero section
- **Google Reviews Section** — 4.9/5 rating card with testimonial carousel
- **Get In Touch Form** — Contact form with WhatsApp message dispatch
- **5-Column Footer** — Newsletter subscription, links, services & social
- **Floating WhatsApp Button** — Instant chat access across all pages
- **SEO Optimized** — Meta tags, Open Graph, semantic HTML

---

## 🛠️ Tech Stack

| Technology | Purpose |
|:---|:---|
| **Next.js 14** | React framework with App Router, SSR & Static Optimization |
| **React 18** | Component-based UI with hooks and state management |
| **Vanilla CSS** | Custom design system with CSS variables, Flexbox, Grid |
| **Lucide React** | Clean, consistent icon set |
| **Google Fonts** | Plus Jakarta Sans + Outfit for premium typography |

---

## 📁 Project Structure

```
BikerKing/
├── public/
│   └── images/
│       ├── hero-pangong.webp       # Hero section background
│       ├── cta-sunset.webp         # Sunset adventure CTA banner
│       ├── cta-camp.webp           # Camp scene image
│       ├── logo.svg                # Brand logo vector
│       ├── bikes/                  # Motorcycle product images
│       │   ├── himalayan-411.webp
│       │   ├── himalayan-450.jpg
│       │   ├── himalayan-440.webp
│       │   ├── scram-411.webp
│       │   ├── meteor-350.webp
│       │   ├── hunter-350.webp
│       │   ├── scooty.webp
│       │   └── classic-350.jpg
│       ├── tours/                  # Tour package images
│       │   ├── tour-road-trip.webp
│       │   ├── tour-discovery.webp
│       │   ├── tour-expedition.webp
│       │   └── tour-pangong.webp
│       ├── services/               # Service highlight images
│       │   ├── snow-leopard.jpg
│       │   └── frozen-lake.jpg
│       └── avatars/                # Customer review avatars
│           ├── rohit.jpg
│           └── ankit.jpg
├── src/
│   ├── app/
│   │   ├── layout.jsx              # Root layout + SEO metadata
│   │   ├── page.jsx                # Home page (all sections assembled)
│   │   └── globals.css             # Global CSS design system
│   ├── components/
│   │   ├── TopBar.jsx              # Contact & social bar
│   │   ├── Navbar.jsx              # Sticky navigation header
│   │   ├── BrandLogo.jsx           # Official brand logo SVG component
│   │   ├── Hero.jsx                # Hero section with badges & CTAs
│   │   ├── QuickServices.jsx       # 6 service highlights floating bar
│   │   ├── BikeFleet.jsx           # 8-bike rental showcase
│   │   ├── TourPackages.jsx        # 4 featured tour packages
│   │   ├── WhyChooseUs.jsx         # Value proposition section
│   │   ├── Reviews.jsx             # Google rating + testimonials
│   │   ├── GetInTouch.jsx          # Contact form
│   │   ├── CtaBanner.jsx           # Sunset adventure CTA banner
│   │   ├── ContactInfoCard.jsx     # Office contact details
│   │   ├── BookingModal.jsx        # Dynamic rental/package booking modal
│   │   ├── PackageModal.jsx        # Tour itinerary & details modal
│   │   ├── Footer.jsx              # 5-column footer
│   │   └── FloatingWhatsApp.jsx    # Floating WhatsApp action button
│   └── data/
│       ├── bikes.js                # Bike fleet data
│       ├── packages.js             # Tour packages data
│       └── reviews.js              # Reviews, services & why choose data
├── next.config.mjs
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or later
- **npm** v9 or later

### Installation

```bash
# Clone the repository
git clone https://github.com/zakisajjad9026/BikerKing-Adventure.git
cd BikerKing-Adventure

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## 🏍️ Bike Fleet

| Model | Engine | Type | Price/Day |
|:---|:---|:---|:---|
| Himalayan 411 | 411cc | Adventure | ₹2,000 |
| Himalayan 450 | 452cc Liquid-Cooled | Adventure | ₹2,500 |
| Himalayan 440 | 440cc | Adventure | ₹2,300 |
| SCRAM 411 | 411cc | Scrambler | ₹2,100 |
| Metore 350 | 349cc | Cruiser | ₹1,800 |
| Hunter 350 | 349cc | Roadster | ₹1,700 |
| Scuty | 125cc Auto | Scooter | ₹800 |
| Classic 350 | 349cc | Classic | ₹1,600 |

---

## 🏔️ Popular Tour Packages

| Package | Duration | Route | Per Person |
|:---|:---|:---|:---|
| Leh Ladakh Road Trip | 7 Days | Leh – Nubra – Pangong – Tso Moriri | ₹24,999 |
| Ladakh Discovery | 6 Days | Leh – Sham Valley – Nubra – Pangong | ₹21,999 |
| Ladakh Bike Expedition | 8 Days | Leh – Kargil – Zanskar – Pangong | ₹29,999 |
| Pangong Lake Special | 5 Days | Leh – Changla – Pangong | ₹16,999 |

---

## 📞 Contact

| | |
|:---|:---|
| **Phone / WhatsApp** | [+91 9797948265](tel:+919797948265) |
| **Email** | [bikerkingadventure98@gmail.com](mailto:bikerkingadventure98@gmail.com) |
| **Instagram** | [@ridewithbk](https://www.instagram.com/ridewithbk) |
| **Office** | Malpax Complex, Leh, Ladakh 194101 |
| **Working Hours** | Mon - Sun : 8:00 AM - 8:00 PM |

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">
  Made with ❤️ for Riders by <strong>Biker King Adventure</strong> · Leh Ladakh
</div>
