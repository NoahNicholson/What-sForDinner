import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const FullRecipeList = () => {
    const {recipeId}= useParams()
    const [recipes, setRecipes] = useState([])
    

    const localRecipeUser = localStorage.getItem("recipe_user")
    const recipeUserObject = JSON.parse(localRecipeUser)
//reoutting for browser to read

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
        <h2>List of Recipes</h2>

        <article className="recipe">
         {
           recipes.map(
                    (recipe) => {
                        //changes recipe id to non string
                        if(parseInt(recipeId) === recipe.id) {

                            return <section key={recipe.id} className="recipe">
                            <header>{recipe.foodName}</header>
                            <p>{recipe.description}</p>
                            <p>cook time: {recipe.cookTime}.</p>
                            <p>prep time:{recipe.prepTime}.</p>
                            <p>ingredients: {recipe.ingredients}.</p>
                            <p>instructions: {recipe.instructions}.</p>
                            
                            <button onClick={()=>{likeRecipe(recipe.id,recipeUserObject)}}>  Save</button>
                        </section>
                        }
                 }
                )
            }
        </article>
    </>    
}
//function that sends the liked information to data base
const likeRecipe = (recipeId,user) => {
    fetch("http://localhost:8088/likedRecipes", {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({"recipeId":recipeId,"userId":user.id})
    })
}