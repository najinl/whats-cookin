import { expect } from 'chai';
import Pantry from '../src/classes/Pantry';
import IngredientsLibrary from '../src/classes/IngredientsRepository';
// import Recipe from '../src/classes/Recipe';
// import RecipeRepository from '../src/classes/RecipeRepository';


describe('Pantry', () => {
  let userPantry;
  let recipe1, recipe2, recipe3;
  let pantryItems = [
    {
      "ingredient": 18371,
      "amount": 12
    },
    {
      "ingredient": 2047,
      "amount": 18
    },
    {
      "ingredient": 11821,
      "amount": 2
    },
    {
      "ingredient": 1124,
      "amount": 8
    }];

  let sampleIngredientsData = [
  {
    "id": 18371,
    "name": "baking powder",
    "estimatedCostInCents": 346
  },
  {
    "id": 93828,
    "name": "marinated artichoke hearts",
    "estimatedCostInCents": 982
  },
  {
    "id": 2047,
    "name": "salt",
    "estimatedCostInCents": 280
  },
  {
    "id": 11821,
    "name": "bell pepper",
    "estimatedCostInCents": 741
  },
  {
    "id": 1124,
    "name": "egg albumen",
    "estimatedCostInCents": 304
  }
];

  const sampleRecipeData = [
  {
    id: 111,
    image: 'https://someimage.com/1',
    ingredients: [{
    "id": 2047,
    "quantity": {
      "amount": 20,
      "unit": "c"
      }
    },
    {
    "id": 18371,
    "quantity": {
      "amount": 1.5,
      "unit": "tsp"
      }
    },
    {
    "id": 1124,
    "quantity": {
      "amount": 9,
      "unit": "tsp"
      }
    }],
    name: 'Egg Soup',
    instructions: [{
    "instruction": "Crack an egg.",
    "number": 1
    },
    {
    "instruction": "Stir in baking soda, ewww.",
    "number": 2
  }]
   },
  {
    id: 222,
    image: 'https://someimage.com/2',
    ingredients: [{
      "id": 11821,
      "quantity": {
        "amount": 1,
        "unit": ""
      }
    },
    {
      "id": 18371,
      "quantity": {
        "amount": 1.5,
        "unit": "tsp"
      }
    }],
    name: 'Orange Soup',
    instructions: [{
      "instruction": "Mash bell sweet orange pepper.",
      "number": 1
    },
    {
      "instruction": "Stir in baking soda, ewww.",
      "number": 2
    }]
  },
  {
    id: 333,
    image: 'https://someimage.com/3',
    ingredients: [{
    "id": 18371,
    "quantity": {
      "amount": 14,
      "unit": "oz"
    }
    },
    {
      "id": 93828,
      "quantity": {
        "amount": 5,
        "unit": ""
      },

    },
    {
      "id": 11821,
      "quantity": {
        "amount": 5,
        "unit": ""
      },

    }],
    name: 'Yum City',
    instructions: [{
      "instruction": "Do something with m&ms.",
      "number": 1
    },
    {
      "instruction": "Throw the tortillas on top.",
      "number": 2
    }
  ]}
  ];



beforeEach(() => {
 userPantry = new Pantry(pantryItems, sampleIngredientsData);
 userPantry.addIngredientsByName();
 recipe1 = sampleRecipeData[0];
 recipe2 = sampleRecipeData[1];
 recipe3 = sampleRecipeData[2];
});

describe('Build Pantry', () => {
  it('should be a function', () => {
    expect(Pantry).to.be.a('function');
  })

  it('should create an instance of pantry', () => {
    expect(userPantry).to.be.an.instanceof(Pantry);
  });

  it('should have an list of ingredients', () => {
    expect(userPantry.ingredients).to.be.an('array');
  })

  it('should contain an empty array of ingredients needed to begin', () => {
    expect(userPantry.ingredientsNeeded).to.deep.equal([]);
  });

  it('should have an ingredients inventory', () => {
    // console.log(userPantry.ingredientInventory.ingredientsLibrary)
    // expect(userPantry.ingredientInventory instanceof IngredientsLibrary).to.deep.equal(true);
    // expect(userPantry.ingredientInventory).to.be.an.instanceof(IngredientsLibrary);
    expect(userPantry.ingredientInventory).to.be.an('object');
  });
 })

describe('Add Ingredients', () => {
  it('should store ingredients in the ingredients array', () => {
    expect(userPantry.ingredients).to.deep.equal([
      {
        "ingredient": 18371,
        "amount": 12,
        "name": "baking powder",
        "estimatedCostInCents": 346
      },
      {
        "ingredient": 2047,
        "amount": 18,
        "name": "salt",
        "estimatedCostInCents": 280
      },
      {
        "ingredient": 11821,
        "amount": 2,
        "name": "bell pepper",
        "estimatedCostInCents": 741
      },
      {
        "ingredient": 1124,
        "amount": 8,
        "name": "egg albumen",
        "estimatedCostInCents": 304
      }
    ])
  })

  it(`should store all ingredients that are in the user's pantry in an array by id only`, () => {
    expect(userPantry.ingredientsById).to.deep.equal(
      [ 18371, 2047, 11821, 1124 ])
  })
})
describe('Missing Ingredients', () => {
    it('should store all missing ingredients from a recipe and the additionally needed quantity of that ingredient in an array', () => {
      userPantry.determineAmtNeeded(recipe1)
      expect(userPantry.ingredientsNeeded).to.deep.equal(
        [ { name: 'salt', amountNeeded: 2 },
          { name: 'egg albumen', amountNeeded: 1 }
        ]
      )
    })

  it('should store all missing ingredients from a recipe and the additionally needed quantity of that ingredient in an array', () => {
    userPantry.determineAmtNeeded(recipe3)
    expect(userPantry.ingredientsNeeded).to.deep.equal(
      [ { name: 'baking powder', amountNeeded: 2 },
        { name: 'bell pepper', amountNeeded: 3 },
        { name: 'marinated artichoke hearts', amountNeeded: 5 }
      ]
    )
  })

  it('should have no items in the ingredientsNeeded array if all ingredients to cook are available', () => {
    userPantry.determineAmtNeeded(recipe2)
    expect(userPantry.ingredientsNeeded.length).to.deep.equal(0)
  })

  it('should return a message describing what the user needs to cook a recipe if they are missing ingredients', () => {
  userPantry.determineAmtNeeded(recipe3)
  expect(userPantry.returnCookMessage()).to.deep.equal(`You need 2 more baking powder. You need 3 more bell pepper. You need 5 more marinated artichoke hearts.`)

  userPantry.determineAmtNeeded(recipe1)
  expect(userPantry.returnCookMessage()).to.deep.equal(`You need 2 more salt. You need 1 more egg albumen.`)
  })
})
})
