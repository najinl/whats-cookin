import IngredientsLibrary from './ingredientsRepository';

class Pantry {
  constructor(pantry, ingredientsData) {
    this.rawPantryData = pantry;
    this.ingredients = [];
    this.ingredientsById = [];
    this.ingredientsNeeded = [];
    this.ingredientInventory = new IngredientsLibrary(ingredientsData);
  }

  addIngredientsByName() {
    let findIngredients = this.ingredientInventory.ingredientsLibrary.forEach(ingredient => {
      this.rawPantryData.forEach(pantryIngredient => {
       if(!this.ingredientsById.includes(pantryIngredient.ingredient))
        this.ingredientsById.push(pantryIngredient.ingredient)
       if(pantryIngredient.ingredient === ingredient.id) {
         pantryIngredient.name = ingredient.name;
         pantryIngredient.estimatedCostInCents = ingredient.estimatedCostInCents;
         this.ingredients.push(pantryIngredient)
       }
      })
    })
  }

determineAmtNeeded(recipe) {
  let neededIngredients = recipe.ingredientsData.reduce((acc, ingredient) => {
    this.ingredients.forEach(ingr => {
      if(ingredient.id === ingr.ingredient && ingredient.quantity.amount > ingr.amount) {
        acc.push({name: ingr.name,
         amountNeeded: ingredient.quantity.amount - ingr.amount,
       id: ingredient.id})
      }
    })
  return acc;
  },[])

  recipe.ingredientsData.forEach(ingredient => {
      if(!this.ingredientsById.includes(ingredient.id)) {
        neededIngredients.push({name: ingredient.id, amountNeeded: ingredient.quantity.amount, id: ingredient.id})
      }
  })

  neededIngredients.forEach(ingredient => {
    this.ingredientInventory.ingredientsLibrary.forEach(ingr => {
    if(ingredient.name === ingr.id) {
      ingredient.name = ingr.name
    }
    })
  })
  this.ingredientsNeeded = neededIngredients;
  // console.log('length',this.ingredientsNeeded.length)
}

returnCookMessage() {
  let returnMsg =this.ingredientsNeeded.
    reduce((acc, needed) => {
    acc.push(`You need ${needed.amountNeeded} more ${needed.name}.`)
    return acc;
    }, [])
return returnMsg.join(' ')
}
}


export default Pantry;
