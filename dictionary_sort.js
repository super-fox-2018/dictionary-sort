const readline = require('readline');
// your code here to initialize the program and take user input
var arrOfWord = ['makan','duduk','tidur','terbang'];
var arrOfName = ['anggi','angga','ani','adi'];
function dictionary(arr){
for(let i=0; i<arr.length; i++){
    if(arr[i]>arr[i+1]){
      var temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
      i = -1;
    }
  }
  return arr;
}


console.log(dictionary(arrOfWord)); //duduk,makan,terbang,tidur
console.log(dictionary(arrOfName)); //angga,anggi,adi,ani
