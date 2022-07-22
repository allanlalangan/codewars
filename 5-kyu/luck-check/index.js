const luckCheck = (str) => {
  if (typeof str === 'string') {
    if (str === '' || [...str].some((char) => isNaN(char) || char === ' ')) {
      throw new Error('Bad ticket');
    }
  }

  let numbers;

  if (typeof str === 'number') {
    numbers = Array.from(String(str), Number);
  } else {
    numbers = [...str.split(' ').join('')].map((number) => Number(number));
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
