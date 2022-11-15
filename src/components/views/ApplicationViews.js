import { Outlet, Route, Routes } from "react-router-dom"
import { FullRecipeList } from "../recipes/FullRecipe"
import { RecipeLikes } from "../recipes/Liked"
import { RecipeList } from "../recipes/RecipeLists"


export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                  
                   
                    <Outlet />
                </>
         }>
             <Route path="/recipes" element={ <RecipeList /> } />
			 <Route path="/liked" element={ <RecipeLikes /> } />
             <Route path="/recipe/fullrecipe/:recipeId" element={ <FullRecipeList /> } />
            </Route>
        </Routes>
    )
}