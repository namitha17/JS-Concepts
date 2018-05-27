if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      let retList = [];
      let directories = [];

      //recursive function to fetch the list of files
      const fetchfiles = (data) => {
        let files = data.files;
        directories.push(data.dir);

        //go through all indices and recursive find files
        for(let i=0; i<files.length; i++){
          if(typeof files[i] === 'string'){
            if(!dirName || directories.indexOf(dirName) > -1){
                retList.push(files[i]);
            }
          }else{
            fetchfiles(files[i]);
          }
        }

        //remove the directory name once all files under it are found
        directories.pop();
      };

      fetchfiles(data);
      return retList;
    },

    permute: function(arr) {
      let result = [];

      const permutator = (thisArr, a = []) => {
        if (thisArr.length === 0) {
          result.push(a);
        }else{
          //for every element in the array craete the permutation
          //splice it out and move on to the next
          for (let i = 0; i < thisArr.length; i++) {
            let currArr = thisArr.slice();
            let nextArr = currArr.splice(i, 1);
            permutator(currArr.slice(), a.concat(nextArr))
         }
       }
     }

     permutator(arr);
     return result;
    }
  };
});
