const livros = require('./array.js');
//const arrayTeste = [1, 3, 2];

function quickSortRecursive(array){
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
	return [...quickSortRecursive(menor), array[pivot], ...quickSortRecursive(maior)];
}

const swap = (arr, left, right) =>  {
  const temp = arr[left]
  arr[left] = arr[right]
  arr[right] = temp;
}

const partitionHigh = (arr, low, high) => {
  //Pick the first element as pivot
  let pivot = arr[high];
  let i = low;
  
  //Partition the array into two parts using the pivot
  for(let j = low; j < high; j++){
//	console.log(`Pivot: ${pivot} I: ${i} J: ${j} array: ${arr}`);
    if(arr[j] <= pivot){      
//     	console.log(`Pivot: ${pivot} I: ${i} J: ${j} array: ${arr}`);
	swap(arr, i, j);
//	console.log(`Pivot: ${pivot} I: ${i} J: ${j} array: ${arr}`);
	i++;
//	console.log(`Pivot: ${pivot} I: ${i} J: ${j} array: ${arr}`);

    }
  }
  swap(arr, i, high);
  //Return the pivot index
//	console.log(`Pivot: ${pivot} I: ${i} array: ${arr}`);
  return i;
}

const iterativeQuickSort = (arr) => {
  //Stack for storing start and end index
  let stack = [];
  
  //Get the start and end index
  let start = 0;
  let end = arr.length - 1;
  
  //Push start and end index in the stack
  stack.push({x: start, y: end});
  
  //Iterate the stack
  while(stack.length){
    //Get the start and end from the stack
    const { x, y } = stack.shift();
    
    //Partition the array along the pivot
    const PI = partitionHigh(arr, x, y);
    
    //Push sub array with less elements than pivot into the stack
    if(PI - 1 > x){
      stack.push({x: x, y: PI - 1});
    }
    
    //Push sub array with greater elements than pivot into the stack
    if(PI + 1 < y){
      stack.push({x: PI + 1, y: y});
    }
  }
}

console.table(arrayTeste);
iterativeQuickSort(arrayTeste);
