function spinWords(string) {
  // reverse words that have five or more chars
  return string
    .split(" ")
    .map((word) => {
      if (word.length >= 5) {
        return word.split("").reverse().join("");
      } else {
        return word;
      }
    })
    .join(" ");
}

spinWords("Hey fellow warriors"); // "Hey wollef sroirraw"
spinWords("This is a test"); // "This is a test"
spinWords("This is another test"); // "This is rehtona test"
