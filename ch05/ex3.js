let every = function(arr, func){
	return arr.reduce((a, b) => a && func(b), true)
}

console.log(every([0, 1, 2, 3, 4], a => a<=3)) // -> false
console.log(every([0, 1, 2, 3], a => a<=3)) // -> true
console.log(every([], a => a<=3))// -> true
let everyWithSome = function(arr, func){
	return ! arr.some(e => !func(e))
}


console.log(everyWithSome([0, 1, 2, 3, 4], a => a<=3))// -> false
console.log(everyWithSome([0, 1, 2, 3], a => a<=3)) // -> true
console.log(everyWithSome([], a => a <= 3))// -> true



