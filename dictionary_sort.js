const readline = require('readline');

// bubble sort

function bubbleSort(num) {

    var sorted = num
    for(var x=0; x<sorted.length; x++) {
        for(var y=0; y<sorted.length; y++) {
            if(sorted[y]>sorted[x]) {
                var bun=sorted[y]
                sorted[y]=sorted[x]
                sorted[x]=bun
            }
        }
    }

    return sorted

}

console.log(bubbleSort(['makan','duduk','tidur','terbang'])) //duduk, makan, terbang, tidur
console.log(bubbleSort(['anggi','angga','ani','adi'])) //adi, angga, anggi , ani


module.exports = Dictionary
