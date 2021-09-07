// import Pantry from './Pantry';
// import RecipeOptions from './RecipeOptions';
class User {
  constructor(user, recipeRepository) {
    this.id = user.id;
    this.name = user.name;
    this.myFavorites = [];
    this.myList = [];
    // this.recipeOptions = new RecipeOptions(recipeData, ingredientsData);
  }

// buildUserData() {
//   this.pantry.makeIngredients();
// }

checkIfCookable() {
  //iterate over the myList array and match id to id within the recipeRopository
  //pull out the ingredients and amount of ingredients
  //do you have enough ingredients to cook the recipe
    //check the ingredient name is included ... i'm thinking .contains here?
    //if all ingredients are contained, then check amounts to see if you have the right amounts of each ingredients

    //if true, return "Let's get cookin'!"
    //else, you need "2 tsps of salt"
}

unfavoriteRecipes(arrToFavorites, id) {
  arrToFavorites.forEach((favorite, i) => {
    if(favorite === parseInt(id)) {
      return arrToFavorites.splice(i, 1)
    }
  })
}

favoriteRecipes(id) {
  this.myFavorites.push(parseInt(id));
}

addToMyList(id){
  this.myList.push(parseInt(id));
}

removeFromMyList(arrToList, id){
  arrToList.forEach((item, i) => {
    if(item === parseInt(id)) {
      return arrToList.splice(i, 1)
    }
  })
}
}

export default User;
