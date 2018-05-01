const readline = require('readline');

function sorting(array) {
  let min = 0;
  let minIndex = 0;
  for (var i = 0; i < array.length; i++) {
    min = array[i];
    minIndex = i;
    for (var j = i; j < array.length; j++) {
      if (array[j].toLowerCase() < min.toLowerCase()) {
        min = array[j];
        minIndex = j;
      }
    }
    array[minIndex] = array[i];
    array[i] = min;
  }
  return array.join(',');
}

let arr1 = ['makan', 'duduk', 'Tidur', 'terbang'];
let arr2 = ['anggi', 'Angga', 'adi', 'ani'];

console.log(sorting(arr1));
console.log(sorting(arr2));

// module.exports = Dictionary;
