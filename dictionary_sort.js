const readline = require('readline');
// your code here to initialize the program and take user input

function arrOfWords(arr){
  var newArr = [];
  var temp = arr[0];
  var position = 0;

if(arr.length === 0){
  return "";
}
else{
 for(var i = 0; i < arr.length; i++){
   if(temp.toLowerCase() > arr[i].toLowerCase()){
     temp = arr[i];
     position = i;
   }
 }
    newArr.push(temp);
    arr.splice(position, 1);

    if(arr.length >= 1){
    return (newArr + ", " + arrOfWords(arr));
    }
    else{
      return(newArr + " "  + arrOfWords(arr));
    }
}

}






console.log(arrOfWords(["makan","duduk", "tidur", "terbang"]));

console.log(arrOfWords(["anggi","angga", "adi", "ani"]));

console.log(arrOfWords(["tracer","d.va", "sombra", "moira"]));

console.log(arrOfWords(["ganteng","genting", "gunting", "genteng"]));

module.exports = Dictionary
