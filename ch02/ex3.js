function grid(size){
	ans = "";
	for(let i = 0; i < size; i++){
		for(let j = 0; j < size; j++){
			if( (i+j)% 2 == 0){
				ans += " ";
			} else{
				ans += "#";
			}
		}
		ans += "\n";
	}
	return ans;
}

console.log(grid(4))
console.log(grid(8))
console.log(grid(10))
