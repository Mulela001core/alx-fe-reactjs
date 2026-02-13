import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import recipesData from "../data.json";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Recipe Collection 🍽️
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {recipesData.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-gray-600 text-sm mt-2">
                {recipe.summary}
              </p>

              <Link
                to={`/recipe/${recipe.id}`}
                className="inline-block mt-4 text-blue-600 font-medium hover:underline"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
