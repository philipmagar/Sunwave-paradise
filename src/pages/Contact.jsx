import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import { hotelConfig } from '../data/hotelData';
import { Helmet } from 'react-helmet-async';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Textarea from '../components/ui/Textarea';
import Button from '../components/ui/Button';
import { validateEmail, validateRequired, validatePhone, validateMinLength } from '../utils/validation';
import { INQUIRY_TYPES } from '../constants';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error for this field
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Validate name
        const nameError = validateRequired(formData.name) || validateMinLength(formData.name, 2);
        if (nameError) newErrors.name = nameError;

        // Validate email
        const emailError = validateEmail(formData.email);
        if (emailError) newErrors.email = emailError;

        // Validate phone (optional but validate format if provided)
        const phoneError = validatePhone(formData.phone);
        if (phoneError) newErrors.phone = phoneError;

        // Validate subject
        const subjectError = validateRequired(formData.subject);
        if (subjectError) newErrors.subject = subjectError;

        // Validate message
        const messageError = validateRequired(formData.message) || validateMinLength(formData.message, 10);
        if (messageError) newErrors.message = messageError;

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitSuccess(false);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log('Contact form data:', formData);

            setSubmitSuccess(true);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

            // Hide success message after 5 seconds
            setTimeout(() => setSubmitSuccess(false), 5000);
        } catch (error) {
            setErrors({ submit: 'Failed to send message. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
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

                                {submitSuccess && (
                                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg" role="alert">
                                        <p className="text-green-600 font-semibold">Thank you for contacting us! We'll get back to you shortly.</p>
                                    </div>
                                )}

                                {errors.submit && (
                                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg" role="alert">
                                        <p className="text-red-600">{errors.submit}</p>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <Input
                                            type="text"
                                            name="name"
                                            label="Full Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            required
                                            error={errors.name}
                                        />

                                        <Input
                                            type="email"
                                            name="email"
                                            label="Email Address"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            required
                                            error={errors.email}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <Input
                                            type="tel"
                                            name="phone"
                                            label="Phone Number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+977-9800000000"
                                            error={errors.phone}
                                            helperText="Optional"
                                        />

                                        <Select
                                            name="subject"
                                            label="Subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            error={errors.subject}
                                        >
                                            <option value="">Select a subject</option>
                                            {Object.values(INQUIRY_TYPES).map(type => (
                                                <option key={type} value={type}>{type}</option>
                                            ))}
                                        </Select>
                                    </div>

                                    <Textarea
                                        name="message"
                                        label="Your Message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="How can we help you?"
                                        required
                                        error={errors.message}
                                    />

                                    <Button
                                        type="submit"
                                        variant="primary"
                                        size="lg"
                                        className="w-full flex items-center justify-center gap-2"
                                        loading={isSubmitting}
                                        disabled={isSubmitting}
                                    >
                                        {!isSubmitting && (
                                            <>
                                                <span>Send Message</span>
                                                <FaPaperPlane className="text-sm" />
                                            </>
                                        )}
                                    </Button>
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

