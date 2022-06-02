let range = function(start, end, step = 1){
	arr = Array();
	if(step == 0) return "ERROR";
	let i = start;
	while(step * (i - end) <= 0){
		arr.push(i);
		i+= step
	}
	return arr;
}



let sum = function(arr){
	let ans = 0;
	for(let i = 0; i < arr.length; i++){
		ans += arr[i];
	}
	return ans;
}

console.log(sum(range(1, 10, 3)))
console.log(range(5, 2, -1))
