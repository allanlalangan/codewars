function modifyMultiply(str, loc, num) {
  const word = str.split(' ')[loc];
  const words = new Array(num).fill(null).map(() => word);
  return words.join('-');
}

modifyMultiply('This is a string', 3, 5);
