let reverseArray = function(arr){
	ans = new Array();
	for(let i = arr.length - 1; i >= 0; i--){
		ans.push(arr[i]);
	}
	return ans;
}


let reverseArrayInPlace = function(arr){
	let l = reverseArray(arr);
	for(let i = 0; i < arr.length; i++){
		arr[i] = l[i];
	}
	return null
}


let l = [2, 4, 1, 2];

console.log(l);
console.log(reverseArray(l));
console.log(l);
console.log(reverseArrayInPlace(l));
console.log(l);


