const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date){
   return 'Unable to determine the time of year!';
  }
  if(Object.prototype.toString.call(date) === '[object Date]'){
  let a = new Date(Date.parse(date)).getMonth() + 1;
  if (a>=6 && a<=8){
      return 'summer';
  }
  if(a>=9 && a<=11){
      return 'autumn';
  }
  if(a==12 || a<=2){
      return 'winter';
  }
  if(a>=3 && a<= 5){
      return 'spring';
  }
}
else{
  throw 'error';
}
};
