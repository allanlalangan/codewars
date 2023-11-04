// https://www.codewars.com/kata/57fcaed83206fb15fd00027a/train/javascript

function replaceNth(text, n, oldValue, newValue) {
  if (n <= 0) return text;
  const chars = text.split("");
  const oldValueIndices = [];

  for (let i = 0; i < text.length; i++) {
    if (text[i] === oldValue) {
      oldValueIndices.push(i);
    }
  }

  oldValueIndices.forEach((index, i) => {
    if ((i + 1) % n !== 0) {
      return;
    } else {
      console.log(index);
      chars[index] = newValue;
    }
  });

  return chars.join("");
}
