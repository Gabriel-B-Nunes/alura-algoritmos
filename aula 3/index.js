const livros = require('./array.js');

function quickSort(array){
	if(array.length <= 1){
		return array
	}

	const menor = [];
	const maior = [];
	const pivot = array.length - 1;
	for(let atual = 0; atual < array.length - 1; atual++){
		if(array[atual].preco < array[pivot].preco){
			menor.push(array[atual]);
		} else {
			maior.push(array[atual]);
		}
	}
	return [...quickSort(menor), array[pivot], ...quickSort(maior)];
}

console.log(quickSort(livros));
