import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { hotelConfig } from '../data/hotelData';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'Rooms', path: '/rooms' },
        { name: 'Amenities', path: '/amenities' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main Footer */}
            <div className="container-custom section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-2xl font-display font-bold text-white mb-4">
                            {hotelConfig.name}
                        </h3>
                        <p className="text-sm mb-4">
                            {hotelConfig.tagline}. Experience world-class hospitality in the heart of Kathmandu.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href={hotelConfig.socialMedia.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition"
                                aria-label="Facebook"
                            >
                                <FaFacebook />
                            </a>
                            <a
                                href={hotelConfig.socialMedia.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href={hotelConfig.socialMedia.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition"
                                aria-label="Twitter"
                            >
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="hover:text-primary-400 transition text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link to="/booking" className="hover:text-primary-400 transition text-sm">
                                    Book Now
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-primary-500 mt-1 flex-shrink-0" />
                                <span className="text-sm">{hotelConfig.address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaPhone className="text-primary-500 flex-shrink-0" />
                                <a href={`tel:${hotelConfig.phone}`} className="text-sm hover:text-primary-400 transition">
                                    {hotelConfig.phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaWhatsapp className="text-primary-500 flex-shrink-0" />
                                <a
                                    href={`https://wa.me/${hotelConfig.whatsapp.replace(/[^0-9]/g, '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm hover:text-primary-400 transition"
                                >
                                    {hotelConfig.whatsapp}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-primary-500 flex-shrink-0" />
                                <a href={`mailto:${hotelConfig.email}`} className="text-sm hover:text-primary-400 transition">
                                    {hotelConfig.email}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
                        <p className="text-sm mb-4">Subscribe to get special offers and updates</p>
                        <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-primary-500 focus:outline-none text-sm"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded transition font-medium text-sm"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                        <p>© {currentYear} {hotelConfig.name}. All rights reserved.</p>
                        <div className="flex gap-6">
                            <Link to="/privacy" className="hover:text-primary-400 transition">
                                Privacy Policy
                            </Link>
                            <Link to="/terms" className="hover:text-primary-400 transition">
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
