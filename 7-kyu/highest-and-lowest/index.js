function highAndLow(numbers){
  
  const splitNumbers = numbers.split(" ")
  const sorted = splitNumbers.map(num => (+num))
  sorted.sort((a,b) => b - a)
  return `${sorted[0]} ${sorted[sorted.length - 1]}`

}

// console.log(highAndLow("1 2 3 4 5"));  // return "5 1"
// console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
// console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"
highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"); // return "9 -5"