export default function IngredientsList(props) {
  const ingredientEl = props.ingredients.map((ingredient) => {
    return <li>{ingredient}</li>;
  });

  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientEl}
      </ul>
      {props.ingredients.length >= 4 ? (
        <div className="get-recipe-container">
          <div>
            <h2>Ready for a recipe?</h2>
            <p>Generate a recipe from your list of ingredients</p>
          </div>
          <button onClick={props.getRecipe} className="get-a-recipe-btn">
            Get a recipe
          </button>
        </div>
      ) : null}
    </section>
  );
}
