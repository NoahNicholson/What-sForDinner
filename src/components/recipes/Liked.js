import { useEffect, useState } from "react"

const localRecipeUser = localStorage.getItem("recipe_user")
const recipeUserObject = JSON.parse(localRecipeUser)

export const RecipeLikes = ({ searchTermState }) => {
    const [likes, setLikes] = useState([])
    useEffect(
        () => {
            fetch(' http://localhost:8088/likedRecipes?_expand=recipe')
                .then(response => response.json())
                .then((likesArray) => {
                    setLikes(likesArray)

                })
        },
        [] 
    )
    
    
    return <>
        
        <h2>Liked  Recipes</h2>

        <article className="recipe">
            {
            likes.map(
                    (like) => {
                        return <section key={like.id} className="recipe">
                            <header>{like.recipe.foodName}</header>
                            <p>{like.recipe.description}</p>
                            <p>cook time: {like.recipe.cookTime}.</p>
                            <p>prep time:{like.recipe.prepTime}.</p>
                            <p>ingredients: {like.recipe.ingredients}.</p>
                            <p>instructions: {like.recipe.instructions}.</p>
                            <footer> {like.recipe.foodType}</footer>
                            <button onClick={()=>{deleteRecipe(like.id)}}>  Un-Save</button>
                        </section>
                 }
                )
            }
        </article>
    </>    
    
}
const deleteRecipe = (recipeId) => {
    fetch(`http://localhost:8088/likedRecipes/${recipeId}`, {
        method: "DELETE",
        
    }) 
    window.location.reload()
}