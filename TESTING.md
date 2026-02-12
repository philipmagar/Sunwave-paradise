# Testing Guide

This project uses **Vitest** for unit and component testing, along with **React Testing Library** for component interaction testing.

## 🏃‍♂️ Running Tests

### Run all tests
```bash
npm test
# or
npm run test:run
```

### Run tests with coverage
```bash
npm run test:coverage
```

### Run tests in watch mode (default for npm test)
```bash
npm test
```

## 🧪 What is Tested

### Keep Critical Components Tested
We focus testing on:
1. **Utility Functions**: Complex logic like validation.
2. **UI Components**: Reusable components (Button, Input, etc) to ensure they render correctly and handle props.
3. **Critical Business Logic**: Booking widget validation and submission flow.

### Included Tests

#### 1. Validation Utilities (`src/test/validation.test.js`)
- Email validation (regex)
- Phone validation (international formats)
- Required fields
- Min/Max length
- Date validation (future dates, checkout after checkin)
- Form level validation

#### 2. UI Components
- **Button** (`src/test/Button.test.jsx`): Variants, sizes, loading states, click handling.
- **Input** (`src/test/Input.test.jsx`): Rendering, error states, accessibility attributes.
- **LoadingSpinner** (`src/test/LoadingSpinner.test.jsx`): Sizes, fullscreen mode.
- **EmptyState** (`src/test/EmptyState.test.jsx`): Icons, descriptions, action buttons.

#### 3. Feature Components
- **BookingWidget** (`src/test/BookingWidget.test.jsx`):
  - Rendering in normal and compact modes
  - Validation logic (checkout after checkin)
  - Submission simulation
  - Loading states

## 🛠️ Adding New Tests

### Setup
Tests are located in `src/test/`. The setup file `src/test/setup.js` configures the environment with:
- `jsdom` environment
- `@testing-library/jest-dom` matchers (e.g. `toBeInTheDocument`)
- Global mocks (matchMedia, IntersectionObserver)

### Component Test Template
```jsx
// src/test/MyComponent.test.jsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyComponent from '../components/MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

## 📊 Coverage
Coverage reports are generated using `@vitest/coverage-v8`.
To verify critical paths are covered, run `npm run test:coverage`.
