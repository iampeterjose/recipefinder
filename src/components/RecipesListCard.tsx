import { Link } from "react-router-dom";
import type { Recipe } from "../api/recipe";

type Props = {
  recipe: Recipe;
};

function RecipesListCard({ recipe }: Props) {
  return (
    <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1 p-6 flex flex-col items-center border border-indigo-100 group">
      <div className="relative w-full h-48 mb-4">
        <img
          src={recipe.image || "/recipe.jpg"}
          alt={recipe.name}
          className="w-full h-full object-cover rounded-2xl border-2 border-indigo-100 group-hover:scale-105 transition"
          onError={(e) => (e.currentTarget.src = "/recipe.jpg")}
        />
        {recipe.rating && (
          <span className="absolute top-2 right-2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
            ★ {recipe.rating}
          </span>
        )}
      </div>
      <h3 className="text-xl font-bold text-indigo-800 mb-2 text-center">{recipe.name}</h3>
      <div className="flex flex-wrap justify-center gap-2 mb-3">
        {recipe.tags && recipe.tags.length > 0 ? (
          recipe.tags.map((tag: string, tagIdx: number) => (
            <span
              key={tagIdx}
              className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
            >
              #{tag}
            </span>
          ))
        ) : (
          <span className="text-gray-400 text-xs">No tags</span>
        )}
      </div>
      <Link
        to={`/recipe/${recipe.id}`}
        className="mt-auto inline-block bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white px-6 py-2 rounded-full font-semibold shadow transition"
      >
        View Recipe
      </Link>
    </div>
  );
}

export default RecipesListCard;