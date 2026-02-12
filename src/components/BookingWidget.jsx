import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaCalendar, FaUsers, FaBed } from 'react-icons/fa';
import { roomTypes } from '../data/hotelData';
import Input from './ui/Input';
import Select from './ui/Select';
import Button from './ui/Button';
import { validateRequired, validateFutureDate, validateCheckoutDate } from '../utils/validation';

const BookingWidget = ({ isCompact = false, onSubmit, initialData = {} }) => {
    const [bookingData, setBookingData] = useState({
        checkIn: initialData.checkIn || '',
        checkOut: initialData.checkOut || '',
        guests: initialData.guests || 1,
        roomType: initialData.roomType || ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        const checkInError = validateFutureDate(bookingData.checkIn);
        if (checkInError) newErrors.checkIn = checkInError;
        const checkOutError = validateCheckoutDate(bookingData.checkIn, bookingData.checkOut);
        if (checkOutError) newErrors.checkOut = checkOutError;
        const guestsError = validateRequired(bookingData.guests);
        if (guestsError) newErrors.guests = guestsError;
        const roomTypeError = validateRequired(bookingData.roomType);
        if (roomTypeError) newErrors.roomType = roomTypeError;

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
            // If onSubmit callback is provided, use it
            if (onSubmit) {
                await onSubmit(bookingData);
            } else {
                // Default behavior - simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                console.log('Booking data:', bookingData);
            }

            setSubmitSuccess(true);

            // Reset form after 3 seconds
            setTimeout(() => {
                setSubmitSuccess(false);
                setBookingData({
                    checkIn: '',
                    checkOut: '',
                    guests: 1,
                    roomType: ''
                });
            }, 3000);
        } catch (error) {
            setErrors({ submit: error.message || 'Failed to submit booking. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];

    if (isCompact) {
        return (
            <div className="bg-white rounded-lg shadow-xl p-6">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Check-in
                        </label>
                        <div className="relative">
                            <FaCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="date"
                                name="checkIn"
                                value={bookingData.checkIn}
                                onChange={handleChange}
                                min={today}
                                required
                                className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${errors.checkIn ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                aria-label="Check-in date"
                            />
                        </div>
                        {errors.checkIn && (
                            <p className="text-red-600 text-xs mt-1" role="alert">{errors.checkIn}</p>
                        )}
                    </div>

                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Check-out
                        </label>
                        <div className="relative">
                            <FaCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="date"
                                name="checkOut"
                                value={bookingData.checkOut}
                                onChange={handleChange}
                                min={bookingData.checkIn || today}
                                required
                                className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${errors.checkOut ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                aria-label="Check-out date"
                            />
                        </div>
                        {errors.checkOut && (
                            <p className="text-red-600 text-xs mt-1" role="alert">{errors.checkOut}</p>
                        )}
                    </div>

                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Guests
                        </label>
                        <div className="relative">
                            <FaUsers className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <select
                                name="guests"
                                value={bookingData.guests}
                                onChange={handleChange}
                                required
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
                                aria-label="Number of guests"
                            >
                                {[1, 2, 3, 4, 5, 6].map(num => (
                                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Room Type
                        </label>
                        <div className="relative">
                            <FaBed className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <select
                                name="roomType"
                                value={bookingData.roomType}
                                onChange={handleChange}
                                required
                                className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none ${errors.roomType ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                aria-label="Room type"
                            >
                                <option value="">Select Room</option>
                                {roomTypes.map(room => (
                                    <option key={room.id} value={room.slug}>
                                        {room.name} - {room.currency} {room.price}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {errors.roomType && (
                            <p className="text-red-600 text-xs mt-1" role="alert">{errors.roomType}</p>
                        )}
                    </div>

                    <div className="flex items-end">
                        <Button
                            type="submit"
                            variant="primary"
                            className="w-full"
                            loading={isSubmitting}
                            disabled={isSubmitting}
                        >
                            {submitSuccess ? 'Success!' : 'Check Availability'}
                        </Button>
                    </div>
                </form>

                {errors.submit && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg" role="alert">
                        <p className="text-red-600 text-sm">{errors.submit}</p>
                    </div>
                )}

                {submitSuccess && (
                    <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg" role="alert">
                        <p className="text-green-600 text-sm">Booking request submitted successfully! We'll contact you shortly.</p>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-2xl p-8">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
                Book Your Stay
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                        type="date"
                        name="checkIn"
                        label="Check-in Date"
                        value={bookingData.checkIn}
                        onChange={handleChange}
                        min={today}
                        required
                        error={errors.checkIn}
                    />

                    <Input
                        type="date"
                        name="checkOut"
                        label="Check-out Date"
                        value={bookingData.checkOut}
                        onChange={handleChange}
                        min={bookingData.checkIn || today}
                        required
                        error={errors.checkOut}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Select
                        name="guests"
                        label="Number of Guests"
                        value={bookingData.guests}
                        onChange={handleChange}
                        required
                        error={errors.guests}
                    >
                        {[1, 2, 3, 4, 5, 6].map(num => (
                            <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                    </Select>

                    <Select
                        name="roomType"
                        label="Room Type"
                        value={bookingData.roomType}
                        onChange={handleChange}
                        required
                        error={errors.roomType}
                    >
                        <option value="">Select Room Type</option>
                        {roomTypes.map(room => (
                            <option key={room.id} value={room.slug}>
                                {room.name} - {room.currency} {room.price}/night
                            </option>
                        ))}
                    </Select>
                </div>

                {errors.submit && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg" role="alert">
                        <p className="text-red-600">{errors.submit}</p>
                    </div>
                )}

                {submitSuccess && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg" role="alert">
                        <p className="text-green-600">Booking request submitted successfully! We'll contact you shortly.</p>
                    </div>
                )}

                <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                >
                    {submitSuccess ? 'Booking Submitted!' : 'Check Availability & Book'}
                </Button>

                <p className="text-sm text-gray-600 text-center">
                    Or call us directly at <a href="tel:+977-1-4234567" className="text-primary-600 font-semibold hover:underline">+977-1-4234567</a>
                </p>
            </form>
        </div>
    );
};

BookingWidget.propTypes = {
    isCompact: PropTypes.bool,
    onSubmit: PropTypes.func,
    initialData: PropTypes.shape({
        checkIn: PropTypes.string,
        checkOut: PropTypes.string,
        guests: PropTypes.number,
        roomType: PropTypes.string
    })
};

export default BookingWidget;
