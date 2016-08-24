import Handler from '../handler.js';
import textMessageHandler from './textMessage.js';

const callHandler = new Handler('call', handlecall, textMessageHandler);

function handlecall (call) {
  console.log('Call placed to number', call.number, 'from number', call.ownNumber);
}

export default callHandler;
