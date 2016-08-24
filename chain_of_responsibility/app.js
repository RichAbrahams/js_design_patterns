import Handler from './handler.js';
import callHandler from './handlers/call.js'; // needs a start point in chain

function init(){

const call = {
  type: 'call',
  number: '0122344444',
  ownNumber: '01234277777'
};

const sms = {
  type: 'sms',
  recipient: '0234234345',
  message: 'SMS Message'
};

const email = {
  type: 'email',
  recipient: 'sdfsdf@fghfgh.com',
  message: 'Email Message',
};

const semaphore = {
  type: 'semaphore',
  recipient: 'yonder hill',
  message: 'Semaphore Message',
};

const handler = new Handler(null,null,callHandler);  // needs a start point in chain
handler.handleCommunication(email);
handler.handleCommunication(sms);
handler.handleCommunication(call);
handler.handleCommunication(semaphore);

}

init();
