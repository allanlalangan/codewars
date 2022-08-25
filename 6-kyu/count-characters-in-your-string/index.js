function count(string) {
  const charCount = {};
  if (string) {
    const characters = string.split('');
    characters.forEach((char) => {
      if (!charCount[char]) {
        charCount[char] = 1;
      } else if (charCount[char] >= 1) {
        charCount[char] += 1;
      }
    });
    return charCount;
  }
  return {};
}

console.log(count('all'));
