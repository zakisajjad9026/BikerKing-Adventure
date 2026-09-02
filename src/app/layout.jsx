import './globals.css';

export const metadata = {
  metadataBase: new URL('https://bikerkingadventure.com'),
  title: 'Biker King Adventure | Leh Ladakh Motorbike Rentals, Tours & Expeditions',
  description: 'Conquer the high Himalayan passes with Biker King Adventure. Premier Royal Enfield bike rentals (Himalayan 450, 411, Scram, Meteor), Leh Ladakh 4x4 taxi service, customized tour packages, snow leopard winter tracking, and hotel stays in Leh.',
  keywords: 'Biker King Adventure, Leh Ladakh Bike Rental, Himalayan 450 rental Ladakh, Ladakh motorcycle tours, Leh taxi service, Pangong lake bike trip, Khardung La ride, Leh Ladakh tour packages, Snow leopard winter expedition Ladakh',
  authors: [{ name: 'Biker King Adventure' }],
  openGraph: {
    title: 'Biker King Adventure | Leh Ladakh Bike Rentals & Tours',
    description: 'Where Every Turn Is An Adventure. Explore Leh Ladakh with premium bikes, expert guides and unforgettable memories.',
    url: 'https://bikerkingadventure.com',
    siteName: 'Biker King Adventure',
    images: [
      {
        url: '/images/hero-pangong.webp',
        width: 1200,
        height: 630,
        alt: 'Biker King Adventure Leh Ladakh'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#EA580C',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
