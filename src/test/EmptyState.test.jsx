import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import EmptyState from '../components/EmptyState';
import { FaBed } from 'react-icons/fa';

const renderWithRouter = (component) => {
    return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('EmptyState Component', () => {
    it('renders with title and description', () => {
        render(
            <EmptyState
                title="No Results"
                description="We couldn't find any results"
            />
        );
        expect(screen.getByText('No Results')).toBeInTheDocument();
        expect(screen.getByText("We couldn't find any results")).toBeInTheDocument();
    });

    it('renders icon when provided', () => {
        render(
            <EmptyState
                icon={FaBed}
                title="No Rooms"
                description="No rooms available"
            />
        );
        // Icon should be rendered
        const iconContainer = screen.getByTestId('empty-state-icon');
        expect(iconContainer).toBeInTheDocument();
    });

    it('renders action button with link when actionLink is provided', () => {
        renderWithRouter(
            <EmptyState
                title="No Results"
                description="Try something else"
                actionLabel="Go Home"
                actionLink="/"
            />
        );
        const button = screen.getByRole('link', { name: 'Go Home' });
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('href', '/');
    });

    it('renders action button with onClick when onAction is provided', () => {
        render(
            <EmptyState
                title="No Results"
                description="Try again"
                actionLabel="Retry"
                onAction={() => { }}
            />
        );
        const button = screen.getByRole('button', { name: 'Retry' });
        expect(button).toBeInTheDocument();
    });

    it('does not render action button when no action is provided', () => {
        render(
            <EmptyState
                title="No Results"
                description="No action available"
            />
        );
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
        expect(screen.queryByRole('link')).not.toBeInTheDocument();
    });
});
