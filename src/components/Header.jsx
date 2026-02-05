import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPhone, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import { hotelConfig } from '../data/hotelData';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Rooms', path: '/rooms' },
        { name: 'Amenities', path: '/amenities' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Location', path: '/location' },
        { name: 'Contact', path: '/contact' }
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
                }`}
        >
            {/* Top Bar */}
            <div className="bg-primary-600 text-white py-2 hidden md:block">
                <div className="container-custom flex justify-between items-center text-sm">
                    <div className="flex items-center gap-6">
                        <a href={`tel:${hotelConfig.phone}`} className="flex items-center gap-2 hover:text-primary-100 transition">
                            <FaPhone className="text-xs" />
                            <span>{hotelConfig.phone}</span>
                        </a>
                        <a
                            href={`https://wa.me/${hotelConfig.whatsapp.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-primary-100 transition"
                        >
                            <FaWhatsapp />
                            <span>WhatsApp Us</span>
                        </a>
                    </div>
                    <div className="text-sm">
                        {hotelConfig.tagline}
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="container-custom py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <h1 className="text-2xl md:text-3xl font-display font-bold text-primary-600">
                            {hotelConfig.name}
                        </h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`font-medium transition-colors relative group ${isActive(link.path)
                                        ? 'text-primary-600'
                                        : 'text-gray-700 hover:text-primary-600'
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary-600 transform transition-transform ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                    }`}></span>
                            </Link>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        <a
                            href={`https://wa.me/${hotelConfig.whatsapp.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp text-sm py-2 px-4"
                        >
                            <FaWhatsapp />
                            <span>Book via WhatsApp</span>
                        </a>
                        <Link to="/booking" className="btn-primary text-sm py-2 px-6">
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden text-2xl text-gray-700 hover:text-primary-600 transition"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 animate-slide-up">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`font-medium py-2 px-4 rounded transition-colors ${isActive(link.path)
                                            ? 'bg-primary-600 text-white'
                                            : 'text-gray-700 hover:bg-primary-50'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-2 mt-2">
                                <a
                                    href={`https://wa.me/${hotelConfig.whatsapp.replace(/[^0-9]/g, '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-whatsapp justify-center text-sm py-2"
                                >
                                    <FaWhatsapp />
                                    <span>Book via WhatsApp</span>
                                </a>
                                <Link
                                    to="/booking"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="btn-primary text-center text-sm py-2"
                                >
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
