import { getRecipe, saveRecipe } from "./recipes";
import uuidv4 from 'uuid/v4'

const createIngredient = (recipeId) => {
  const recipe = getRecipe().find((recipe) => recipe.id === recipeId)
  const id = uuidv4()
  recipe.ingredients.push(
    {
      id,
      name: 'Add ingredient',
      available: false
    },
  )
  saveRecipe()
  return id
}

const updateIngredient = (recipeId, ingredientId, updates) => {
  const recipe = getRecipe().find((recipe) => recipe.id === recipeId);
  const ingredient = recipe.ingredients.find((ingredient) => ingredient.id === ingredientId)

  if(typeof updates.name === 'string') {
    ingredient.name = updates.name
  }
  if(typeof updates.available === 'boolean') {
    ingredient.available = updates.available
  }
  saveRecipe()
}

const deleteIngredient = (recipeId, ingredientId) => {
  const recipe = getRecipe().find((recipe) => recipe.id === recipeId)
  const deleteId = recipe.ingredients.findIndex((ingredient) => ingredient.id === ingredientId)
  if(deleteId > -1) {
    recipe.ingredients.splice(deleteId, 1)
  }
  saveRecipe();
}

const getIngredient = (recipeId, ingredientId) => {
  const recipe = getRecipe().find((recipe) => recipe.id === recipeId);
  return recipe.ingredients.find((ingredient) => ingredient.id === ingredientId)
}

export { createIngredient, updateIngredient, getIngredient, deleteIngredient }