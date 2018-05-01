const readline = require('readline');
// your code here to initialize the program and take user input
function arrOfWord (arr) {
	for(var i=1;i<arr.length;i++) {
		for(var j=0;j<=i-1;j++) {
			if(arr[i]<arr[j]) {
				var temp = arr[i]
				arr[i] = arr[j]
				arr[j]=temp
			}
		}
		//console.log(arr)
	}
	return arr 
}

console.log(arrOfWord(["makan","duduk","tidur","terbang"]))
console.log(arrOfWord(["anggi","angga","ani","adi"]))
