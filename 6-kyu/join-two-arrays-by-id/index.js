function joinArraysById(arr1, arr2) {
  const arrays = [...arr1, ...arr2];

  const result = arrays.reduce((acc, curr) => {
    if (!acc.find((obj) => obj.id === curr.id)) {
      acc.push(curr);
    } else {
      acc[acc.indexOf(acc.find((obj) => obj.id === curr.id))] = {
        ...acc[acc.indexOf(acc.find((obj) => obj.id === curr.id))],
        ...curr,
      };
    }
    return acc;
  }, []);
  return result.sort((a, b) => a.id - b.id);
}

joinArraysById(
  [
    { id: 1, x: 1 },
    { id: 2, x: 9 },
  ],
  [{ id: 3, x: 5 }]
);
// Output: [
//   { "id": 1, "x": 1 },
//   { "id": 2, "x": 9 },
//   { "id": 3, "x": 5 }
// ]

joinArraysById(
  [
    { id: 2, x: 9 },
    { id: 1, x: 1 },
  ],
  [
    { id: 2, y: 2 },
    { id: 3, z: 3 },
  ]
);
// output: [
//   { id: 1, x: 1 },
//   { id: 2, x: 9, y: 2 },
//   { id: 3, z: 3 },
// ];

joinArraysById(
  [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }],
  [{ id: 1, b: { c: 84 }, v: [1, 3] }]
);
// Output: [
//   { "id": 1, "b": { "c": 84 }, "v": [1, 3], "y": 48 }
// ]
