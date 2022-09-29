function anagrams(word, words) {
  const anagrams = [];
  const requiredChars = word.split('').sort().join('');

  words.forEach((w) => {
    const chars = w.split('').sort().join('');
    chars === requiredChars && anagrams.push(w);
  });

  return anagrams;
}

console.log(anagrams('abca', ['bcaa', 'baac', 'abcd', 'efgh', 'aeiou']));

// console.log(['d', 'c', 'b', 'a'].sort());
