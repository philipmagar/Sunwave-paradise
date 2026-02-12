import { hotelConfig } from '../data/hotelData';

/**
 * Generate structured data for hotel
 */
export const getHotelStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": hotelConfig.name,
  "description": hotelConfig.tagline,
  "url": "https://sunwaveparadise.com",
  "telephone": hotelConfig.phone,
  "email": hotelConfig.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Thamel",
    "addressLocality": "Kathmandu",
    "addressRegion": "Bagmati",
    "postalCode": "44600",
    "addressCountry": "NP"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "27.7172",
    "longitude": "85.3240"
  },
  "priceRange": "NPR 5000-15000",
  "starRating": {
    "@type": "Rating",
    "ratingValue": "5"
  },
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Free WiFi",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Swimming Pool",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Restaurant",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Spa",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Fitness Center",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Airport Shuttle",
      "value": true
    }
  ],
  "sameAs": [
    hotelConfig.socialMedia.facebook,
    hotelConfig.socialMedia.instagram,
    hotelConfig.socialMedia.twitter
  ]
});

/**
 * Generate structured data for a specific room
 */
export const getRoomStructuredData = (room) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": room.name,
  "description": room.description,
  "image": room.image,
  "offers": {
    "@type": "Offer",
    "price": room.price,
    "priceCurrency": room.currency,
    "availability": "https://schema.org/InStock",
    "url": `https://sunwaveparadise.com/rooms/${room.slug}`
  },
  "brand": {
    "@type": "Brand",
    "name": hotelConfig.name
  }
});

/**
 * Generate structured data for breadcrumbs
 */
export const getBreadcrumbStructuredData = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://sunwaveparadise.com${item.url}`
  }))
});

/**
 * Generate structured data for local business
 */
export const getLocalBusinessStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": hotelConfig.name,
  "image": "https://sunwaveparadise.com/images/hotel-exterior.jpg",
  "description": hotelConfig.tagline,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Thamel",
    "addressLocality": "Kathmandu",
    "addressRegion": "Bagmati",
    "postalCode": "44600",
    "addressCountry": "NP"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "27.7172",
    "longitude": "85.3240"
  },
  "url": "https://sunwaveparadise.com",
  "telephone": hotelConfig.phone,
  "email": hotelConfig.email,
  "priceRange": "NPR 5000-15000",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    hotelConfig.socialMedia.facebook,
    hotelConfig.socialMedia.instagram,
    hotelConfig.socialMedia.twitter
  ]
});

/**
 * Generate structured data for reviews/testimonials
 */
export const getReviewStructuredData = (testimonials) => ({
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": hotelConfig.name,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": testimonials.length
  },
  "review": testimonials.map(testimonial => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": testimonial.name
    },
    "datePublished": testimonial.date,
    "reviewBody": testimonial.comment,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": testimonial.rating,
      "bestRating": "5"
    }
  }))
});
