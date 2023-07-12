function getCount(str) {
  let count = 0;
  const vowels = { a: true, e: true, i: true, o: true, u: true };
  for (let i = 0; i < str.length; i++) {
    if (vowels[str[i]]) {
      count++;
    }
  }
  return count;
}
