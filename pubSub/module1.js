import pubSub from './pubSub';

const mod1 = (function() {
    let counter = 0;
    const newData = (data) => {
      if (counter < 9) {
      console.log('Module 1 recieved some data: ' + data);
      counter ++;
    } else {
      subscription.dispose();
    }
  };

    const subscription = pubSub.subscribe('myTopic', newData);
})();

export default mod1;
