// https://www.codewars.com/kata/5298ad7cd0f550269500051b/train/javascript

function zipObject(keys, values) {
	if (values) {
		const result = {};
		keys.forEach((key, i) => {
			result[key] = values[i];
		});
		return result;
	} else if (typeof keys[0] !== 'object') {
		const objKeys = Object.entries(keys).flat();
		const result = {};

		objKeys.forEach((key, i) => {
			if (i % 2 !== 0 && !result[key]) {
				result[key] = undefined;
			}
		});
		return result;
	}

	const result = {};
	keys.forEach((keyVal, i) => {
		result[keyVal[0]] = keyVal[1];
	});
	return result;
}

console.log(zipObject(['fred', 'barney']));
console.log(zipObject(['fred', 'barney'], [30, 40]));
console.log(
	zipObject([
		['fred', 30],
		['barney', 40],
	])
);
