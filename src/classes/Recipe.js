import IngredientsLibrary from './ingredientsRepository';

class Recipe {
  constructor(recipe, ingredientsInfo) {
    this.id = recipe[0].id;
    this.image = recipe[0].image;
    this.ingredientsData = recipe[0].ingredients;
    this.instructions = recipe[0].instructions;
    this.name = recipe[0].name;
    this.tags = recipe[0].tags;
    this.ingredientNames = [];
    this.ingredientsLibrary = new IngredientsLibrary(ingredientsInfo);
  }

  gatherIngredients() {
    console.log(this.ingredientsLibrary);
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
    let costInCents = this.ingredientsLibrary.ingredientsLibrary.reduce((num, ingredient) => {
      this.ingredientsData.forEach(ingredientData => {
        if(ingredient.id === ingredientData.id) {
          num += (ingredient.estimatedCostInCents * ingredientData.quantity.amount)
        }
      })
      return num
    }, 0)

    return costInCents * .01
  }

  getInstructions() {
    return this.instructions
  }

}


export default Recipe;
