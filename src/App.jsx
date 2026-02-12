import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Rooms = lazy(() => import('./pages/Rooms'));
const RoomDetail = lazy(() => import('./pages/RoomDetail'));
const Amenities = lazy(() => import('./pages/Amenities'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Location = lazy(() => import('./pages/Location'));
const Contact = lazy(() => import('./pages/Contact'));
const Booking = lazy(() => import('./pages/Booking'));

// Loading component
const PageLoader = () => <LoadingSpinner fullScreen text="Loading page..." />;

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            {/* Skip to main content link for accessibility */}
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:shadow-lg"
            >
              Skip to main content
            </a>

            <Header />
            <main id="main-content" className="flex-grow">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/rooms" element={<Rooms />} />
                  <Route path="/rooms/:slug" element={<RoomDetail />} />
                  <Route path="/amenities" element={<Amenities />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/location" element={<Location />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/booking" element={<Booking />} />
                  {/* Fallback for 404 */}
                  <Route path="*" element={<Home />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
