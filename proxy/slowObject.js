const slowObject = function () {
    this.someMethod = function() {
        console.log('someMethod was invoked on slowObject');
    };
};

const init = {
    init: function() {
      const pr = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(new slowObject());
        },3000);
      });
      return pr;
  }
};

export default init;
