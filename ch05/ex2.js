let loop = function(val, test, update, body){
	let i = val
	while(test(i)){
		body(i);
		i = update(i);
	}
}

loop(0, i => i < 10, i => i+1, i=> console.log(i*i)) 
