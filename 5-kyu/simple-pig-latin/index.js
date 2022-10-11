function pigIt(str) {
  const words = str.trim().split(' ');
  const pigLatinWords = words.map((word, i) => {
    if (word.length === 1 && !/[a-zA-Z]/.test(word)) {
      return word;
    }
    const pigFirstChar = words.map((word) => word[0] + 'ay');
    const noFirstChar = word.slice(1) + pigFirstChar[i];
    return noFirstChar;
  });
  return pigLatinWords.join(' ');
}

pigIt('may the force be with you a !');
