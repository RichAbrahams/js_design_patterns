const GREET = "greet";

function myEmitter(){
  this.events = {}
}

myEmitter.prototype.on = function(type, action){
  this.events[type] = this.events[type] || [];
  this.events[type].push(action);
}

myEmitter.prototype.emit = function(type){
  this.events[type].forEach(function(event){
    event();
  })
}

testEmitter = new myEmitter;

testEmitter.on(GREET, function(){
  console.log('hello');
});

testEmitter.on(GREET, function(){
  console.log('hello again');
});

testEmitter.emit(GREET);

console.log(testEmitter);
