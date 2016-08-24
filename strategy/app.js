import strategy from './strategy.js';
import telValidator from './telValidator.js';
import emailValidator from './emailValidator.js';


function init() {
    const validator = new strategy;
    console.log(validator.selectValidator(telValidator).validate('aaaaa'));
    console.log(validator.selectValidator(emailValidator).validate('aa@aaa'));
}

init();
