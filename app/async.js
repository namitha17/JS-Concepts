if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      //create a basic promise
      let myPromise = new Promise((resolve, reject) => {
        setTimeout(function(){
          resolve(value);
        }, 200);
      });

      return myPromise;
    },

    manipulateRemoteData : function(url) {
      let myPromise = $.Deferred();

      //ajax call was easier than reading the file
      $.ajax(url).then(function(response) {
        let names = response.people.map(val => val.name);
        myPromise.resolve(names.sort());
      });

      return myPromise.promise();
    }
  };
});
