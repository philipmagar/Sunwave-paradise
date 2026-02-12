import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const Textarea = forwardRef(({
    label,
    error,
    helperText,
    required = false,
    className = '',
    id,
    ...props
}, ref) => {
    const textareaId = id || `textarea-${label?.toLowerCase().replace(/\s+/g, '-')}`;

    return (
        <div className={className}>
            {label && (
                <label
                    htmlFor={textareaId}
                    className="block text-sm font-medium text-gray-700 mb-2"
                >
                    {label}
                    {required && <span className="text-red-600 ml-1" aria-label="required">*</span>}
                </label>
            )}

            <textarea
                ref={ref}
                id={textareaId}
                className={`w-full px-4 py-3 rounded-lg border transition-all outline-none resize-none ${error
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500 focus:border-transparent'
                        : 'border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                    }`}
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined}
                {...props}
            />

            {error && (
                <p
                    id={`${textareaId}-error`}
                    className="text-red-600 text-sm mt-1"
                    role="alert"
                >
                    {error}
                </p>
            )}

            {!error && helperText && (
                <p
                    id={`${textareaId}-helper`}
                    className="text-gray-500 text-sm mt-1"
                >
                    {helperText}
                </p>
            )}
        </div>
    );
});

Textarea.displayName = 'Textarea';

Textarea.propTypes = {
    label: PropTypes.string,
    error: PropTypes.string,
    helperText: PropTypes.string,
    required: PropTypes.bool,
    className: PropTypes.string,
    id: PropTypes.string
};

export default Textarea;
