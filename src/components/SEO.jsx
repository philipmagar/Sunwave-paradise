import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({
    title,
    description,
    image,
    url,
    type = 'website',
    keywords,
    author,
    structuredData
}) => {
    const siteUrl = 'https://sunwaveparadise.com';
    const siteName = 'Sunwave Paradise';
    const defaultImage = `${siteUrl}/images/og-image.jpg`;

    const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
    const fullImage = image?.startsWith('http') ? image : `${siteUrl}${image || defaultImage}`;
    const fullTitle = title ? `${title} | ${siteName}` : siteName;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {author && <meta name="author" content={author} />}
            <link rel="canonical" href={fullUrl} />
            <meta name="robots" content="index, follow" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImage} />
            <meta name="twitter:site" content="@sunwaveparadise" />
            <meta name="twitter:creator" content="@sunwaveparadise" />

            {/* Additional Meta Tags */}
            <meta name="format-detection" content="telephone=yes" />
            <meta name="theme-color" content="#f0760b" />

            {/* Structured Data (JSON-LD) */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    url: PropTypes.string,
    type: PropTypes.string,
    keywords: PropTypes.string,
    author: PropTypes.string,
    structuredData: PropTypes.object
};

export default SEO;
