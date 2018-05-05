const readline = require('readline');

function sorting(array) {
for(var z = 0; z < array.length; z++){
  for(var j = z; j < array.length; j++){
    if(array[j].toLowerCase() < array[z].toLowerCase()){
      let swap = array[z];
      array[z] = array[j];
      array[j] = swap;
    }
  }return array;
}

}
let arr1 = ['makan', 'duduk', 'Tidur', 'terbang'];
let arr2 = ['anggi', 'Angga', 'adi', 'ani'];


console.log(sorting(arr1));
console.log(sorting(arr2));

// module.exports = Dictionary
