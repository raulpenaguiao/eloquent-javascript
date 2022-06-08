let flatten = function(arr){
	ans = [];
	for(ele in arr){
		if( Object.prototype.toString.call( arr[ele] ) === '[object Array]' ){
			ans = ans.concat(flatten(arr[ele]));
		} else{
			ans = ans.concat([arr[ele]]);
		}
	}
	return ans;
}


console.log(flatten([[1, 2], {"wesw":2}, [[1, 2], [3, 4]]]))




let flattenLooped = function(arr){
	ans = []
	arr.forEach(ele => {
		if(Object.prototype.toString.call(ele) === "[object Array]"){
			ans = ans.concat(flatten(ele))
		} else{
			ans = ans.concat([ele])
		}
	})
}

console.log(flatten([[1, 2], 2, [[1, 2], [3, 4]]]))

