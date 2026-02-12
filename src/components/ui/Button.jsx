import PropTypes from 'prop-types';

const Button = ({
    variant = 'primary',
    size = 'md',
    children,
    className = '',
    disabled = false,
    loading = false,
    ...props
}) => {
    const variants = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        whatsapp: 'btn-whatsapp'
    };

    const sizes = {
        sm: 'py-2 px-4 text-sm',
        md: 'py-3 px-8',
        lg: 'py-4 px-10 text-lg'
    };

    const baseClasses = variants[variant] || variants.primary;
    const sizeClasses = sizes[size] || sizes.md;

    return (
        <button
            className={`${baseClasses} ${sizeClasses} ${className} ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            disabled={disabled || loading}
            {...props}
        >
            {loading ? (
                <span className="flex items-center justify-center gap-2">
                    <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                    Loading...
                </span>
            ) : (
                children
            )}
        </button>
    );
};

Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary', 'whatsapp']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool
};

export default Button;
