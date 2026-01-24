import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  // 🔥 Trigger filtering whenever search term or recipes change
  useEffect(() => {
    filterRecipes();
  }, [searchTerm, recipes, filterRecipes]);

  const displayedRecipes =
    searchTerm.length > 0 ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipes</h2>

      {displayedRecipes.length === 0 && <p>No recipes found.</p>}

      {displayedRecipes.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
