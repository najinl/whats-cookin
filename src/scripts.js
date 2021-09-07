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
let ingredients, recipeRepository, recipe, user, displayRecipe, modalContainer, closeModalBtn, favoritedRecipes, likedRecipes



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
    return new Recipe(recipe, ingredientDataArray)
  })
  user = new User(userDataArray[i], recipeRepository);
}


const renderinfo = () => {
  // console.log(recipe[0].image)
  // console.log(ingredients)
  showCards(recipe)
}

let homeNavBtn = document.getElementById('homeNav');
let favNavBtn = document.getElementById('favNav');
let listNavBtn = document.getElementById('listNav');
var recipeLikeBtns = document.getElementsByClassName('btn');
let recipeContainer = document.getElementById('recipeContainer');
let lunch = document.getElementById('lunch')
let filterBtn = document.getElementById('filterBtn')
let searchBtn = document.getElementById('searchIcon')
let searchValues = document.getElementById('inputSearch')

filterBtn.addEventListener('click', (event) => {
  getTags('check')
})

searchBtn.addEventListener('click', (event) => {
  getSearchItems()
})

function getTags(name) {
  let checkBox = document.querySelectorAll(`input[name="${name}"]:checked`)
  let findChecks = document.querySelectorAll(`input[name="${name}"]:checked`).length
  let checkedElements = [];
  checkBox.forEach((checkbox) => {
    checkedElements.push(checkbox.value)
  }) 
  let newRecipes = recipeRepository.filterByTags(checkedElements)

  if(findChecks === 0) {
    showCards(recipe)
  } else {
    clearCards()
    showCards(newRecipes)
  }
}

function getSearchItems() {
let search = searchValues.value
let foundRecipes = recipeRepository.filterByIngredients(search, ingredients.ingredientsLibrary)


 clearCards()
showCards(foundRecipes)

}


let favoritedContainer = document.getElementById('favoritedRecipeContainer');
let myListContainer = document.getElementById('listRecipeContainer');

window.addEventListener('load', (e) => {
  addClass(homeNavBtn, 'hidden');
  fetchData()
  console.log(recipe)
})

homeNavBtn.addEventListener('click', function() {
  favoritedContainer.innerHTML = '';
  myListContainer.innerHTML = '';
  addClass(homeNavBtn, 'hidden');
  removeClass(favNavBtn, 'hidden');
  removeClass(listNavBtn, 'hidden');
  addClass(favoritedContainer, 'hidden');
  removeClass(recipeContainer, 'hidden');
  refreshFavorited();
  refreshLiked()
})

favNavBtn.addEventListener('click', function() {
  favoritedContainer.innerHTML = '';
  myListContainer.innerHTML = '';
  addClass(favNavBtn, 'hidden');
  removeClass(homeNavBtn, 'hidden');
  removeClass(listNavBtn, 'hidden');
  showFavorites();
})

listNavBtn.addEventListener('click', function() {
  addClass(listNavBtn, 'hidden');
  removeClass(homeNavBtn, 'hidden')
  removeClass(favNavBtn, 'hidden')
  showMyList()
});

recipeContainer.addEventListener('click', function(e) {
  let targetBtn = e.target;
  let recipeID = parseInt(targetBtn.closest('.recipe-card').id);
  favoritedRecipes = user.myFavorites;
  likedRecipes = user.myList;

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
    else if(targetBtn.closest('#viewRecipe')) {
      let filteredRec = recipe.filter((oneRecipe) => {
        return oneRecipe.id === parseInt(recipeID);
      })
      makeModal(filteredRec[0]);
      modalContainer.classList.add('show')
    }
  }
  console.log('Home List:',user.myList);
  // console.log('Home Fav:',user.myFavorites);
})

favoritedContainer.addEventListener('click', function(e) {
  let targetBtn = e.target;
  let recipeID = parseInt(targetBtn.closest('.favorited-recipe-card').id);
  console.log('recipeID on fav,', recipeID)

  if(targetBtn.classList.contains('unfavorite')) {
      removeFromFavorites(targetBtn, favoritedRecipes, recipeID);
    }
    else if(targetBtn.classList.contains('unfavorite') && targetBtn.classList.contains('favorite')) {
      addToFavorites(targetBtn, favoritedRecipes, recipeID);
    }
    else if(targetBtn.classList.contains('add') && targetBtn.classList.contains('remove')) {
      addToCookList(targetBtn, recipeID);
    }
    else if(targetBtn.classList.contains('remove') && !targetBtn.classList.contains('add')){
      removeFromCookList(targetBtn, likedRecipes, recipeID);
    }
    console.log('Fav List:',user.myList);
    // console.log('Fav Fav:',user.myFavorites);
  // console.log(user.myList);
})

myListContainer.addEventListener('click', function(e) {
  let targetBtn = e.target;
  let recipeID = parseInt(targetBtn.closest('.list-recipe-card').id);
  console.log(recipeID);
  if(targetBtn.classList.contains('unfavorite') && targetBtn.classList.contains('favorite')) {
      addToFavorites(targetBtn, favoritedRecipes, recipeID);
      console.log('screw')
    }
    else if(targetBtn.classList.contains('unfavorite') && !targetBtn.classList.contains('favorite')) {
      removeFromFavorites(targetBtn, favoritedRecipes, recipeID);
      console.log('this')
    }
    else if(targetBtn.classList.contains('add') && targetBtn.classList.contains('remove')) {
      addToCookList(targetBtn, recipeID);
      console.log('shit')
    }
    else if(targetBtn.classList.contains('remove')){
      removeFromCookList(targetBtn, likedRecipes, recipeID);
      console.log('man')
    }
    console.log('List List:',user.myList);
    // console.log('List Fav:',user.myFavorites);
})

function refreshFavorited() {
let recipeCard = recipeContainer.querySelectorAll('.recipe-card');
// let favBtn = document.querySelector('.btn unfavorite');
  recipeCard.forEach(recipe => {
    let recipeActions = recipe.getElementsByClassName('recipe-actions');
    let favBtn = recipeActions[0].children[2]
    if(favoritedRecipes.includes(parseInt(recipe.id))) {
       removeClass(favBtn, 'favorite')
    }
    else {
      addClass(favBtn, 'favorite')
    }
  })
}

function refreshLiked() {
let recipeCard = recipeContainer.querySelectorAll('.recipe-card');
  recipeCard.forEach(recipe => {
    let recipeActions = recipe.getElementsByClassName('recipe-actions');
    let addBtn = recipeActions[0].children[1]
    if(likedRecipes.includes(parseInt(recipe.id))) {
       removeClass(addBtn, 'add')
    }
    else {
      addClass(addBtn, 'add')
    }
  })
}


function showCards(data) {
  data.map(oneRecipe =>
    {
    const recipecard = document.createElement('div');
    recipecard.classList = 'recipe-card';

    let cardContent =
    `<section class="recipe-card" id="${oneRecipe.id}">
      <img class="recipe-img" src="${oneRecipe.image}"/>
      <p>${oneRecipe.name}</p>
      <div class="recipe-actions">
        <button class="view-me" id="viewRecipe">View</button>
        <button class="btn remove add"></button>
        <button class="btn unfavorite favorite"></button>
      </div>
    </section>`
    recipeContainer.innerHTML += cardContent
  })
};

function clearCards() {
    let removeElement = document.getElementById('recipeContainer')
    while (removeElement.firstChild) {
      removeElement.removeChild(removeElement.firstChild);
    }
  }

function showFavorites() {
  // console.log('FAVORITES', favoritedRecipes)
  recipe.forEach(currRecipe =>
    {
    const favoritedRecipeCard = document.createElement('div');
    favoritedRecipeCard.classList = 'favorited-recipe-card';
    if(favoritedRecipes.includes(currRecipe.id)) {
    let cardContent =
    `<section class="favorited-recipe-card" id="${currRecipe.id}">
      <img class="recipe-img" src="${currRecipe.image}"/>
      <p>${currRecipe.name}</p>
      <div class="recipe-actions">
        <button class="btn remove add" id="addRecipe"></button>
        <button class="btn unfavorite" id="favoriteRecipe"></button>
      </div>
    </section>`
    favoritedContainer.innerHTML += cardContent
  }
  })
  addClass(recipeContainer, 'hidden');
  removeClass(favoritedContainer, 'hidden');
};

function showMyList() {
  // console.log('FAVORITES', favoritedRecipes)
  recipe.forEach(currRecipe =>
    {
    const listRecipeCard = document.createElement('div');
    listRecipeCard.classList = 'list-recipe-card';
    if(likedRecipes.includes(currRecipe.id)) {
    let cardContent =
    `<section class="list-recipe-card" id="${currRecipe.id}">
      <img class="recipe-img" src="${currRecipe.image}"/>
      <p>${currRecipe.name}</p>
      <div class="recipe-actions">
        <button class="btn remove" id="addRecipe"></button>
        <button class="btn unfavorite favorite" id="favoriteRecipe"></button>
      </div>
    </section>`
    myListContainer.innerHTML += cardContent
  }
  })
  addClass(recipeContainer, 'hidden');
  addClass(favoritedContainer, 'hidden');
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

  // let instructions = recipe.instructions(instruction => {
  //   return `${instruction.number}. ${instruction}`
  // })
  let howTo = recipe.instructions.map(instruction => {
    return `${instruction.number}. ${instruction.instruction} <br><br>`
  })

  let gatheredIngredients = recipe.gatherIngredients()
console.log(gatheredIngredients)
  
let styleIngredientsList = gatheredIngredients.map(ingredient => {
    return `${ingredient}<br>`
  })

  console.log(styleIngredientsList)

  // we will need to modify the instructions with an iterator to get all of them included, I just did this for sake of time tonight. (line 193<p>) We need to thing out how we're going to number them too. I was thinking in front like this 1) preheat the oven...
  // I am thinking reduce() with an accumulator that concatenates the instructions into a single string
  let modal =
    `<div class="modal-container" id="modalContainer">
      <div class="modal" id="modal">
        <section class="ingredients-picture">
          <img class="modal-recipe-img" src="${recipe.image}"/>
          <h2> Ingredients </h2>
          <p>${styleIngredientsList}</p>
        </section>
        <div class="modal-text">
          <h1>${recipe.name}</h1>
          <p class="howTo">${howTo}</p>
          <p>It will cost $${recipe.calculateCost()} to make this recipe.</p>
          <button id="closeModal">Close</button>
        <div>
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
