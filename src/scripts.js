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

//global variables, instantiations of classes
let ingredients, recipeRepository, recipe, user, displayRecipe, modalContainer, closeModalBtn, favoritedRecipes, likedRecipes,
foundRecipeIngredients, foundRecipeNames

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
  user = new User(userDataArray[i], recipeRepository);
}

//Event Listeners
window.addEventListener('load', (e) => {
  addClass(homeNavBtn, 'hidden');
  fetchData()
  renderName()
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
  refreshFavorited();
  refreshLiked()
})

favNavBtn.addEventListener('click', () => {
  favoritedContainer.innerHTML = '';
  myListContainer.innerHTML = '';
  addClass(favNavBtn, 'hidden');
  removeClass(homeNavBtn, 'hidden');
  removeClass(listNavBtn, 'hidden');
  showFavorites();
})

listNavBtn.addEventListener('click', () => {
  addClass(listNavBtn, 'hidden');
  removeClass(homeNavBtn, 'hidden')
  removeClass(favNavBtn, 'hidden')
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
        <button class="view-me" id="viewRecipe">View</button>
        <button class="btn remove add"></button>
        <button class="btn unfavorite favorite"></button>
      </div>
    </section>`
    recipeContainer.innerHTML += cardContent
  })
};

const clearCards = () => {
    let removeElement = document.getElementById('recipeContainer')
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

const addToFavorites = (targetBtn, id) => {
  targetBtn.classList.remove('favorite')
  user.favoriteRecipes(id);
};

const removeFromFavorites = (targetBtn, favoritedRecipes, id) => {
  targetBtn.classList.add('favorite')
  user.unfavoriteRecipes(favoritedRecipes, id);
}

const addToCookList = (targetBtn, id) => {
  targetBtn.classList.remove('add')
  user.addToMyList(id);
}

const removeFromCookList = (targetBtn, likedRecipes, id) => {
  targetBtn.classList.add('add')
  user.removeFromMyList(likedRecipes, id)
}

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
    return `${ingredient}<br>`
  })
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
   clearCards()
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
    clearCards()
    showCards(newRecipes)
  }
}

const renderinfo = () => {
  showCards(recipe)
}

const renderName = (user) => {
  const renderedText = `What's cookin ${user.name}?`;
  welcomename.innerText += renderedText
}
