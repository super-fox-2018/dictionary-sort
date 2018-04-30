const readline = require('readline');
// your code here to initialize the program and take user input
function DictionarySort(array){
	let pembanding = array[0]
	for(var i=0;i<array.length;i++){
		for (var j=0;j<array.length-1;j++){
			if (array[j]>array[j+1]) {
				pembanding=array[j]
				array[j]=array[j+1]
				array[j+1]=pembanding
			}
		}
	}
	return array
}

console.log(DictionarySort(['makan','bobo','tidur', 'terbang','macan','maban']));
console.log(DictionarySort(['angfa','angga','anggi','adi','ani','ada']));
console.log(DictionarySort(['agg','agf','age','aab','aba','abb']));

//module.exports = Dictionary
