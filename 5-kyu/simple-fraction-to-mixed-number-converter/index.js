const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};
const mixedFraction = (s) => {
  let result;
  const split = s.split('/');
  const numerator = +split[0];
  const denominator = +split[1];

  const numIsNegative = numerator.toString().split('')[0] === '-';
  const denIsNegative = denominator.toString().split('')[0] === '-';

  const greatestCommonDivisor = Math.abs(gcd(numerator, denominator));

  if (Math.abs(numerator) === Math.abs(denominator)) {
    if (numIsNegative && denIsNegative) return '1';
    if (numIsNegative || denIsNegative) return '-1';
  }
  if (denominator === 1) return numerator.toString();
  if (denominator === 0) throw new Error("can't divide by zero");
  if (numerator === 0) return '0';
  if (numerator === 1) return s;
  if (Math.abs(numerator) > Math.abs(denominator)) {
    if (numerator % denominator === 0)
      return (numerator / denominator).toString();
  }

  const reducedNumerator = Math.abs(numerator) / greatestCommonDivisor;
  const reducedDenominator = Math.abs(denominator) / greatestCommonDivisor;

  const remainder = reducedNumerator % reducedDenominator;
  const wholeUnits = Math.floor(reducedNumerator / reducedDenominator);

  result = `${wholeUnits === 0 ? '' : wholeUnits + ' '}${
    remainder === 0 ? '' : remainder + '/' + reducedDenominator
  }`;

  if (numIsNegative && denIsNegative) {
    return result;
  } else if (numIsNegative || denIsNegative) {
    result = '-' + result;
  }

  return result.trim().toString();
};

console.log(mixedFraction('1/1'));

// console.log(gcd(15, 9));
