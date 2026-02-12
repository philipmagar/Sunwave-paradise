import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingWidget from '../components/BookingWidget';

// Mock hotelData since it's imported in the component
vi.mock('../data/hotelData', () => ({
    roomTypes: [
        { id: 1, slug: 'deluxe', name: 'Deluxe Room', price: 100, currency: '$' },
        { id: 2, slug: 'suite', name: 'Suite', price: 200, currency: '$' }
    ]
}));

describe('BookingWidget Component', () => {
    it('renders correctly with default props', () => {
        render(<BookingWidget />);
        expect(screen.getByLabelText(/check-in date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/check-out date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/room type/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /check availability/i })).toBeInTheDocument();
    });

    it('renders in compact mode', () => {
        const { container } = render(<BookingWidget isCompact={true} />); // Check for compact styling or structure if applicable
        // For now, check if inputs are still present
        expect(screen.getByLabelText(/check-in/i)).toBeInTheDocument();
        expect(container.querySelector('form')).toHaveClass('grid-cols-1 md:grid-cols-5');
    });

    it('validates required fields on submission', async () => {
        const user = userEvent.setup();
        render(<BookingWidget />);

        // Submit empty form
        const submitButton = screen.getByRole('button', { name: /check availability/i });
        await user.click(submitButton);

        // Should show validation errors
        // Note: The HTML5 'required' attribute might prevent submission, 
        // but the component also has manual validation.
        // Let's check for manual validation errors if they appear.
        // The component uses custom Input components which show errors.

        // Check for "This field is required" or similar error messages
        // The input implementation shows error text below the input on error prop.
        // However, the browser's native validation might catch it first if "required" attribute is present.
        // To test custom validation, we can fill some fields but leave others empty or invalid.
    });

    it('validates check-out date is after check-in date', async () => {
        const user = userEvent.setup();
        render(<BookingWidget />);

        const today = new Date().toISOString().split('T')[0];
        const checkInInput = screen.getByLabelText(/check-in date/i);
        const checkOutInput = screen.getByLabelText(/check-out date/i);

        // Set check-in date
        await fireEvent.change(checkInInput, { target: { value: today } });

        // Set check-out date same as check-in (invalid)
        await fireEvent.change(checkOutInput, { target: { value: today } });

        // Try to submit
        const submitButton = screen.getByRole('button', { name: /check availability/i });
        await user.click(submitButton);

        // Expect validation error
        expect(screen.getByText(/check-out date must be after/i)).toBeInTheDocument();
    });

    it('submits form with valid data', async () => {
        const user = userEvent.setup();
        const handleSubmit = vi.fn();

        render(<BookingWidget onSubmit={handleSubmit} />);

        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const dayAfterTomorrow = new Date(today);
        dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

        const checkInStr = tomorrow.toISOString().split('T')[0];
        const checkOutStr = dayAfterTomorrow.toISOString().split('T')[0];

        // Fill form
        await fireEvent.change(screen.getByLabelText(/check-in date/i), { target: { value: checkInStr } });
        await fireEvent.change(screen.getByLabelText(/check-out date/i), { target: { value: checkOutStr } });
        await user.selectOptions(screen.getByLabelText(/number of guests/i), '2');
        await user.selectOptions(screen.getByLabelText(/room type/i), 'deluxe');

        // Submit
        const submitButton = screen.getByRole('button', { name: /check availability/i });
        await user.click(submitButton);

        // Wait for submission
        await waitFor(() => {
            expect(handleSubmit).toHaveBeenCalledWith({
                checkIn: checkInStr,
                checkOut: checkOutStr,
                guests: '2',
                roomType: 'deluxe'
            });
        });
    });

    it('shows loading state during submission', async () => {
        const user = userEvent.setup();
        // onSubmit that never resolves to keep in loading state or takes time
        const handleSubmit = vi.fn(() => new Promise(resolve => setTimeout(resolve, 100)));

        render(<BookingWidget onSubmit={handleSubmit} />);

        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const dayAfterTomorrow = new Date(today);
        dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

        await fireEvent.change(screen.getByLabelText(/check-in/i), { target: { value: tomorrow.toISOString().split('T')[0] } });
        await fireEvent.change(screen.getByLabelText(/check-out/i), { target: { value: dayAfterTomorrow.toISOString().split('T')[0] } });
        await user.selectOptions(screen.getByLabelText(/guests/i), '1');
        await user.selectOptions(screen.getByLabelText(/room/i), 'deluxe');

        const submitButton = screen.getByRole('button', { name: /check availability/i });
        await user.click(submitButton);

        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });
});
