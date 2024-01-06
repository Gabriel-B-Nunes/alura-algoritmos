const objeto = require('./array-livros');

function menor(array, inicio){
	let menor = inicio;
	for(let atual = inicio; atual < array.length; atual++){
		if(array[atual].valor < array[menor].valor){
			menor = atual;
		}
	}
	return menor;
}

function ordena(array){
	for(let atual = 0; atual < array.length; atual++){
		const m = menor(array, atual);
		const elementoAtual = array[atual];
		const elementoMenor = array[m];

		array[atual] = elementoMenor;
		array[m] = elementoAtual;
	}
}

ordena(objeto);
console.log(objeto);
