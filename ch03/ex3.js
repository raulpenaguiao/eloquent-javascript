let countBs = function(str){
	let count = 0;
	for(let i = 0; i < str.length; i++){
		if(str[i] === "B") count += 1;
	}
	return count;
}

console.log(countBs("Best Beer in Berlin")) // -> 3


let countChar = function(str, ch){
	let count = 0;
	for(let i = 0; i < str.length; i++){
		if(str[i] === ch) count += 1;
	}
	return count;
}

countBs = str => countChar(str, "B")

console.log(countBs("Best Beer in Berlin")) // -> 3)

