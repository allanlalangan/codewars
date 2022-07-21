const luckCheck = (str) => {
  let numbers;

  if (typeof str === 'number') {
    numbers = Array.from(String(str), Number);
  } else if (typeof str === 'string' && str.split(' ').join('').length >= 1) {
    numbers = [...str.split(' ').join('')].map((digit) => Number(digit));
  }

  if (
    (isNaN(str) && typeof str !== 'string') ||
    numbers.length < 1 ||
    numbers.some((num) => isNaN(num))
  ) {
    throw new Error('Bad ticket');
  }

  let leftNumbers;
  let rightNumbers;

  if (numbers.length % 2 === 0) {
    leftNumbers = numbers.slice(0, numbers.length / 2);
    rightNumbers = numbers.slice(numbers.length / 2);
  } else {
    leftNumbers = numbers.slice(0, (numbers.length - 1) / 2);
    rightNumbers = numbers.slice((numbers.length + 1) / 2, numbers.length);
  }

  const leftSum = leftNumbers.reduce((a, b) => a + b, 0);
  const rightSum = rightNumbers.reduce((a, b) => a + b, 0);

  const ticketIsLucky = leftSum === rightSum ? true : false;
  return ticketIsLucky;
};

// luckCheck('12329'); // false
// luckCheck('1 2 1'); // true
// luckCheck('1234231'); // true
// luckCheck(12291); // false
// luckCheck(912291); // true
// luckCheck('112a1'); // error
// luckCheck(''); // error
