import React, { useEffect, useState } from "react";
import { getAllRecipes } from "../api/recipe";
import type { Recipe } from "../api/recipe";
import { Link } from "react-router-dom";
import RecipesListCard from "../components/RecipesListCard";

// Extract filters from recipe attributes
function getFilters(recipes: Recipe[]) {
  const types = Array.from(
    new Set(recipes.map((r) => r.mealType?.[0] || r.cuisine || r.tags?.[0]).filter(Boolean))
  );
  return ["All", ...types];
}

function RecipeList() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [filters, setFilters] = useState<string[]>(["All"]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await getAllRecipes();
        const recipeArr = response.recipes ?? [];
        setRecipes(recipeArr);
        setFilters(getFilters(recipeArr));
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchRecipes();
  }, []);

  const filteredRecipes = recipes.filter(
    (r) =>
      (activeFilter === "All" ||
        r.mealType?.includes(activeFilter) ||
        r.cuisine === activeFilter ||
        r.tags?.includes(activeFilter)) &&
      r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      className="py-20 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 min-h-screen"
      id="recipes"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <h2 className="text-3xl font-extrabold text-indigo-800">All Recipes</h2>
          <input
            type="text"
            placeholder="Search recipes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-72 px-4 py-2 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white shadow"
          />
        </div>
        <div className="z-10 top-16 bg-gradient-to-r from-indigo-50 via-white to-indigo-100 py-2 mb-8 flex gap-3 flex-wrap rounded-lg shadow-sm">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full font-medium border transition ${
                activeFilter === filter
                  ? "bg-indigo-600 text-white border-indigo-600 shadow"
                  : "bg-white text-indigo-700 border-indigo-200 hover:bg-indigo-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredRecipes.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 py-12">
              No recipes found.
            </div>
          ) : (
            filteredRecipes.map((recipe) => (
              <RecipesListCard key={recipe.id} recipe={recipe} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default RecipeList;
