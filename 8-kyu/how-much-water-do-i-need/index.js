function howMuchWater(water, load, clothes) {
	if (clothes / load > 2) {
		return 'Too much clothes';
	}
	if (clothes < load) {
		return 'Not enough clothes';
	}

	return +(water * 1.1 ** (clothes - load)).toFixed(2);
}

console.log(howMuchWater(10, 11, 20));
console.log(howMuchWater(50, 15, 29));
