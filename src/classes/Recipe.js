import IngredientsLibrary from './ingredientsRepository';

class Recipe {
  constructor(recipe, ingredientsInfo) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredientsData = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
    this.ingredientNames = [];
    this.ingredientsLibrary = new IngredientsLibrary(ingredientsInfo);
  }

  gatherIngredients() {
    let findIngredients = this.ingredientsLibrary.ingredientsLibrary.forEach(ingredient => {
      this.ingredientsData.forEach(currentIngredient => {
       if(currentIngredient.id === ingredient.id) {
         this.ingredientNames.push(ingredient.name)
       }
      })
    })

    return this.ingredientNames
  }

  calculateCost() {
    console.log(this.ingredientsLibrary)
   let costInCents = this.ingredientsLibrary.ingredientsLibrary.reduce((num, ingredient) => {
      this.ingredientsData.forEach(ingredientData => {
        if(ingredient.id === ingredientData.id) {
          num += (ingredient.estimatedCostInCents * ingredientData.quantity.amount)
        }
      })
      return num
    }, 0)

    let dollarAmount = costInCents * .01
    return dollarAmount.toFixed(2)
  }

  getInstructions() {
    return this.instructions
  }

}


export default Recipe;
