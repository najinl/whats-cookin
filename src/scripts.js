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
let ingredients, recipeRepository, recipe, user


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
  console.log(recipe[0].image)
  console.log(ingredients)
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
        <button class="btn remove-btn"></button>
        <button class="btn unlike-btn like-btn"></button>
      </div>
    </section>`

    recipeContainer.innerHTML += cardContent
    // recipeLikeBtns = document.getElementsByClassName('btn')
  })
};

//-----WE SHOULD DELETE THIS SOON...BUT I'M NOT READY YET!#HIGHANXIETY-----
// recipeContainer.addEventListener('click', function(e) {
//   let recipeID = e.target.closest('.recipe-card').id
//   if(e.target.closest('button')) {
//     if(e.target.classList.contains('like-btn') && e.target.classList.contains('unlike-btn')) {
//       e.target.classList.remove('like-btn')
//       favoritedRecipes.push(recipeID);
//     } else {
//       e.target.classList.add('like-btn')
//       favoritedRecipes.forEach((element, index) => {
//             if(element === recipeID) {
//               favoritedRecipes.splice(index, 1);
//             }
//           })
//     }
//   }
//   console.log(favoritedRecipes)
// })

recipeContainer.addEventListener('click', function(e) {
  let recipeID = e.target.closest('.recipe-card').id;
  let favoritedRecipes = user.myFavorites;
  if(e.target.closest('button')) {
    if(e.target.classList.contains('like-btn') && e.target.classList.contains('unlike-btn')) {
      e.target.classList.remove('like-btn')
        user.favoriteRecipes(recipeID);
    } else {
      e.target.classList.add('like-btn')
      user.unfavoriteRecipes(favoritedRecipes, recipeID);
    }
  }
  console.log(user.myFavorites)
})


function addClass(element, classList) {
  element.classList.add(classList);
}

function removeClass (element, classList) {
  element.classList.remove(classList);
}
