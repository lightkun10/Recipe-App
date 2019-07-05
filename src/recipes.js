import uuidv4 from 'uuid/v4'

let recipes = [];

// Read existing recipe from localStorage
const loadRecipes = () => {
  const recipeJSON = localStorage.getItem('recipes')

  try {
    recipes = recipeJSON ? JSON.parse(recipeJSON) : []
  } catch (e) {
    return []
  }
}

// Expose recipe from module
const getRecipe = () => recipes

const getRecipeById = (id) => {
  const recipe = recipes.find((recipe) => recipe.id === id)
  return recipe
}

// Save a recipe to local storage
const saveRecipe = () => localStorage.setItem('recipes', JSON.stringify(recipes))


const createRecipe = () => {
    let recipeId = uuidv4()

    recipes.push({
      id: recipeId,
      title: '',
      body: '',
      ingredients: []
    })

    //save the data
    saveRecipe()

    // return to make sure the caller of createRecipe got the id
    return recipeId
}

// Remove a recipe from the list
const deleteRecipe = (id) => {
  const recipeIndex = recipes.findIndex((recipe) => recipe.id === id)

  if(recipeIndex > -1) {
    recipes.splice(recipeIndex, 1)
    saveRecipe()
  }
}


// updates is an object take various properties to update
const updateRecipe = (id, updates) => {
  const recipe = recipes.find((recipe) => recipe.id === id)

  if(!recipe) {
    return undefined
  }

  if(typeof updates.title === 'string') {
    recipe.title = updates.title
  }

  if(typeof updates.body === 'string') {
    recipe.body = updates.body
  }

  saveRecipe()
}

loadRecipes()

export { getRecipe, createRecipe, loadRecipes, deleteRecipe, updateRecipe, getRecipeById, saveRecipe }