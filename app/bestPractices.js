if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    globals : function() {
      let myObject = {
        name : 'Jory'
      };

      return myObject;
    },

    functions : function(flag) {
      if (flag) { 
        function getValue() { return 'a'; }
      } else {
        function getValue() { return 'b'; }
      }

      return getValue();
    },

    parseInt : function(num) {
      return parseInt(num, 10);
    },

    identity : function(val1, val2) {
      return (val1 === val2);
    }
  };
});
