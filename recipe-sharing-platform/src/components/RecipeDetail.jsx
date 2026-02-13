import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Simulate fetching data
    const foundRecipe = recipesData.find(
      (item) => item.id === parseInt(id)
    );

    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-medium">Loading recipe...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6">
        
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg"
        />

        <h1 className="text-3xl font-bold mt-6">
          {recipe.title}
        </h1>

        <p className="text-gray-600 mt-4">
          {recipe.summary}
        </p>

        {/* Ingredients */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">
            Ingredients
          </h2>
          <ul className="list-disc list-inside space-y-1">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">
            Instructions
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

        <Link
          to="/"
          className="inline-block mt-6 text-blue-600 hover:underline"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default RecipeDetail;
