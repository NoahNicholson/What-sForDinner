import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card, CardBody } from "reactstrap"

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
  
    
      
   
            <div 
            className="d-grid gap-5"
            style={{gridTemplateColumns: " repeat(auto-fit, 28rem"}}
            >
            {
            recipes.map(
                    (recipe) => {
                        
                        return <CardBody key={recipe.id} className="recipe">
                            <pre>

                                
                            </pre>
                            <img className="image" src={recipe.img}  />
                            <h5><b>{recipe.foodName}</b></h5>
                            <h8>{recipe.description}</h8>
                            <pre>

                                
                            </pre>
                            <button className="button"
                            style={{
                                backgroundColor: 'salmon'
                        
                            }}
                             onClick={() => navigate(`/recipe/fullrecipe/${recipe.id}`)}>view</button>
                        
                        </CardBody>
                        
                 }
                )
            }
            </div>
         
        
        
    </>    

                       
}

