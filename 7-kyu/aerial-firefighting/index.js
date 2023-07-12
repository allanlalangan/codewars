function waterbombs(fire, maxWidth) {
  let flameLength = 0;
  let waterbombsNeeded = 0;
  for (let i = 0; i <= fire.length; i++) {
    if (fire[i] === "x") {
      flameLength++;
    } else {
      waterbombsNeeded += Math.ceil(flameLength / maxWidth);
      flameLength = 0;
    }
  }
  return waterbombsNeeded;
}
