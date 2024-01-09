const livros = require('./array.js');

function quickSort(array){
	if(array.length <= 1){
		return array;
	}

	let pivot = array.length - 1;
	let left = array.filter((_, index) => {
		array[index].preco < array[pivot].preco;
	})
	let rigth = array.filter((_, index) => {
		array[index].preco > array[pivot].preco;
	})

	return[...quickSort(left), pivot, ...quickSort(rigth)];
}

console.log(livros[0].preco);
