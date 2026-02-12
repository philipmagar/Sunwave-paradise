import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import LoadingSpinner from '../components/LoadingSpinner';

describe('LoadingSpinner Component', () => {
    it('renders with default props', () => {
        render(<LoadingSpinner />);
        expect(screen.getByRole('status')).toBeInTheDocument();
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('renders with custom text', () => {
        render(<LoadingSpinner text="Please wait..." />);
        expect(screen.getByText('Please wait...')).toBeInTheDocument();
    });

    it('renders without text when text is empty', () => {
        render(<LoadingSpinner text="" />);
        expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });

    it('applies small size class', () => {
        render(<LoadingSpinner size="sm" />);
        const spinner = screen.getByRole('status');
        expect(spinner).toHaveClass('w-8', 'h-8', 'border-2');
    });

    it('applies medium size class', () => {
        render(<LoadingSpinner size="md" />);
        const spinner = screen.getByRole('status');
        expect(spinner).toHaveClass('w-16', 'h-16', 'border-4');
    });

    it('applies large size class', () => {
        render(<LoadingSpinner size="lg" />);
        const spinner = screen.getByRole('status');
        expect(spinner).toHaveClass('w-24', 'h-24', 'border-4');
    });

    it('renders in fullScreen mode', () => {
        const { container } = render(<LoadingSpinner fullScreen />);
        const fullScreenDiv = container.querySelector('.min-h-screen');
        expect(fullScreenDiv).toBeInTheDocument();
    });

    it('has proper aria-label', () => {
        render(<LoadingSpinner text="Loading data..." />);
        const spinner = screen.getByRole('status');
        expect(spinner).toHaveAttribute('aria-label', 'Loading data...');
    });
});
