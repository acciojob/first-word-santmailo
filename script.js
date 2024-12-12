
function firstWord(s) {
	let str;
  // your code here
	
	str = s.split(" ")[0];
	return str; 
}

// Do not change the code below 

const s = prompt("Enter String:");
alert(firstWord(s));
