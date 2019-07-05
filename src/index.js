import { getFilters, setFilters } from './filters'
import { getRecipe, createRecipe, createIngredient, loadRecipes, deleteRecipe, updateRecipe, recipes } from './recipes'
import { renderRecipes } from './views-index'

// console.log(getRecipe())
// createRecipe()
// console.log(getRecipe())

renderRecipes();

document.querySelector('#create-recipe').addEventListener('click', function (e) {
  const id = createRecipe()
  location.assign(`./edit.html#${id}`)
});

document.querySelector('#search-recipe').addEventListener('input', (e) => {
  // update 'filters.searchText from the event input
  setFilters({
    searchText: e.target.value
  })
  renderRecipes()
});

// window.addEventListener('storage', (e) => {
//   if(e.key === 'recipes') {
//     renderRecipes()
//   }
// })

deleteRecipe('c2214b8f-1d2f-42d3-919b-e1c65c0f7c48')
console.log(getRecipe())