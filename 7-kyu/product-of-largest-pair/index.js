// https://www.codewars.com/kata/5784c89be5553370e000061b/train/javascript

function maxProduct(array) {
  let max = Math.max(...array);
  const num1 = array.splice(array.indexOf(max), 1);
  max = Math.max(...array);
  const num2 = array.splice(array.indexOf(max), 1);
  return num1[0] * num2[0];
}

maxProduct([2, 1, 5, 0, 4, 3]); // 20
maxProduct([7, 8, 9]); // 72
maxProduct([33, 231, 454, 11, 9, 99, 57]); // 104874
maxProduct([
  39, 135, 47, 275, 37, 108, 265, 457, 2, 133, 316, 330, 153, 253, 321, 411,
]); // 187827
