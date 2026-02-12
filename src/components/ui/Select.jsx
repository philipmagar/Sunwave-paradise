import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const Select = forwardRef(({
    label,
    error,
    helperText,
    required = false,
    className = '',
    children,
    id,
    ...props
}, ref) => {
    const selectId = id || `select-${label?.toLowerCase().replace(/\s+/g, '-')}`;

    return (
        <div className={className}>
            {label && (
                <label
                    htmlFor={selectId}
                    className="block text-sm font-medium text-gray-700 mb-2"
                >
                    {label}
                    {required && <span className="text-red-600 ml-1" aria-label="required">*</span>}
                </label>
            )}

            <select
                ref={ref}
                id={selectId}
                className={`w-full px-4 py-3 rounded-lg border transition-all outline-none appearance-none bg-white ${error
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500 focus:border-transparent'
                        : 'border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                    }`}
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined}
                {...props}
            >
                {children}
            </select>

            {error && (
                <p
                    id={`${selectId}-error`}
                    className="text-red-600 text-sm mt-1"
                    role="alert"
                >
                    {error}
                </p>
            )}

            {!error && helperText && (
                <p
                    id={`${selectId}-helper`}
                    className="text-gray-500 text-sm mt-1"
                >
                    {helperText}
                </p>
            )}
        </div>
    );
});

Select.displayName = 'Select';

Select.propTypes = {
    label: PropTypes.string,
    error: PropTypes.string,
    helperText: PropTypes.string,
    required: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    id: PropTypes.string
};

export default Select;
