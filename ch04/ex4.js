let deepEqual = function(obj1, obj2){
	if(typeof obj1 === "object"){
		if(obj1 === null){
			return obj2 === null;
		} else{//Then obj1 is an object
			if(!typeof obj2 == "object" || obj2 === null) return false;
			for(let i = 0; i < Object.keys(obj1).length; i++){
				key = Object.keys(obj1)[i];
				if (!deepEqual(obj1[key], obj2[key])) return false;
			}
			for(let i = 0; i < Object.keys(obj2).length; i++){
				key = Object.keys(obj2)[i];
				if(!deepEqual(obj1[key], obj2[key])) return false;
			}
			return true;
		}
	} else{
		return !(typeof obj2 == "object") && obj1 === obj2;
	}
}



console.log(deepEqual({a:1}, {a:1}))
console.log(deepEqual({"null":"ok", 4:'2'}, {4:'2', "null":'ok'}))

