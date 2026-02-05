import BookingWidget from '../components/BookingWidget';
import { hotelConfig } from '../data/hotelData';
import { Helmet } from 'react-helmet-async';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

const Booking = () => {
    return (
        <>
            <Helmet>
                <title>Book Now - {hotelConfig.name}</title>
                <meta name="description" content={`Reserve your room at ${hotelConfig.name} today. Best price guarantee for direct bookings.`} />
            </Helmet>

            {/* Page Header */}
            <section className="relative h-64 flex items-center justify-center bg-gradient-to-r from-primary-900 to-primary-700 mt-20">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-2">
                        Reservation
                    </h1>
                    <p className="text-lg opacity-90">Secure your stay with us</p>
                </div>
            </section>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

                        {/* Main Booking Form */}
                        <div className="lg:col-span-2">
                            <BookingWidget />

                            <div className="mt-8 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="font-bold text-lg mb-4">Reservation Policy</h3>
                                <ul className="space-y-2 text-gray-600 text-sm">
                                    <li>• Check-in: 14:00 | Check-out: 12:00</li>
                                    <li>• Free cancellation up to 48 hours before arrival.</li>
                                    <li>• Valid ID proof required at the time of check-in.</li>
                                    <li>• Special requests are subject to availability.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Sidebar info */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="bg-primary-600 text-white p-8 rounded-2xl shadow-xl">
                                <h3 className="text-2xl font-display font-bold mb-4">Book Direct & Save</h3>
                                <p className="mb-6 text-primary-50">
                                    Direct bookings get the best available rates and exclusive perks like late check-out (subject to availability).
                                </p>
                                <div className="flex flex-col gap-4">
                                    <a
                                        href={`tel:${hotelConfig.phone}`}
                                        className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-all"
                                    >
                                        <FaPhone />
                                        <div>
                                            <p className="text-xs opacity-70">Direct Call</p>
                                            <p className="font-bold">{hotelConfig.phone}</p>
                                        </div>
                                    </a>
                                    <a
                                        href={`https://wa.me/${hotelConfig.whatsapp.replace(/[^0-9]/g, '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 bg-green-500 hover:bg-green-600 p-4 rounded-xl transition-all"
                                    >
                                        <FaWhatsapp className="text-xl" />
                                        <div>
                                            <p className="text-xs opacity-90">WhatsApp Booking</p>
                                            <p className="font-bold">Chat with Reception</p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                                <h4 className="font-bold mb-4">Accepted Payments</h4>
                                <div className="flex flex-wrap gap-3">
                                    <div className="px-3 py-1 bg-gray-100 rounded text-xs font-semibold text-gray-600 uppercase">Visa</div>
                                    <div className="px-3 py-1 bg-gray-100 rounded text-xs font-semibold text-gray-600 uppercase">Mastercard</div>
                                    <div className="px-3 py-1 bg-gray-100 rounded text-xs font-semibold text-gray-600 uppercase">FonePay</div>
                                    <div className="px-3 py-1 bg-gray-100 rounded text-xs font-semibold text-gray-600 uppercase">Cash</div>
                                    <div className="px-3 py-1 bg-gray-100 rounded text-xs font-semibold text-gray-600 uppercase">E-Sewa</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Booking;
