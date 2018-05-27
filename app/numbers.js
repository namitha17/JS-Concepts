if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      return ((num >> (bit - 1)) & 1);
    },

    base10: function(str) {
      return parseInt(str, 2);
    },

    convertToBinary: function(num) {
      return num.toString(2).padStart(8, '0'); //padstart part of es8
    },

    multiply: function(a, b) {
      const common = 1000000;
      a *= common;
      b *= common;

      return ((a * b) / (common * common));
    }
  };
});
