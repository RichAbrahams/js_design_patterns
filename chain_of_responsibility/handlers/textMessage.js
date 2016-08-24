import Handler from '../handler.js';
import emailHandler from './email';

const textMessageHandler = new Handler('sms', handlesms, emailHandler);

function handlesms (sms) {
  console.log('SMS sent to number', sms.recipient, 'message', sms.message);
}

export default textMessageHandler;
