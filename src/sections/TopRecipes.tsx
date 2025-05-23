import { useEffect, useState, useRef } from 'react';
import { getTopRecipes } from '../api/recipe'; 
import type { Recipe } from '../api/recipe';
import TopRecipesCard from '../components/TopRecipesCard';

function TopRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await getTopRecipes();
        setRecipes(response.recipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchRecipes();
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (!recipes.length) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % recipes.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [recipes]);

  // Scroll to current card without vertical bounce
  useEffect(() => {
    if (scrollRef.current && recipes.length) {
      const container = scrollRef.current;
      const card = container.children[current] as HTMLElement;
      if (card) {
        const offsetLeft = card.offsetLeft - (container.offsetWidth / 2 - card.offsetWidth / 2);
        container.scrollTo({ left: offsetLeft, behavior: "smooth" });
      }
    }
  }, [current, recipes]);

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-indigo-100" id="toprecipes">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block mb-3 px-5 py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold text-base shadow">
            ⭐ Popular Picks
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-800 mb-4 tracking-tight">
            Top Recipes
          </h2>
          <p className="text-lg text-indigo-700">
            Discover our most popular recipes, loved by the community.
          </p>
        </div>

        <div className="relative">
          {/* Back Button */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-indigo-200 rounded-full shadow p-2 hover:bg-indigo-50 transition disabled:opacity-50"
            onClick={() => setCurrent((prev) => (prev === 0 ? recipes.length - 1 : prev - 1))}
            disabled={recipes.length === 0}
            aria-label="Previous recipe"
            style={{ left: "-2rem" }}
          >
            <svg width="24" height="24" fill="none" stroke="#6366f1" strokeWidth="2" viewBox="0 0 24 24">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-indigo-200 rounded-full shadow p-2 hover:bg-indigo-50 transition disabled:opacity-50"
            onClick={() => setCurrent((prev) => (prev + 1) % recipes.length)}
            disabled={recipes.length === 0}
            aria-label="Next recipe"
            style={{ right: "-2rem" }}
          >
            <svg width="24" height="24" fill="none" stroke="#6366f1" strokeWidth="2" viewBox="0 0 24 24">
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
          >
            {recipes.map((recipe) => (
              <TopRecipesCard key={recipe.id} recipe={recipe} />
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {recipes.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-200 border ${
                  current === idx
                    ? "bg-indigo-600 border-indigo-600 scale-110"
                    : "bg-indigo-200 border-indigo-200"
                }`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to recipe ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopRecipes;
