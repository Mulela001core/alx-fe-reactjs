import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  // existing state
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

  // ✅ NEW: favorites & recommendations state
  favorites: [],
  recommendations: [],

  // existing actions
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  setRecipes: (recipes) =>
    set({
      recipes: recipes,
    }),

  // search & filtering actions
  setSearchTerm: (term) =>
    set({
      searchTerm: term,
    }),

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title
          .toLowerCase()
          .includes(state.searchTerm.toLowerCase())
      ),
    })),

  // ✅ NEW: favorites actions
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // ✅ NEW: recommendations logic
  generateRecommendations: () =>
    set((state) => {
      // Mock implementation based on favorites
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5
      );

      return { recommendations: recommended };
    }),
}));
