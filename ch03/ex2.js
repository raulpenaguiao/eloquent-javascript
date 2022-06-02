let isEven = function(n){
	if(n == 0) return true;
	if(n == 1) return false;
	return isEven(n-2);
}

console.log(isEven(8)) //-> true
console.log(isEven(11)) // -> false
//console.log(isEven(-8))
//Infinite loop

let isEvenBetter = function(n){
	if(n == 0) return true;
	if(n == 1) return false;
	if(n < 0) return isEvenBetter(-n);
	return isEvenBetter(n-2);
}

console.log(isEvenBetter(8)) // -> true
console.log(isEvenBetter(11)) // -> false
console.log(isEvenBetter(-8)) // -> true




