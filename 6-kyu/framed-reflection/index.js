function mirror(text) {
  const result = [];

  const words = text.split(' ');
  const longestWord = words.sort((a, b) => b.length - a.length)[0];

  const lineLength = longestWord.length;
  const xBorderLength = lineLength + 4;
  const yBorderLength = words.length;

  words.forEach((word, i) => {
    let reversed = '';
    for (let l = word.length - 1; l >= 0; l--) {
      reversed += word[l];
    }
    result.push(reversed);
  });

  const xBorder = new Array(xBorderLength)
    .fill(null)
    .map(() => '*')
    .join('');

  const yBorder = new Array(yBorderLength)
    .fill(null)
    .map(() => '*')
    .join('');

  console.log(result);
}

mirror('Hello World');
mirror('Codewars');
mirror('fjnbzqji djbl lsax qanefozf psnbod qrpy');
