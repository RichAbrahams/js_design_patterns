import slowObjectProxy from './slowObjectProxy';
import initOb from './slowObject';
function init(){

let p = slowObjectProxy.init();
p.someMethod();

}

init();
