'use strict';

// DOM ELEMENTS
// FORM
const form = document.querySelector('.signUp');
// DOM INPUT ELEMENTS
const firstName_input = document.querySelector('#FIRSTNAME');
const lastName_input = document.querySelector('#LASTNAME');
const email_input = document.querySelector('#EMAIL');
const password_input = document.querySelector('#PASSWORD');
// MESSAGES
// const NAME_REQUIRED = 'Please enter your name';
// const LAST_NAME_REQUIRED = 'Please enter your last name';
// const EMAIL_REQUIRED = 'Please enter your email';
// const EMAIL_INVALID = 'Please enter a correct email address format';

function emptiness(string) {
  return !string == '';
}

// Form Requirements
// first name and last name
function vNameAndLast(input) {
  // get string
  const stringValue = input.value;
  //check if the string is empty ------ guard clauses
  emptiness(stringValue);

  //  check if the string is between 3-25 chars length
  if (!(stringValue.length > 3 && stringValue.length < 25)) {
    // ERROR MESSAGE TEST
    input.nextElementSibling.textContent = 'Name is too short!';
    input.nextElementSibling.classList.add('invalidF');
    input.classList.add('invalidB');
    //
    return false;
  }
  input.classList.add('validB');
  return true;
}

// email is required  - correct writing
function vEmail(input) {
  const stringValue = input.value;
  // check if email box is empty
  emptiness(stringValue);
  // email regex pattern
  const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!regEmail.test(stringValue)) {
    return false;
  }
  input.classList.add('validB');
  return true;
}

function vPassword(input) {
  const stringValue = input.value;
  // check if email box is empty
  emptiness(stringValue);
  // email regex pattern
  // password - at least 8 chars,
  if (!(stringValue.length >= 8)) {
    return false;
  }
  // password -1 uppercase
  if (!/[A-Z]/.test(stringValue)) {
    return false;
  }
  // password - , 1 lowercase
  if (!/[a-z]/.test(stringValue)) {
    return false;
  }
  input.classList.add('validB');
  return true;
}

function formValidation() {
  let [nameVALID, lastVALID, emailVALID, passwordVALID] = Array(4).fill(true);

  if (!vNameAndLast(firstName_input)) {
    nameVALID = false;
  }
  if (!vNameAndLast(lastName_input)) {
    lastVALID = false;
  }
  if (!vEmail(email_input)) {
    emailVALID = false;
  }
  if (!vPassword(password_input)) {
    passwordVALID = false;
  }

  console.log(nameVALID, lastVALID, emailVALID, passwordVALID);

  return nameVALID && lastVALID && vEmail && vPassword;
}

// Button with type="submit" fires the 'submit event' :
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // stop the form to be submitted - e.q invalid input data
  if (formValidation()) {
    console.log('FORM SUBMITTED!');
  } else {
  }
});
