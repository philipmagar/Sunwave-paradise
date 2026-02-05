import { hotelConfig } from '../data/hotelData';
import { Helmet } from 'react-helmet-async';

const Location = () => {
    return (
        <>
            <Helmet>
                <title>Location - {hotelConfig.name}</title>
                <meta name="description" content={`Find ${hotelConfig.name} at ${hotelConfig.address}. Conveniently located in the heart of Kathmandu with easy access to major attractions.`} />
            </Helmet>

            {/* Page Header */}
            <section className="relative h-64 md:h-80 flex items-center justify-center bg-gradient-to-r from-primary-900 to-primary-700 mt-20">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-shadow">
                        Our Location
                    </h1>
                    <p className="text-xl">Find us in the heart of Kathmandu</p>
                </div>
            </section>

            {/* Map Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Map Placeholder */}
                        <div className="h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-400 to-primary-600">
                                <div className="text-center text-white">
                                    <p className="text-2xl font-display mb-2">Interactive Map</p>
                                    <p className="text-sm">Google Maps integration</p>
                                </div>
                            </div>
                        </div>

                        {/* Location Info */}
                        <div>
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                                Visit Us
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                                    <p className="text-gray-700">{hotelConfig.address}</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Getting Here</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>15 minutes from Tribhuvan International Airport</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Walking distance to major tourist attractions</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Easy access to public transportation</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Complimentary airport shuttle available</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Information</h3>
                                    <div className="space-y-2">
                                        <p className="text-gray-700">
                                            <span className="font-medium">Phone:</span>{' '}
                                            <a href={`tel:${hotelConfig.phone}`} className="text-primary-600 hover:underline">
                                                {hotelConfig.phone}
                                            </a>
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-medium">WhatsApp:</span>{' '}
                                            <a
                                                href={`https://wa.me/${hotelConfig.whatsapp.replace(/[^0-9]/g, '')}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary-600 hover:underline"
                                            >
                                                {hotelConfig.whatsapp}
                                            </a>
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-medium">Email:</span>{' '}
                                            <a href={`mailto:${hotelConfig.email}`} className="text-primary-600 hover:underline">
                                                {hotelConfig.email}
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <a
                                        href="https://maps.google.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary inline-block"
                                    >
                                        Get Directions
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Attractions */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8 text-center">
                        Nearby Attractions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { name: 'Pashupatinath Temple', distance: '3 km', time: '10 min drive' },
                            { name: 'Boudhanath Stupa', distance: '5 km', time: '15 min drive' },
                            { name: 'Kathmandu Durbar Square', distance: '2 km', time: '8 min drive' },
                            { name: 'Swayambhunath (Monkey Temple)', distance: '4 km', time: '12 min drive' },
                            { name: 'Garden of Dreams', distance: '1 km', time: '5 min walk' },
                            { name: 'Thamel Market', distance: '500 m', time: '2 min walk' }
                        ].map((attraction, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {attraction.name}
                                </h3>
                                <p className="text-gray-600">{attraction.distance} • {attraction.time}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Location;
