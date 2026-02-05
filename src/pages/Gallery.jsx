import { useState } from 'react';
import { galleryImages, hotelConfig } from '../data/hotelData';
import { Helmet } from 'react-helmet-async';

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All' },
        { id: 'rooms', name: 'Rooms' },
        { id: 'amenities', name: 'Amenities' },
        { id: 'dining', name: 'Dining' },
        { id: 'exterior', name: 'Exterior' },
        { id: 'interior', name: 'Interior' },
        { id: 'views', name: 'Views' }
    ];

    const filteredImages = selectedCategory === 'all'
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory);

    return (
        <>
            <Helmet>
                <title>Gallery - {hotelConfig.name}</title>
                <meta name="description" content={`View photos of ${hotelConfig.name}. Explore our rooms, amenities, dining areas, and beautiful views.`} />
            </Helmet>

            {/* Page Header */}
            <section className="relative h-64 md:h-80 flex items-center justify-center bg-gradient-to-r from-primary-900 to-primary-700 mt-20">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-shadow">
                        Photo Gallery
                    </h1>
                    <p className="text-xl">Explore our beautiful property</p>
                </div>
            </section>

            {/* Category Filter */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === category.id
                                        ? 'bg-primary-600 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredImages.map((image) => (
                            <div
                                key={image.id}
                                className="relative h-64 rounded-lg overflow-hidden shadow-lg card-hover cursor-pointer group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                                    <p className="text-white text-lg font-display">{image.alt}</p>
                                </div>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                                        View Image
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredImages.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-600 text-lg">No images found in this category</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Virtual Tour CTA */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                        Want to See More?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Schedule a virtual tour or visit us in person to experience our hotel
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`tel:${hotelConfig.phone}`}
                            className="btn-primary"
                        >
                            Schedule a Visit
                        </a>
                        <a
                            href={`https://wa.me/${hotelConfig.whatsapp.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp justify-center"
                        >
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;
