// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

function repeatStr(n, s) {
  return Array(n).fill(s).join('');
}

console.log(repeatStr(3, 'hi'));
