import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const EmptyState = ({
    icon: Icon,
    title,
    description,
    actionLabel,
    actionLink,
    onAction
}) => {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
            {/* Icon */}
            {Icon && (
                <div data-testid="empty-state-icon" className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-10 h-10 text-gray-400" />
                </div>
            )}

            {/* Title */}
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                {title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 max-w-md mb-8">
                {description}
            </p>

            {/* Action button */}
            {(actionLabel && (actionLink || onAction)) && (
                <>
                    {actionLink ? (
                        <Link to={actionLink} className="btn-primary">
                            {actionLabel}
                        </Link>
                    ) : (
                        <button onClick={onAction} className="btn-primary">
                            {actionLabel}
                        </button>
                    )}
                </>
            )}
        </div>
    );
};

EmptyState.propTypes = {
    icon: PropTypes.elementType,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    actionLabel: PropTypes.string,
    actionLink: PropTypes.string,
    onAction: PropTypes.func
};

export default EmptyState;
