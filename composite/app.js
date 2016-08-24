import Node from './node.js';

function init(){
  const rootNode = new Node('Bob');
  const child1 = new Node('Bill');
  const child2 = new Node('Jill');
  const child3 = new Node('Phil');
  const child4 = new Node('Billy Bob');
  const child5 = new Node('Jilly Kate');
  const child6 = new Node('Attic Boy');

rootNode.addChild(child1);
rootNode.addChild(child2);
child2.addChild(child3);
child2.addChild(child4);
child4.addChild(child5);
child4.addChild(child6);

rootNode.traverseDown();
console.log('*******');
child6.traverseUp();

}

init();
