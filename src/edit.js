import { initializeEditPage } from './views-edit'
import { updateRecipe, deleteRecipe } from './recipes'
import { createIngredient } from './ingredients'

// DOM SELECTOR
const recipeId = location.hash.substring(1)
const titleElement = document.querySelector('#recipe-title')
const bodyElement = document.querySelector('#recipe-body')
const deleteButton = document.querySelector('#delete-recipe')

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
  
})

window.addEventListener('storage', (e) => {
  // debugger
  console.log('Clicked.')
  if(e.key === 'recipes') {
    initializeEditPage(recipeId)
  }
})