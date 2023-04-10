const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector("#ingredients");

const ingredientsMarcup = [];
ingredients.forEach((ingredient) => {
  const ingredientElement = document.createElement('li');
  ingredientElement.textContent = `${ingredient}`;
  ingredientElement.classList.add("item");
  ingredientsMarcup.push(ingredientElement);

  return ingredientsMarcup;
})

ulEl.append(...ingredientsMarcup);