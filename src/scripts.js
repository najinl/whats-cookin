import './styles.css';
import apiCalls from './apiCalls';
import './assets/burger.png';
// import burger.png from './assets'
import './assets/favorite.svg';
import './assets/fridge.svg';
import './assets/home.svg';
import './assets/list.svg';
import './assets/search.svg';

console.log('Hello world');



let homeNavBtn = document.getElementById('homeNav');
let favNavBtn = document.getElementById('favNav');
let listNavBtn = document.getElementById('listNav');
let recipeCard = document.getElementById('recipeCard');

window.addEventListener('load', (e) => {
  addClass(homeNavBtn, 'hidden');
})

homeNavBtn.addEventListener('click', function() {
  addClass(homeNavBtn, 'hidden');
  removeClass(favNavBtn, 'hidden');
  removeClass(listNavBtn, 'hidden');
})

favNavBtn.addEventListener('click', function() {
  addClass(favNavBtn, 'hidden');
  removeClass(homeNavBtn, 'hidden');
  removeClass(listNavBtn, 'hidden');
})

listNavBtn.addEventListener('click', function() {
  addClass(listNavBtn, 'hidden');
  removeClass(homeNavBtn, 'hidden')
  removeClass(favNavBtn, 'hidden')
})

recipeContainer.addEventListener('click', function(e) {
  if(e.target.classList.contains('like-btn')) {
    e.target.classList.add('unlilke-btn');
    e.target.classList.remove('like-btn');
  }
})

const addClass = (element, classList) => {
  element.classList.add(classList);
}

const removeClass = (element, classList) => {
  element.classList.remove(classList);
}
