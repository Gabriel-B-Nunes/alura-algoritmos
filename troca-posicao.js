function troca(lista, indice){
	let elementoAtual = lista[indice];
	let elementoAnterior = lista[indice - 1];

	lista[indice] = elementoAnterior;
	lista[indice - 1] = elementoAtual;
}

module.exports = troca;
