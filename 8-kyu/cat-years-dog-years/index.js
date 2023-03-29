// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b

const humanYearsCatYearsDogYears = function (humanYears) {
	if (humanYears === 1) {
		return [humanYears, 15, 15];
	}

	if (humanYears === 2) {
		return [humanYears, 15 + 9, 15 + 9];
	}

	if (humanYears > 2) {
		return [
			humanYears,
			15 + 9 + 4 * (humanYears - 2),
			15 + 9 + 5 * (humanYears - 2),
		];
	}
};

console.log(humanYearsCatYearsDogYears(1));
console.log(humanYearsCatYearsDogYears(2));
console.log(humanYearsCatYearsDogYears(5));
console.log(humanYearsCatYearsDogYears(10));
