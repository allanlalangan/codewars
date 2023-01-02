function divCon(x) {
	const numbers = x.filter((z) => typeof z === "number");
	const strings = x.filter((z) => typeof z === "string");

	const stringsSum = strings.reduce(
		(accumulator, currentValue) => +accumulator + +currentValue,
		0
	);
	const numbersSum = numbers.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		0
	);

	return numbersSum - stringsSum;
}

console.log(divCon([9, 3, "7", "3"]));
console.log(divCon(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
console.log(divCon(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));
