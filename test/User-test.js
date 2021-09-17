
import { expect } from 'chai';
import User from '../src/classes/User';
import Pantry from '../src/classes/Pantry';

describe('User', () => {
let user;
const ephraim = {
  "name": "Ephraim Goyette",
  "id": 1,
  "pantry": [
    {
      "ingredient": 18371,
      "amount": 3
    },
    {
      "ingredient": 93828,
      "amount": 7
    },
    {
      "ingredient": 2047,
      "amount": 8
    },
    {
      "ingredient": 11821,
      "amount": 6
    },
    {
      "ingredient": 1124,
      "amount": 10
    },
  ]
}

const sampleIngredientsData = [
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
    user = new User(ephraim, sampleRecipeData, sampleIngredientsData,);
    user.favoriteRecipes(2047)
    user.favoriteRecipes(333)
    user.addToMyList(2047)
    user.addToMyList(333)

  });

  describe('Constructor', () => {
    it('should be a function', () => {
      expect(User).to.be.a('function');
    });

    it('should create an instance of User', () => {
      expect(user).to.be.an.instanceof(User);
    });

    it('should have an id', () => {
      expect(user.id).to.deep.equal(1);
    });

    it('should have a name', () => {
      expect(user.name).to.deep.equal('Ephraim Goyette');
    });

    it('should have a list of favorite recipes', () => {
      expect(user.myFavorites).to.deep.equal([ 2047, 333 ]);
    })

    it('should have a list of recipes to cook', () => {
      expect(user.myList).to.deep.equal([2047, 333]);
    })

    it('should have a pantry', () => {
      expect(user.myPantry).to.be.an.instanceof(Pantry);
    });
});

describe('Add Recipes to Profile', () => {
  it('should add recipes to my favorites array when favorited', () => {
    expect(user.myFavorites).to.deep.equal([2047, 333]);
  })

  it('should remove recipes from my favorites array when unfavorited', () => {
    user.unfavoriteRecipes(user.myFavorites, 333)
    expect(user.myFavorites).to.deep.equal([2047]);
  })

  it('should add recipes to my list array when added to my cook list', () => {
    user.addToMyList(222)
    expect(user.myList).to.deep.equal([2047, 333, 222]);
  })

  it('should remove recipes from my list array when removed from my cook list', () => {
    user.addToMyList(222)
    user.removeFromMyList(user.myList, 333)
    expect(user.myList).to.deep.equal([2047, 222]);
  })
})
});
