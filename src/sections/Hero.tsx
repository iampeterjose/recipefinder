import React from "react";

function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-24 px-4">
            {/* Decorative background pattern */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <svg width="100%" height="100%" className="opacity-10" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="2" fill="#6366f1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
            </div>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                {/* Left: Text */}
                <div className="flex-1 text-left">
                    <span className="inline-block mb-4 px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 font-semibold text-sm shadow">
                        🍽️ Welcome to RecipeFinder
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-900 mb-6 leading-tight drop-shadow-lg">
                        <span className="bg-indigo-100 px-2 rounded-lg">Discover</span>{" "}
                        <span className="text-indigo-600 bg-white px-2 rounded-lg">Delicious Recipes</span>
                        <br className="hidden md:block" />
                        <span className="text-indigo-800">for Every Taste</span>
                    </h1>
                    <p className="text-lg md:text-xl text-indigo-900 mb-10 max-w-xl">
                        Explore thousands of mouth-watering recipes, save your favorites, and share your own culinary creations with the world. Start your cooking adventure today!
                    </p>
                    <a
                        href="#recipes"
                        className="inline-block bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl transition"
                    >
                        Browse Recipes
                    </a>
                </div>
                {/* Right: Image */}
                <div className="flex-1 flex justify-center">
                    <div className="relative">
                        {/* Glassmorphism effect */}
                        <div className="absolute -inset-6 bg-white/40 backdrop-blur-lg rounded-3xl shadow-2xl -z-10 border border-indigo-100"></div>
                        <img
                            src="/recipe.jpg"
                            alt="Delicious food"
                            className="w-full max-w-md rounded-3xl shadow-2xl border-4 border-white object-cover sm:scale-x-100 -scale-x-100"
                        />
                        {/* Decorative ring */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border-4 border-indigo-200 opacity-60"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;