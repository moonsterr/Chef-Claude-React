import React from 'react';
import ClaudeRecipe from './components/clauderecipe';
import IngredientList from './components/IngredientsList';

import { getRecipeFromMistral } from './ai';

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState('');

  const ingredientsMap = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));

  function Submit(formData) {
    const ing = formData.get('ingredient');
    setIngredients((prevIng) => [...prevIng, ing]);
  }
  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    console.log(recipeMarkdown);
    setRecipe(recipeMarkdown);
  }
  return (
    <main>
      <form className="add-ingredient-form" action={Submit}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
          required
        />
        <button>Add ingredient</button>
      </form>
      {ingredientsMap.length > 0 && (
        <IngredientList ingredientMap={ingredientsMap} getRecipe={getRecipe} />
      )}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
