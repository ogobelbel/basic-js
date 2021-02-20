const CustomError = require("../extensions/custom-error");
function isString(val) {
  return (typeof val === "string" || val instanceof String);
}
module.exports = function createDreamTeam(members) {

  if( Array.isArray(members)==false)
  {
    return false;
  }
    let res =[],
       str = '';
      for(let i = 0; i<members.length; i++){
           str = members[i];
         if( isString(str) == false){
         continue;
         }
         else{
           let j = 0;
           while(str[j] == ' '){
             j++;
           }
          res.push(str[j].toUpperCase());
         }
    }
    res.sort(function(a, b){
      if(a < b) { return -1; }
  if(a > b) { return 1; }
  return 0;
    });
    return res.join('');
    }

