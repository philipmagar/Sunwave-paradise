// Application Routes
export const ROUTES = {
  HOME: '/',
  ROOMS: '/rooms',
  ROOM_DETAIL: '/rooms/:slug',
  AMENITIES: '/amenities',
  GALLERY: '/gallery',
  LOCATION: '/location',
  CONTACT: '/contact',
  BOOKING: '/booking',
  PRIVACY: '/privacy',
  TERMS: '/terms'
};

// Contact Form Subjects
export const INQUIRY_TYPES = {
  GENERAL: 'General Inquiry',
  BOOKING: 'Booking Question',
  WEDDING: 'Wedding/Events',
  FEEDBACK: 'Feedback'
};

// Responsive Breakpoints (Tailwind defaults)
export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px'
};

// Form Validation Messages
export const VALIDATION_MESSAGES = {
  REQUIRED: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PHONE: 'Please enter a valid phone number',
  MIN_LENGTH: (min) => `Minimum ${min} characters required`,
  MAX_LENGTH: (max) => `Maximum ${max} characters allowed`,
  INVALID_DATE: 'Please select a valid date',
  CHECKOUT_BEFORE_CHECKIN: 'Check-out date must be after check-in date'
};

// API Status
export const API_STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error'
};

// Local Storage Keys
export const STORAGE_KEYS = {
  BOOKING_DATA: 'hotel_booking_data',
  USER_PREFERENCES: 'hotel_user_preferences'
};

// Social Media Platforms
export const SOCIAL_PLATFORMS = {
  FACEBOOK: 'facebook',
  INSTAGRAM: 'instagram',
  TWITTER: 'twitter',
  WHATSAPP: 'whatsapp'
};

// SEO Constants
export const SEO_DEFAULTS = {
  SITE_NAME: 'Sunwave Paradise',
  SITE_URL: 'https://sunwaveparadise.com',
  DEFAULT_IMAGE: '/images/og-image.jpg',
  TWITTER_HANDLE: '@sunwaveparadise'
};
