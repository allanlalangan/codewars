function duplicateCount(text) {
  const chars = text.toLowerCase().split("");
  const charCount = {};

  chars.forEach((char) => {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  });

  return Object.entries(charCount).filter((char) => char[1] > 1).length;
  // refactor using reduce method with {} as accumulator
}

console.log(duplicateCount("")); // 0
console.log(duplicateCount("abcde")); // 0
console.log(duplicateCount("aabbcde")); // 2
console.log(duplicateCount("aA11")); // 2
console.log(duplicateCount("Indivisibility")); // 1
