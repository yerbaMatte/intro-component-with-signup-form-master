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

// show a message with a type of the input
function showMessage(input, message, type) {
  // get the .validation-box element
  const msg = input.parentNode.querySelector('div');
  // and set message there:
  msg.innerText = message;
  // update the class for the input #idINPUT
  input.className = type ? 'success' : 'error';
  // apply color red/green
  let color = type ? 'green' : 'red';
  input.style.borderColor = msg.style.color = color;
  // return the value of type
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
  //  TEST
  // const nameVal = document.querySelector('#FIRSTNAME');
  // showMessage(nameVal, 'wewe is massive', '312');
}

function showSuccess(input) {
  return showMessage(input, '', true);
}

function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
  // check if the value is not empty
  if (!hasValue(input, requiredMsg)) {
    return false;
  }
  // validate email format
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}
