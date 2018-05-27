if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      let timer;

      //function that does the count from start to end, every 100 miliseconds
      const counter = () => {
        if(start <= end){
          console.log(start++);
        }
      };

      timer = setInterval(() => counter(), 100);

      return ({
        cancel: () => {
          timer && clearInterval(timer);
        }
      });
    }
  };
});
