function dictionarySort(arr){
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < (arr.length - i - 1); j += 1) {
      if (arr[j].toLowerCase() > arr[j+1].toLowerCase()) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang'])); 
// ['duduk', 'makan', 'terbang', 'tidur']
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi'])); 
// ['adi', 'angga', 'angga', 'ani']


// FOR TEST WITH MOCHA
class Dictionary {
  constructor() {
    this._word_vault = [];
  }

  add_words(word) {
    this._word_vault.push(word);
  }

  sort(){
    for (let i = 0; i < this._word_vault.length; i += 1) {
      for (let j = 0; j < (this._word_vault.length - i - 1); j += 1) {
        const strA = this._word_vault[j].toLowerCase();
        const strB = this._word_vault[j+1].toLowerCase();
        if (strA > strB) {
          let temp = this._word_vault[j];
          this._word_vault[j] = this._word_vault[j+1];
          this._word_vault[j+1] = temp;
        }
      }
    }
    return this._word_vault;
  }
}

module.exports = Dictionary;
