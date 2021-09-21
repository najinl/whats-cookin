import './styles.css'
import './images/burger.png';
import './images/favorite.svg';
import './images/fridge.svg';
import './images/home.svg';
import './images/list.svg';
import './images/search.svg';
import { fetchUsers, fetchIngredients, fetchRecipes, buyIngredients, removeFromPantry} from './apiCalls.js';
import IngredientsLibrary from './classes/IngredientsRepository.js';
import Recipe from './classes/Recipe.js';
import RecipeRepository from './classes/RecipeRepository';
import Pantry from './classes/Pantry';
import User from './classes/User';


//global variables, instantiations of classes
let ingredients, recipeRepository, recipe, user, pantry, displayRecipe, modalContainer, closeModalBtn, markCookedBtn, buyIngBtn, missingIngBtn, letsCookBtn, favoritedRecipes, likedRecipes,foundRecipeIngredients, foundRecipeNames

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
  let userDataArray = data[0]
  let ingredientDataArray = data[1]
  let recipeDataArray = data[2]
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
  user = new User(userDataArray[4], recipeRepository, ingredientDataArray);
  renderName()
  user.myPantry.addIngredientsByName()
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
  addClass(recipeContainer, 'hidden');
  removeClass(homeNavBtn, 'hidden');
  removeClass(favNavBtn, 'hidden');
  addClass(tagList, 'hidden');

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
      targetBtn.ariaLabel = 'remove from favorites'

    }
    else if(targetBtn.classList.contains('unfavorite') && !targetBtn.classList.contains('favorite')) {
      removeFromFavorites(targetBtn, favoritedRecipes, recipeID);
      targetBtn.ariaLabel = 'add to favorites'
    }
    else if(targetBtn.classList.contains('add') && targetBtn.classList.contains('remove')) {
      addToCookList(targetBtn, recipeID);
      targetBtn.ariaLabel = 'remove from cooklist'
    }
    else if(targetBtn.classList.contains('remove') && !targetBtn.classList.contains('add')){
      removeFromCookList(targetBtn, likedRecipes, recipeID);
      targetBtn.ariaLabel = 'add to cooklist'
    }
    else if(targetBtn.closest('#viewRecipe')) {
      let filteredRec = recipe.filter((oneRecipe) => {
        return oneRecipe.id === parseInt(recipeID);
      })
      makeModal(filteredRec[0], recipeContainer);
      modalContainer.classList.add('show')
    }
  }
})

favoritedContainer.addEventListener('click', (e) => {
  let targetBtn = e.target;
  let recipeID = parseInt(targetBtn.closest('.favorited-recipe-card').id);

  if(targetBtn.classList.contains('unfavorite')) {
      removeFromFavorites(targetBtn, favoritedRecipes, recipeID);
      targetBtn.ariaLabel = 'add to favorites'
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
  let checkIngrRecipe = recipe.find(currRecipe => {
  return currRecipe.id === recipeID
  })

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
      user.myPantry.determineAmtNeeded(checkIngrRecipe);
      let returnMsg = user.myPantry.returnCookMessage();
      makeModalMissing(returnMsg, checkIngrRecipe);
    }
    else if(targetBtn.classList.contains('lets-cook')) {
      makeModal(checkIngrRecipe, myListContainer);
      markCookedBtn.classList.remove('hidden');
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

const clearCards = (container) => {
    let removeElement = document.getElementById(container)
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
  let cardContent;
  recipe.forEach(currRecipe =>
    {
      user.myPantry.determineAmtNeeded(currRecipe)
    const listRecipeCard = document.createElement('div');
    if(likedRecipes.includes(currRecipe.id) && user.myPantry.ingredientsNeeded.length > 0) {
    cardContent =
    `<section class="list-recipe-card" id="${currRecipe.id}">
      <img class="recipe-img" src="${currRecipe.image}"/>
      <p>${currRecipe.name}</p>
      <div class="recipe-actions">
      <button class="btn lets-cook hidden" id="letsCook">Cook!</button>
        <button class="btn missing-ing" id="missingIng">Needed?</button>
        <button class="btn remove" id="addRecipe"></button>
        <button class="btn unfavorite favorite" id="favoriteRecipe"></button>
      </div>
    </section>`
    myListContainer.innerHTML += cardContent
    missingIngBtn = document.getElementById('missingIng')
  } else if(likedRecipes.includes(currRecipe.id) && user.myPantry.ingredientsNeeded.length < 1 ) {
    cardContent =
    `<section class="list-recipe-card" id="${currRecipe.id}">
      <img class="recipe-img" src="${currRecipe.image}"/>
      <p>${currRecipe.name}</p>
      <div class="recipe-actions">
        <button class="btn lets-cook" id="letsCook">Cook!</button>
        <button class="btn missing-ing hidden" id="missingIng">Needed?</button>
        <button class="btn remove" id="addRecipe"></button>
        <button class="btn unfavorite favorite" id="favoriteRecipe"></button>
      </div>
    </section>`
    myListContainer.innerHTML += cardContent
    letsCookBtn = document.getElementById('letsCook');
  }
  })

  addClass(recipeContainer, 'hidden');
  addClass(favoritedContainer, 'hidden');
};

const addToFavorites = (targetBtn, id) => {
  targetBtn.classList.remove('favorite')
  user.favoriteRecipes(id)
};

const removeFromFavorites = (targetBtn, favoritedRecipes, id) => {
  targetBtn.classList.add('favorite')
  user.unfavoriteRecipes(favoritedRecipes, id)
}

const addToCookList = (targetBtn, id) => {
  targetBtn.classList.remove('add')
  user.addToMyList(id);
}

const removeFromCookList = (targetBtn, likedRecipes, id) => {
  targetBtn.classList.add('add')
  user.removeFromMyList(likedRecipes, id)
}


const makeModal = (recipe, container) => {
  const newModal = document.createElement('div');
  let checkModal = document.getElementById('modalContainer');
  if(checkModal !== null) {
    container.removeChild(checkModal);
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
          <button class="btn mark-cooked"id="markCooked">Finshed!</button>
          <button id="closeModal">Close</button>
        <div>
      </div>
    </div>`
    container.innerHTML += modal
    modalContainer = document.getElementById('modalContainer')
    closeModalBtn = document.getElementById('closeModal');
    markCookedBtn = document.getElementById('markCooked');
    addClass(modalContainer, 'show')
    closeModalBtn.addEventListener('click', function() {
    removeClass(modalContainer, 'show')
    });
    markCookedBtn.addEventListener('click', function() {
      myListContainer.childNodes.forEach(elem => {
        if(elem.id === recipe.id.toString()) {
          let secondChild = elem.children[2];
          addClass(secondChild.children[0], 'hidden')
        removeClass(secondChild.children[1], 'hidden')
        }
      })
    removeFromPantry(user.id, recipe);
    user.myPantry.determineAmtNeeded(recipe);
    });
}

const makeModalMissing = (returnMsg, recipe) => {
  const newModal = document.createElement('div');
  let checkModal = document.getElementById('modalContainer');
  if(checkModal !== null) {
    listRecipeContainer.removeChild(checkModal);
  }
  let modal =
  `<div class="modal-container" id="modalContainer">
    <p class="modal" id="modal">
      ${returnMsg}
    </p>
    <button id="buyIng">Buy Ingredients!</button>
    <button id="closeModal">Close</button>
  </div>`
  listRecipeContainer.innerHTML += modal
  modalContainer = document.getElementById('modalContainer')
  closeModalBtn = document.getElementById('closeModal');
  buyIngBtn = document.getElementById('buyIng');
  addClass(modalContainer, 'show')
  closeModalBtn.addEventListener('click', function() {
  removeClass(modalContainer, 'show');
  });
  buyIngBtn.addEventListener('click', function() {
  myListContainer.childNodes.forEach(elem => {
    if(elem.id === recipe.id.toString()) {
      let secondChild = elem.children[2];
    removeClass(secondChild.children[0], 'hidden');
    addClass(secondChild.children[1], 'hidden');
    }
  })
  buyIngredients(user.id, user.myPantry.ingredientsNeeded);
  user.myPantry.determineAmtNeeded(recipe);
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
  user.myPantry.addIngredientsByName();
  let inUserPantry = user.myPantry.ingredients.map(ingredient => {
   return `<li>${ingredient.name}(${ingredient.amount})</li>`
  }).join(" ")
  if(myPantry.children.length === 0) {
  let pantryContent =
  `<section class="users-pantry" id="usersPantry">
      <h2 aria-label="${user.name}'s Pantry Items" class="pantry-title">${user.name}'s Pantry Items</h2>
      <ul aria-label="${inUserPantry}" class="pantry-items" id="pantryUL">
      ${inUserPantry}
      </ul>
    </section>`
    myPantry.innerHTML += pantryContent
  }
}
