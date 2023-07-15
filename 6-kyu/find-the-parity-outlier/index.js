function findOutlier(integers) {
  const sorted = integers.sort((a, z) => {
    if (a % 2 === 0) {
      return -1;
    }
  });

  if ((sorted[0] % 2 === 0) === (sorted[1] % 2 === 0)) {
    return sorted[sorted.length - 1];
  } else {
    return sorted[0];
  }
}

findOutlier([2, 6, 8, 10, 3]); // 3
findOutlier([160, 3, 1719, 19, 11, 13, -21]); // 160
findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]); // 11
