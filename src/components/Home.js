import {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

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
        <div className='d-flex-wrap'>
            {recipes.map((item, i) => (
                <Link to={'/recipe/'+item._id}
                      key={i}
                      className='recipeCard'
                >
                    <img src={item.image[0]} alt=""/>
                    <h3>{item.title}</h3>
                </Link>
            ))}

        </div>
    );
}

export default Home;