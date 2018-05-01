const readline = require('readline');
// your code here to initialize the program and take user input
function dictionarySort(arr){
    for(let a=0; a<=arr.length-1; a++){
        for(let b=a+1; b<=arr.length-1; b++){
            var temp = arr[a];
            if(arr[a]>=arr[b]){
                arr[a] = arr[b];
                arr[b] = temp;
            }
        }
    }
    console.log(arr);
}



var arrOfWord = ['makan','duduk','tidur','terbang'];
var arrOfWord2 = ['anggi','angga','ani','adi'];
dictionarySort(arrOfWord2)
//module.exports = Dictionary
