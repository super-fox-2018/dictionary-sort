const readline = require('readline');

function Dictionary(arrOfWord) {
    for (var i=0; i<arrOfWord.length; i++){
        for (var j=i+1; j<arrOfWord.length; j++){
            if (arrOfWord[i] >= arrOfWord[j]){
                var temp=arrOfWord[i];
                arrOfWord[i]=arrOfWord[j];
                arrOfWord[j]=temp;
              }
        }
    }
    return arrOfWord.join()
}

console.log(Dictionary(["makan", "duduk", "tidur", "terbang"])); // duduk,makan,terbang,tidur
console.log(Dictionary(["anggi", "angga", "ani", "adi"])); // adi,angga,anggi,ani

module.exports = Dictionary