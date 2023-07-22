// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(nums) {
  if (nums.length === 1) return nums[0];

  const num_count = nums.reduce((acc, num) => {
    acc[num.toString()] ? acc[num.toString()]++ : (acc[num.toString()] = 1);
    return acc;
  }, {});

  return +Object.entries(num_count).find((entry) => entry[1] % 2 === 1)[0];
}

findOdd([7]); // 7
findOdd([0]); // 0
findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]); // 4
findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]); // -1
findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]); // 5
findOdd([0, 1, 0, 1, 0]); // 0
