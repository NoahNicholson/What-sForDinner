import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "./fullRecipe.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export const FullRecipeList = () => {
    //the recipe id number from url
    const {recipeId}= useParams()
    const [recipe, setRecipe] = useState([])
    const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
      setIsActive(true)
  }

    const localRecipeUser = localStorage.getItem("recipe_user")
    const recipeUserObject = JSON.parse(localRecipeUser)
//reoutting for browser to read

//grabs all of my recipes from API
    useEffect(
        () => {
            fetch(`http://localhost:8088/recipes/${recipeId}`)
                .then(response => response.json())
                .then((recipeObj) => {
                    setRecipe(recipeObj)

                })
        },
        [] //dependacy array
    )
    return <>
     <article  className="recipe">
        <h2>{recipe.foodName}</h2>
            <section key={recipe.id} className="recipe">
            <img className="image" src={recipe.img}  />
            <button  
              style={{
                
                backgroundColor: isActive ? 'salmon' : '',
                color: isActive ? 'white' : '',
              }}
            onClick={()=>{likeRecipe(recipe.id,recipeUserObject);handleClick()}}>  Like</button>
            <p><b>Cook time:</b>{recipe.cookTime}.</p>
            <p><b>Prep time:</b>{recipe.prepTime}.</p>
            <p><b>Ingredients:</b>{recipe.ingredients}.</p>
            <p><b>Instructions:</b>{recipe.instructions}.</p>
            </section>
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
