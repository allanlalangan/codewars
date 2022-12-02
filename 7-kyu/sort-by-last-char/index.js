function last(string) {
  const sorted = string.split(' ').sort((a, b) => {
    if (a[a.length - 1] < b[b.length - 1]) {
      return -1;
    }
    if (a[a.length - 1] > b[b.length - 1]) {
      return 1;
    }
    return 0;
  });
  return sorted;
}

last('man i need a taxi up to ubud');
