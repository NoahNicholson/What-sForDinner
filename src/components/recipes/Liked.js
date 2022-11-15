import { useEffect, useState } from "react"

const localRecipeUser = localStorage.getItem("recipe_user")
const recipeUserObject = JSON.parse(localRecipeUser)

export const RecipeLikes = () => {
    const [likes, setLikes] = useState([]) //setting likes to intial state 
    //watches state
    useEffect(() => {
            fetch(`http://localhost:8088/likedRecipes?_expand=recipe&userId=${recipeUserObject.id}`)
                .then(response => response.json())
                .then((likesArray) => {
                    setLikes(likesArray)

                })
        },
        [] //dependacy array
    )
//removes the singular recipe id from data base
    const deleteRecipe = (recipeId) => {
        fetch(`http://localhost:8088/likedRecipes/${recipeId}`, {
            method: "DELETE",
//re renders with database info to application
        }).then(() => {
         return fetch(`http://localhost:8088/likedRecipes?_expand=recipe&userId=${recipeUserObject.id}`)
        })
            .then(response => response.json())
            .then((likesArray) => {
                setLikes(likesArray)

            })
    }

    return <>
        <article className="recipe">
            {
                likes.map(
                    (like) => {
                        return <section key={like.id} className="recipe">\
                            <h1>Liked  Recipes</h1>
                            <pre>

                                
                            </pre>
                            <img className="image" src={like.recipe.img}  />
                            <h3><b>{like.recipe.foodName}</b></h3>
                            <p><b>cook time:</b> {like.recipe.cookTime}.</p>
                            <p><b>prep time:</b>{like.recipe.prepTime}.</p>
                            <p><b>ingredients:</b> {like.recipe.ingredients}.</p>
                            <p><b>instructions:</b> {like.recipe.instructions}.</p>
                            <button onClick={() => { deleteRecipe(like.id) }}>  Delete</button>
                        </section>
                    }
                )
            }
        </article>
    </>


}