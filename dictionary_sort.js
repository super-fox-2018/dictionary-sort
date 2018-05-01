const readline = require('readline');

function dictionary_sort(arr) {
var sort_arr = [];
var abc = 'abcdefghijklmnopqrstuvwxyz';
  for (var i = 0; i < arr.length; i++) {
    if (sort_arr.length===0) {
      sort_arr.push(arr[i]);
    }
    else {
      var sl = sort_arr.length;
      var push = false;
      for (var j = 0; j < sl; j++) {
        for (var k = 0; k < arr[i].length; k++) {

          if (sort_arr[j][k]==undefined) {

          }
          // else if (sort_arr[j][arr[i].length]!==undefined) {
          //
          // }
          else {
            if (push===false) {
              if (sort_arr[j][k].toLowerCase()!==arr[i][k].toLowerCase()) {
                var a = false;
                for (var l = 0; l < abc.length; l++) {
                  if (sort_arr[j][k]===abc[l]||sort_arr[j][k].toLowerCase()===abc[l]) {
                    a = true;
                  }
                  else if (arr[i][k]===abc[l]||arr[i][k].toLowerCase()===abc[l]) {
                    if (a==true) {
                      sort_arr.splice(j+1,0,arr[i]);
                      push = true;
                    }
                    else if (a==false) {
                      sort_arr.splice(j,0,arr[i]);
                      push = true;
                    }
                  }

                }
              }
            }
          }

          debugger;
        }
      }
    }

  }
  // var a = ['a','b'];
  // a.splice(1,0,'c');
  return sort_arr;
}
console.log(dictionary_sort(['Aa','bb','aabd','aa']));
console.log(dictionary_sort(['makan','duduk','tidur','terbang']));
console.log(dictionary_sort(['anggi','angga','ani','adi']));
// module.exports = Dictionary
