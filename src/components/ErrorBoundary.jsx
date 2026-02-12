import { Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error,
            errorInfo
        });

        console.error('Error caught by boundary:', error, errorInfo);

        // In production, send to error tracking service
        if (process.env.NODE_ENV === 'production') {
            // Example: Sentry.captureException(error);
        }
    }

    handleReset = () => {
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null
        });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
                    <div className="max-w-2xl w-full text-center">
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                            {/* Error Icon */}
                            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg
                                    className="w-10 h-10 text-red-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    />
                                </svg>
                            </div>

                            <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                                Oops! Something went wrong
                            </h1>

                            <p className="text-lg text-gray-600 mb-8">
                                We're sorry for the inconvenience. An unexpected error occurred while loading this page.
                            </p>

                            {/* Error details (only in development) */}
                            {process.env.NODE_ENV === 'development' && this.state.error && (
                                <details className="text-left bg-gray-50 rounded-lg p-4 mb-6">
                                    <summary className="cursor-pointer font-semibold text-gray-700 mb-2">
                                        Error Details (Development Only)
                                    </summary>
                                    <pre className="text-xs text-red-600 overflow-auto">
                                        {this.state.error.toString()}
                                        {this.state.errorInfo?.componentStack}
                                    </pre>
                                </details>
                            )}

                            {/* Action buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={this.handleReset}
                                    className="btn-primary"
                                >
                                    Try Again
                                </button>
                                <button
                                    onClick={() => window.location.reload()}
                                    className="btn-secondary"
                                >
                                    Reload Page
                                </button>
                                <Link
                                    to="/"
                                    className="btn-secondary"
                                >
                                    Go Home
                                </Link>
                            </div>

                            {/* Contact support */}
                            <p className="text-sm text-gray-500 mt-8">
                                If the problem persists, please{' '}
                                <Link to="/contact" className="text-primary-600 hover:underline">
                                    contact our support team
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
