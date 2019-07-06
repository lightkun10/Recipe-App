import { getRecipe, updateRecipeStatus, getRecipeById } from './recipes'
import { createIngredient, updateIngredient, getIngredient, deleteIngredient } from './ingredients'

// DOM SELECTOR
const recipeId = window.location.hash.substring(1)
const recipes = getRecipe()
const recipe = recipes.find((recipe) => recipe.id === recipeId)
const titleElement = document.querySelector('#recipe-title')
const bodyElement = document.querySelector('#recipe-body')
const deleteButton = document.querySelector('#delete-recipe')
const subtitleEl = document.querySelector('#subtitle')

const initializeEditPage = (recipeId) => {
  subtitleEl.textContent = updateRecipeStatus(recipeId)
  if(!recipe) {
    location.assign('/index.html')
  }

  titleElement.value = recipe.title
  bodyElement.value = recipe.body
  renderIngredients()
}

const generateIngredientDOM = (ingredientId, text, available) => {
  const ingredientSectionEl = document.querySelector('#ingredients')
  const containerEl = document.createElement('div')
  // const ingredientEl = document.createElement('label')
  const checkEl = document.createElement('input')
  const checkLabelEl = document.createElement('span')
  const inputEl = document.createElement('input')
  const removeEl = document.createElement('i')

  //set the checkbox
  checkEl.type = ('checkbox')
  checkEl.checked = ingredientId.available
  checkEl.addEventListener('change', (e) => {
    updateIngredient(recipeId, ingredientId, { available: e.target.checked })
    subtitleEl.textContent = updateRecipeStatus(recipeId)
  })

  containerEl.appendChild(checkEl)
  // ingredientEl.appendChild(checkbox)
  // ingredientEl.appendChild(checkLabelEl)
  containerEl.appendChild(checkLabelEl)

  inputEl.type = "text"
    inputEl.placeholder = "ingredients name"
    inputEl.value = text
    inputEl.addEventListener('input', (e) => {
        updateIngredient(recipeId, ingredientId, { name: e.target.value })
    })

    containerEl.appendChild(inputEl)

    removeEl.textContent = 'Remove ingredient';
    removeEl.addEventListener('click', (e) => {
      // console.log('ingredient deleted(soon)!')
      // console.log(e)
      deleteIngredient(recipeId, ingredientId)
      subtitleEl.textContent = updateRecipeStatus(recipeId)
      renderIngredients()
      
    })

    containerEl.appendChild(removeEl)
    ingredientSectionEl.appendChild(containerEl);
}

const renderIngredients = () => {
  document.querySelector('#ingredients').innerHTML = ''
  recipe.ingredients.forEach((ingredient) => {
    generateIngredientDOM(ingredient.id, ingredient.name, ingredient.available)
  })
}

export { initializeEditPage, generateIngredientDOM, renderIngredients }