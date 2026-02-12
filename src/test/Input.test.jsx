import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from '../components/ui/Input';

describe('Input Component', () => {
    it('renders with label', () => {
        render(<Input label="Email" />);
        expect(screen.getByLabelText('Email')).toBeInTheDocument();
    });

    it('shows required indicator when required', () => {
        render(<Input label="Email" required />);
        expect(screen.getByLabelText(/required/i)).toBeInTheDocument();
    });

    it('displays error message when error prop is provided', () => {
        render(<Input label="Email" error="Email is required" />);
        expect(screen.getByRole('alert')).toHaveTextContent('Email is required');
    });

    it('displays helper text when provided', () => {
        render(<Input label="Email" helperText="Enter your email address" />);
        expect(screen.getByText('Enter your email address')).toBeInTheDocument();
    });

    it('applies error styling when error exists', () => {
        render(<Input label="Email" error="Invalid email" />);
        const input = screen.getByLabelText('Email');
        expect(input).toHaveClass('border-red-500');
    });

    it('calls onChange handler when value changes', async () => {
        const handleChange = vi.fn();
        const user = userEvent.setup();

        render(<Input label="Email" onChange={handleChange} />);
        const input = screen.getByLabelText('Email');

        await user.type(input, 'test@example.com');
        expect(handleChange).toHaveBeenCalled();
    });

    it('sets aria-invalid when error exists', () => {
        render(<Input label="Email" error="Invalid" />);
        const input = screen.getByLabelText('Email');
        expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    it('links error message with aria-describedby', () => {
        render(<Input label="Email" id="email-input" error="Invalid email" />);
        const input = screen.getByLabelText('Email');
        expect(input).toHaveAttribute('aria-describedby', 'email-input-error');
    });
});
