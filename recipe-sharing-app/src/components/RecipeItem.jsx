import { useRecipeStore } from "./recipeStore";

const RecipeItem = ({ recipe }) => {
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div>
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>

      {isFavorite ? (
        <button onClick={() => removeFavorite(recipe.id)}>
          Remove from Favorites
        </button>
      ) : (
        <button onClick={() => addFavorite(recipe.id)}>
          Add to Favorites
        </button>
      )}
    </div>
  );
};

export default RecipeItem;
