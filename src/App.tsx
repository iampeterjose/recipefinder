import RecipeDetails from "./pages/RecipeDetails"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Hero from "./sections/Hero"
import RecipeList from "./sections/RecipeList"
import TopRecipes from "./sections/TopRecipes"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <>
            <Hero />
            <TopRecipes />
            <RecipeList />
            <Contact />
            <About />
          </>
        } 
      />
      <Route 
        path="/recipe/:id"
        element={<RecipeDetails />}
      />
    </Routes>
  )
}

export default App
