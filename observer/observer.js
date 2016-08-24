const Observer = function (name){
  this.name = name;
};

Observer.prototype.notify = function (event, data){
  console.log('event: ', event, 'data: ', data, 'report from: ', this.name);

};

export default Observer;
