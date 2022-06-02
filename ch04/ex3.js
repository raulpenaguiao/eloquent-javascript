let arrayToList = function(arr){
	let list = {value:null, rest:null};
	if(arr.length == 0) return list;
	else{
		list.value = arr[0];
		list.rest = arrayToList(arr.slice(1));
		return list;
	}
}



let listToArray = function(list){
	if(list.value === null) return [];
	return [list.value].concat(listToArray(list.rest));
}



let nth = function(list, n){
	if(list.value === null) return undefined;
	if(n === 0) return list.value;
	return nth(list.rest, n-1);
}



let prepend = function(list, p){
	return {value:p, rest:list};
}

/*
console.log(arrayToList([2, 1, 3]))
console.log(listToArray(arrayToList([2, 3])))
list = arrayToList([1, 4, 18, 32, "", 2]);
console.log(list)
console.log(nth(list, 3))
console.log(prepend(arrayToList([3, 2, "!312"]), 0))

*/

