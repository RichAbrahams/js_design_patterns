import Mediator from './mediator.js';
import Colleague from './colleague.js';

function init(){

const mediator = new Mediator();
const colleague1 = Colleague.create('colleague1', mediator)
const colleague2 = Colleague.create('colleague2', mediator)
const colleague3 = Colleague.create('colleague3', mediator)
const colleague4 = Colleague.create('colleague4', mediator)
const colleague5 = Colleague.create('colleague5', mediator)

colleague1.sendMessage('Hello from 1', 'colleague2');
colleague2.sendMessage('Hello from 2', 'colleague3');
colleague3.sendMessage('Hello from 3', 'colleague4');
colleague4.sendMessage('Hello from 4', 'colleague5');
colleague5.sendMessage('Hello from 5');

}

init();
