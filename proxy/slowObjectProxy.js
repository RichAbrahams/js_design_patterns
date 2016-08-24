import slowObject from './slowObject';

let slowObjectInstance;

const SlowObjectProxy = function() {
    this.someMethod = function() {
        if (!slowObjectInstance) {
            const getProm = slowObject.init();
            getProm.then((arg) => {
              slowObjectInstance = arg;
              slowObjectInstance.someMethod();
            });
        } else {
            slowObjectInstance.someMethod();
        }
    };
};

const init = {
    init: function() {
        return new SlowObjectProxy;
    }
};

export default init;
