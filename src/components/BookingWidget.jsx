import { useState } from 'react';
import { FaCalendar, FaUsers, FaBed } from 'react-icons/fa';
import { roomTypes } from '../data/hotelData';

const BookingWidget = ({ isCompact = false }) => {
    const [bookingData, setBookingData] = useState({
        checkIn: '',
        checkOut: '',
        guests: 1,
        roomType: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // This will be connected to API later
        console.log('Booking data:', bookingData);
        alert('Booking request submitted! We will contact you shortly.');
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
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                        </div>
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
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                        </div>
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
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
                            >
                                <option value="">Select Room</option>
                                {roomTypes.map(room => (
                                    <option key={room.id} value={room.slug}>
                                        {room.name} - {room.currency} {room.price}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="flex items-end">
                        <button
                            type="submit"
                            className="w-full btn-primary"
                        >
                            Check Availability
                        </button>
                    </div>
                </form>
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
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Check-in Date
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
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Check-out Date
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
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Number of Guests
                        </label>
                        <div className="relative">
                            <FaUsers className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <select
                                name="guests"
                                value={bookingData.guests}
                                onChange={handleChange}
                                required
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
                            >
                                {[1, 2, 3, 4, 5, 6].map(num => (
                                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Room Type
                        </label>
                        <div className="relative">
                            <FaBed className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <select
                                name="roomType"
                                value={bookingData.roomType}
                                onChange={handleChange}
                                required
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
                            >
                                <option value="">Select Room Type</option>
                                {roomTypes.map(room => (
                                    <option key={room.id} value={room.slug}>
                                        {room.name} - {room.currency} {room.price}/night
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full btn-primary text-lg py-4"
                >
                    Check Availability & Book
                </button>

                <p className="text-sm text-gray-600 text-center">
                    Or call us directly at <a href="tel:+977-1-4234567" className="text-primary-600 font-semibold">+977-1-4234567</a>
                </p>
            </form>
        </div>
    );
};

export default BookingWidget;
