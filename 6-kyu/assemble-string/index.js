function assembleString(array) {
  if (array.length < 1) return '';

  let initialString = array[0];

  array.forEach((string) => {
    const chars = string.split('');
    chars.forEach((char, i, arr) => {
      let initialChar = initialString[i];
      const index = i;
      const replacement = arr[i];

      if (initialChar === '*' && replacement !== '*') {
        const replaced =
          initialString.substring(0, index) +
          replacement +
          initialString.substring(index + 1);

        initialString = replaced;
      }
    });
  });
  return initialString.split('*').join('#');
}

console.log(
  assembleString(['H*llo, W*rld!', 'Hel*o, *or*d!', '*ello* World*'])
); // Hello, World!
assembleString(['a*c**', '**cd*', 'a*cd*']); // a#cd#
console.log(
  assembleString([
    '*#*#*#*#*#*#*#*',
    '*#*#*#*#*#*#*#*',
    '*#*#*#*#*#*#*#*',
    '*#*#*#*#*#*#*#*',
  ])
); // a#cd#
