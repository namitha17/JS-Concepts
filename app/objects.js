if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.call(obj);  //use the call method to call the method with differnt context
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;  //alter the constructor for multiple objects to use it
    },

    iterate : function(obj) {
      let retArr = [];
      for(let prop in obj){
        if(obj.hasOwnProperty(prop)){
          retArr.push(prop + ": " + obj[prop]);
        }
      }

      return retArr;
    }
  };
});
