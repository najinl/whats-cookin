/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/dist/cjs.js):\nError: PostCSS received undefined instead of CSS string\n    at new Input (/Users/janikahortizuela/turing/take2mod/whats-cookin/node_modules/postcss/lib/input.js:24:13)\n    at parse (/Users/janikahortizuela/turing/take2mod/whats-cookin/node_modules/postcss/lib/parse.js:8:15)\n    at new LazyResult (/Users/janikahortizuela/turing/take2mod/whats-cookin/node_modules/postcss/lib/lazy-result.js:122:16)\n    at Processor.process (/Users/janikahortizuela/turing/take2mod/whats-cookin/node_modules/postcss/lib/processor.js:33:12)\n    at Object.loader (/Users/janikahortizuela/turing/take2mod/whats-cookin/node_modules/css-loader/dist/index.js:139:51)");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/apiCalls.js":
/*!*************************!*\
  !*** ./src/apiCalls.js ***!
  \*************************/
/*! exports provided: fetchUsers, fetchIngredients, fetchRecipes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchIngredients", function() { return fetchIngredients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRecipes", function() { return fetchRecipes; });
function fetchUsers() {
 return fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users")
  .then(response => response.json())
  .then(data => data);
}

function fetchIngredients() {
  return fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients")
   .then(response => response.json())
   .then(data => data);
 }

function fetchRecipes() {
  return fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes")
    .then(response => response.json())
    .then(data => data);
}



/***/ }),

/***/ "./src/classes/IngredientsRepository.js":
/*!**********************************************!*\
  !*** ./src/classes/IngredientsRepository.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class IngredientsLibrary {
  constructor(ingredientsInfo) {
    this.ingredientsLibrary = ingredientsInfo;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (IngredientsLibrary);


/***/ }),

/***/ "./src/classes/Recipe.js":
/*!*******************************!*\
  !*** ./src/classes/Recipe.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ingredientsRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ingredientsRepository */ "./src/classes/ingredientsRepository.js");


class Recipe {
  constructor(recipe, ingredientsInfo) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredientsData = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
    this.ingredientNames = [];
    this.ingredientsLibrary = new _ingredientsRepository__WEBPACK_IMPORTED_MODULE_0__["default"](ingredientsInfo);
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


/* harmony default export */ __webpack_exports__["default"] = (Recipe);


/***/ }),

/***/ "./src/classes/RecipeRepository.js":
/*!*****************************************!*\
  !*** ./src/classes/RecipeRepository.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class RecipeRepository {
  constructor(recipeRepo) {
    this.recipeRepo = recipeRepo
  }

filterByTags(userTag){
  let tagRecipes = [];
   let findTag = userTag.forEach(tag => {
     this.recipeRepo.forEach(recipe => {
       if(recipe.tags.includes(tag) && !tagRecipes.includes(recipe)) {
         tagRecipes.push(recipe)
       }
     })
   })
   return tagRecipes
 }

filterByName(userGeneratedName) {
  let nameRecipes = [];
  let findName = this.recipeRepo.forEach(recipe => {
    if(recipe.name.includes(userGeneratedName)) {
      nameRecipes.push(recipe)
    }
  })
  return nameRecipes
}

filterByIngredients(userGeneratedIngredients, ingredientsData) {
  let ingredientRecipes = []
  let ingredientID = []
  let userIngredients = userGeneratedIngredients.split(", ")

ingredientsData.forEach(ingredient => {
      userIngredients.forEach(userIngredient => {
        if(ingredient.name === userIngredient) {
          ingredientID.push(ingredient.id)
        }
      })
  })

 ingredientID.forEach(id => {
    this.recipeRepo.forEach(recipe => {
      recipe.ingredients.forEach(ingredient => {
        if(ingredient.id === id && !ingredientRecipes.includes(recipe)) {
          ingredientRecipes.push(recipe)
        }
      })
    })
  })

  return ingredientRecipes
}

}


/* harmony default export */ __webpack_exports__["default"] = (RecipeRepository);


/***/ }),

/***/ "./src/classes/User.js":
/*!*****************************!*\
  !*** ./src/classes/User.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import Pantry from './Pantry';
// import RecipeOptions from './RecipeOptions';
class User {
  constructor(user, recipeRepository) {
    this.id = user.id;
    this.name = user.name;
    this.myFavorites = [];
    this.myList = [];
  }

unfavoriteRecipes(arrToFavorites, id) {
  arrToFavorites.forEach((favorite, i) => {
    if(favorite === parseInt(id)) {
      return arrToFavorites.splice(i, 1)
    }
  })
}

favoriteRecipes(id) {
  this.myFavorites.push(parseInt(id));
}

addToMyList(id){
  this.myList.push(parseInt(id));
}

removeFromMyList(arrToList, id){
  arrToList.forEach((item, i) => {
    if(item === parseInt(id)) {
      return arrToList.splice(i, 1)
    }
  })
}
}

/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ "./src/classes/ingredientsRepository.js":
/*!**********************************************!*\
  !*** ./src/classes/ingredientsRepository.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class IngredientsLibrary {
  constructor(ingredientsInfo) {
    this.ingredientsLibrary = ingredientsInfo;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (IngredientsLibrary);


/***/ }),

/***/ "./src/images/burger.png":
/*!*******************************!*\
  !*** ./src/images/burger.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/burger.png");

/***/ }),

/***/ "./src/images/favorite.svg":
/*!*********************************!*\
  !*** ./src/images/favorite.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/favorite.svg");

/***/ }),

/***/ "./src/images/fridge.svg":
/*!*******************************!*\
  !*** ./src/images/fridge.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/fridge.svg");

/***/ }),

/***/ "./src/images/home.svg":
/*!*****************************!*\
  !*** ./src/images/home.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/home.svg");

/***/ }),

/***/ "./src/images/list.svg":
/*!*****************************!*\
  !*** ./src/images/list.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/list.svg");

/***/ }),

/***/ "./src/images/search.svg":
/*!*******************************!*\
  !*** ./src/images/search.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/search.svg");

/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _images_burger_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/burger.png */ "./src/images/burger.png");
/* harmony import */ var _images_favorite_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/favorite.svg */ "./src/images/favorite.svg");
/* harmony import */ var _images_fridge_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/fridge.svg */ "./src/images/fridge.svg");
/* harmony import */ var _images_home_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/home.svg */ "./src/images/home.svg");
/* harmony import */ var _images_list_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/list.svg */ "./src/images/list.svg");
/* harmony import */ var _images_search_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/search.svg */ "./src/images/search.svg");
/* harmony import */ var _apiCalls_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./apiCalls.js */ "./src/apiCalls.js");
/* harmony import */ var _classes_IngredientsRepository_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./classes/IngredientsRepository.js */ "./src/classes/IngredientsRepository.js");
/* harmony import */ var _classes_Recipe_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./classes/Recipe.js */ "./src/classes/Recipe.js");
/* harmony import */ var _classes_RecipeRepository__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./classes/RecipeRepository */ "./src/classes/RecipeRepository.js");
/* harmony import */ var _classes_User__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./classes/User */ "./src/classes/User.js");













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
  Promise.all([Object(_apiCalls_js__WEBPACK_IMPORTED_MODULE_7__["fetchUsers"])(), Object(_apiCalls_js__WEBPACK_IMPORTED_MODULE_7__["fetchIngredients"])(), Object(_apiCalls_js__WEBPACK_IMPORTED_MODULE_7__["fetchRecipes"])()])
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
  ingredients = new _classes_IngredientsRepository_js__WEBPACK_IMPORTED_MODULE_8__["default"](ingredientDataArray)
  recipeRepository = new _classes_RecipeRepository__WEBPACK_IMPORTED_MODULE_10__["default"](recipeDataArray)
  recipe = recipeDataArray.map(recipe => {
    return new _classes_Recipe_js__WEBPACK_IMPORTED_MODULE_9__["default"](recipe, ingredientDataArray)
  })
  user = new _classes_User__WEBPACK_IMPORTED_MODULE_11__["default"](userDataArray[i], recipeRepository);
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


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGlDYWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9JbmdyZWRpZW50c1JlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvUmVjaXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1JlY2lwZVJlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9pbmdyZWRpZW50c1JlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9idXJnZXIucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvZmF2b3JpdGUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvZnJpZGdlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2hvbWUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbGlzdC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9zZWFyY2guc3ZnIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFB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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUJBQW1CLElBQUksd0JBQXdCO0FBQzdELEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxXQUFXO0FBQ3pCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxhQUFhO0FBQzVEO0FBQ0EsZUFBZSxxQkFBcUI7QUFDcEM7QUFDQTtBQUNBLGdCQUFnQixZQUFZO0FBQzVCLDZCQUE2QixNQUFNO0FBQ25DLDZCQUE2Qix1QkFBdUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLFVBQVU7QUFDbEQ7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlGO0FBQ3pGLFlBQWdJOztBQUVoSTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQywySEFBTzs7OztBQUlULDBMQUFPLGFBQWEsRSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NjcmlwdHMuanNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImV4cG9ydCBmdW5jdGlvbiBmZXRjaFVzZXJzKCkge1xuIHJldHVybiBmZXRjaChcImh0dHBzOi8vd2hhdC1zLWNvb2tpbi1zdGFydGVyLWtpdC5oZXJva3VhcHAuY29tL2FwaS92MS91c2Vyc1wiKVxuICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIC50aGVuKGRhdGEgPT4gZGF0YSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEluZ3JlZGllbnRzKCkge1xuICByZXR1cm4gZmV0Y2goXCJodHRwczovL3doYXQtcy1jb29raW4tc3RhcnRlci1raXQuaGVyb2t1YXBwLmNvbS9hcGkvdjEvaW5ncmVkaWVudHNcIilcbiAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgIC50aGVuKGRhdGEgPT4gZGF0YSk7XG4gfVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hSZWNpcGVzKCkge1xuICByZXR1cm4gZmV0Y2goXCJodHRwczovL3doYXQtcy1jb29raW4tc3RhcnRlci1raXQuaGVyb2t1YXBwLmNvbS9hcGkvdjEvcmVjaXBlc1wiKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IGRhdGEpO1xufVxuXG4iLCJjbGFzcyBJbmdyZWRpZW50c0xpYnJhcnkge1xuICBjb25zdHJ1Y3RvcihpbmdyZWRpZW50c0luZm8pIHtcbiAgICB0aGlzLmluZ3JlZGllbnRzTGlicmFyeSA9IGluZ3JlZGllbnRzSW5mbztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmdyZWRpZW50c0xpYnJhcnk7XG4iLCJpbXBvcnQgSW5ncmVkaWVudHNMaWJyYXJ5IGZyb20gJy4vaW5ncmVkaWVudHNSZXBvc2l0b3J5JztcblxuY2xhc3MgUmVjaXBlIHtcbiAgY29uc3RydWN0b3IocmVjaXBlLCBpbmdyZWRpZW50c0luZm8pIHtcbiAgICB0aGlzLmlkID0gcmVjaXBlLmlkO1xuICAgIHRoaXMuaW1hZ2UgPSByZWNpcGUuaW1hZ2U7XG4gICAgdGhpcy5pbmdyZWRpZW50c0RhdGEgPSByZWNpcGUuaW5ncmVkaWVudHM7XG4gICAgdGhpcy5pbnN0cnVjdGlvbnMgPSByZWNpcGUuaW5zdHJ1Y3Rpb25zO1xuICAgIHRoaXMubmFtZSA9IHJlY2lwZS5uYW1lO1xuICAgIHRoaXMudGFncyA9IHJlY2lwZS50YWdzO1xuICAgIHRoaXMuaW5ncmVkaWVudE5hbWVzID0gW107XG4gICAgdGhpcy5pbmdyZWRpZW50c0xpYnJhcnkgPSBuZXcgSW5ncmVkaWVudHNMaWJyYXJ5KGluZ3JlZGllbnRzSW5mbyk7XG4gIH1cblxuICBnYXRoZXJJbmdyZWRpZW50cygpIHtcbiAgICBsZXQgZmluZEluZ3JlZGllbnRzID0gdGhpcy5pbmdyZWRpZW50c0xpYnJhcnkuaW5ncmVkaWVudHNMaWJyYXJ5LmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICB0aGlzLmluZ3JlZGllbnRzRGF0YS5mb3JFYWNoKGN1cnJlbnRJbmdyZWRpZW50ID0+IHtcbiAgICAgICBpZihjdXJyZW50SW5ncmVkaWVudC5pZCA9PT0gaW5ncmVkaWVudC5pZCkge1xuICAgICAgICAgdGhpcy5pbmdyZWRpZW50TmFtZXMucHVzaChpbmdyZWRpZW50Lm5hbWUpXG4gICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIHRoaXMuaW5ncmVkaWVudE5hbWVzXG4gIH1cblxuICBjYWxjdWxhdGVDb3N0KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuaW5ncmVkaWVudHNMaWJyYXJ5KVxuICAgbGV0IGNvc3RJbkNlbnRzID0gdGhpcy5pbmdyZWRpZW50c0xpYnJhcnkuaW5ncmVkaWVudHNMaWJyYXJ5LnJlZHVjZSgobnVtLCBpbmdyZWRpZW50KSA9PiB7XG4gICAgICB0aGlzLmluZ3JlZGllbnRzRGF0YS5mb3JFYWNoKGluZ3JlZGllbnREYXRhID0+IHtcbiAgICAgICAgaWYoaW5ncmVkaWVudC5pZCA9PT0gaW5ncmVkaWVudERhdGEuaWQpIHtcbiAgICAgICAgICBudW0gKz0gKGluZ3JlZGllbnQuZXN0aW1hdGVkQ29zdEluQ2VudHMgKiBpbmdyZWRpZW50RGF0YS5xdWFudGl0eS5hbW91bnQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICByZXR1cm4gbnVtXG4gICAgfSwgMClcblxuICAgIGxldCBkb2xsYXJBbW91bnQgPSBjb3N0SW5DZW50cyAqIC4wMVxuICAgIHJldHVybiBkb2xsYXJBbW91bnQudG9GaXhlZCgyKVxuICB9XG5cbiAgZ2V0SW5zdHJ1Y3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RydWN0aW9uc1xuICB9XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBSZWNpcGU7XG4iLCJjbGFzcyBSZWNpcGVSZXBvc2l0b3J5IHtcbiAgY29uc3RydWN0b3IocmVjaXBlUmVwbykge1xuICAgIHRoaXMucmVjaXBlUmVwbyA9IHJlY2lwZVJlcG9cbiAgfVxuXG5maWx0ZXJCeVRhZ3ModXNlclRhZyl7XG4gIGxldCB0YWdSZWNpcGVzID0gW107XG4gICBsZXQgZmluZFRhZyA9IHVzZXJUYWcuZm9yRWFjaCh0YWcgPT4ge1xuICAgICB0aGlzLnJlY2lwZVJlcG8uZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgICAgIGlmKHJlY2lwZS50YWdzLmluY2x1ZGVzKHRhZykgJiYgIXRhZ1JlY2lwZXMuaW5jbHVkZXMocmVjaXBlKSkge1xuICAgICAgICAgdGFnUmVjaXBlcy5wdXNoKHJlY2lwZSlcbiAgICAgICB9XG4gICAgIH0pXG4gICB9KVxuICAgcmV0dXJuIHRhZ1JlY2lwZXNcbiB9XG5cbmZpbHRlckJ5TmFtZSh1c2VyR2VuZXJhdGVkTmFtZSkge1xuICBsZXQgbmFtZVJlY2lwZXMgPSBbXTtcbiAgbGV0IGZpbmROYW1lID0gdGhpcy5yZWNpcGVSZXBvLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICBpZihyZWNpcGUubmFtZS5pbmNsdWRlcyh1c2VyR2VuZXJhdGVkTmFtZSkpIHtcbiAgICAgIG5hbWVSZWNpcGVzLnB1c2gocmVjaXBlKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIG5hbWVSZWNpcGVzXG59XG5cbmZpbHRlckJ5SW5ncmVkaWVudHModXNlckdlbmVyYXRlZEluZ3JlZGllbnRzLCBpbmdyZWRpZW50c0RhdGEpIHtcbiAgbGV0IGluZ3JlZGllbnRSZWNpcGVzID0gW11cbiAgbGV0IGluZ3JlZGllbnRJRCA9IFtdXG4gIGxldCB1c2VySW5ncmVkaWVudHMgPSB1c2VyR2VuZXJhdGVkSW5ncmVkaWVudHMuc3BsaXQoXCIsIFwiKVxuXG5pbmdyZWRpZW50c0RhdGEuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgIHVzZXJJbmdyZWRpZW50cy5mb3JFYWNoKHVzZXJJbmdyZWRpZW50ID0+IHtcbiAgICAgICAgaWYoaW5ncmVkaWVudC5uYW1lID09PSB1c2VySW5ncmVkaWVudCkge1xuICAgICAgICAgIGluZ3JlZGllbnRJRC5wdXNoKGluZ3JlZGllbnQuaWQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH0pXG5cbiBpbmdyZWRpZW50SUQuZm9yRWFjaChpZCA9PiB7XG4gICAgdGhpcy5yZWNpcGVSZXBvLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgIHJlY2lwZS5pbmdyZWRpZW50cy5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgICAgICBpZihpbmdyZWRpZW50LmlkID09PSBpZCAmJiAhaW5ncmVkaWVudFJlY2lwZXMuaW5jbHVkZXMocmVjaXBlKSkge1xuICAgICAgICAgIGluZ3JlZGllbnRSZWNpcGVzLnB1c2gocmVjaXBlKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG5cbiAgcmV0dXJuIGluZ3JlZGllbnRSZWNpcGVzXG59XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBSZWNpcGVSZXBvc2l0b3J5O1xuIiwiLy8gaW1wb3J0IFBhbnRyeSBmcm9tICcuL1BhbnRyeSc7XG4vLyBpbXBvcnQgUmVjaXBlT3B0aW9ucyBmcm9tICcuL1JlY2lwZU9wdGlvbnMnO1xuY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHVzZXIsIHJlY2lwZVJlcG9zaXRvcnkpIHtcbiAgICB0aGlzLmlkID0gdXNlci5pZDtcbiAgICB0aGlzLm5hbWUgPSB1c2VyLm5hbWU7XG4gICAgdGhpcy5teUZhdm9yaXRlcyA9IFtdO1xuICAgIHRoaXMubXlMaXN0ID0gW107XG4gIH1cblxudW5mYXZvcml0ZVJlY2lwZXMoYXJyVG9GYXZvcml0ZXMsIGlkKSB7XG4gIGFyclRvRmF2b3JpdGVzLmZvckVhY2goKGZhdm9yaXRlLCBpKSA9PiB7XG4gICAgaWYoZmF2b3JpdGUgPT09IHBhcnNlSW50KGlkKSkge1xuICAgICAgcmV0dXJuIGFyclRvRmF2b3JpdGVzLnNwbGljZShpLCAxKVxuICAgIH1cbiAgfSlcbn1cblxuZmF2b3JpdGVSZWNpcGVzKGlkKSB7XG4gIHRoaXMubXlGYXZvcml0ZXMucHVzaChwYXJzZUludChpZCkpO1xufVxuXG5hZGRUb015TGlzdChpZCl7XG4gIHRoaXMubXlMaXN0LnB1c2gocGFyc2VJbnQoaWQpKTtcbn1cblxucmVtb3ZlRnJvbU15TGlzdChhcnJUb0xpc3QsIGlkKXtcbiAgYXJyVG9MaXN0LmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICBpZihpdGVtID09PSBwYXJzZUludChpZCkpIHtcbiAgICAgIHJldHVybiBhcnJUb0xpc3Quc3BsaWNlKGksIDEpXG4gICAgfVxuICB9KVxufVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIiwiY2xhc3MgSW5ncmVkaWVudHNMaWJyYXJ5IHtcbiAgY29uc3RydWN0b3IoaW5ncmVkaWVudHNJbmZvKSB7XG4gICAgdGhpcy5pbmdyZWRpZW50c0xpYnJhcnkgPSBpbmdyZWRpZW50c0luZm87XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5ncmVkaWVudHNMaWJyYXJ5O1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvYnVyZ2VyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2Zhdm9yaXRlLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2ZyaWRnZS5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9ob21lLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2xpc3Quc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvc2VhcmNoLnN2Z1wiOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBidXJnZXIgZnJvbSAnLi9pbWFnZXMvYnVyZ2VyLnBuZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL2Zhdm9yaXRlLnN2Zyc7XG5pbXBvcnQgJy4vaW1hZ2VzL2ZyaWRnZS5zdmcnO1xuaW1wb3J0ICcuL2ltYWdlcy9ob21lLnN2Zyc7XG5pbXBvcnQgJy4vaW1hZ2VzL2xpc3Quc3ZnJztcbmltcG9ydCAnLi9pbWFnZXMvc2VhcmNoLnN2Zyc7XG5pbXBvcnQgeyBmZXRjaFVzZXJzLCBmZXRjaEluZ3JlZGllbnRzLCBmZXRjaFJlY2lwZXN9IGZyb20gJy4vYXBpQ2FsbHMuanMnO1xuaW1wb3J0IEluZ3JlZGllbnRzTGlicmFyeSBmcm9tICcuL2NsYXNzZXMvSW5ncmVkaWVudHNSZXBvc2l0b3J5LmpzJztcbmltcG9ydCBSZWNpcGUgZnJvbSAnLi9jbGFzc2VzL1JlY2lwZS5qcyc7XG5pbXBvcnQgUmVjaXBlUmVwb3NpdG9yeSBmcm9tICcuL2NsYXNzZXMvUmVjaXBlUmVwb3NpdG9yeSc7XG5pbXBvcnQgVXNlciBmcm9tICcuL2NsYXNzZXMvVXNlcic7XG5cbi8vZ2xvYmFsIHZhcmlhYmxlcywgaW5zdGFudGlhdGlvbnMgb2YgY2xhc3Nlc1xubGV0IGluZ3JlZGllbnRzLCByZWNpcGVSZXBvc2l0b3J5LCByZWNpcGUsIHVzZXIsIGRpc3BsYXlSZWNpcGUsIG1vZGFsQ29udGFpbmVyLCBjbG9zZU1vZGFsQnRuLCBmYXZvcml0ZWRSZWNpcGVzLCBsaWtlZFJlY2lwZXMsXG5mb3VuZFJlY2lwZUluZ3JlZGllbnRzLCBmb3VuZFJlY2lwZU5hbWVzXG5cbmxldCBob21lTmF2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWVOYXYnKTtcbmxldCBmYXZOYXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmF2TmF2Jyk7XG5sZXQgbGlzdE5hdkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0TmF2Jyk7XG52YXIgcmVjaXBlTGlrZUJ0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdidG4nKTtcbmxldCByZWNpcGVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjaXBlQ29udGFpbmVyJyk7XG5sZXQgZmlsdGVyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlckJ0bicpO1xubGV0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hJY29uJyk7XG5sZXQgc2VhcmNoVmFsdWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0U2VhcmNoJyk7XG5sZXQgZmF2b3JpdGVkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zhdm9yaXRlZFJlY2lwZUNvbnRhaW5lcicpO1xubGV0IG15TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0UmVjaXBlQ29udGFpbmVyJyk7XG5sZXQgd2VsY29tZW5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcm5hbWUnKVxuXG4vL0ZldGNoIENhbGxzXG5jb25zdCBmZXRjaERhdGEgPSAoKSA9PiB7XG4gIFByb21pc2UuYWxsKFtmZXRjaFVzZXJzKCksIGZldGNoSW5ncmVkaWVudHMoKSwgZmV0Y2hSZWNpcGVzKCldKVxuICAgIC50aGVuKGRhdGEgPT4gcGFyc2VEYXRhKGRhdGEpKVxufVxuXG5jb25zdCBwYXJzZURhdGEgPSAoZGF0YSkgPT4ge1xuICBsZXQgdXNlckRhdGFBcnJheSA9IGRhdGFbMF0udXNlcnNEYXRhXG4gIGxldCBpbmdyZWRpZW50RGF0YUFycmF5ID0gZGF0YVsxXS5pbmdyZWRpZW50c0RhdGFcbiAgbGV0IHJlY2lwZURhdGFBcnJheSA9IGRhdGFbMl0ucmVjaXBlRGF0YVxuICBpbnN0YW50aWF0aW9uKHVzZXJEYXRhQXJyYXksIGluZ3JlZGllbnREYXRhQXJyYXksIHJlY2lwZURhdGFBcnJheSlcbiAgcmVuZGVyaW5mbygpXG59XG5cbmNvbnN0IGluc3RhbnRpYXRpb24gPSAodXNlckRhdGFBcnJheSwgaW5ncmVkaWVudERhdGFBcnJheSwgcmVjaXBlRGF0YUFycmF5KSA9PiB7XG4gIGxldCBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdXNlckRhdGFBcnJheS5sZW5ndGgpO1xuICBpbmdyZWRpZW50cyA9IG5ldyBJbmdyZWRpZW50c0xpYnJhcnkoaW5ncmVkaWVudERhdGFBcnJheSlcbiAgcmVjaXBlUmVwb3NpdG9yeSA9IG5ldyBSZWNpcGVSZXBvc2l0b3J5KHJlY2lwZURhdGFBcnJheSlcbiAgcmVjaXBlID0gcmVjaXBlRGF0YUFycmF5Lm1hcChyZWNpcGUgPT4ge1xuICAgIHJldHVybiBuZXcgUmVjaXBlKHJlY2lwZSwgaW5ncmVkaWVudERhdGFBcnJheSlcbiAgfSlcbiAgdXNlciA9IG5ldyBVc2VyKHVzZXJEYXRhQXJyYXlbaV0sIHJlY2lwZVJlcG9zaXRvcnkpO1xufVxuXG4vL0V2ZW50IExpc3RlbmVyc1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZSkgPT4ge1xuICBhZGRDbGFzcyhob21lTmF2QnRuLCAnaGlkZGVuJyk7XG4gIGZldGNoRGF0YSgpXG4gIHJlbmRlck5hbWUoKVxufSlcblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGdldFNlYXJjaEl0ZW1zKClcbn0pXG5cbmZpbHRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGdldFRhZ3MoKSBcbn0pXG5cbmhvbWVOYXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGZhdm9yaXRlZENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgbXlMaXN0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBhZGRDbGFzcyhob21lTmF2QnRuLCAnaGlkZGVuJyk7XG4gIHJlbW92ZUNsYXNzKGZhdk5hdkJ0biwgJ2hpZGRlbicpO1xuICByZW1vdmVDbGFzcyhsaXN0TmF2QnRuLCAnaGlkZGVuJyk7XG4gIGFkZENsYXNzKGZhdm9yaXRlZENvbnRhaW5lciwgJ2hpZGRlbicpO1xuICByZW1vdmVDbGFzcyhyZWNpcGVDb250YWluZXIsICdoaWRkZW4nKTtcbiAgcmVmcmVzaEZhdm9yaXRlZCgpO1xuICByZWZyZXNoTGlrZWQoKVxufSlcblxuZmF2TmF2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBmYXZvcml0ZWRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIG15TGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgYWRkQ2xhc3MoZmF2TmF2QnRuLCAnaGlkZGVuJyk7XG4gIHJlbW92ZUNsYXNzKGhvbWVOYXZCdG4sICdoaWRkZW4nKTtcbiAgcmVtb3ZlQ2xhc3MobGlzdE5hdkJ0biwgJ2hpZGRlbicpO1xuICBzaG93RmF2b3JpdGVzKCk7XG59KVxuXG5saXN0TmF2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBhZGRDbGFzcyhsaXN0TmF2QnRuLCAnaGlkZGVuJyk7XG4gIHJlbW92ZUNsYXNzKGhvbWVOYXZCdG4sICdoaWRkZW4nKVxuICByZW1vdmVDbGFzcyhmYXZOYXZCdG4sICdoaWRkZW4nKVxuICBzaG93TXlMaXN0KClcbn0pO1xuXG5yZWNpcGVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBsZXQgdGFyZ2V0QnRuID0gZS50YXJnZXQ7XG4gIGxldCByZWNpcGVJRCA9IHBhcnNlSW50KHRhcmdldEJ0bi5jbG9zZXN0KCcucmVjaXBlLWNhcmQnKS5pZCk7XG4gIGZhdm9yaXRlZFJlY2lwZXMgPSB1c2VyLm15RmF2b3JpdGVzO1xuICBsaWtlZFJlY2lwZXMgPSB1c2VyLm15TGlzdDtcblxuICBpZih0YXJnZXRCdG4uY2xvc2VzdCgnYnV0dG9uJykpIHtcbiAgICBpZih0YXJnZXRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdmYXZvcml0ZScpKSB7XG4gICAgICBhZGRUb0Zhdm9yaXRlcyh0YXJnZXRCdG4sIHJlY2lwZUlEKVxuICAgIH1cbiAgICBlbHNlIGlmKHRhcmdldEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3VuZmF2b3JpdGUnKSAmJiAhdGFyZ2V0QnRuLmNsYXNzTGlzdC5jb250YWlucygnZmF2b3JpdGUnKSkge1xuICAgICAgcmVtb3ZlRnJvbUZhdm9yaXRlcyh0YXJnZXRCdG4sIGZhdm9yaXRlZFJlY2lwZXMsIHJlY2lwZUlEKTtcbiAgICB9XG4gICAgZWxzZSBpZih0YXJnZXRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQnKSAmJiB0YXJnZXRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdyZW1vdmUnKSkge1xuICAgICAgYWRkVG9Db29rTGlzdCh0YXJnZXRCdG4sIHJlY2lwZUlEKTtcbiAgICB9XG4gICAgZWxzZSBpZih0YXJnZXRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdyZW1vdmUnKSAmJiAhdGFyZ2V0QnRuLmNsYXNzTGlzdC5jb250YWlucygnYWRkJykpe1xuICAgICAgcmVtb3ZlRnJvbUNvb2tMaXN0KHRhcmdldEJ0biwgbGlrZWRSZWNpcGVzLCByZWNpcGVJRCk7XG4gICAgfVxuICAgIGVsc2UgaWYodGFyZ2V0QnRuLmNsb3Nlc3QoJyN2aWV3UmVjaXBlJykpIHtcbiAgICAgIGxldCBmaWx0ZXJlZFJlYyA9IHJlY2lwZS5maWx0ZXIoKG9uZVJlY2lwZSkgPT4ge1xuICAgICAgICByZXR1cm4gb25lUmVjaXBlLmlkID09PSBwYXJzZUludChyZWNpcGVJRCk7XG4gICAgICB9KVxuICAgICAgbWFrZU1vZGFsKGZpbHRlcmVkUmVjWzBdKTtcbiAgICAgIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxuICAgIH1cbiAgfVxufSlcblxuZmF2b3JpdGVkQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgbGV0IHRhcmdldEJ0biA9IGUudGFyZ2V0O1xuICBsZXQgcmVjaXBlSUQgPSBwYXJzZUludCh0YXJnZXRCdG4uY2xvc2VzdCgnLmZhdm9yaXRlZC1yZWNpcGUtY2FyZCcpLmlkKTtcblxuICBpZih0YXJnZXRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCd1bmZhdm9yaXRlJykpIHtcbiAgICAgIHJlbW92ZUZyb21GYXZvcml0ZXModGFyZ2V0QnRuLCBmYXZvcml0ZWRSZWNpcGVzLCByZWNpcGVJRCk7XG4gICAgfVxuICAgIGVsc2UgaWYodGFyZ2V0QnRuLmNsYXNzTGlzdC5jb250YWlucygndW5mYXZvcml0ZScpICYmIHRhcmdldEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2Zhdm9yaXRlJykpIHtcbiAgICAgIGFkZFRvRmF2b3JpdGVzKHRhcmdldEJ0biwgZmF2b3JpdGVkUmVjaXBlcywgcmVjaXBlSUQpO1xuICAgIH1cbiAgICBlbHNlIGlmKHRhcmdldEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZCcpICYmIHRhcmdldEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3JlbW92ZScpKSB7XG4gICAgICBhZGRUb0Nvb2tMaXN0KHRhcmdldEJ0biwgcmVjaXBlSUQpO1xuICAgIH1cbiAgICBlbHNlIGlmKHRhcmdldEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3JlbW92ZScpICYmICF0YXJnZXRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQnKSl7XG4gICAgICByZW1vdmVGcm9tQ29va0xpc3QodGFyZ2V0QnRuLCBsaWtlZFJlY2lwZXMsIHJlY2lwZUlEKTtcbiAgICB9XG59KVxuXG5teUxpc3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBsZXQgdGFyZ2V0QnRuID0gZS50YXJnZXQ7XG4gIGxldCByZWNpcGVJRCA9IHBhcnNlSW50KHRhcmdldEJ0bi5jbG9zZXN0KCcubGlzdC1yZWNpcGUtY2FyZCcpLmlkKTtcblxuICBpZih0YXJnZXRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCd1bmZhdm9yaXRlJykgJiYgdGFyZ2V0QnRuLmNsYXNzTGlzdC5jb250YWlucygnZmF2b3JpdGUnKSkge1xuICAgICAgYWRkVG9GYXZvcml0ZXModGFyZ2V0QnRuLCBmYXZvcml0ZWRSZWNpcGVzLCByZWNpcGVJRCk7XG4gICAgfVxuICAgIGVsc2UgaWYodGFyZ2V0QnRuLmNsYXNzTGlzdC5jb250YWlucygndW5mYXZvcml0ZScpICYmICF0YXJnZXRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdmYXZvcml0ZScpKSB7XG4gICAgICByZW1vdmVGcm9tRmF2b3JpdGVzKHRhcmdldEJ0biwgZmF2b3JpdGVkUmVjaXBlcywgcmVjaXBlSUQpO1xuICAgIH1cbiAgICBlbHNlIGlmKHRhcmdldEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZCcpICYmIHRhcmdldEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3JlbW92ZScpKSB7XG4gICAgICBhZGRUb0Nvb2tMaXN0KHRhcmdldEJ0biwgcmVjaXBlSUQpO1xuICAgIH1cbiAgICBlbHNlIGlmKHRhcmdldEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3JlbW92ZScpKXtcbiAgICAgIHJlbW92ZUZyb21Db29rTGlzdCh0YXJnZXRCdG4sIGxpa2VkUmVjaXBlcywgcmVjaXBlSUQpO1xuICAgIH1cbn0pXG5cbmNvbnN0IHJlZnJlc2hGYXZvcml0ZWQgPSAoKSA9PiB7XG5sZXQgcmVjaXBlQ2FyZCA9IHJlY2lwZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcucmVjaXBlLWNhcmQnKTtcbiAgcmVjaXBlQ2FyZC5mb3JFYWNoKHJlY2lwZSA9PiB7XG4gICAgbGV0IHJlY2lwZUFjdGlvbnMgPSByZWNpcGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVjaXBlLWFjdGlvbnMnKTtcbiAgICBsZXQgZmF2QnRuID0gcmVjaXBlQWN0aW9uc1swXS5jaGlsZHJlblsyXVxuICAgIGlmKGZhdm9yaXRlZFJlY2lwZXMuaW5jbHVkZXMocGFyc2VJbnQocmVjaXBlLmlkKSkpIHtcbiAgICAgICByZW1vdmVDbGFzcyhmYXZCdG4sICdmYXZvcml0ZScpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgYWRkQ2xhc3MoZmF2QnRuLCAnZmF2b3JpdGUnKVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgcmVmcmVzaExpa2VkID0gKCkgPT4ge1xubGV0IHJlY2lwZUNhcmQgPSByZWNpcGVDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnJlY2lwZS1jYXJkJyk7XG4gIHJlY2lwZUNhcmQuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgIGxldCByZWNpcGVBY3Rpb25zID0gcmVjaXBlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3JlY2lwZS1hY3Rpb25zJyk7XG4gICAgbGV0IGFkZEJ0biA9IHJlY2lwZUFjdGlvbnNbMF0uY2hpbGRyZW5bMV1cbiAgICBpZihsaWtlZFJlY2lwZXMuaW5jbHVkZXMocGFyc2VJbnQocmVjaXBlLmlkKSkpIHtcbiAgICAgICByZW1vdmVDbGFzcyhhZGRCdG4sICdhZGQnKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGFkZENsYXNzKGFkZEJ0biwgJ2FkZCcpXG4gICAgfVxuICB9KVxufVxuXG4vL0Z1bmN0aW9uc1xuY29uc3Qgc2hvd0NhcmRzID0gKGRhdGEpID0+IHtcbiAgZGF0YS5tYXAob25lUmVjaXBlID0+XG4gICAge1xuICAgIGNvbnN0IHJlY2lwZWNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZWNpcGVjYXJkLmNsYXNzTGlzdCA9ICdyZWNpcGUtY2FyZCc7XG5cbiAgICBsZXQgY2FyZENvbnRlbnQgPVxuICAgIGA8c2VjdGlvbiBjbGFzcz1cInJlY2lwZS1jYXJkXCIgaWQ9XCIke29uZVJlY2lwZS5pZH1cIj5cbiAgICAgIDxpbWcgY2xhc3M9XCJyZWNpcGUtaW1nXCIgc3JjPVwiJHtvbmVSZWNpcGUuaW1hZ2V9XCIvPlxuICAgICAgPHA+JHtvbmVSZWNpcGUubmFtZX08L3A+XG4gICAgICA8ZGl2IGNsYXNzPVwicmVjaXBlLWFjdGlvbnNcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInZpZXctbWVcIiBpZD1cInZpZXdSZWNpcGVcIj5WaWV3PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gcmVtb3ZlIGFkZFwiPjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIHVuZmF2b3JpdGUgZmF2b3JpdGVcIj48L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5gXG4gICAgcmVjaXBlQ29udGFpbmVyLmlubmVySFRNTCArPSBjYXJkQ29udGVudFxuICB9KVxufTtcblxuY29uc3QgY2xlYXJDYXJkcyA9ICgpID0+IHtcbiAgICBsZXQgcmVtb3ZlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNpcGVDb250YWluZXInKVxuICAgIHdoaWxlIChyZW1vdmVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHJlbW92ZUVsZW1lbnQucmVtb3ZlQ2hpbGQocmVtb3ZlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cblxuY29uc3Qgc2hvd0Zhdm9yaXRlcyA9ICgpID0+IHtcbiAgcmVjaXBlLmZvckVhY2goY3VyclJlY2lwZSA9PlxuICAgIHtcbiAgICBjb25zdCBmYXZvcml0ZWRSZWNpcGVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmF2b3JpdGVkUmVjaXBlQ2FyZC5jbGFzc0xpc3QgPSAnZmF2b3JpdGVkLXJlY2lwZS1jYXJkJztcbiAgICBpZihmYXZvcml0ZWRSZWNpcGVzLmluY2x1ZGVzKGN1cnJSZWNpcGUuaWQpKSB7XG4gICAgbGV0IGNhcmRDb250ZW50ID1cbiAgICBgPHNlY3Rpb24gY2xhc3M9XCJmYXZvcml0ZWQtcmVjaXBlLWNhcmRcIiBpZD1cIiR7Y3VyclJlY2lwZS5pZH1cIj5cbiAgICAgIDxpbWcgY2xhc3M9XCJyZWNpcGUtaW1nXCIgc3JjPVwiJHtjdXJyUmVjaXBlLmltYWdlfVwiLz5cbiAgICAgIDxwPiR7Y3VyclJlY2lwZS5uYW1lfTwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJyZWNpcGUtYWN0aW9uc1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIHJlbW92ZSBhZGRcIiBpZD1cImFkZFJlY2lwZVwiPjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIHVuZmF2b3JpdGVcIiBpZD1cImZhdm9yaXRlUmVjaXBlXCI+PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+YFxuICAgIGZhdm9yaXRlZENvbnRhaW5lci5pbm5lckhUTUwgKz0gY2FyZENvbnRlbnRcbiAgfVxuICB9KVxuICBhZGRDbGFzcyhyZWNpcGVDb250YWluZXIsICdoaWRkZW4nKTtcbiAgcmVtb3ZlQ2xhc3MoZmF2b3JpdGVkQ29udGFpbmVyLCAnaGlkZGVuJyk7XG59O1xuXG5jb25zdCBzaG93TXlMaXN0ID0gKCkgPT4ge1xuICByZWNpcGUuZm9yRWFjaChjdXJyUmVjaXBlID0+XG4gICAge1xuICAgIGNvbnN0IGxpc3RSZWNpcGVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGlzdFJlY2lwZUNhcmQuY2xhc3NMaXN0ID0gJ2xpc3QtcmVjaXBlLWNhcmQnO1xuICAgIGlmKGxpa2VkUmVjaXBlcy5pbmNsdWRlcyhjdXJyUmVjaXBlLmlkKSkge1xuICAgIGxldCBjYXJkQ29udGVudCA9XG4gICAgYDxzZWN0aW9uIGNsYXNzPVwibGlzdC1yZWNpcGUtY2FyZFwiIGlkPVwiJHtjdXJyUmVjaXBlLmlkfVwiPlxuICAgICAgPGltZyBjbGFzcz1cInJlY2lwZS1pbWdcIiBzcmM9XCIke2N1cnJSZWNpcGUuaW1hZ2V9XCIvPlxuICAgICAgPHA+JHtjdXJyUmVjaXBlLm5hbWV9PC9wPlxuICAgICAgPGRpdiBjbGFzcz1cInJlY2lwZS1hY3Rpb25zXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gcmVtb3ZlXCIgaWQ9XCJhZGRSZWNpcGVcIj48L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biB1bmZhdm9yaXRlIGZhdm9yaXRlXCIgaWQ9XCJmYXZvcml0ZVJlY2lwZVwiPjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPmBcbiAgICBteUxpc3RDb250YWluZXIuaW5uZXJIVE1MICs9IGNhcmRDb250ZW50XG4gIH1cbiAgfSlcbiAgYWRkQ2xhc3MocmVjaXBlQ29udGFpbmVyLCAnaGlkZGVuJyk7XG4gIGFkZENsYXNzKGZhdm9yaXRlZENvbnRhaW5lciwgJ2hpZGRlbicpO1xufTtcblxuY29uc3QgYWRkVG9GYXZvcml0ZXMgPSAodGFyZ2V0QnRuLCBpZCkgPT4ge1xuICB0YXJnZXRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnZmF2b3JpdGUnKVxuICB1c2VyLmZhdm9yaXRlUmVjaXBlcyhpZCk7XG59O1xuXG5jb25zdCByZW1vdmVGcm9tRmF2b3JpdGVzID0gKHRhcmdldEJ0biwgZmF2b3JpdGVkUmVjaXBlcywgaWQpID0+IHtcbiAgdGFyZ2V0QnRuLmNsYXNzTGlzdC5hZGQoJ2Zhdm9yaXRlJylcbiAgdXNlci51bmZhdm9yaXRlUmVjaXBlcyhmYXZvcml0ZWRSZWNpcGVzLCBpZCk7XG59XG5cbmNvbnN0IGFkZFRvQ29va0xpc3QgPSAodGFyZ2V0QnRuLCBpZCkgPT4ge1xuICB0YXJnZXRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWRkJylcbiAgdXNlci5hZGRUb015TGlzdChpZCk7XG59XG5cbmNvbnN0IHJlbW92ZUZyb21Db29rTGlzdCA9ICh0YXJnZXRCdG4sIGxpa2VkUmVjaXBlcywgaWQpID0+IHtcbiAgdGFyZ2V0QnRuLmNsYXNzTGlzdC5hZGQoJ2FkZCcpXG4gIHVzZXIucmVtb3ZlRnJvbU15TGlzdChsaWtlZFJlY2lwZXMsIGlkKVxufVxuXG5jb25zdCBtYWtlTW9kYWwgPSAocmVjaXBlKSA9PiB7XG4gIGNvbnN0IG5ld01vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBjaGVja01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsQ29udGFpbmVyJyk7XG4gIGlmKGNoZWNrTW9kYWwgIT09IG51bGwpIHtcbiAgICByZWNpcGVDb250YWluZXIucmVtb3ZlQ2hpbGQoY2hlY2tNb2RhbCk7XG4gIH1cbiAgbGV0IGhvd1RvID0gcmVjaXBlLmluc3RydWN0aW9ucy5tYXAoaW5zdHJ1Y3Rpb24gPT4ge1xuICAgIHJldHVybiBgJHtpbnN0cnVjdGlvbi5udW1iZXJ9LiAke2luc3RydWN0aW9uLmluc3RydWN0aW9ufSA8YnI+PGJyPmBcbiAgfSlcbiAgbGV0IGdhdGhlcmVkSW5ncmVkaWVudHMgPSByZWNpcGUuZ2F0aGVySW5ncmVkaWVudHMoKVxuICBsZXQgc3R5bGVJbmdyZWRpZW50c0xpc3QgPSBnYXRoZXJlZEluZ3JlZGllbnRzLm1hcChpbmdyZWRpZW50ID0+IHtcbiAgICByZXR1cm4gYCR7aW5ncmVkaWVudH08YnI+YFxuICB9KVxuICBsZXQgbW9kYWwgPVxuICAgIGA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGFpbmVyXCIgaWQ9XCJtb2RhbENvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsXCIgaWQ9XCJtb2RhbFwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImluZ3JlZGllbnRzLXBpY3R1cmVcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwibW9kYWwtcmVjaXBlLWltZ1wiIHNyYz1cIiR7cmVjaXBlLmltYWdlfVwiLz5cbiAgICAgICAgICA8aDI+IEluZ3JlZGllbnRzIDwvaDI+XG4gICAgICAgICAgPHA+JHtzdHlsZUluZ3JlZGllbnRzTGlzdH08L3A+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXRleHRcIj5cbiAgICAgICAgICA8aDE+JHtyZWNpcGUubmFtZX08L2gxPlxuICAgICAgICAgIDxwIGNsYXNzPVwiaG93VG9cIj4ke2hvd1RvfTwvcD5cbiAgICAgICAgICA8cD5JdCB3aWxsIGNvc3QgJCR7cmVjaXBlLmNhbGN1bGF0ZUNvc3QoKX0gdG8gbWFrZSB0aGlzIHJlY2lwZS48L3A+XG4gICAgICAgICAgPGJ1dHRvbiBpZD1cImNsb3NlTW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxuICAgICAgICA8ZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YFxuICAgIHJlY2lwZUNvbnRhaW5lci5pbm5lckhUTUwgKz0gbW9kYWxcbiAgICBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbENvbnRhaW5lcicpXG4gICAgY2xvc2VNb2RhbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZU1vZGFsJyk7XG4gICAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgIGNsb3NlTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBtb2RhbENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gIH0pO1xufVxuXG5jb25zdCBhZGRDbGFzcyA9IChlbGVtZW50LCBjbGFzc0xpc3QpID0+IHtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTGlzdCk7XG59XG5cbmNvbnN0IHJlbW92ZUNsYXNzID0gKGVsZW1lbnQsIGNsYXNzTGlzdCkgPT4ge1xuICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NMaXN0KTtcbn1cblxuY29uc3QgZ2V0U2VhcmNoSXRlbXMgPSAoKSA9PiB7XG4gIGxldCBzZWFyY2ggPSBzZWFyY2hWYWx1ZXMudmFsdWVcbiAgZm91bmRSZWNpcGVJbmdyZWRpZW50cyA9IHJlY2lwZVJlcG9zaXRvcnkuZmlsdGVyQnlJbmdyZWRpZW50cyhzZWFyY2gsIGluZ3JlZGllbnRzLmluZ3JlZGllbnRzTGlicmFyeSkgXG4gIGZvdW5kUmVjaXBlTmFtZXMgPSByZWNpcGVSZXBvc2l0b3J5LmZpbHRlckJ5TmFtZShzZWFyY2gpXG4gICBjbGVhckNhcmRzKClcbiAgIHNob3dDYXJkcyhmb3VuZFJlY2lwZU5hbWVzKVxuICAgc2hvd0NhcmRzKGZvdW5kUmVjaXBlSW5ncmVkaWVudHMpXG4gIH1cblxuY29uc3QgZ2V0VGFncyA9ICgpICA9PiB7XG4gIGxldCBjaGVja0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W25hbWU9XCJjaGVja1wiXTpjaGVja2VkYClcbiAgbGV0IGZpbmRDaGVja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFtuYW1lPVwiY2hlY2tcIl06Y2hlY2tlZGApLmxlbmd0aFxuICBsZXQgY2hlY2tlZEVsZW1lbnRzID0gW107XG4gIGNoZWNrQm94LmZvckVhY2goKGNoZWNrYm94KSA9PiB7XG4gICAgY2hlY2tlZEVsZW1lbnRzLnB1c2goY2hlY2tib3gudmFsdWUpXG4gIH0pIFxuICBsZXQgbmV3UmVjaXBlcyA9IHJlY2lwZVJlcG9zaXRvcnkuZmlsdGVyQnlUYWdzKGNoZWNrZWRFbGVtZW50cylcbiAgaWYoZmluZENoZWNrcyA9PT0gMCkge1xuICAgIHNob3dDYXJkcyhyZWNpcGUpXG4gIH0gZWxzZSB7XG4gICAgY2xlYXJDYXJkcygpXG4gICAgc2hvd0NhcmRzKG5ld1JlY2lwZXMpXG4gIH1cbn1cblxuY29uc3QgcmVuZGVyaW5mbyA9ICgpID0+IHtcbiAgc2hvd0NhcmRzKHJlY2lwZSlcbn1cblxuY29uc3QgcmVuZGVyTmFtZSA9ICh1c2VyKSA9PiB7XG4gIGNvbnN0IHJlbmRlcmVkVGV4dCA9IGBXaGF0J3MgY29va2luICR7dXNlci5uYW1lfT9gO1xuICB3ZWxjb21lbmFtZS5pbm5lclRleHQgKz0gcmVuZGVyZWRUZXh0XG59XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==