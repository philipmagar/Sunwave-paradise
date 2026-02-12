import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const Input = forwardRef(({
    label,
    error,
    helperText,
    required = false,
    className = '',
    id,
    ...props
}, ref) => {
    const inputId = id || `input-${label?.toLowerCase().replace(/\s+/g, '-')}`;

    return (
        <div className={className}>
            {label && (
                <label
                    htmlFor={inputId}
                    className="block text-sm font-medium text-gray-700 mb-2"
                >
                    {label}
                    {required && <span className="text-red-600 ml-1" aria-label="required">*</span>}
                </label>
            )}

            <input
                ref={ref}
                id={inputId}
                className={`w-full px-4 py-3 rounded-lg border transition-all outline-none ${error
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500 focus:border-transparent'
                        : 'border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                    }`}
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
                {...props}
            />

            {error && (
                <p
                    id={`${inputId}-error`}
                    className="text-red-600 text-sm mt-1"
                    role="alert"
                >
                    {error}
                </p>
            )}

            {!error && helperText && (
                <p
                    id={`${inputId}-helper`}
                    className="text-gray-500 text-sm mt-1"
                >
                    {helperText}
                </p>
            )}
        </div>
    );
});

Input.displayName = 'Input';

Input.propTypes = {
    label: PropTypes.string,
    error: PropTypes.string,
    helperText: PropTypes.string,
    required: PropTypes.bool,
    className: PropTypes.string,
    id: PropTypes.string
};

export default Input;
