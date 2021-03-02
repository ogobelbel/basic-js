const CustomError = require("../extensions/custom-error");

let ress = [],
str = '';
const chainMaker = {
    
    getLength() {
      return 0;
    },
    addLink(value) {
      ress.push(value);
      return this;
    },
    removeLink(position) {
        if(ress[position-1] === undefined || isNaN(position)==true){
            ress = [];
            throw 'error';
        }
     ress.splice(position-1, 1);
     return this;
    },
    reverseChain() {
      ress.reverse();
      return this;
    },
    finishChain() {
        for(let i = 0; i<ress.length; i++){
            str+=('( ' + ress[i] + ' )');
            if(i!=ress.length-1){
                str+='~~';
            }
        }
        ress = [];
        let a = str;
        str = '';
     return a;
    }
  };
module.exports = chainMaker;
