// https://www.codewars.com/kata/558dd9a1b3f79dc88e000001

function findDup(arr) {
  let duplicate;
  arr.reduce((acc, num) => {
    if (!acc[num]) {
      acc[num] = 1;
    } else {
      duplicate = num;
    }
    return acc;
  }, {});
  return duplicate;
}

findDup([1, 2, 2, 3]); // 2
findDup([1, 3, 2, 5, 4, 5, 7, 6]); // 5;
