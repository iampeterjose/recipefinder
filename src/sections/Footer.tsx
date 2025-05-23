import { FiTwitter, FiFacebook } from "react-icons/fi";

function Footer () {
    return (
        <footer className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 mt-16">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                    <h3 className="text-3xl font-extrabold mb-2 tracking-tight flex items-center gap-2">
                        <span className="bg-indigo-100 text-indigo-700 rounded-full px-2 py-1 text-lg">🍽️</span>
                        RecipeFinder
                    </h3>
                    <p className="text-indigo-100 text-sm">
                        &copy; {new Date().getFullYear()} RecipeFinder. All rights reserved.
                    </p>
                </div>
                <div className="flex gap-8 text-base font-medium">
                    <a href="#recipes" className="hover:text-indigo-200 transition">Recipes</a>
                    <a href="#about" className="hover:text-indigo-200 transition">About</a>
                    <a href="#contact" className="hover:text-indigo-200 transition">Contact</a>
                </div>
                <div className="flex gap-4">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FiTwitter className="w-7 h-7 hover:text-indigo-300 transition" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FiFacebook className="w-7 h-7 hover:text-indigo-300 transition" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;