const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr ) {
  let arr1 =  arr.slice();
  if(Array.isArray(arr1)==false){
      throw 'error';
    }
    for (let i = 0; i < arr1.length; i++) {
     if(Number.isInteger(arr1[i])==true){
         continue;          }
      if(((arr1[i] == '--double-prev'||arr1[i] == '--discard-prev')&&i==0)||
      ((arr1[i] == '--double-next'||arr1[i] == '--discard-next')&&i==arr1.length-1)){
        arr1.splice(i, 1);
        i--;
      }
     else{
      if (arr1[i] == '--discard-next'){
        if(arr1[i+2]=='--discard-prev' ||arr1[i+2]=='--double-prev' )
        {
          arr1.splice(i, 3);
          i-=2;
        }
        else{
          arr1.splice(i, 2);
          i--;
        }
      }
      if (arr1[i] == '--discard-prev'){
          arr1.splice(i-1, 2);
        i=i-2;
      }
      if (arr1[i] == '--double-next'){
        arr1.splice(i, 1, arr1[i+1]); 
      }
      if (arr1[i] == '--double-prev'){
        arr1.splice(i, 1, arr1[i-1]); 
      }
     }
      
    }
    return arr1;
};
