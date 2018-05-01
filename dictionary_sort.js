// const readline = require('readline');
//
// module.exports = Dictionary
function dictionarySort(data) {
  for (var i = 0; i < data.length; i++) {
    var firstDataI = ''
    for (var j = 0; j < data.length; j++) {
      if (data[i] < data[j]) {
        firstDataI = data[i]
        data[i] = data[j]
        data[j] = firstDataI
      }
    }
  }
  return data;
}
console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']));
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']));
