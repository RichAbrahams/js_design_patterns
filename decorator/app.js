import User from './decorator/user.js';
import execDecorator from './decorator/decorators/exec.js';
import adminDecorator from './decorator/decorators/exec.js';


function init(){
    const user1 = new User('user1');
    user1.decoratePermissions(execDecorator);
    console.log(user1.getPermissions());
}

init();
