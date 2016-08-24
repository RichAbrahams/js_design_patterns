import iterator from './iterator.js';

function init(){

let testArray = [{one: 'hello', two: 2222}, {one: 'hello2', two: 3333}];
let myIterator = iterator.build(testArray);
console.log(myIterator.next());
console.log(myIterator.next());
}

init();
