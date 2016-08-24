const Mediator = function () {
  this.colleagues = [];
};

Mediator.prototype.register = function (colleague) {
  this.colleagues.push(colleague);
};

Mediator.prototype.send = function (recipientId, message) {
  this.colleagues.some((colleague) => {
    if (colleague.id === recipientId){
      return colleague.receiveMessage(message);
    }
  });
};

Mediator.prototype.broadcast = function (message, sender) {
  this.colleagues.forEach((colleague) => {
    if (colleague.id !== sender.id){
       colleague.receiveMessage(message);
    }
  });
};

export default Mediator;
