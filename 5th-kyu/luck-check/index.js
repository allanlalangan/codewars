const luckCheck = (str) => {
  let numbers;
  // split string into numbers array
  if (typeof str === 'string') {
    // convert string digits to number
    numbers = [...str.trim()].map((digit) => Number(digit));
  }
  // if input is number, separate digits as values in array
  else {
    numbers = Array.from(String(str), Number);
  }

  // evaluate and throw error if any value isNaN
  if (
    (isNaN(str) && typeof str !== 'string') ||
    str.length < 1 ||
    numbers.some((num) => isNaN(num))
  ) {
    throw new Error('Bad ticket');
  }

  // init variables of numbers of each half of string
  let leftNumbers;
  let rightNumbers;

  // split array down the middle and assign as left and right numbers
  if (numbers.length % 2 === 0) {
    leftNumbers = numbers.slice(0, numbers.length / 2);
    rightNumbers = numbers.slice(numbers.length / 2);
  } else {
    // exclude middle number if odd amount of numbers, then split
    leftNumbers = numbers.slice(0, (numbers.length - 1) / 2);
    rightNumbers = numbers.slice((numbers.length + 1) / 2, numbers.length);
  }
  // reduce numbers to find sum
  const leftSum = leftNumbers.reduce((a, b) => a + b, 0);
  const rightSum = rightNumbers.reduce((a, b) => a + b, 0);
  // evaluate if sums are equal and return true / false
  const ticketIsLucky = leftSum === rightSum ? true : false;
  return ticketIsLucky;
};

// luckCheck('12345'); // false
// luckCheck('121'); // true
// luckCheck(' 1234231'); // true
// luckCheck('112a1'); // error
// luckCheck(''); // error
