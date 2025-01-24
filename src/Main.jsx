import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "./ai";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);

  const [recipe, setRecipe] = useState("");

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);

    setRecipe(recipeMarkdown);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");

    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g oregeno"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length ? (
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      ) : null}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
