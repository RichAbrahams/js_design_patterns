import pubSub from './pubSub';

const pub = function() {

const data = {
      something: 'this is message'
    };
const timer = (count = 0) => {
setTimeout(() => {
  const  counter = count || 0;
  if (counter < 15){
    data.something = `this is message ${counter}`;
    pubSub.publish('myTopic', data.something);
    timer(counter +1);
  } else {
    console.log('finished');
  }
},1000);

timer();
};
};

export default pub;
