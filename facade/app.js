import facade from './facade.js';

function init(){

console.log(facade.processRequest('a string'));
console.log(facade.processRequest(45));
console.log(facade.processRequest(false));
console.log(facade.processRequest([0,1,2,3,4,5]));
console.log(facade.processRequest({data:'test object', moreData:'some more data'}));

}

init();
