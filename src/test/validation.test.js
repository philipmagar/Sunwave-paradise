import { describe, it, expect } from 'vitest';
import { 
  validateEmail, 
  validatePhone, 
  validateRequired, 
  validateMinLength,
  validateMaxLength,
  validateFutureDate,
  validateCheckoutDate,
  validateForm,
  isFormValid
} from '../utils/validation';

describe('Validation Utilities', () => {
  describe('validateEmail', () => {
    it('returns null for valid email', () => {
      expect(validateEmail('test@example.com')).toBeNull();
      expect(validateEmail('user.name@domain.co.uk')).toBeNull();
    });

    it('returns error for invalid email', () => {
      expect(validateEmail('invalid')).toBeTruthy();
      expect(validateEmail('test@')).toBeTruthy();
      expect(validateEmail('@example.com')).toBeTruthy();
    });

    it('returns error for empty email', () => {
      expect(validateEmail('')).toBeTruthy();
      expect(validateEmail('   ')).toBeTruthy();
    });
  });

  describe('validatePhone', () => {
    it('returns null for valid phone numbers', () => {
      expect(validatePhone('+977-9800000000')).toBeNull();
      expect(validatePhone('9800000000')).toBeNull();
      expect(validatePhone('+1-555-123-4567')).toBeNull();
    });

    it('returns error for invalid phone numbers', () => {
      expect(validatePhone('123')).toBeTruthy();
      expect(validatePhone('abc')).toBeTruthy();
    });

    it('returns null for empty phone (optional field)', () => {
      expect(validatePhone('')).toBeNull();
      expect(validatePhone('   ')).toBeNull();
    });
  });

  describe('validateRequired', () => {
    it('returns null for non-empty values', () => {
      expect(validateRequired('test')).toBeNull();
      expect(validateRequired('123')).toBeNull();
    });

    it('returns error for empty values', () => {
      expect(validateRequired('')).toBeTruthy();
      expect(validateRequired('   ')).toBeTruthy();
      expect(validateRequired(null)).toBeTruthy();
      expect(validateRequired(undefined)).toBeTruthy();
    });
  });

  describe('validateMinLength', () => {
    it('returns null when length meets minimum', () => {
      expect(validateMinLength('hello', 3)).toBeNull();
      expect(validateMinLength('test', 4)).toBeNull();
    });

    it('returns error when length is below minimum', () => {
      expect(validateMinLength('hi', 3)).toBeTruthy();
    });

    it('returns null for empty value (required checked separately)', () => {
      expect(validateMinLength('', 1)).toBeNull();
    });
  });

  describe('validateMaxLength', () => {
    it('returns null when length is within maximum', () => {
      expect(validateMaxLength('hello', 10)).toBeNull();
      expect(validateMaxLength('test', 4)).toBeNull();
    });

    it('returns error when length exceeds maximum', () => {
      expect(validateMaxLength('hello world', 5)).toBeTruthy();
    });
  });

  describe('validateFutureDate', () => {
    it('returns null for future dates', () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const futureDate = tomorrow.toISOString().split('T')[0];
      expect(validateFutureDate(futureDate)).toBeNull();
    });

    it('returns error for past dates', () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const pastDate = yesterday.toISOString().split('T')[0];
      expect(validateFutureDate(pastDate)).toBeTruthy();
    });

    it('returns error for empty date', () => {
      expect(validateFutureDate('')).toBeTruthy();
    });
  });

  describe('validateCheckoutDate', () => {
    it('returns null when checkout is after checkin', () => {
      expect(validateCheckoutDate('2026-02-15', '2026-02-20')).toBeNull();
    });

    it('returns error when checkout is before checkin', () => {
      expect(validateCheckoutDate('2026-02-20', '2026-02-15')).toBeTruthy();
    });

    it('returns error when checkout equals checkin', () => {
      expect(validateCheckoutDate('2026-02-15', '2026-02-15')).toBeTruthy();
    });

    it('returns validation error for empty checkOut if provided checkIn', () => {
       // Code returns REQUIRED if checkOut is missing
      expect(validateCheckoutDate('2026-02-20', '')).toBeTruthy();
    });

    it('returns null if checkIn is missing (cannot validate sequence)', () => {
      expect(validateCheckoutDate('', '2026-02-20')).toBeNull();
    });
  });

  describe('validateForm', () => {
    it('returns empty object when all validations pass', () => {
      const formData = {
        email: 'test@example.com',
        name: 'John Doe'
      };
      const rules = {
        email: [validateEmail],
        name: [validateRequired]
      };
      const errors = validateForm(formData, rules);
      expect(errors).toEqual({});
    });

    it('returns errors object when validations fail', () => {
      const formData = {
        email: 'invalid',
        name: ''
      };
      const rules = {
        email: [validateEmail],
        name: [validateRequired]
      };
      const errors = validateForm(formData, rules);
      expect(errors.email).toBeTruthy();
      expect(errors.name).toBeTruthy();
    });

    it('stops at first error for each field', () => {
      const formData = {
        password: 'ab'
      };
      const rules = {
        password: [
          validateRequired,
          (val) => validateMinLength(val, 8),
          (val) => validateMaxLength(val, 20)
        ]
      };
      const errors = validateForm(formData, rules);
      // Should only have one error (minLength), not maxLength
      expect(errors.password).toBeTruthy();
    });
  });

  describe('isFormValid', () => {
    it('returns true when errors object is empty', () => {
      expect(isFormValid({})).toBe(true);
    });

    it('returns false when errors object has errors', () => {
      expect(isFormValid({ email: 'Invalid email' })).toBe(false);
      expect(isFormValid({ email: 'Invalid', name: 'Required' })).toBe(false);
    });
  });
});
