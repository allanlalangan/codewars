const recipe = { flour: 500, sugar: 200, eggs: 1 };
const currentIngredients = { flour: 500, sugar: 1200, eggs: 5, milk: 200 };

const cakes = (recipe, itemsInStock) => {
  const batches = [];
  for (prop in recipe) {
    if (!itemsInStock[prop]) {
      return 0;
    }
    batches.push(Math.floor(itemsInStock[prop] / recipe[prop]));
  }
  return Math.min(...batches);
};
