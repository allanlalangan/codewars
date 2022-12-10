function wave(str) {
  const split = str.split("");
  const result = [];

  split.forEach((letter, i) => {
    if (letter !== " ") {
      const letters = str.split("");
      letters[i] = letter.toUpperCase();
      result.push(letters.join(""));
    }
  });

  return result
}

wave("codewars"); // ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]

wave("two words"); // ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
