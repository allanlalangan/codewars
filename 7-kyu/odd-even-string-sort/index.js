function sortMyString(str) {
	let odds = '';
	let evens = '';
	str.split('').forEach((char, i) => {
		if (i % 2 === 0) {
			evens += char;
		}
		if (i % 2 !== 0) {
			odds += char;
		}
	});
	return `${evens} ${odds}`;
}

console.log(sortMyString('CodeWars'));
console.log(sortMyString("YCOLUE'VREER"));
