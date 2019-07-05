import { getRecipe } from './recipes'

// DOM SELECTOR
const recipeId = window.location.hash.substring(1)
const titleElement = document.querySelector('#recipe-title')
const bodyElement = document.querySelector('#recipe-body')
const deleteButton = document.querySelector('#delete-recipe')

const initializeEditPage = (recipeId) => {
  let recipes = getRecipe()
  let recipe = recipes.find((recipe) => recipe.id === recipeId )

  if(!recipe) {
    location.assign('/index.html')
  }

  titleElement.value = recipe.title
  bodyElement.value = recipe.body
}

const generateIngredientDOM = (ingredientId, text, available) => {
  const ingredientSectionEl = document.querySelector('#ingredients')
  const ingredientEl = document.createElement('label')
  const containerEl = document.createElement('div')
  const checkbox = document.createElement('input')
  const ingredientText = document.createElement('span')
  const removeButton = document.createElement('button')

  //set the checkbox
  checkbox.setAttribute('type', 'checkbox')
  checkbox.checked = ingredientId.available
  containerEl.appendChild(checkbox)
  checkbox.addEventListener('change', () => {
    
  })
}

export { initializeEditPage }