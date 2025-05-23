import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRecipeById } from "../api/recipe";
import type { Recipe } from "../api/recipe";

function RecipeDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecipe = async () => {
            if (id) {
                try {
                    const response = await getRecipeById(parseInt(id));
                    setRecipe(response);
                } catch (error) {
                    console.error("Error fetching recipe:", error);
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchRecipe();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <span className="text-indigo-600 text-xl font-semibold">Loading...</span>
            </div>
        );
    }

    if (!recipe) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <span className="text-red-500 text-xl font-semibold">Recipe not found.</span>
            </div>
        );
    }

    return (
        <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 min-h-screen">
            <div className="max-w-4xl mx-auto px-4">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="mb-8 flex items-center gap-2 text-indigo-700 hover:text-indigo-900 font-semibold transition"
                >
                    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                    Back
                </button>
                <div className="flex flex-col md:flex-row gap-10 bg-white rounded-3xl shadow-2xl p-10 border border-indigo-100">
                    {/* Image */}
                    <div className="flex-1 flex justify-center items-start">
                        <div className="relative w-full max-w-xs">
                            <img
                                src={recipe.image || "/recipe.jpg"}
                                alt={recipe.name}
                                className="w-full rounded-2xl shadow-xl border-2 border-indigo-100 object-cover aspect-square"
                                onError={e => (e.currentTarget.src = "/recipe.jpg")}
                            />
                            <div className="absolute -inset-2 rounded-2xl bg-indigo-100 opacity-30 blur-lg -z-10"></div>
                        </div>
                    </div>
                    {/* Details */}
                    <div className="flex-1 flex flex-col">
                        <h1 className="text-4xl font-extrabold text-indigo-800 mb-3 tracking-tight">{recipe.name}</h1>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {recipe.tags && recipe.tags.length > 0 && recipe.tags.map((tag: string, idx: number) => (
                                <span
                                    key={idx}
                                    className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
                                >
                                    #{tag}
                                </span>
                            ))}
                            {recipe.mealType && recipe.mealType.length > 0 && recipe.mealType.map((type: string, idx: number) => (
                                <span
                                    key={`mealtype-${idx}`}
                                    className="inline-block bg-indigo-50 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-200"
                                >
                                    {type}
                                </span>
                            ))}
                            {recipe.cuisine && (
                                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-200">
                                    {recipe.cuisine}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                                <svg width="18" height="18" fill="none" stroke="#6366f1" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                                <span className="font-medium">Prep:</span> {recipe.prepTimeMinutes} min
                            </span>
                            <span className="flex items-center gap-1">
                                <svg width="18" height="18" fill="none" stroke="#6366f1" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                                <span className="font-medium">Cook:</span> {recipe.cookTimeMinutes} min
                            </span>
                            <span className="flex items-center gap-1">
                                <svg width="18" height="18" fill="none" stroke="#6366f1" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                                <span className="font-medium">Servings:</span> {recipe.servings}
                            </span>
                            <span className="flex items-center gap-1">
                                <svg width="18" height="18" fill="none" stroke="#6366f1" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                                <span className="font-medium">{recipe.difficulty}</span>
                            </span>
                            <span className="flex items-center gap-1">
                                <svg width="18" height="18" fill="none" stroke="#6366f1" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                                <span className="font-medium">{recipe.caloriesPerServing} kcal/serving</span>
                            </span>
                        </div>
                        <div className="flex items-center gap-3 mb-6">
                            {recipe.rating && (
                                <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow flex items-center gap-1">
                                    ★ {recipe.rating}
                                </span>
                            )}
                            {recipe.reviewCount && (
                                <span className="text-xs text-gray-500">{recipe.reviewCount} reviews</span>
                            )}
                        </div>
                        {recipe.ingredients && (
                            <div className="mb-6">
                                <h2 className="text-lg font-bold text-indigo-700 mb-2">Ingredients</h2>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    {recipe.ingredients.map((ingredient: string, idx: number) => (
                                        <li key={idx}>{ingredient}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {recipe.instructions && (
                            <div>
                                <h2 className="text-lg font-bold text-indigo-700 mb-2">Instructions</h2>
                                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                    {Array.isArray(recipe.instructions)
                                        ? recipe.instructions.map((step: string, idx: number) => (
                                            <li key={idx}>{step}</li>
                                        ))
                                        : <li>{recipe.instructions}</li>
                                    }
                                </ol>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RecipeDetails;