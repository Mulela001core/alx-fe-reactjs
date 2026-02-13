import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();

  const recipe = recipesData.find(
    (recipe) => recipe.id === parseInt(id)
  );

  if (!recipe) {
    return <div className="p-6 text-center">Recipe not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
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

        {/* Placeholder sections since your data.json doesn't yet include these */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">
            Ingredients
          </h2>
          <ul className="list-disc list-inside text-gray-700">
          {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
          ))}
</ul>

        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">
            Cooking Steps
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
  {recipe.steps.map((step, index) => (
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
