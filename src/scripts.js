import './styles.css';
import RecipeRepository from './classes/RecipeRepository'
import { fetchApiData } from './apiCalls';
import burger from './images/burger.png';
import './images/favorite.svg';
import './images/fridge.svg';
import './images/home.svg';
import './images/list.svg';
import './images/search.svg';

console.log('Hello world');


let recipeRepo;
const createRecipeRepo = () => {
  fetchApiData('recipes')
    .then(data => {
      recipeRepo = data.recipeData;
      console.log(recipeRepo[0]);
    })
};

let homeNavBtn = document.getElementById('homeNav');
let favNavBtn = document.getElementById('favNav');
let listNavBtn = document.getElementById('listNav');
let recipeLikeBtns = document.getElementsByClassName('btn');


window.addEventListener('load', (e) => {
  addClass(homeNavBtn, 'hidden');
  createRecipeRepo()
  console.log(typeof(recipeRepo));
  // console.log(recipeCards);
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

[...recipeLikeBtns].forEach((action) => {
  action.addEventListener('click', function(e) {
  // let actionBtns = recipeActions.children[2]
  if(e.target.classList.contains('like-btn') && e.target.classList.contains('unlike-btn')) {
    e.target.classList.remove('like-btn');
  } else {
    e.target.classList.add('like-btn');
  }
})

// function displayAllRecipes (allRecipes) {
//   let recipeContainer = document.querySelector('.all-recipes');
//
});


function addClass(element, classList) {
  element.classList.add(classList);
}

function removeClass (element, classList) {
  element.classList.remove(classList);
}
