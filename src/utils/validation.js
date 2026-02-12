import { VALIDATION_MESSAGES } from '../constants';

/**
 * Validates email format
 * @param {string} email - Email address to validate
 * @returns {string|null} Error message or null if valid
 */
export const validateEmail = (email) => {
  if (!email || email.trim() === '') {
    return VALIDATION_MESSAGES.REQUIRED;
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return VALIDATION_MESSAGES.INVALID_EMAIL;
  }
  
  return null;
};

/**
 * Validates phone number format
 * @param {string} phone - Phone number to validate
 * @returns {string|null} Error message or null if valid
 */
export const validatePhone = (phone) => {
  if (!phone || phone.trim() === '') {
    return null; // Phone is optional in most forms
  }
  
  // Accepts formats: +1-555-123-4567, +977 9812345678, (123) 456-7890
  // Allow digits, spaces, dashes, dots, parentheses, and plus sign
  const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{3,10}$/;
  
  // Simple check: at least 7 digits, allowed characters only
  const cleanPhone = phone.replace(/[-\s\.\(\)\+]/g, '');
  const isValidChars = /^[0-9\-\s\.\(\)\+]+$/.test(phone);
  
  if (!isValidChars || cleanPhone.length < 7 || cleanPhone.length > 15) {
     return VALIDATION_MESSAGES.INVALID_PHONE;
  }
  
  return null;
};

/**
 * Validates required field
 * @param {string} value - Value to validate
 * @param {string} fieldName - Name of the field for error message
 * @returns {string|null} Error message or null if valid
 */
export const validateRequired = (value, fieldName = 'This field') => {
  if (!value || value.toString().trim() === '') {
    return VALIDATION_MESSAGES.REQUIRED;
  }
  return null;
};

/**
 * Validates minimum length
 * @param {string} value - Value to validate
 * @param {number} minLength - Minimum required length
 * @returns {string|null} Error message or null if valid
 */
export const validateMinLength = (value, minLength) => {
  if (value && value.length < minLength) {
    return VALIDATION_MESSAGES.MIN_LENGTH(minLength);
  }
  return null;
};

/**
 * Validates maximum length
 * @param {string} value - Value to validate
 * @param {number} maxLength - Maximum allowed length
 * @returns {string|null} Error message or null if valid
 */
export const validateMaxLength = (value, maxLength) => {
  if (value && value.length > maxLength) {
    return VALIDATION_MESSAGES.MAX_LENGTH(maxLength);
  }
  return null;
};

/**
 * Validates date is not in the past
 * @param {string} date - Date string to validate
 * @returns {string|null} Error message or null if valid
 */
export const validateFutureDate = (date) => {
  if (!date) {
    return VALIDATION_MESSAGES.REQUIRED;
  }
  
  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  if (selectedDate < today) {
    return 'Date cannot be in the past';
  }
  
  return null;
};

/**
 * Validates checkout date is after checkin date
 * @param {string} checkIn - Check-in date
 * @param {string} checkOut - Check-out date
 * @returns {string|null} Error message or null if valid
 */
export const validateCheckoutDate = (checkIn, checkOut) => {
  if (!checkOut) {
    return VALIDATION_MESSAGES.REQUIRED;
  }
  
  if (!checkIn) {
    return null; // Can't validate without check-in date
  }
  
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  
  if (checkOutDate <= checkInDate) {
    return VALIDATION_MESSAGES.CHECKOUT_BEFORE_CHECKIN;
  }
  
  return null;
};

/**
 * Validates entire form object
 * @param {Object} formData - Form data object
 * @param {Object} validationRules - Validation rules for each field
 * @returns {Object} Object with field names as keys and error messages as values
 */
export const validateForm = (formData, validationRules) => {
  const errors = {};
  
  Object.keys(validationRules).forEach(fieldName => {
    const rules = validationRules[fieldName];
    const value = formData[fieldName];
    
    for (const rule of rules) {
      const error = rule(value, formData);
      if (error) {
        errors[fieldName] = error;
        break; // Stop at first error for this field
      }
    }
  });
  
  return errors;
};

/**
 * Checks if form has any errors
 * @param {Object} errors - Errors object from validateForm
 * @returns {boolean} True if form is valid (no errors)
 */
export const isFormValid = (errors) => {
  return Object.keys(errors).length === 0;
};
