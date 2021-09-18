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
import Pantry from './classes/Pantry';
import User from './classes/User';

//global variables, instantiations of classes
let ingredients, recipeRepository, recipe, user, pantry, displayRecipe, modalContainer, closeModalBtn, favoritedRecipes, likedRecipes,
foundRecipeIngredients, foundRecipeNames, pantryUL
// , neededIngBtn, cookBtn

let homeNavBtn = document.getElementById('homeNav');
let favNavBtn = document.getElementById('favNav');
let listNavBtn = document.getElementById('listNav');
var recipeLikeBtns = document.getElementsByClassName('btn');
let recipeContainer = document.getElementById('recipeContainer');
let filterBtn = document.getElementById('filterBtn');
let searchBtn = document.getElementById('searchIcon');
let searchValues = document.getElementById('inputSearch');
let favoritedContainer = document.getElementById('favoritedRecipeContainer');
let myListContainer = document.getElementById('listRecipeContainer');
let welcomename = document.getElementById('username')
let myPantry = document.getElementById('myPantry')
let leftPane = document.getElementById('leftPane')
let usersPantry = document.getElementById('usersPantry')

//Fetch Calls
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
  let i = Math.floor(Math.random() * userDataArray.length);
  ingredients = new IngredientsLibrary(ingredientDataArray)
  recipeRepository = new RecipeRepository(recipeDataArray)
  recipe = recipeDataArray.map(recipe => {
    return new Recipe(recipe, ingredientDataArray)
  })
  user = new User(userDataArray[i], recipeRepository, ingredientDataArray);
  renderName()
}

//Event Listeners
window.addEventListener('load', (e) => {
  addClass(homeNavBtn, 'hidden');
  fetchData()
})

searchBtn.addEventListener('click', (event) => {
  getSearchItems()
})

filterBtn.addEventListener('click', (event) => {
    getTags()
})

homeNavBtn.addEventListener('click', () => {
  favoritedContainer.innerHTML = '';
  myListContainer.innerHTML = '';
  addClass(homeNavBtn, 'hidden');
  removeClass(favNavBtn, 'hidden');
  removeClass(listNavBtn, 'hidden');
  addClass(favoritedContainer, 'hidden');
  removeClass(recipeContainer, 'hidden');
  addClass(myPantry, 'hidden');
  removeClass(tagList, 'hidden');
  refreshFavorited();
  refreshLiked();
})

favNavBtn.addEventListener('click', () => {
  favoritedContainer.innerHTML = '';
  myListContainer.innerHTML = '';
  addClass(favNavBtn, 'hidden');
  removeClass(homeNavBtn, 'hidden');
  removeClass(listNavBtn, 'hidden');
  removeClass(tagList, 'hidden')
  showFavorites();
})

listNavBtn.addEventListener('click', () => {
  addClass(listNavBtn, 'hidden');
  removeClass(homeNavBtn, 'hidden');
  removeClass(favNavBtn, 'hidden');
  addClass(tagList, 'hidden');
  addClass(recipeContainer, 'hidden');
  removeClass(myPantry, 'hidden');
  showPantryItems();
  showMyList()
});



recipeContainer.addEventListener('click', (e) => {
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
  // console.log('FAVORITED:',favoritedRecipes)
})

favoritedContainer.addEventListener('click', (e) => {
  let targetBtn = e.target;
  let recipeID = parseInt(targetBtn.closest('.favorited-recipe-card').id);

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
})

myListContainer.addEventListener('click', (e) => {
  let targetBtn = e.target;
  let recipeID = parseInt(targetBtn.closest('.list-recipe-card').id);
//9/17 --->argument for remove fromPantry
  console.log(targetBtn)

  if(targetBtn.classList.contains('unfavorite') && targetBtn.classList.contains('favorite')) {
      addToFavorites(targetBtn, favoritedRecipes, recipeID);
    }
    else if(targetBtn.classList.contains('unfavorite') && !targetBtn.classList.contains('favorite')) {
      removeFromFavorites(targetBtn, favoritedRecipes, recipeID);
    }
    else if(targetBtn.classList.contains('add') && targetBtn.classList.contains('remove')) {
      addToCookList(targetBtn, recipeID);
    }
    else if(targetBtn.classList.contains('remove')){
      removeFromCookList(targetBtn, likedRecipes, recipeID);
    }
    else if(targetBtn.classList.contains('missing-ing')){
      let checkIngrRecipe = recipe.find(currRecipe => {
      return currRecipe.id === recipeID
      })
      console.log(checkIngrRecipe)
      user.myPantry.determineAmtNeeded(checkIngrRecipe)
      alert(user.myPantry.returnCookMessage())
    }
})

const refreshFavorited = () => {
let recipeCard = recipeContainer.querySelectorAll('.recipe-card');
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

const refreshLiked = () => {
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

//Functions
const showCards = (data) => {
  data.map(oneRecipe =>
    {
    const recipecard = document.createElement('div');
    recipecard.classList = 'recipe-card';

    let cardContent =
    `<section class="recipe-card" id="${oneRecipe.id}">
      <img class="recipe-img" src="${oneRecipe.image}"/>
      <p>${oneRecipe.name}</p>
      <div class="recipe-actions">
        <button aria-label="view ${oneRecipe.name} recipe" class="view-me" id="viewRecipe">View</button>
        <button aria-label="add ${oneRecipe.name} to cook list" class="btn remove add"></button>
        <button aria-label="add ${oneRecipe.name} to favorites" class="btn unfavorite favorite" id="favoriteRecipe"></button>
      </div>
    </section>`
    recipeContainer.innerHTML += cardContent
  })
};

const clearCards = (containerElement) => {
    let removeElement = document.getElementById(containerElement)
    while (removeElement.firstChild) {
      removeElement.removeChild(removeElement.firstChild);
    }
  }

const showFavorites = () => {
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

const showMyList = () => {
  recipe.forEach(currRecipe =>
    {
      user.myPantry.determineAmtNeeded(currRecipe)
      // console.log("IngNeed!!!",user.myPantry.ingredientsNeeded.length)
      console.log("IngNeededList:", user.myPantry.ingredientsNeeded)
    const listRecipeCard = document.createElement('div');
    // listRecipeCard.classList = 'list-recipe-card';
    if(likedRecipes.includes(currRecipe.id) && user.myPantry.ingredientsNeeded.length > 0) {
    let cardContent =
    `<section class="list-recipe-card" id="${currRecipe.id}">
      <img class="recipe-img" src="${currRecipe.image}"/>
      <p>${currRecipe.name}</p>
      <div class="recipe-actions">
        <button class="btn missing-ing id="missingIng">Needed?</button>
        <button class="btn remove" id="addRecipe"></button>
        <button class="btn unfavorite favorite" id="favoriteRecipe"></button>
      </div>
    </section>`
    myListContainer.innerHTML += cardContent
    // neededIngBtn = document.getElementById('missingIng');
  } else if(likedRecipes.includes(currRecipe.id) && user.myPantry.ingredientsNeeded.length === 0) {
    `<section class="list-recipe-card" id="${currRecipe.id}">
      <img class="recipe-img" src="${currRecipe.image}"/>
      <p>${currRecipe.name}</p>
      <div class="recipe-actions">
        <button class="btn lets-cook id="letsCook">Cook!</button>
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



const addToFavorites = (targetBtn, id) => {
  targetBtn.classList.remove('favorite')
  user.favoriteRecipes(id)
  let changeAria = document.getElementById('favoriteRecipe')
  changeAria.ariaLabel = 'add to favorites'
};

const removeFromFavorites = (targetBtn, favoritedRecipes, id) => {
  targetBtn.classList.add('favorite')
  user.unfavoriteRecipes(favoritedRecipes, id) 
  let changeAria = document.getElementById('favoriteRecipe')
  changeAria.ariaLabel = 'remove from favorites'
}

const addToCookList = (targetBtn, id) => {
  targetBtn.classList.remove('add')
  user.addToMyList(id);
}

const removeFromCookList = (targetBtn, likedRecipes, id) => {
  targetBtn.classList.add('add')
  user.removeFromMyList(likedRecipes, id)
}

// const removeFromPantry = () => {
//
// }

const makeModal = (recipe) => {
  const newModal = document.createElement('div');
  let checkModal = document.getElementById('modalContainer');
  if(checkModal !== null) {
    recipeContainer.removeChild(checkModal);
  }
  let howTo = recipe.instructions.map(instruction => {
    return `${instruction.number}. ${instruction.instruction} <br><br>`
  })
  let gatheredIngredients = recipe.gatherIngredients()
  let styleIngredientsList = gatheredIngredients.map(ingredient => {
    return `<li class="ingredient-list">${ingredient}</li>`
  }).join(" ")
  let modal =
    `<div role="dialog" aria-labelledby="dialog-title" class="modal-container" id="modalContainer">
      <div class="modal" id="modal">
        <section class="ingredients-picture">
          <img class="modal-recipe-img" src="${recipe.image}"/>
          <h2> Ingredients </h2>
          <ul>
          ${styleIngredientsList}
          </ul>
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

const addClass = (element, classList) => {
  element.classList.add(classList);
}

const removeClass = (element, classList) => {
  element.classList.remove(classList);
}

const getSearchItems = () => {
  let search = searchValues.value
  foundRecipeIngredients = recipeRepository.filterByIngredients(search, ingredients.ingredientsLibrary)
  foundRecipeNames = recipeRepository.filterByName(search)
   clearCards('recipeContainer')
   showCards(foundRecipeNames)
   showCards(foundRecipeIngredients)
  }

const getTags = ()  => {
  let checkBox = document.querySelectorAll(`input[name="check"]:checked`)
  let findChecks = document.querySelectorAll(`input[name="check"]:checked`).length
  let checkedElements = [];
  checkBox.forEach((checkbox) => {
    checkedElements.push(checkbox.value)
  })
  let newRecipes = recipeRepository.filterByTags(checkedElements)
  if(findChecks === 0) {
    showCards(recipe)
  } else {
    clearCards('recipeContainer')
    showCards(newRecipes)
  }
}

const renderinfo = () => {
  showCards(recipe)
}

const renderName = () => {
  const renderedText = `What's cookin ${user.name}?`;
  welcomename.innerText += renderedText
}

const showPantryItems = () => {
//myPantry.innerHTML = ""

if(myPantry) {
  console.log('stuff')
}

 user.myPantry.addIngredientsByName();
 let inUserPantry = user.myPantry.ingredients.map(ingredient => {
  return `<li>${ingredient.name}(${ingredient.amount})</li>`
 }).join(" ")

 let pantryContent = 
 `<section class="users-pantry" id="usersPantry">
    <h2 class="pantry-title">${user.name}'s Pantry Items</h2>
    <ul class="pantry-items" id="pantryUL">
    ${inUserPantry}
    </ul>
  </section>`

  myPantry.innerHTML += pantryContent

  // pantryUL = document.getElementById('pantryUL')

  // if(pantryUL.innerText.length > 0) {
  //   pantry.innerText = null
  // }

}