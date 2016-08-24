 function Iterator (collection) {
  this.collection = collection;
  this.index = 0;
}

Iterator.prototype = {
  constructor: Iterator,
  next: function() {
    return this.collection[this.index++];
  },
  isDone: function() {
    return this.index === this.collection.length;
  },
  reset: function() {
    this.index = 0;
    return this;
  },
  take: function(numberOfItems) {
    let newIndex = this.index + numberOfItems;
    let newArr = Array.prototype.slice.call(this.collection, this.index, newIndex);
    this.index = newIndex;
    return newArr;
  }
};

const builder = {
  build: (collection) => {
    let keys = Object.keys(collection);
    let tempArray = [];
    let prop;
    if (typeof collection === 'number') {
      collection = collection.toString();
    }
    if (keys.length){
      for (prop in collection){
        tempArray.push(collection[prop]);
      }
      collection = tempArray;
    }
    if (collection.length){
      return new Iterator(collection);
    } else {
      throw('Cannot build iterator from boolean, null, or undefined');
    }
  }
};


export default builder;
