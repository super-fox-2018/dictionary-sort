const readline = require('readline');
// your code here to initialize the program and take user input
function dictionary(arr){

for(let i=1;i<arr.length;i++){
    for(let j=0;j<i;j++){
        if(arr[i] < arr[j]){
            var banding = arr[i]
            arr[i] = arr[j]
            arr[j] = banding
    }
}
}
return arr.join(',')

}
console.log(dictionary(['makan', 'duduk', 'tidur', 'terbang']))
console.log(dictionary(['anggi', 'angga', 'ani', 'adi']))




// module.exports = Dictionary
