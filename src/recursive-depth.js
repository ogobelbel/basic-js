const CustomError = require("../extensions/custom-error");



let count = 1;
let count1 = 0;
let flag = true;
let mass = [];
let i = 0;
let arrNumber = 0;
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    {
      for (let i = 0; i < arr.length; i++) { //удаление цифр из массива
        if(Array.isArray(arr[i])==false){
          arr.splice(i, 1);
          i--;
        }
      }
       // сохранение изначального массива
      if(flag==true){
         mass = arr.slice();
        flag=false;
      }
      if((arr[0] )){
        count++;
        
      }
      if(arr[0]){  // углубление
        return this.calculateDepth( arr[0]);
      }
      
      else{ // если массив пустой переходим к некст элементу
        arrNumber++;
        if(count>=count1){
         
          count1=count;
        }
        count = 1;
      
        if(mass[arrNumber]){ // если есть элемент в изначальном массиве - идем к нему
          return this.calculateDepth(mass[arrNumber]);
        }
         // если нет - возвращаем макс глубину
          return +count1; 
        
      }
    }
  }
}
