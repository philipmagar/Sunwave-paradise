// Hotel configuration - Easy to connect to API later
export const hotelConfig = {
  name: "Sunwave Paradise",
  tagline: "Experience Luxury & Comfort",
  phone: "+977-1-4234567",
  whatsapp: "+9779812345678",
  email: "info@sunwaveparadise.com",
  address: "Thamel, Kathmandu, Nepal",
  socialMedia: {
    facebook: "https://facebook.com/sunwaveparadise",
    instagram: "https://instagram.com/sunwaveparadise",
    twitter: "https://twitter.com/sunwaveparadise"
  }
};

// Room types - Structure ready for API integration
export const roomTypes = [
  {
    id: 1,
    name: "Deluxe Room",
    slug: "deluxe-room",
    description: "Spacious and elegantly designed room with modern amenities",
    price: 5000,
    currency: "NPR",
    maxGuests: 2,
    size: "350 sq ft",
    features: ["King Size Bed", "City View", "Free WiFi", "Air Conditioning", "Mini Bar", "Smart TV"],
    image: "/images/rooms/deluxe.jpg",
    gallery: ["/images/rooms/deluxe-1.jpg", "/images/rooms/deluxe-2.jpg"]
  },
  {
    id: 2,
    name: "Executive Suite",
    slug: "executive-suite",
    description: "Luxurious suite with separate living area and premium facilities",
    price: 8500,
    currency: "NPR",
    maxGuests: 3,
    size: "550 sq ft",
    features: ["King Size Bed", "Mountain View", "Free WiFi", "Air Conditioning", "Mini Bar", "Smart TV", "Jacuzzi", "Work Desk"],
    image: "/images/rooms/executive.jpg",
    gallery: ["/images/rooms/executive-1.jpg", "/images/rooms/executive-2.jpg"]
  },
  {
    id: 3,
    name: "Family Room",
    slug: "family-room",
    description: "Perfect for families with spacious layout and extra beds",
    price: 7000,
    currency: "NPR",
    maxGuests: 4,
    size: "450 sq ft",
    features: ["2 Queen Beds", "Garden View", "Free WiFi", "Air Conditioning", "Mini Fridge", "Smart TV", "Sofa Bed"],
    image: "/images/rooms/family.jpg",
    gallery: ["/images/rooms/family-1.jpg", "/images/rooms/family-2.jpg"]
  },
  {
    id: 4,
    name: "Presidential Suite",
    slug: "presidential-suite",
    description: "Ultimate luxury with panoramic views and exclusive services",
    price: 15000,
    currency: "NPR",
    maxGuests: 4,
    size: "900 sq ft",
    features: ["King Size Bed", "Panoramic View", "Free WiFi", "Air Conditioning", "Full Bar", "Smart TV", "Jacuzzi", "Private Balcony", "Butler Service"],
    image: "/images/rooms/presidential.jpg",
    gallery: ["/images/rooms/presidential-1.jpg", "/images/rooms/presidential-2.jpg"]
  }
];

// Amenities
export const amenities = [
  {
    id: 1,
    name: "Restaurant & Bar",
    description: "Fine dining with local and international cuisine",
    icon: "restaurant"
  },
  {
    id: 2,
    name: "Swimming Pool",
    description: "Outdoor heated pool with stunning views",
    icon: "pool"
  },
  {
    id: 3,
    name: "Spa & Wellness",
    description: "Rejuvenate with our spa treatments",
    icon: "spa"
  },
  {
    id: 4,
    name: "Fitness Center",
    description: "24/7 gym with modern equipment",
    icon: "fitness"
  },
  {
    id: 5,
    name: "Free WiFi",
    description: "High-speed internet throughout the property",
    icon: "wifi"
  },
  {
    id: 6,
    name: "Conference Hall",
    description: "Professional meeting and event spaces",
    icon: "conference"
  },
  {
    id: 7,
    name: "Airport Shuttle",
    description: "Complimentary airport pickup and drop",
    icon: "shuttle"
  },
  {
    id: 8,
    name: "24/7 Room Service",
    description: "Round-the-clock service at your convenience",
    icon: "service"
  }
];

// Gallery images
export const galleryImages = [
  { id: 1, src: "/images/gallery/exterior.jpg", alt: "Hotel Exterior", category: "exterior" },
  { id: 2, src: "/images/gallery/lobby.jpg", alt: "Lobby", category: "interior" },
  { id: 3, src: "/images/gallery/pool.jpg", alt: "Swimming Pool", category: "amenities" },
  { id: 4, src: "/images/gallery/restaurant.jpg", alt: "Restaurant", category: "dining" },
  { id: 5, src: "/images/gallery/room-1.jpg", alt: "Deluxe Room", category: "rooms" },
  { id: 6, src: "/images/gallery/spa.jpg", alt: "Spa", category: "amenities" },
  { id: 7, src: "/images/gallery/view.jpg", alt: "Mountain View", category: "views" },
  { id: 8, src: "/images/gallery/bar.jpg", alt: "Bar", category: "dining" }
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    location: "Kathmandu, Nepal",
    rating: 5,
    comment: "Excellent service and beautiful rooms! The staff was very friendly and helpful.",
    date: "2026-01-15"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    comment: "Best hotel experience in Nepal. The views are breathtaking and amenities are top-notch.",
    date: "2026-01-10"
  },
  {
    id: 3,
    name: "Amit Patel",
    location: "Mumbai, India",
    rating: 4,
    comment: "Great location and comfortable stay. Would definitely recommend to friends and family.",
    date: "2026-01-05"
  }
];
