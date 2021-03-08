const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options){
  if(!options.additionRepeatTimes){
    options.additionRepeatTimes = 1;
  }
  if(!options.repeatTimes){
    options.repeatTimes = 1;
  }
  if(!options.separator){
    options.separator = '+';
  }
 
    let strRes = '';
  console.log(options.repeatTimes);
    for (let i = 0; i < options.repeatTimes; i++) {
        strRes+=str;
        if((options.addition||options.addition===false||options.addition===null)){
            for (let j = 0; j < options.additionRepeatTimes; j++) {
                strRes+=options.addition;
                if(options.additionRepeatTimes>1 && j != options.additionRepeatTimes-1){
                    strRes+=options.additionSeparator;
                }
            }
        }
        if(options.repeatTimes>1 && i != options.repeatTimes-1){
            strRes+=options.separator;
        }
    }
 
   return strRes;
};
  
