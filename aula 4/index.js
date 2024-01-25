const arrayTeste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function buscaBinaria(array, de, ate, valor){
	const arrayTemp = array.slice(de, ate + 1);
	if(arrayTemp.length == 1){
		if(arrayTemp[0] == valor){
			return arrayTemp[0];
		} else {
			return false;
		}
	}

	const arrayDe = array[de];
	const arrayAte = array[ate];
	const meio = Math.floor((de + ate) / 2);
	const arrayMeio = array[meio];

	if(valor == arrayDe){
		return arrayDe;
	}
	if(valor == arrayAte){
		return arrayAte;
	}
	if(valor == arrayMeio){
		return arrayMeio;
	}
	
	if(valor > arrayAte){
		return buscaBinaria(array, ate, array.length - 1, valor);
	}
	if(valor > arrayMeio){
		return buscaBinaria(array, meio, ate, valor);
	}
	if(valor < arrayMeio){
		return buscaBinaria(array, de, meio, valor);
	}
}

console.time();
console.log(buscaBinaria(arrayTeste, 0, arrayTeste.length - 1, 8));
console.timeEnd();
console.time();
console.log(arrayTeste.filter((_, index) => {return arrayTeste[index] == 8}));
console.timeEnd();
