function toCamelCase(str) {
	return str
		.split('')
		.map((char, i, arr) => {
			if (char === '-' || char === '_') {
				return '';
			}
			if (arr[i - 1] === '-' || arr[i - 1] === '_') {
				return char.toUpperCase();
			}
			return char;
		})
		.join('');
}

console.log(toCamelCase('convert-this'));
