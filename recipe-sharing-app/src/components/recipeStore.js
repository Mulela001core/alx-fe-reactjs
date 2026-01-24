import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  // existing state
  recipes: [],

  // NEW: search and filtering state
  searchTerm: "",
  filteredRecipes: [],

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

  // NEW: search & filtering actions
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
}));
