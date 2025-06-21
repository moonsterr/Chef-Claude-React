function IngredientList(props) {
  const { ingredientMap, getRecipe } = props;
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      {ingredientMap.length < 3 && (
        <div className="alert">Please add at least 3 items</div>
      )}
      <ul className="ingredients-list" aria-live="polite">
        {ingredientMap}
      </ul>
      {ingredientMap.length >= 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={getRecipe}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}
export default IngredientList;
