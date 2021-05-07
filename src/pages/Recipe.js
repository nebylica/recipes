import {useParams} from "react-router-dom";
import {useEffect, useState} from 'react';
import Recipecard from "./Recipecard";
import Reviews from "./Reviews";


function Recipe() {

    const {id} = useParams();
    const [recipe, setRecipe] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:8000/recipe/${id}`)
            .then(res => res.json())
            .then(data => {
                setRecipe(data.recipe)
            })
    }, [])

    return (
        !!recipe && (
            <div className='d-flex-center-start'>
                <Recipecard recipe={recipe} favorite={true}/>
                <Reviews />
            </div>
        )

    );
}

export default Recipe;