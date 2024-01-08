const {edGalho, edFolha} = require('./arrays-editoras');

function misturaListas(array1, array2){
	const arrayFinal = [];
	let indiceArray1 = 0;
	let indiceArray2 = 0;
	for(let atual = 0; atual < (array1.length + array2.length); atual++){
		if(array1[indiceArray1] != undefined && array2[indiceArray2] != undefined){
			if(array1[indiceArray1].preco < array2[indiceArray2].preco){
				arrayFinal.push(array1[indiceArray1]);
				indiceArray1++;
			} else {
				arrayFinal.push(array2[indiceArray2]);
				indiceArray2++;
			}
		}
		if(array1[indiceArray1] == undefined && array2[indiceArray2] != undefined){
			arrayFinal.push(array2[indiceArray2]);
			indiceArray2++;
		} else if(array2[indiceArray2] == undefined && array1[indiceArray1] != undefined) {
			arrayFinal.push(array1[indiceArray1]);
			indiceArray1++;
		}
	}
	return arrayFinal;
}

console.log(misturaListas(edGalho, edFolha));
