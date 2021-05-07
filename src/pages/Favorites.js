import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function Favorites() {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/loadFavorites')
            .then(res => res.json())
            .then(data => {
                setRecipes(data)
            })
    }, [])

    console.log(recipes)

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

export default Favorites;