import {useState} from 'react';
import RecipeCard from "../components/RecipeCard";
import RecipeUploadForm from "../components/RecipeUploadForm";

function Upload() {


    const [recipe, setRec] = useState({
        title: '',
        image: [],
        ingredients: [],
        prep: []
    })
    function setRecipe(rec) {
        setRec(rec)
    }

    return (

        <div className='d-flex-center'>
            <RecipeUploadForm recipe={recipe} setRecipe={setRecipe}/>
            <RecipeCard recipe={recipe} favorite={false}/>
        </div>
    );
}

export default Upload;