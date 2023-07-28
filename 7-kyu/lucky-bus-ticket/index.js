function isLucky(ticket) {
  if (ticket.length !== 6) return false;
  return (
    ticket
      .split("")
      .slice(0, 3)
      .reduce((acc, num) => +acc + +num) ===
    ticket
      .split("")
      .slice(3, 6)
      .reduce((acc, num) => +acc + +num)
  );
}

console.log(isLucky("123321")); // 1+2+3 = 3+2+1  true // The ticket is lucky
console.log(isLucky("12341234")); // false // Only six-digit numbers allowed :(
console.log(isLucky("12a21a")); // false // Letters are not allowed :(
console.log(isLucky("100200")); // false // :(
console.log(isLucky("22")); // false // :(
console.log(isLucky("abcdef")); // false // :(
