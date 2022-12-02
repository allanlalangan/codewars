function inArray(a1, a2) {
  const arr = [];
  a1.forEach((str) => {
    const isSubstring = a2.find((s) => s.includes(str));
    if (!!isSubstring) {
      arr.push(str);
    }
  });

  return arr.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    }
    if (a[0] > b[0]) {
      return 1;
    }
    return 0;
  });
}

inArray(
  ['xyz', 'live', 'strong'],
  ['lively', 'alive', 'harp', 'sharp', 'armstrong']
);
inArray(
  ['arp', 'live', 'strong'],
  ['lively', 'alive', 'harp', 'sharp', 'armstrong']
);
