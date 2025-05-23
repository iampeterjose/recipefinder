export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

export interface RecipeResponse {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
}

export const getAllRecipes = async (): Promise<RecipeResponse> => {
  const response = await fetch('https://dummyjson.com/recipes');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data: RecipeResponse = await response.json();
  return data;
};

export const getTopRecipes = async (): Promise<RecipeResponse> => {
  const response = await fetch('https://dummyjson.com/recipes');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data: RecipeResponse = await response.json();

  return {
    ...data,
    recipes: data.recipes.filter((recipe) => recipe.rating >= 4.9),
  };
};

export const getRecipeById = async (id  : number): Promise<Recipe | null> => {
  const response = await fetch(`https://dummyjson.com/recipes/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data: Recipe = await response.json();
  return data;
}