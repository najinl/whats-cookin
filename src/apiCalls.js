export function fetchUsers() {
 return fetch("http://localhost:3001/api/v1/users")
  .then(response => response.json())
  .then(data => data);
}

export function fetchIngredients() {
  return fetch("http://localhost:3001/api/v1/ingredients")
   .then(response => response.json())
   .then(data => data);
 }

export function fetchRecipes() {
  return fetch("http://localhost:3001/api/v1/recipes")
    .then(response => response.json())
    .then(data => data);
}

export const removeFromPantry = (userID, recipe) => {
  recipe.ingredientsData.forEach(ingredient => {
  fetch('http://localhost:3001/api/v1/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
  "userID": userID,
  "ingredientID": ingredient.id,
  "ingredientModification": -(ingredient.quantity.amount)
})
  })
  .then(response => response.json())
  })
  user.myPantry.addIngredientsByName()
}

export const buyIngredients = (userID, ingredientsNeeded) => {
  ingredientsNeeded.forEach(ingredient => {
  fetch('http://localhost:3001/api/v1/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
  "userID": userID,
  "ingredientID": ingredient.id,
  "ingredientModification": ingredient.amountNeeded
})
  })
  .then(response => response.json())
  })
  user.myPantry.addIngredientsByName()
}
