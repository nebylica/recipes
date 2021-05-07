import {useParams} from "react-router-dom";
import {useEffect, useState} from 'react';
import RecipeCard from "../components/RecipeCard";
import Reviews from "../components/Reviews";


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
                <RecipeCard recipe={recipe} favorite={true}/>
                <Reviews />
            </div>
        )

    );
}

export default Recipe;