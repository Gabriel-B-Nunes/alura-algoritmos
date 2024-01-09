const livros = require('./array.js');

function mergeSort(array){
	if(array.length > 1){
		let meio = Math.floor((array.length)/2);
		let parte1 = mergeSort(array.slice(0, meio));
		let parte2 = mergeSort(array.slice(meio, array.length)); 
		array = ordena(parte1, parte2);
	}
	return array;
}

function ordena(parte1, parte2){
	let posicaoParte1 = 0;
	let posicaoParte2 = 0;
	const resultado = [];

	while(posicaoParte1 < parte1.length && posicaoParte2 < parte2.length){
		let itemParte1 = parte1[posicaoParte1];
		let itemParte2 = parte2[posicaoParte2];
		if(itemParte1.preco < itemParte2.preco){
			resultado.push(itemParte1);
			posicaoParte1++;
		} else {
			resultado.push(itemParte2);
			posicaoParte2++;
		}
	}
	return resultado.concat(posicaoParte1 < parte1.length
		? parte1.slice(posicaoParte1)
		: parte2.slice(posicaoParte2));
}
mergeSort(livros);
