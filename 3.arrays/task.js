function compareArrays(arr1, arr2){
  
      if (arr1.length === arr2.length){
         return arr1.every((n, i) => n === arr2[i]);
         } 
         return false;          
       
      }
  
  
function advancedFilter(arr) {

      return result = arr.filter(selectedNumbers => selectedNumbers % 3 === 0 && selectedNumbers > 0).map(selectedNumbers  => selectedNumbers * 10);
      } 
