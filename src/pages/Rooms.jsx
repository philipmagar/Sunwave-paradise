import { Link } from 'react-router-dom';
import { FaUsers, FaRulerCombined, FaCheckCircle, FaBed } from 'react-icons/fa';
import { roomTypes, hotelConfig } from '../data/hotelData';
import { Helmet } from 'react-helmet-async';
import EmptyState from '../components/EmptyState';

const Rooms = () => {
    return (
        <>
            <Helmet>
                <title>Rooms & Suites - {hotelConfig.name}</title>
                <meta name="description" content={`Explore our luxury rooms and suites at ${hotelConfig.name}. From deluxe rooms to presidential suites, find the perfect accommodation for your stay in Kathmandu.`} />
            </Helmet>

            {/* Page Header */}
            <section className="relative h-64 md:h-80 flex items-center justify-center bg-gradient-to-r from-primary-900 to-primary-700 mt-20">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-shadow">
                        Rooms & Suites
                    </h1>
                    <p className="text-xl">Find your perfect accommodation</p>
                </div>
            </section>

            {/* Rooms Grid */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    {roomTypes.length === 0 ? (
                        <EmptyState
                            icon={FaBed}
                            title="No Rooms Available"
                            description="We're currently updating our room inventory. Please check back later or contact us directly for availability."
                            actionLabel="Contact Us"
                            actionLink="/contact"
                        />
                    ) : (
                        <div className="space-y-12">
                            {roomTypes.map((room, index) => (
                                <div
                                    key={room.id}
                                    className={`bg-white rounded-lg overflow-hidden shadow-xl card-hover ${index % 2 === 0 ? '' : ''
                                        }`}
                                >
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                        {/* Image */}
                                        <div className={`relative h-64 lg:h-full min-h-[400px] overflow-hidden ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                                            <img
                                                src={`https://images.unsplash.com/photo-${index === 0 ? '1631049307264-da0ec9d70304' : index === 1 ? '1590490360182-c33d57733427' : index === 2 ? '1566665797739-1674de7a421a' : '1582719478250-c89cae4df85b'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`}
                                                alt={room.name}
                                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                                loading="lazy"
                                            />
                                            <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-lg shadow-lg">
                                                <span className="text-2xl font-bold">{room.currency} {room.price}</span>
                                                <span className="text-sm">/night</span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className={`p-8 lg:p-12 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                                            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                                                {room.name}
                                            </h2>
                                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                                {room.description}
                                            </p>

                                            {/* Room Info */}
                                            <div className="grid grid-cols-2 gap-4 mb-6">
                                                <div className="flex items-center gap-3">
                                                    <FaUsers className="text-primary-600 text-xl" />
                                                    <div>
                                                        <p className="text-sm text-gray-600">Max Guests</p>
                                                        <p className="font-semibold">{room.maxGuests} Guests</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <FaRulerCombined className="text-primary-600 text-xl" />
                                                    <div>
                                                        <p className="text-sm text-gray-600">Room Size</p>
                                                        <p className="font-semibold">{room.size}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Features */}
                                            <div className="mb-8">
                                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Room Features</h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                    {room.features.map((feature, idx) => (
                                                        <div key={idx} className="flex items-center gap-2">
                                                            <FaCheckCircle className="text-green-500 flex-shrink-0" />
                                                            <span className="text-gray-700">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* CTA Buttons */}
                                            <div className="flex flex-col sm:flex-row gap-4">
                                                <Link
                                                    to="/booking"
                                                    state={{ roomType: room.slug }}
                                                    className="btn-primary text-center"
                                                >
                                                    Book This Room
                                                </Link>
                                                <a
                                                    href={`https://wa.me/${hotelConfig.whatsapp.replace(/[^0-9]/g, '')}?text=I'm interested in booking ${room.name}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn-whatsapp justify-center"
                                                >
                                                    WhatsApp Inquiry
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section >

            {/* CTA Section */}
            < section className="section-padding bg-primary-600 text-white" >
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                        Can't Decide? Let Us Help!
                    </h2>
                    <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
                        Our team is ready to help you find the perfect room for your needs
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`tel:${hotelConfig.phone}`}
                            className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                        >
                            Call: {hotelConfig.phone}
                        </a>
                        <Link to="/contact" className="btn-secondary">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section >
        </>
    );
};


export default Rooms;
