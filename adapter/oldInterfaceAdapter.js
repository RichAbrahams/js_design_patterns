import newInterface from './newInterface.js';

const adapter = {
  doSomethingOld: function () {
    return newInterface.doSomethingNew('new thing');
  }
};

export default adapter;
