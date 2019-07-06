import { initializeEditPage, generateIngredientDOM, renderIngredient } from './views-edit'
import { updateRecipe, deleteRecipe, updateRecipeStatus, getRecipe, getRecipeById } from './recipes'
import { createIngredient, updateIngredient } from './ingredients'


// DOM SELECTOR
const recipeId = location.hash.substring(1);
let recipes = getRecipe();
let recipe = getRecipeById();
const titleElement = document.querySelector('#recipe-title');
const bodyElement = document.querySelector('#recipe-body');
const deleteButton = document.querySelector('#delete-recipe');
const subtitleEl = document.querySelector('#subtitle');

initializeEditPage(recipeId);

// EVENT HANDLER
titleElement.addEventListener('input', (e) => {
  const recipe = updateRecipe(recipeId, { title: e.target.value })
})

bodyElement.addEventListener('input', (e) => {
  const recipe = updateRecipe(recipeId, { body: e.target.value })
})

deleteButton.addEventListener('click', () => {
  deleteRecipe(recipeId)
  location.assign('./index.html')
})

document.querySelector('#new-ingredients').addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e);
  const text = e.target.elements.newIngredients.value;
  const ingredientId = createIngredient(recipeId);
  updateIngredient(recipeId, ingredientId, { name: text })
  generateIngredientDOM(ingredientId, text)
  e.target.elements.newIngredients.value = ''
  subtitleEl.textContent = updateRecipeStatus(recipeId)
})

window.addEventListener('storage', (e) => {
  // debugger
  // console.log('Clicked.')
  if(e.key === 'recipes') {
    recipes = JSON.parse(e.newValue)
    recipe = recipes.find((recipe) => {
      return recipe.id === recipeId
    })
    if(recipe === undefined) {
      location.assign('/index.html')
    }
  }
})

console.log(getRecipe())
