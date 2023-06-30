function getMiddle(s) {
  const split = s.split("");

  return split.length % 2 === 0
    ? `${split[split.length / 2 - 1]}${split[split.length / 2]}`
    : `${split[Math.floor(split.length / 2)]}`;
}

getMiddle("test");
getMiddle("testing");
getMiddle("middle");
getMiddle("A");
