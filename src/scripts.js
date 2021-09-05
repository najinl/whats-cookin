import './styles.css';
import burger from './images/burger.png';
import './images/favorite.svg';
import './images/fridge.svg';
import './images/home.svg';
import './images/list.svg';
import './images/search.svg';
import { fetchUsers, fetchIngredients, fetchRecipes} from './apiCalls.js';
import IngredientsLibrary from './classes/IngredientsRepository.js';
import Recipe from './classes/Recipe.js';
import RecipeRepository from './classes/RecipeRepository';
import User from './classes/User';




//global variables, instantiations of classes, holds info
let ingredients, recipeRepository, recipe, user, displayRecipe, modalContainer, closeModalBtn


const fetchData = () => {
  Promise.all([fetchUsers(), fetchIngredients(), fetchRecipes()])
    .then(data => parseData(data))
}

const parseData = (data) => {
  let userDataArray = data[0].usersData
  let ingredientDataArray = data[1].ingredientsData
  let recipeDataArray = data[2].recipeData

  instantiation(userDataArray, ingredientDataArray, recipeDataArray)
  renderinfo()
}

const instantiation = (userDataArray, ingredientDataArray, recipeDataArray) => {
  //math random for random user, do not have user class yet
  let i = Math.floor(Math.random() * userDataArray.length);
  ingredients = new IngredientsLibrary(ingredientDataArray)
  recipeRepository = new RecipeRepository(recipeDataArray)
  recipe = recipeDataArray.map(recipe => {
    return new Recipe(recipe, ingredients)
  })
  user = new User(userDataArray[i], recipeRepository);
}


const renderinfo = () => {
  // console.log(recipe[0].image)
  // console.log(ingredients)
  showCards()
}

let homeNavBtn = document.getElementById('homeNav');
let favNavBtn = document.getElementById('favNav');
let listNavBtn = document.getElementById('listNav');
var recipeLikeBtns = document.getElementsByClassName('btn');
let recipeContainer = document.getElementById('recipeContainer');

window.addEventListener('load', (e) => {
  addClass(homeNavBtn, 'hidden');
  fetchData()
})

homeNavBtn.addEventListener('click', function() {
  addClass(homeNavBtn, 'hidden');
  removeClass(favNavBtn, 'hidden');
  removeClass(listNavBtn, 'hidden');
})

favNavBtn.addEventListener('click', function() {
  addClass(favNavBtn, 'hidden');
  removeClass(homeNavBtn, 'hidden');
  removeClass(listNavBtn, 'hidden');
})

listNavBtn.addEventListener('click', function() {
  addClass(listNavBtn, 'hidden');
  removeClass(homeNavBtn, 'hidden')
  removeClass(favNavBtn, 'hidden')
});

recipeContainer.addEventListener('click', function(e) {
  let targetBtn = e.target;
  let recipeID = targetBtn.closest('.recipe-card').id;
  let favoritedRecipes = user.myFavorites;
  let likedRecipes = user.myList;

  if(targetBtn.closest('button')) {
    if(targetBtn.classList.contains('favorite')) {
      addToFavorites(targetBtn, recipeID)
    }
    else if(targetBtn.classList.contains('unfavorite') && !targetBtn.classList.contains('favorite')) {
      removeFromFavorites(targetBtn, favoritedRecipes, recipeID);
    }
    else if(targetBtn.classList.contains('add') && targetBtn.classList.contains('remove')) {
      addToCookList(targetBtn, recipeID);
    }
    else if(targetBtn.classList.contains('remove') && !targetBtn.classList.contains('add')){
      removeFromCookList(targetBtn, likedRecipes, recipeID);
    }
    else if(targetBtn.closest('#cookMe')) {
      // filteredRec = null;
      let filteredRec = recipe.filter((oneRecipe) => {
        return oneRecipe.id === parseInt(recipeID);
      })
      makeModal(filteredRec[0]);
      modalContainer.classList.add('show')
    }
  }
  // console.log(e.target)
  // console.log(user.myFavorites)
  // console.log(user.myList)
})


function showCards() {
  recipe.map(oneRecipe =>
    {
    const recipecard = document.createElement('div');
    recipecard.classList = 'recipe-card';

    let cardContent =
    `<section class="recipe-card" id="${oneRecipe.id}">
      <img class="recipe-img" src="${oneRecipe.image}"/>
      <p>${oneRecipe.name}</p>
      <div class="recipe-actions">
        <button class="cook-me" id="cookMe">Cook Me!</button>
        <button class="btn remove add"></button>
        <button class="btn unfavorite favorite"></button>
      </div>
    </section>`
    recipeContainer.innerHTML += cardContent
  })
};

function addToFavorites(targetBtn, id) {
  targetBtn.classList.remove('favorite')
  user.favoriteRecipes(id);
};

function removeFromFavorites(targetBtn, favoritedRecipes, id) {
  targetBtn.classList.add('favorite')
  user.unfavoriteRecipes(favoritedRecipes, id);
}

function addToCookList(targetBtn, id) {
  targetBtn.classList.remove('add')
  user.addToMyList(id);
}

function removeFromCookList(targetBtn, likedRecipes, id) {
  targetBtn.classList.add('add')
  user.removeFromMyList(likedRecipes, id)
}

function makeModal(recipe) {
  const newModal = document.createElement('div');
  let checkModal = document.getElementById('modalContainer');
  if(checkModal !== null) {
    recipeContainer.removeChild(checkModal);
  }
  // we will need to modify the instructions with an iterator to get all of them included, I just did this for sake of time tonight. (line 193<p>) We need to thing out how we're going to number them too. I was thinking in front like this 1) preheat the oven...
  // I am thinking reduce() with an accumulator that concatenates the instructions into a single string
  let modal =
    `<div class="modal-container" id="modalContainer">
      <div class="modal" id="modal">
      <img class="modal-recipe-img" src="${recipe.image}"/>
        <h1>${recipe.name}</h1>
        <p>${recipe.instructions[0].instruction}</p>
        <button id="closeModal">Close</button>
      </div>
    </div>`
    recipeContainer.innerHTML += modal
    modalContainer = document.getElementById('modalContainer')
    closeModalBtn = document.getElementById('closeModal');
    modalContainer.classList.add('show');
    closeModalBtn.addEventListener('click', function() {
      modalContainer.classList.remove('show');
    });
}

function addClass(element, classList) {
  element.classList.add(classList);
}

function removeClass (element, classList) {
  element.classList.remove(classList);
}
