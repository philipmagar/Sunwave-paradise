import { Link } from 'react-router-dom';
import { FaStar, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import BookingWidget from '../components/BookingWidget';
import { roomTypes, amenities, testimonials, hotelConfig } from '../data/hotelData';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>{hotelConfig.name} - {hotelConfig.tagline}</title>
                <meta name="description" content={`Book your stay at ${hotelConfig.name} in Kathmandu. Luxury rooms, world-class amenities, and exceptional service. ${hotelConfig.tagline}`} />
                <meta name="keywords" content="hotel kathmandu, luxury hotel nepal, hotel booking kathmandu, best hotel thamel" />
            </Helmet>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                        alt="Luxury Hotel Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="relative z-10 container-custom text-center text-white px-4">
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-fade-in text-shadow">
                        {hotelConfig.tagline}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up">
                        Discover the perfect blend of luxury and comfort in the heart of Kathmandu
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
                        <Link to="/booking" className="btn-primary text-lg">
                            Book Your Stay Now
                        </Link>
                        <a
                            href={`https://wa.me/${hotelConfig.whatsapp.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp text-lg"
                        >
                            <FaWhatsapp className="text-xl" />
                            <span>WhatsApp Booking</span>
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
                    </div>
                </div>
            </section>

            {/* Booking Widget Section */}
            <section className="relative -mt-20 z-20 px-4">
                <div className="container-custom">
                    <BookingWidget isCompact={true} />
                </div>
            </section>

            {/* Welcome Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-slide-up">
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                                Welcome to {hotelConfig.name}
                            </h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Experience unparalleled luxury and comfort in the heart of Kathmandu. Our hotel combines
                                traditional Nepali hospitality with modern amenities to create an unforgettable stay.
                            </p>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Whether you're here for business or leisure, our dedicated staff ensures every moment
                                of your stay is exceptional. From our elegantly designed rooms to our world-class dining,
                                every detail is crafted with your comfort in mind.
                            </p>
                            <Link to="/rooms" className="btn-primary inline-flex items-center gap-2">
                                Explore Our Rooms
                                <FaArrowRight />
                            </Link>
                        </div>
                        <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Welcome to Hotel"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Rooms */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                            Our Rooms & Suites
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Choose from our selection of beautifully appointed rooms and suites
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {roomTypes.map((room) => (
                            <div
                                key={room.id}
                                className="bg-white rounded-lg overflow-hidden shadow-lg card-hover"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={`https://picsum.photos/seed/${room.slug}/800/600`}
                                        alt={room.name}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                                        {room.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                        {room.description}
                                    </p>
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <span className="text-2xl font-bold text-primary-600">
                                                {room.currency} {room.price}
                                            </span>
                                            <span className="text-gray-500 text-sm">/night</span>
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            Up to {room.maxGuests} guests
                                        </div>
                                    </div>
                                    <Link
                                        to={`/rooms/${room.slug}`}
                                        className="block w-full text-center btn-secondary py-2 text-sm"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/rooms" className="btn-primary inline-flex items-center gap-2">
                            View All Rooms
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Amenities Preview */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                            World-Class Amenities
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Everything you need for a perfect stay
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {amenities.slice(0, 8).map((amenity) => (
                            <div
                                key={amenity.id}
                                className="text-center p-6 rounded-lg hover:bg-gray-50 transition"
                            >
                                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <div className="w-8 h-8 bg-primary-600 rounded-full"></div>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {amenity.name}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {amenity.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/amenities" className="btn-secondary inline-flex items-center gap-2">
                            View All Amenities
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section-padding bg-primary-600 text-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            What Our Guests Say
                        </h2>
                        <p className="text-lg text-primary-100 max-w-2xl mx-auto">
                            Read reviews from our satisfied guests
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-white/90 mb-4 italic">
                                    "{testimonial.comment}"
                                </p>
                                <div className="border-t border-white/20 pt-4">
                                    <p className="font-semibold">{testimonial.name}</p>
                                    <p className="text-sm text-primary-100">{testimonial.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gray-900 text-white">
                <div className="container-custom text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        Ready to Book Your Stay?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Experience luxury and comfort. Book now and get the best rates guaranteed.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/booking" className="btn-primary text-lg">
                            Book Now
                        </Link>
                        <a
                            href={`tel:${hotelConfig.phone}`}
                            className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                        >
                            Call: {hotelConfig.phone}
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
