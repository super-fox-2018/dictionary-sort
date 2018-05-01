const readline = require('readline');
// your code here to initialize the program and take user input

function dictionarySort(arr) {
  var newArr = arr.slice();

  for (var i = 0; i < newArr.length; i++) {
    for (var j = i+1; j < newArr.length; j++) {
      if (newArr[i].toLowerCase() > newArr[j].toLowerCase()) {
        var temp = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = temp;
      }
    }
  }

  return newArr.join(',');
}

console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']));
// ['duduk', 'makan', 'terbang', 'tidur']
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']));
// ['adi', 'angga', 'angga', 'ani']
//
module.exports = Dictionary
