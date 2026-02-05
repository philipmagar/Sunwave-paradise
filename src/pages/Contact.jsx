import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import { hotelConfig } from '../data/hotelData';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Contact form data:', formData);
        alert('Thank you for contacting us! We will get back to you shortly.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    return (
        <>
            <Helmet>
                <title>Contact Us - {hotelConfig.name}</title>
                <meta name="description" content={`Contact ${hotelConfig.name} for bookings, inquiries, or feedback. We are available via phone, email, and WhatsApp.`} />
            </Helmet>

            {/* Page Header */}
            <section className="relative h-64 md:h-80 flex items-center justify-center bg-gradient-to-r from-primary-900 to-primary-700 mt-20">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-shadow">
                        Contact Us
                    </h1>
                    <p className="text-xl">We're here to help you</p>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Contact Info Cards */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
                                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center text-white mb-6">
                                    <FaPhone className="text-xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                                <p className="text-gray-600 mb-4">Monday - Sunday, 24/7</p>
                                <a href={`tel:${hotelConfig.phone}`} className="text-primary-600 font-bold text-lg hover:underline">
                                    {hotelConfig.phone}
                                </a>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
                                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white mb-6">
                                    <FaWhatsapp className="text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                                <p className="text-gray-600 mb-4">Fastest way to get a response</p>
                                <a
                                    href={`https://wa.me/${hotelConfig.whatsapp.replace(/[^0-9]/g, '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-600 font-bold text-lg hover:underline"
                                >
                                    {hotelConfig.whatsapp}
                                </a>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
                                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center text-white mb-6">
                                    <FaEnvelope className="text-xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                                <p className="text-gray-600 mb-4">We reply within 24 hours</p>
                                <a href={`mailto:${hotelConfig.email}`} className="text-primary-600 font-bold text-lg hover:underline break-all">
                                    {hotelConfig.email}
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
                                <h2 className="text-3xl font-display font-bold mb-8">Send Us a Message</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                                                placeholder="+977-9800000000"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none bg-white"
                                            >
                                                <option value="">Select a subject</option>
                                                <option value="General Inquiry">General Inquiry</option>
                                                <option value="Booking Question">Booking Question</option>
                                                <option value="Wedding/Events">Wedding/Events</option>
                                                <option value="Feedback">Feedback</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="5"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none resize-none"
                                            placeholder="How can we help you?"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full btn-primary flex items-center justify-center gap-2 text-lg py-4"
                                    >
                                        <span>Send Message</span>
                                        <FaPaperPlane className="text-sm" />
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* FAQ Preview or Secondary CTA */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom text-center">
                    <h2 className="text-3xl font-display font-bold mb-4">Direct Communication</h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Want a faster response? Many of our local customers prefer booking directly via WhatsApp. Click below to start a chat with our reception.
                    </p>
                    <a
                        href={`https://wa.me/${hotelConfig.whatsapp.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp inline-flex items-center gap-3 text-lg px-10"
                    >
                        <FaWhatsapp className="text-2xl" />
                        <span>Chat on WhatsApp</span>
                    </a>
                </div>
            </section>
        </>
    );
};

export default Contact;
