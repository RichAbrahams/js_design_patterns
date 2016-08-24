import Subject from './subject.js';
import Observer from './observer.js';

function init() {
  const subject = new Subject;
  const observer1 = new Observer('observer1');
  const observer2 = new Observer('observer2');
  const data = {
    prop: 'some data'
  };
subject.observe(observer1);
subject.observe(observer2);
subject.add(data);
subject.unobserve(observer1);
subject.remove(data);
}

init();
