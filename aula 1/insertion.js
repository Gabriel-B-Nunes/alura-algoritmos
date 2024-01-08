const livros = require('./array-livros.js');
const troca = require('./troca-posicao');

function insertionSort(array){
	for(let atual = 0; atual < array.length; atual++){
		let analise = atual;
		while(analise > 0 && array[analise].valor < array[analise - 1].valor){
			troca(array, analise);
			analise--;
		}
	}
	console.log(array);
}
insertionSort(livros);
