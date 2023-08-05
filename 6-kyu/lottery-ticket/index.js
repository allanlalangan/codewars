// https://www.codewars.com/kata/57f625992f4d53c24200070e/train/javascript

function bingo(ticket, win) {
  let miniwins = 0;
  ticket.forEach((subarr, i) => {
    for (char of subarr[0]) {
      if (char.charCodeAt(char) === subarr[1]) {
        miniwins++;
        break;
      }
    }
  });

  return miniwins >= win ? "Winner!" : "Loser!";
}

console.log(
  bingo(
    [
      ["ABC", 65],
      ["HGR", 74],
      ["BYHT", 74],
    ],
    2
  )
); // 'Loser!'

console.log(
  bingo(
    [
      ["ABC", 65],
      ["HGR", 74],
      ["BYHT", 74],
    ],
    1
  )
); //  "Winner!";

console.log(
  bingo(
    [
      ["HGTYRE", 74],
      ["BE", 66],
      ["JKTY", 74],
    ],
    3
  )
); // "Loser!";
