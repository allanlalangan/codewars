function joinArraysById(arr1, arr2) {
  const arrays = [...arr1, ...arr2];

  const merged = arrays.reduce((acc, curr) => {
    if (!acc[curr.id]) {
      acc[curr.id] = curr;
    } else {
      acc[curr.id] = { ...acc[curr.id], ...curr };
    }
    return acc;
  }, {});

  return Object.values(merged);
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
