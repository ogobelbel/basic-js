
let alphavit = [
  { letter: 'A', id: 0 },
  { letter: 'B', id: 1 },
  { letter: 'C', id: 2 },
  { letter: 'D', id: 3 },
  { letter: 'E', id: 4},
  { letter: 'F', id: 5},
  { letter: 'G', id: 6 },
  { letter: 'H', id: 7},
  { letter: 'I', id: 8 },
  { letter: 'J', id: 9},
  { letter: 'K', id: 10 },
  { letter: 'L', id: 11},
  { letter: 'M', id: 12 },
  { letter: 'N', id: 13 },
  { letter: 'O', id: 14 },
  { letter: 'P', id: 15 },
  { letter: 'Q', id: 16 },
  { letter: 'R', id: 17 },
  { letter: 'S', id: 18 },
  { letter: 'T', id: 19},
  { letter: 'U', id: 20},
  { letter: 'V', id: 21},
  { letter: 'W', id: 22 },
  { letter: 'X', id: 23 },
  { letter: 'Y', id: 24 },
  { letter: 'Z', id: 25 },
  ];
  
  let letterId = 0,
      letterName = '';
  
  
  
  
  function fillerOfKey(str, key1){ 
      let key2 = '';//формируем ключ
      let j=0;
      for (let i = 0; i < str.length; i++) {
          if(j==key1.length){
              j=0;
              }
              if((str[i].charCodeAt()<65 || str[i].charCodeAt()>90)){
                  if(str[i]==' ' ){
                      key2 +=(' ');
                      continue;
                  }
                  else{
                      key2 +=str[i];  
                  }
                  continue;
              }
      if(key2.length!=str.length){
              key2 +=key1[j];
              j++;
      }
     
  }
  return key2;
  }
  
  
  function coder(code, str,key2, res){
      let res2 = ''; // кодер/декодер
      for(let i = 0; i<str.length; i++){
         if(str[i].charCodeAt()<65 || str[i].charCodeAt()>90){
          res2 += str[i];
          continue;
         }
         if(code==1){ 
          res = finderId(str[i])+finderId(key2[i]);
         }
         else{
          res = finderId(str[i])+26-finderId(key2[i]);
         }
          if(res>=26){
              res-=26;
          }
        
          res2 += finderLetter(res);
      }
      return res2;
  }
  
  
  function finderId(a){
      let searchTerm = a;
       letterId = alphavit.find(arg => arg.letter === searchTerm).id;
       return letterId;
  }
  
  function finderLetter(a){
      let searchTerm = a;
      letterName = alphavit.find(arg => arg.id === searchTerm).letter;
       return letterName;
  }
  
  
  class VigenereCipheringMachine {
    encrypt(message, key) {
        if(!message||!key){
          throw 'error';
        }
        let key1 = key.toUpperCase();
        let str = message.toUpperCase();
        let res = '';
        let key2 = fillerOfKey(str,key1);
        
    
       return coder(1, str,key2, res);
      }    
      decrypt(message, key) {
        if(!message||!key){
          throw 'error';
        }
        let key1 = key.toUpperCase();
        let str = message.toUpperCase();
        let res = '';
        let key2 = fillerOfKey(str,key1);
        
    
       return coder(2, str,key2, res);
      }
    }

module.exports = VigenereCipheringMachine;
