import PropTypes from 'prop-types';
import { FaExclamationTriangle } from 'react-icons/fa';

const ErrorState = ({
    title = "Something went wrong",
    message = "We encountered an error while loading this content.",
    onRetry,
    showRetry = true
}) => {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center" role="alert">
            {/* Error Icon */}
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <FaExclamationTriangle className="w-10 h-10 text-red-600" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                {title}
            </h3>

            {/* Message */}
            <p className="text-gray-600 max-w-md mb-8">
                {message}
            </p>

            {/* Retry button */}
            {showRetry && onRetry && (
                <button
                    onClick={onRetry}
                    className="btn-primary"
                    aria-label="Retry loading content"
                >
                    Try Again
                </button>
            )}
        </div>
    );
};

ErrorState.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    onRetry: PropTypes.func,
    showRetry: PropTypes.bool
};

export default ErrorState;
