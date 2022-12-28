function findUniq(arr) {
  let unique;
  // ALl of the numbers will be the same except one
  // Sort the array, the unique value will either be at the very beginning, or the very end, depending if it's > other numbers
  const sorted = arr.sort();
  // Check if the first and second value are the same
  if (sorted[0] === sorted[1]) {
    // if so the unique number will be the last item in the array
    unique = sorted[sorted.length - 1];
  } else {
    // if not, the unique number is the first item in the array
    unique = sorted[0];
  }
  return unique;
}

console.log(findUniq([5, 11, 5, 5, 5]));
