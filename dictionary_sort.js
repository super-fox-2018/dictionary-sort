const readline = require('readline');
// your code here to initialize the program and take user input
function dictionarySort(arrDict) {
    for (var i = 0; i < arrDict.length; i++) {
        // console.log(arrDict[i].toLowerCase().charCodeAt(0), arrDict[i][0], arrDict[i+1][0]);
        // console.log(arrDict[i][0].toLowerCase() === arrDict[i+1][0].toLowerCase());
        let tempSwap = '';
        let minInd = 0;
        for (var j = i; j < arrDict.length; j++) {
            if (i !== j) {
                if (tempSwap.toLowerCase() > arrDict[j].toLowerCase()) {
                    tempSwap = arrDict[j];
                    minInd = [j];
                }
            } else {
                tempSwap = arrDict[i];
                minInd = i;
            }
        }
        arrDict[minInd] = arrDict[i];
        arrDict[i] = tempSwap;
    }
    return arrDict.join(',');
}

console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']));
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']));
console.log(dictionarySort(['vnggi', 'Dngga', 'wni', 'qdi']));

module.exports = dictionarySort
