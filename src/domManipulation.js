
import {ingredients, recipeRepository, recipe, user, pantry, displayRecipe, modalContainer, closeModalBtn, markCookedBtn, buyIngBtn, missingIngBtn, letsCookBtn, favoritedRecipes, likedRecipes,foundRecipeIngredients, foundRecipeNames} from './scripts'
let welcomename = document.getElementById('username')



let domManipulation  = {
showCards(data) {
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
  },

clearCards(container) {
  let removeElement = document.getElementById(container)
  while (removeElement.firstChild) {
    removeElement.removeChild(removeElement.firstChild);
  }
},

showFavorites() {
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
},

showMyList() {
let cardContent;
recipe.forEach(currRecipe =>
  {
    user.myPantry.determineAmtNeeded(currRecipe)
  const listRecipeCard = document.createElement('div');
  if(likedRecipes.includes(currRecipe.id) && user.myPantry.ingredientsNeeded.length > 0) {
    console.log(user.myPantry.ingredientsNeeded)
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
},

addToFavorites(targetBtn, id) {
targetBtn.classList.remove('favorite')
user.favoriteRecipes(id)
},

removeFromFavorites(targetBtn, favoritedRecipes, id) {
targetBtn.classList.add('favorite')
user.unfavoriteRecipes(favoritedRecipes, id) 
},

addToCookList(targetBtn, id) {
targetBtn.classList.remove('add')
user.addToMyList(id);
},

removeFromCookList(targetBtn, likedRecipes, id) {
targetBtn.classList.add('add')
user.removeFromMyList(likedRecipes, id)
},

makeModal(recipe, container) {
console.log('RETURN ID', recipe.id)
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
  `<div role="dialog" aria-label="${recipe.name}" aria-labelledby="dialog-title"class="modal-container" id="modalContainer">
    <div class="modal" id="modal">
      <section class="ingredients-picture">
        <img class="modal-recipe-img" src="${recipe.image}"/>
        <h2 aria-label="ingredients"> Ingredients </h2>
        <ul  aria-labelledby="ingredients">
        ${styleIngredientsList}
        </ul>
      </section>
      <div class="modal-text">
        <h1>${recipe.name}</h1>
        <p aria-label="Cooking instructions" class="howTo">${howTo}</p>
        <p aria-label="Cost of recipe">It will cost $${recipe.calculateCost()} to make this recipe.</p>
        <button aria-label="finished" class="btn mark-cooked"id="markCooked">Finshed!</button>
        <button aria-label="Close" id="closeModal">Close</button>
      <div>
    </div>
  </div>`
  container.innerHTML += modal
  modalContainer = document.getElementById('modalContainer')
  closeModalBtn = document.getElementById('closeModal');
  markCookedBtn = document.getElementById('markCooked');
  addClass(modalContainer, 'show')
  // modalContainer.classList.add('show');
  closeModalBtn.addEventListener('click', function() {
  // modalContainer.classList.remove('show');
  removeClass(modalContainer, 'show')
  });
  markCookedBtn.addEventListener('click', function() {
    myListContainer.childNodes.forEach(elem => {
      if(elem.id === recipe.id.toString()) {
        console.log(elem)
        let secondChild = elem.children[2];
        addClass(secondChild.children[0], 'hidden')
      // secondChild.children[0].classList.add('hidden')
      removeClass(secondChild.children[1], 'hidden')
      // secondChild.children[1].classList.remove('hidden')
      }
    })
  removeFromPantry(user.id, recipe);
  user.myPantry.determineAmtNeeded(recipe);
  });
},

makeModalMissing(returnMsg, recipe) {
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
// modalContainer.classList.add('show');
closeModalBtn.addEventListener('click', function() {
removeClass(modalContainer, 'show');
});
buyIngBtn.addEventListener('click', function() {
myListContainer.childNodes.forEach(elem => {
  if(elem.id === recipe.id.toString()) {
    console.log(elem)
    let secondChild = elem.children[2];
  // secondChild.children[0].classList.remove('hidden')
  removeClass(secondChild.children[0], 'hidden');
  addClass(secondChild.children[1], 'hidden');
  // secondChild.children[1].classList.add('hidden')
  }
})
buyIngredients(user.id, user.myPantry.ingredientsNeeded);
user.myPantry.determineAmtNeeded(recipe);
});
},

getSearchItems() {
let search = searchValues.value
foundRecipeIngredients = recipeRepository.filterByIngredients(search, ingredients.ingredientsLibrary)
foundRecipeNames = recipeRepository.filterByName(search)
 clearCards('recipeContainer')
 this.showCards(foundRecipeNames)
 this.showCards(foundRecipeIngredients)
},

getTags() {
let checkBox = document.querySelectorAll(`input[name="check"]:checked`)
let findChecks = document.querySelectorAll(`input[name="check"]:checked`).length
let checkedElements = [];
checkBox.forEach((checkbox) => {
  checkedElements.push(checkbox.value)
})
let newRecipes = recipeRepository.filterByTags(checkedElements)
if(findChecks === 0) {
  this.showCards(recipe)
} else {
  clearCards('recipeContainer')
  this.showCards(newRecipes)
}
},

addClass(element, classList) {
  element.classList.add(classList);
  },
  
removeClass(element, classList) {
  element.classList.remove(classList);
  },

renderName() {
    const renderedText = `What's cookin ${user.name}?`;
    welcomename.innerText += renderedText
    },





showPantryItems() {
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
}

export default domManipulation;