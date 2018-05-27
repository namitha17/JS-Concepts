if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(null, arr); //apply allows us to send array as args
    },

    speak : function(fn, obj) {
      return fn.call(obj);  //call allows external values to override the constructor values
    },

    functionFunction : function(str) {
      return function(nextArg){
        return str + ", " + nextArg;
      }
    },

    makeClosures : function(arr, fn) {
      let retArr = [];

      const makeClosure = (val) => {
        return () => {      //closure function, that access val from outside
          return fn(val);
        }
      }

      for(let val of arr){
        let clResult = makeClosure(val);
        retArr.push(clResult);
      }

      return retArr;
    },

    partial : function(fn, str1, str2) {
      return (str3) => {
        return fn(str1, str2, str3);
      }
    },

    useArguments : function() {
      let sum = 0;
      for(arg of arguments){
        sum = sum + arg;
      }

      return sum;
    },

    callIt : function(fn) {
      //Array.prototype.slice.call converts the args to array
      const args = Array.prototype.slice.call(arguments, 1, arguments.length);
      fn.apply(null, args);
    },

    partialUsingArguments : function(fn) {
      const args = Array.prototype.slice.call(arguments, 1, arguments.length);

      //apply the same logic for the rest of the arguments and accumulate all
      return function(){
        const moreArgs = args.concat(Array.prototype.slice.call(arguments));
        return fn.apply(null, moreArgs);
      }
    },

    curryIt : function(fn) {
      if (fn.length === 0) {
        return fn;
      }

      //arguments accumulated through recursion of following curry function
      function currier(c, args) {
        return (x) => {
          if (c - 1 === 0) {
            return fn(...args, x);
          }

          //instead of passing target depth (fn.length),
          //the remaining depth of recursion is sent
          return currier(c - 1, [...args, x]);
        };
      }
      return currier(fn.length, []);
    }
  };
});
