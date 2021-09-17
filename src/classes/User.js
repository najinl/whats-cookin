import Pantry from './Pantry';

class User {
  constructor(user, recipeRepository, ingredientsData) {
    this.id = user.id;
    this.name = user.name;
    this.myFavorites = [];
    this.myList = [];
    this.myPantry = new Pantry(user.pantry, ingredientsData);
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
