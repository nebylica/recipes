import FindForm from "../components/FindForm";
import {useState} from 'react'
import RenderAllRecipes from "../components/RenderAllRecipes";


function FindRecipe() {

    const [recipes, setRecipes] = useState([])
    function getRecipes(rec) {
        setRecipes(rec)
    }

    return (
        <div className='d-flex-center'>

            <FindForm getRecipes={getRecipes}/>
            !!recipes && <RenderAllRecipes recipes={recipes}/>

        </div>
    );
}

export default FindRecipe;