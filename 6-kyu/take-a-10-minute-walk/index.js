function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  const homeCoords = [0, 0];
  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === 'n') {
      homeCoords[1] += 1;
    } else if (walk[i] === 'e') {
      homeCoords[0] += 1;
    } else if (walk[i] === 's') {
      homeCoords[1] -= 1;
    } else if (walk[i] === 'w') {
      homeCoords[0] -= 1;
    }
  }
  return homeCoords[0] === 0 && homeCoords[1] === 0 ? true : false;
}

console.log(isValidWalk(['n', 'e', 's', 's', 'w', 'n', 'w', 'n', 's', 'e']));
