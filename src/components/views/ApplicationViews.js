import { Outlet, Route, Routes } from "react-router-dom"
import { RecipeLikes } from "../recipes/Liked"
import { RecipeList } from "../recipes/RecipeLists"


export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>What's For Dinner?</h1>
                   
                    <Outlet />
                </>
         }>
             <Route path="recipes" element={ <RecipeList /> } />
			 <Route path="/liked" element={ <RecipeLikes /> } />
            </Route>
        </Routes>
    )
}