const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  let turn = (2**disksNumber)-1;
  let AppData ={
   turns: turn,
   seconds:Math.floor(turn*3600/turnsSpeed)
 };

 return AppData;
};
