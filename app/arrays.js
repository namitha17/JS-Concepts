if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return (arr.findIndex(val => val === item));
    },

    sum : function(arr) {
      return (arr.reduce((a,b) => a + b));
    },

    remove : function(arr, item) {
      return (arr.filter(val => val !== item));
    },

    removeWithoutCopy : function(arr, item) {
      let i = arr.length;
      while(i--){
        if(arr[i] === item){
          arr.splice(i, 1);
        }
      }

      return arr;
    },

    append : function(arr, item) {
      //return (arr.push(item));
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item)
      return arr;
    },

    curtail : function(arr) {
      arr.shift(arr)
      return arr;
    },

    concat : function(arr1, arr2) {
      return [...arr1, ...arr2];
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      const filterArr = arr.filter(val => val === item);
      return filterArr.length;
    },

    duplicates : function(arr) {
      const duplicates = arr
      .map((val) => {                 //thanks to all fancy things in JS now!
        return {count: 1, val: val}
      })
      .reduce((a, b) => {
        a[b.val] = (a[b.val] || 0) + b.count
        return a
      }, {})

      return (Object.keys(duplicates).filter((a) => duplicates[a] > 1));
    },

    square : function(arr) {
      return (arr.map(val => val * val));
    },

    findAllOccurrences : function(arr, target) {
      return (arr.reduce((a, val, index) => (val === target) ? a.concat(index) : a, []));
    }
  };
});
