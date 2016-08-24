const newInterface = () => {};

newInterface.prototype.doSomethingNew = (newArg) => {
  console.log('new interface doing', newArg);
};

export default new newInterface;
