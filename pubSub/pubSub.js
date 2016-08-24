  const subscribers = {};

  const controller = {

      publish: function(topic, data) {
          if (!subscribers[topic]) {
              return;
          }

          subscribers[topic].forEach(function(subscriber) {
              subscriber(data);
          });
      },

      subscribe: function(topic, callback) {

          if (!subscribers[topic]) {
              subscribers[topic] = [];
          }
          subscribers[topic].push(callback);
          const index = subscribers[topic].length -1;
          console.log('new sub', subscribers);
          return {
            dispose: function () {
              subscribers[topic].splice(index, 1);
              console.log('unsubscribed');
            }
          };
      }

  };

export default controller;
