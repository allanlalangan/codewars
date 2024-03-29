// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

function isPangram(str) {
  const alphabetCount = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };

  const split = str.toLowerCase().replaceAll(" ", "").split("");

  split.forEach((letter) => {
    alphabetCount[letter] === 0 ? alphabetCount[letter]++ : null;
  });

  return Object.values(alphabetCount).every((count) => count === 1);
}

isPangram("The quick brown fox jumps over the lazy dog."); // true
// isPangram("This is not a pangram."); // false
