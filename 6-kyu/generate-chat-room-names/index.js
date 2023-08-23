// https://www.codewars.com/kata/64d9f8b2dd14d200247b8184/train/javascript

function generateChatRoomNames(users) {
  const uniqueNames = {};
  const chatroomNames = [];
  users.forEach((user) => {
    const firstName = user.split(" ")[0].toLowerCase();
    const lastName = user.split(" ")[1].toLowerCase();
    const lastInitial = lastName[0];

    if (!uniqueNames[firstName]) {
      uniqueNames[firstName] = { count: 1, lastInitials: {} };
      !uniqueNames[firstName].lastInitials[lastInitial]
        ? (uniqueNames[firstName].lastInitials[lastInitial] = 1)
        : uniqueNames[firstName].lastInitials[lastInitial]++;
    } else {
      uniqueNames[firstName].count++;
      !uniqueNames[firstName].lastInitials[lastInitial]
        ? (uniqueNames[firstName].lastInitials[lastInitial] = 1)
        : uniqueNames[firstName].lastInitials[lastInitial]++;
    }
  });

  users.forEach((user) => {
    const firstName = user.split(" ")[0].toLowerCase();
    const lastName = user.split(" ")[1].toLowerCase();
    const lastInitial = lastName[0];

    if (uniqueNames[firstName].count === 1) {
      chatroomNames.push(firstName[0].toUpperCase() + firstName.slice(1));
    } else {
      if (uniqueNames[firstName].lastInitials[lastInitial] > 1) {
        chatroomNames.push(
          firstName[0].toUpperCase() +
            firstName.slice(1) +
            ` ${lastName[0].toUpperCase() + lastName.slice(1)}`
        );
      } else {
        chatroomNames.push(
          firstName[0].toUpperCase() +
            firstName.slice(1) +
            ` ${lastInitial.toUpperCase()}`
        );
      }
    }
  });
  return chatroomNames.sort();
}

generateChatRoomNames(["JOe Bloggs"]); // ["Joe"]
generateChatRoomNames(["John Smith", "Joe Bloggs"]); // ["Joe", "John"]
generateChatRoomNames(["Joe Bloggs", "John Smith", "Jane Doe", "Jane Bloggs"]); // Should return user's initials if their is a forename collision ["Jane B", "Jane D", "Joe", "John"]
generateChatRoomNames([
  "Joe Bloggs",
  "John Smith",
  "Jane Doe",
  "Jane Bloggs",
  "John Scott",
  "John Wall",
]); // Should return user's full names if there is a first and initials collision ["Jane B", "Jane D", "Joe", "John Scott", "John Smith", "John W"]
