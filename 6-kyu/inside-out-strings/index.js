function insideOut(string) {
  const split = string.split(' ');

  const result = split.map((word, i, arr) => {
    if (word.length === 1 || word.length === 2 || word.length === 3) {
      return word;
    } else if (word.length % 2 !== 0) {
      const middleCharIndex = Math.floor(word.length / 2);
      const middleChar = word[middleCharIndex];
      const start = word.split('').slice(0, middleCharIndex).reverse();
      const end = word
        .split('')
        .slice(middleCharIndex + 1)
        .reverse();
      return `${start.join('')}${middleChar}${end.join('')}`;
    } else {
      const start = word
        .split('')
        .slice(0, word.length / 2)
        .reverse();
      const end = word
        .split('')
        .slice(word.length / 2, word.length)
        .reverse();
      return `${start.join('')}${end.join('')}`;
    }
  });
  return result.join(' ');
}

insideOut('man i need a taxi up to ubud'); // man i ende a atix up to budu
// insideOut('what time are we climbing up the volcano'); // hwta item are we milcgnib up the lovcona
insideOut('take me to semynak'); // atek me to mesykan
