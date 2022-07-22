const allAges = [65, 60, 75, 55, 60, 63, 64, 45];

const predictAge = (...ages) => {
  const agesSquared = ages.map((age) => age * age);
  const squaredSum = agesSquared.reduce((a, b) => a + b, 0);
  const sumSqrt = Math.sqrt(squaredSum);
  const finalResult = Math.floor(sumSqrt / 2);

  console.log(finalResult);
  return finalResult;
};

predictAge(...allAges);
