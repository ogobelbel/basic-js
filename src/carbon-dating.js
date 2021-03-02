const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(!sampleActivity ||
    typeof sampleActivity !== "string" ||
    MODERN_ACTIVITY < sampleActivity ||
    sampleActivity < 0) {
    return false;
  }
 if(!Number(sampleActivity)){
  return false;
}

  let res = Math.log(MODERN_ACTIVITY/Number(sampleActivity))/(0.693/HALF_LIFE_PERIOD);
  return Math.ceil(res);
};
