import {useEffect, useState} from "react";
import RenderAllRecipes from "../components/RenderAllRecipes";

function Favorites() {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/loadFavorites')
            .then(res => res.json())
            .then(data => {
                setRecipes(data)
            })
    }, [])

    return (
        <RenderAllRecipes recipes={recipes}/>
    );
}

export default Favorites;