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
