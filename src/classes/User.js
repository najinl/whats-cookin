// import Pantry from './Pantry';
// import RecipeOptions from './RecipeOptions';
class User {
  constructor(user, recipeRepository) {
    this.id = user.id;
    this.name = user.name;
    this.myFavorites = [];
    this.myList = [];
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
