import Handler from '../handler.js';

const emailHandler = new Handler('email', handleEmail, null);

function handleEmail (email) {
  console.log('Email sent to', email.recipient, 'message', email.message);
}

export default emailHandler;
