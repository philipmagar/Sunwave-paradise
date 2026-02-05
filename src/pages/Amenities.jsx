import { amenities, hotelConfig } from '../data/hotelData';
import { Helmet } from 'react-helmet-async';

const Amenities = () => {
    return (
        <>
            <Helmet>
                <title>Amenities - {hotelConfig.name}</title>
                <meta name="description" content={`Discover world-class amenities at ${hotelConfig.name}. Swimming pool, spa, fitness center, restaurant, and more.`} />
            </Helmet>

            {/* Page Header */}
            <section className="relative h-64 md:h-80 flex items-center justify-center bg-gradient-to-r from-primary-900 to-primary-700 mt-20">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-shadow">
                        Hotel Amenities
                    </h1>
                    <p className="text-xl">Everything you need for a perfect stay</p>
                </div>
            </section>

            {/* Amenities Grid */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {amenities.map((amenity) => (
                            <div
                                key={amenity.id}
                                className="bg-white rounded-lg p-8 shadow-lg card-hover border border-gray-100"
                            >
                                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mb-6">
                                    <div className="w-10 h-10 bg-white rounded-full"></div>
                                </div>
                                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                                    {amenity.name}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {amenity.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Highlights */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Premium Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We go above and beyond to ensure your comfort
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg p-8 shadow-lg">
                            <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                                Complimentary Services
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                                    <span className="text-gray-700">High-speed WiFi throughout the property</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                                    <span className="text-gray-700">Daily housekeeping service</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                                    <span className="text-gray-700">Airport pickup and drop-off</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                                    <span className="text-gray-700">Welcome drink on arrival</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                                    <span className="text-gray-700">Complimentary breakfast</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg p-8 shadow-lg">
                            <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                                Premium Add-ons
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                                    <span className="text-gray-700">Spa and massage treatments</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                                    <span className="text-gray-700">Laundry and dry cleaning</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                                    <span className="text-gray-700">City tours and excursions</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                                    <span className="text-gray-700">Car rental services</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                                    <span className="text-gray-700">Currency exchange</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Amenities;
