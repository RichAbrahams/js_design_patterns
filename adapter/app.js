import oldInterfaceAdapter from './oldInterfaceAdapter.js';
import newInterface from './newInterface.js';

function init(){
  const oldInt = oldInterfaceAdapter;
  oldInt.doSomethingOld();
  const newInt = newInterface;
  newInt.doSomethingNew('something else');
}

init();
