'use strict';

// From Requirements
// first name and last name - no empty, 3-25 chars size
// email is required  - correct writing
// password - at least 8 chars, 1 lowercase, 1 uppercase, 1 Number, 1 special char

// DOM ELEMENTS
// FORM
const form = document.querySelector('.signUp');
// DOM INPUT ELEMENTS
const firstName_input = document.querySelector('#FIRSTNAME');
const lastName_input = document.querySelector('#LASTNAME');
const email_input = document.querySelector('#EMAIL');
const password_input = document.querySelector('#PASSWORD');
// MESSAGES
const NAME_REQUIRED = 'Please enter your name';
const LAST_NAME_REQUIRED = 'Please enter your last name';
const EMAIL_REQUIRED = 'Please enter your email';
const EMAIL_INVALID = 'Please enter a correct email address format';

// Button with type="submit" fires the 'submit event' :
form.addEventListener('submit', (e) => {
  // stop the form to be submitted - e.q invalid input data
  e.preventDefault();
});
