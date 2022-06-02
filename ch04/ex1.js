let range = function(start, end, step = 1){
	arr = Array();
	let i = start;
	while(i <= end){
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
