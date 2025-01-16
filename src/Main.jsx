import { useState } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);

  const ingredientEl = ingredients.map((ingredient) => {
    return <li>{ingredient}</li>;
  });

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
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredientEl}
          </ul>
          {ingredients.length >= 4 ? (
            <div className="get-recipe-container">
              <div>
                <h2>Ready for a recipe?</h2>
                <p>Generate a recipe from your list of ingredients</p>
              </div>
              <button className="get-a-recipe-btn">Get a recipe</button>
            </div>
          ) : null}
        </section>
      ) : null}
    </main>
  );
}
