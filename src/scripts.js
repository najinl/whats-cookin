import './styles.css';
import './images/burger.png';
import './images/favorite.svg';
import './images/fridge.svg';
import './images/home.svg';
import './images/list.svg';
import './images/search.svg';
import { fetchUsers, fetchIngredients, fetchRecipes} from './apiCalls.js'
import IngredientsLibrary from './classes/IngredientsRepository.js'
import Recipe from './classes/Recipe.js'
import RecipeRepository from './classes/RecipeRepository'


//global variables, instantiations of classes, holds info
let ingredients, recipeRepository, recipe 


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
  let i = Math.floor(Math.random()*42);

  ingredients = new IngredientsLibrary(ingredientDataArray)
  recipeRepository = new RecipeRepository(recipeDataArray)

  //recipe is weird because its a single recipe. how get? should it get instantiated later?
  recipe = recipeDataArray.map(recipe => {
    return new Recipe(recipe, ingredients)
  })
}


const renderinfo = () => {
  console.log(recipe)
  console.log(ingredients)
}


let homeNavBtn = document.getElementById('homeNav');
let favNavBtn = document.getElementById('favNav');
let listNavBtn = document.getElementById('listNav');
let recipeCard = document.getElementById('recipeCard');



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
})

recipeContainer.addEventListener('click', function(e) {
  if(e.target.classList.contains('like-btn')) {
    e.target.classList.add('unlilke-btn');
    e.target.classList.remove('like-btn');
  }
})

const addClass = (element, classList) => {
  element.classList.add(classList);
}

const removeClass = (element, classList) => {
  element.classList.remove(classList);
}


