import { getFilters, setFilters } from './filters'
import { getRecipe, loadRecipes } from './recipes';
import { getIngredient } from './ingredients'

// Generate DOM structure
const generateRecipeDom = (recipe) => {
  const titleEl = document.createElement('a')
  const containerEl = document.createElement('div')
  
  // setup the link
  titleEl.setAttribute('href', `./edit.html#${recipe.id}`)
  titleEl.textContent= recipe.title
  titleEl.appendChild(containerEl)
  // titleEl.classList.add() // ADD CLASS FOR STYLE HERE

  // return containerEl
  return titleEl
}

const renderRecipes = () => {
  let recipesEl = document.querySelector('#recipes')
  //debugger

  const filters = getFilters()
  let recipes = getRecipe()
  
  const filteredRecipes = (filters.searchText.length > 0) ? recipes.filter((recipe) => recipe.title.toLowerCase().includes(filters.searchText.toLowerCase())) : recipes

  recipesEl.innerHTML = '';

  // recipesEl.appendChild(generateSummaryDom(ingredientAvail))

  if(filteredRecipes.length > 0) {

        //iterated over "filteredRecipes" array, render element from each one
    filteredRecipes.forEach((recipe) => {
      //make an element, set the text value and render

      //const recipeEl = generateRecipeDom(recipe)
      const recipeEl = generateRecipeDom(recipe)
      recipesEl.appendChild(recipeEl);
    })
  } else if(filteredRecipes.length <= 0) {
    renderEmptyMsg()
  }

  // filteredRecipes.forEach((item) => {
  //   recipesEl.appendChild(generateRecipeDom(item))
  // })

}

const renderEmptyMsg = () => {
  let recipesEl = document.querySelector('#recipes')
  const msgEl = document.createElement('p')
  msgEl.textContent = "No recipes to show."
  recipesEl.append(msgEl)
}

const generateSummaryDom = (ingredientAvail) => {
  const summaryEl = document.createElement('h3')
  summaryEl.textContent = ingredientAvail.length
  return summaryEl
}

// const renderIngredients = (ingredients) => {
//   const ingredientsEl = document.querySelector('recipe-ingredient')

//   ingredientsEl.innerHTML = ''
//   ingredients.forEach((ingredient) => {

//   })
// }

export { renderRecipes, generateRecipeDom, generateSummaryDom }