import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../components/ui/Button';

describe('Button Component', () => {
    it('renders children correctly', () => {
        render(<Button>Click Me</Button>);
        expect(screen.getByRole('button', { name: 'Click Me' })).toBeInTheDocument();
    });

    it('applies primary variant by default', () => {
        render(<Button>Primary</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('btn-primary');
    });

    it('applies secondary variant', () => {
        render(<Button variant="secondary">Secondary</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('btn-secondary');
    });

    it('applies whatsapp variant', () => {
        render(<Button variant="whatsapp">WhatsApp</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('btn-whatsapp');
    });

    it('applies small size', () => {
        render(<Button size="sm">Small</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('py-2', 'px-4', 'text-sm');
    });

    it('applies medium size by default', () => {
        render(<Button>Medium</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('py-3', 'px-8');
    });

    it('applies large size', () => {
        render(<Button size="lg">Large</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('py-4', 'px-10', 'text-lg');
    });

    it('shows loading state', () => {
        render(<Button loading>Submit</Button>);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
        expect(screen.queryByText('Submit')).not.toBeInTheDocument();
    });

    it('is disabled when loading', () => {
        render(<Button loading>Submit</Button>);
        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
    });

    it('is disabled when disabled prop is true', () => {
        render(<Button disabled>Submit</Button>);
        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
    });

    it('applies opacity when disabled', () => {
        render(<Button disabled>Submit</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('opacity-50', 'cursor-not-allowed');
    });

    it('calls onClick handler when clicked', async () => {
        const handleClick = vi.fn();
        const user = userEvent.setup();

        render(<Button onClick={handleClick}>Click</Button>);
        const button = screen.getByRole('button');

        await user.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', async () => {
        const handleClick = vi.fn();
        const user = userEvent.setup();

        render(<Button onClick={handleClick} disabled>Click</Button>);
        const button = screen.getByRole('button');

        await user.click(button);
        expect(handleClick).not.toHaveBeenCalled();
    });

    it('applies custom className', () => {
        render(<Button className="custom-class">Button</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('custom-class');
    });
});
