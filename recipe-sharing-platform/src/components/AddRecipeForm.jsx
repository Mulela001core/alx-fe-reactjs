import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRecipeForm() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  // 
  const validate = () => {
    let validationErrors = {};

    if (!title.trim()) {
      validationErrors.title = "Recipe title is required";
    }

    if (!ingredients.trim()) {
      validationErrors.ingredients = "Ingredients are required";
    } else if (ingredients.split("\n").filter(line => line.trim() !== "").length < 2) {
      validationErrors.ingredients = "Please enter at least two ingredients (one per line)";
    }

    if (!instructions.trim()) {
      validationErrors.instructions = "Preparation steps are required";
    }

    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use the new validate function
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const newRecipe = {
        id: Date.now(),
        title,
        ingredients: ingredients.split("\n").filter(line => line.trim() !== ""),
        instructions: instructions.split("\n").filter(line => line.trim() !== ""),
      };

      console.log("New Recipe Submitted:", newRecipe);
      alert("Recipe added successfully!");
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 md:p-12"> 
      
      
      <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 w-full max-w-2xl">
        

        <h2 className="text-xl md:text-3xl font-bold mb-6 text-center">
          Add New Recipe 🍳
        </h2>
        

        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <label className="block font-medium mb-1">Recipe Title</label>
            <input
              type="text"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block font-medium mb-1">Ingredients (one per line)</label>
            <textarea
              rows="4"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
            {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
          </div>

          {/* Instructions */}
          <div>
            <label className="block font-medium mb-1">Preparation Steps (one per line)</label>
            <textarea
              rows="4"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
            {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold md:text-lg"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;