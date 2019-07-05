import { getRecipe, saveRecipe } from "./recipes";


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

export { createIngredient }