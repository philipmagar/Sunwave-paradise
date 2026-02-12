import PropTypes from 'prop-types';

const LoadingSpinner = ({
    size = 'md',
    text = 'Loading...',
    fullScreen = false
}) => {
    const sizes = {
        sm: 'w-8 h-8 border-2',
        md: 'w-16 h-16 border-4',
        lg: 'w-24 h-24 border-4'
    };

    const spinner = (
        <div className="flex flex-col items-center justify-center gap-4">
            <div
                className={`${sizes[size]} border-primary-200 border-t-primary-600 rounded-full animate-spin`}
                role="status"
                aria-label={text}
            />
            {text && (
                <p className="text-gray-600 font-medium">{text}</p>
            )}
        </div>
    );

    if (fullScreen) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                {spinner}
            </div>
        );
    }

    return spinner;
};

LoadingSpinner.propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    text: PropTypes.string,
    fullScreen: PropTypes.bool
};

export default LoadingSpinner;
