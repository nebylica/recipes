import {useEffect, useState} from 'react';
import RenderAllRecipes from "../components/RenderAllRecipes";

function Home() {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/loadRecipes')
            .then(res => res.json())
            .then(data => {
                setRecipes(data.recipes)
            })
    }, [])

    return (
        <RenderAllRecipes recipes={recipes}/>
    );
}

export default Home;