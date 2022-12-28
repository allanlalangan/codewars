function spacify(str) {
	// declare the result var that we will return at the end of the function
	const split = str.split("");
	const result = split
		// map through the array of chars
		.map((char, i, arr) => {
			// if index is not the last, return the character
			if (i === arr.length - 1) {
				return char;
			} else {
				// return the char with a space appended to it
				return `${char} `;
			}
		})
		// join the array into a string which will be returned
		.join("");
	return result;
}

console.log(spacify("hello world"));
