import { expect } from 'chai';
import IngredientsLibrary from '../src/classes/IngredientsRepository';
import Recipe from '../src/classes/Recipe';
import RecipeRepository from '../src/classes/RecipeRepository';

describe('Recipe', () => {

  let recipe;
  let ingredients;

  beforeEach(() => {
    ingredients = [
      {
        "id": 1032009,
        "name": "dried red chili",
        "estimatedCostInCents": 1015
      },
      {
        "id": 2047,
        "name": "salt",
        "estimatedCostInCents": 280
      },
      {
        "id": 1022020,
        "name": "garlic powder",
        "estimatedCostInCents": 344
      },
      {
        "id": 6168,
        "name": "tabasco sauce",
        "estimatedCostInCents": 859
      },
      {
        "id": 9176,
        "name": "mangoes",
        "estimatedCostInCents": 425
      }];

    recipe = new Recipe(
      [{
      "id": 988243,
      "image": "https://spoonacular.com/recipeImages/988243-556x370.jpg",
      "ingredients": [
        {
          "id": 1032009,
          "quantity": {
            "amount": 1,
            "unit": "pinch"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 0.5,
            "unit": "teaspoon"
          }
        },
      ],
      "instructions": [
        {
          "instruction": "Melt butter to a large skillet over medium heat. As the butter melts, it will begin to foam as it transitions from a bright, lemon-yellow color to golden and then finally to a nutty-brown color. As the butter just begins to turn nutty-brown from golden, reduce your heat to medium-low and carefully toss in your garlic and onion. Cook until the onion just begins to become tender and then add in your shrimp. Stirring frequently, cook until the shrimp turn pink and lose their translucence.",
          "number": 1
        },
        {
          "instruction": "Stir in salt, black pepper, red pepper flakes and fresh parsley. Toss shrimp to make sure all are well-coated.",
          "number": 2
        },
        {
          "instruction": "Remove from heat and serve.",
          "number": 3
        }
      ],
      "name": "Brown Butter Garlic Shrimp",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    }], ingredients)
  })

  it('Should be a function', () => {
    expect(Recipe).to.be.a('function');
  })

  it('Should hold recipe data', () => {
    expect(recipe.id).to.equal(recipe.id)
    expect(recipe.image).to.equal(recipe.image)
    expect(recipe.ingredientsData).to.equal(recipe.ingredientsData)
    expect(recipe.instructions).to.equal(recipe.instructions)
    expect(recipe.name).to.equal(recipe.name)
    expect(recipe.tags).to.equal(recipe.tags)
    expect(recipe.ingredientsLibrary.ingredientsLibrary).to.equal(ingredients)
  })

  it('Should gather names of ingredients needed', () => {
    expect(recipe.gatherIngredients()).to.deep.equal(["dried red chili", "salt"]);
  })

  it('Should return the cost of all ingredients for the recipe', () => {
    expect(recipe.calculateCost()).to.equal(11.55)
  })

  it('Should return instructions', () => {
    console.log('INSTRUCTIONS', recipe.instructions)
    expect(recipe.getInstructions()).to.equal(recipe.instructions)
  })

});
