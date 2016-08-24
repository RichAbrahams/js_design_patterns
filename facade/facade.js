import processor from './processor.js';

const facade = {
  processRequest: function (request){
      switch (Object.prototype.toString.call(request)){
        case '[object String]':
          return processor.processString(request);
        case '[object Number]':
          return processor.processNumber(request);
        case '[object Boolean]':
          return processor.processBoolean(request);
        case '[object Array]':
          return processor.processArray(request);
        case '[object Object]':
          return processor.processObject(request);
        default:
          return 'unable to process';
      }
  }
};

export default facade;
