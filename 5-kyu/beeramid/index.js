const beeramid = (bonus, price) => {
  let totalPrice = 0;
  for (let i = 1; i > 0; i++) {
    const currentLevelGlassQty = i * i;
    totalPrice += currentLevelGlassQty * price;
    if (totalPrice > bonus) return i - 1;
  }
};

console.log(beeramid(1500, 2)); // 12
console.log(beeramid(5000, 3)); // 16
