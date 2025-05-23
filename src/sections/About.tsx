function About () {
    return (
        <section id="about" className="relative bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-24 overflow-hidden">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-indigo-100 rounded-full opacity-30 blur-2xl z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-200 rounded-full opacity-20 blur-2xl z-0"></div>
            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1">
                        <h2 className="text-4xl font-extrabold text-indigo-800 mb-4 tracking-tight">About RecipeFinder</h2>
                        <p className="text-lg text-indigo-700 mb-4">
                            Welcome to <span className="font-semibold text-indigo-700">RecipeFinder</span>! We are a community of food lovers, home cooks, and culinary explorers.
                        </p>
                        <p className="text-lg text-indigo-700 mb-4">
                            Our mission is to inspire cooks of all levels to discover, create, and share delicious recipes from around the world. Whether you're a beginner or a seasoned chef, you'll find something to spark your creativity and satisfy your taste buds.
                        </p>
                        <ul className="list-disc list-inside text-indigo-700 mb-6 space-y-1">
                            <li>Curated recipes for every occasion</li>
                            <li>Easy-to-follow instructions</li>
                            <li>Community ratings and reviews</li>
                            <li>Save and share your favorites</li>
                        </ul>
                        <div className="flex gap-4 mt-4">
                            <a href="#recipes" className="bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white px-6 py-2 rounded-full font-semibold shadow transition">
                                Explore Recipes
                            </a>
                            <a href="#contact" className="bg-white border border-indigo-600 text-indigo-700 px-6 py-2 rounded-full font-semibold shadow hover:bg-indigo-50 transition">
                                Contact Us
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img
                            src="/about-cooking.svg"
                            alt="Cooking illustration"
                            className="w-72 h-72 object-contain drop-shadow-xl"
                            onError={e => (e.currentTarget.style.display = "none")}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;