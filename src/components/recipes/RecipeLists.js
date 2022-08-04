import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const RecipeList = () => {
    const [recipes, setRecipes] = useState([])
   
    const navigate = useNavigate();
  
    const localRecipeUser = localStorage.getItem("recipe_user")
    const recipeUserObject = JSON.parse(localRecipeUser)
//grabs all of my recipes from API
    useEffect(
        () => {
            fetch(' http://localhost:8088/recipes')
                .then(response => response.json())
                .then((recipesArray) => {
                    setRecipes(recipesArray)

                })
        },
        [] 
    )
    return <>
        {
            
        }
        <h2>Try out these delicious recipes!</h2>

        <article className="recipe">
            {
            recipes.map(
                    (recipe) => {
                        return <section key={recipe.id} className="recipe">
                            <header>{recipe.foodName}</header>
                            <p>{recipe.description}</p>
                            <button onClick={() => navigate(`/recipe/fullrecipe/${recipe.id}`)}>  Full Recipe</button>
                        </section>
                 }
                )
            }
        </article>
    </>    

                       
}

