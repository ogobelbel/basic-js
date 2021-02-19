const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
 
  let k = 0;
  for(let i = 0; i<=backyard.length-1; i++)
{
  let a = backyard[i]
for (let j = 0; j <= a.length-1; j++) {
  if(a[j]=='^^'){
      k++;
  }
}
}
return k;
};
