const oldInterface = () => {};

oldInterface.prototype.doSomethingOld = () => {
  console.log('old interface doing something');
};

export default new oldInterface;
