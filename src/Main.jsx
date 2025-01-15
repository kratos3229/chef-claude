import { useState } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);

  const ingredientEl = ingredients.map((ingredient) => {
    return <li>{ingredient}</li>;
  });

  function onSubmitHandler(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredient");

    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);

    console.log(ingredients);
  }

  return (
    <main>
      <form onSubmit={onSubmitHandler} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g oregeno"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>{ingredientEl}</ul>
    </main>
  );
}
