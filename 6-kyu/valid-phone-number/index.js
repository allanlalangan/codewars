function validPhoneNumber(phoneNumber) {
  const splitNumber = phoneNumber.split(' ');
  if (splitNumber.length !== 2) {
    return false;
  }

  const validAreaCode =
    splitNumber[0].length === 5 &&
    splitNumber[0][0] === '(' &&
    splitNumber[0][4] === ')' &&
    !isNaN(splitNumber[0].replace('(', '').replace(')', ''));

  const validNumber =
    splitNumber[1].length === 8 &&
    splitNumber[1].split('-')[0].length === 3 &&
    !isNaN(splitNumber[1].split('-')[0]) &&
    splitNumber[1].split('-')[1].length === 4 &&
    !isNaN(splitNumber[1].split('-')[1]);

  if (validAreaCode && validNumber) {
    return true;
  } else return false;
}

console.log(validPhoneNumber('(113) 456-1890'));
