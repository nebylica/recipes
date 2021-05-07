import FindForm from "./FindForm";
import {useState} from 'react'
import Home from "./Home";
import {Link} from "react-router-dom";


function FindRecipe() {

    const [recipes, setRecipes] = useState([])
    function getRecipes(rec) {
        setRecipes(rec)
    }

    console.log(recipes)


    return (
        <div className='d-flex-center'>
            <FindForm getRecipes={getRecipes}/>

            !!recipes &&
                <div className='d-flex-wrap'>
                    {recipes.map((item, i) => (
                        <Link to={'/recipe/' + item._id}
                              key={i}
                              className='recipeCard'
                        >
                            <img src={item.image[0]} alt=""/>
                            <h3>{item.title}</h3>
                        </Link>
                    ))}
                </div>
        </div>
    );
}

export default FindRecipe;