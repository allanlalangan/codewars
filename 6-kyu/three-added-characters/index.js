// https://www.codewars.com/kata/5971b219d5db74843a000052/train/javascript

function addedChar(str1, str2) {
  const char_count = str1.split("").reduce((acc, char) => {
    acc[char] ? acc[char]++ : (acc[char] = 1);
    return acc;
  }, {});

  for (char of str2) {
    if (!char_count[char]) return char;
    char_count[char]--;
  }
}

addedChar("hello", "checlclo"); // c
addedChar("abcde", "2db2a2ec"); // 2
addedChar("aabbcc", "aacccbbcc"); // c
