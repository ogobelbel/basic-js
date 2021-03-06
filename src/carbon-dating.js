const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== "string" ||!Number(sampleActivity) || Number(sampleActivity) < 0 ||
    MODERN_ACTIVITY<Number(sampleActivity) || Number(sampleActivity)==0) {
    return false;
  }


  let res = Math.log(MODERN_ACTIVITY/Number(sampleActivity))/(0.693/HALF_LIFE_PERIOD);
  return Math.ceil(res);

}