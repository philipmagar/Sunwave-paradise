import { useParams, Link, Navigate } from 'react-router-dom';
import { FaUsers, FaRulerCombined, FaCheckCircle, FaWhatsapp, FaChevronLeft } from 'react-icons/fa';
import { roomTypes, hotelConfig } from '../data/hotelData';
import { Helmet } from 'react-helmet-async';

const RoomDetail = () => {
    const { slug } = useParams();
    const room = roomTypes.find(r => r.slug === slug);

    if (!room) {
        return <Navigate to="/rooms" replace />;
    }

    return (
        <>
            <Helmet>
                <title>{room.name} - {hotelConfig.name}</title>
                <meta name="description" content={room.description} />
            </Helmet>

            {/* Hero / Header */}
            <section className="relative h-[50vh] min-h-[400px] flex items-end justify-start mt-20 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                        alt={room.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="relative z-10 container-custom pb-12 px-4">
                    <Link
                        to="/rooms"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
                    >
                        <FaChevronLeft className="text-sm" />
                        <span>Back to All Rooms</span>
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white text-shadow">
                        {room.name}
                    </h1>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-10">
                            <div>
                                <h2 className="text-3xl font-display font-bold mb-6">Room Overview</h2>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {room.description}. Our {room.name} is meticulously designed to provide you with the utmost comfort and luxury during your stay. Whether you are traveling for business or leisure, this room offers all the modern amenities you expect from a premium hotel.
                                </p>
                            </div>

                            {/* Specs */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-8 border-y border-gray-100">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                                        <FaUsers />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Capacity</p>
                                        <p className="font-semibold">{room.maxGuests} Guests</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                                        <FaRulerCombined />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Size</p>
                                        <p className="font-semibold">{room.size}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                                        <div className="w-4 h-4 bg-primary-600 rounded-full"></div>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Bed Type</p>
                                        <p className="font-semibold">{room.features.includes('King Size Bed') ? 'King Bed' : 'Queen Bed'}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Features List */}
                            <div>
                                <h3 className="text-2xl font-display font-bold mb-6">Amenities & Features</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {room.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                                            <FaCheckCircle className="text-green-500" />
                                            <span className="text-gray-700 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                                        <FaCheckCircle className="text-green-500" />
                                        <span className="text-gray-700 font-medium">Daily Housekeeping</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                                        <FaCheckCircle className="text-green-500" />
                                        <span className="text-gray-700 font-medium">Hair Dryer</span>
                                    </div>
                                </div>
                            </div>

                            {/* Mini Gallery/Images Placeholder */}
                            <div>
                                <h3 className="text-2xl font-display font-bold mb-6">Room Gallery</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-md">
                                            <img
                                                src={`https://picsum.photos/seed/${room.slug}-${i}/600/600`}
                                                alt={`${room.name} view ${i}`}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sticky Sidebar Booking CTA */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-32 p-8 bg-white rounded-2xl shadow-2xl border border-gray-100">
                                <p className="text-sm text-gray-500 mb-2 uppercase font-bold tracking-widest">Pricing</p>
                                <div className="flex items-baseline gap-2 mb-6">
                                    <span className="text-4xl font-bold text-primary-600">{room.currency} {room.price}</span>
                                    <span className="text-gray-500 font-medium">/night</span>
                                </div>

                                <div className="space-y-4">
                                    <Link
                                        to="/booking"
                                        state={{ roomType: room.slug }}
                                        className="btn-primary block w-full text-center py-4"
                                    >
                                        Book This Room Now
                                    </Link>
                                    <a
                                        href={`https://wa.me/${hotelConfig.whatsapp.replace(/[^0-9]/g, '')}?text=Hi, I'm interested in booking the ${room.name}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-whatsapp w-full justify-center py-4"
                                    >
                                        <FaWhatsapp className="text-xl" />
                                        <span>Inquiry on WhatsApp</span>
                                    </a>
                                </div>

                                <div className="mt-8 pt-8 border-t border-gray-100">
                                    <p className="text-center text-sm text-gray-500">
                                        No credit card required for WhatsApp bookings.
                                        Best price guarantee for direct reservations.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Other Rooms Suggestion */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <h2 className="text-3xl font-display font-bold mb-8">Other Rooms You Might Like</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {roomTypes.filter(r => r.slug !== slug).slice(0, 3).map(r => (
                            <Link
                                key={r.id}
                                to={`/rooms/${r.slug}`}
                                className="bg-white rounded-xl overflow-hidden shadow-lg card-hover"
                            >
                                <div className="h-48 bg-gray-200 flex items-center justify-center">
                                    <p className="text-gray-500">{r.name}</p>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-lg mb-2">{r.name}</h3>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-primary-600">{r.currency} {r.price}</span>
                                        <span className="text-sm text-gray-500">/night</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default RoomDetail;
