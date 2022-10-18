const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

function high(x) {
  const scores = x
    .toLowerCase()
    .trim()
    .split(' ')
    .map((word) => ({ word: word, score: getScore(word) }));

  function getScore(word) {
    const chars = word.split('');
    let score = 0;
    chars.forEach((char) => {
      score += alphabet.indexOf(char) + 1;
    });
    return score;
  }

  const hiScore = Math.max(...scores.map((score) => score.score));
  const hiScoreWord = scores.filter((score) => score.score === hiScore)[0];
  return hiScoreWord.word;
}

console.log(high('man i need a taxi ixat up to ubud'));
