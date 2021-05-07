import {useState} from 'react';
import {useHistory} from 'react-router-dom'

function RecipeCard({recipe, favorite}) {
    const history = useHistory()
    const [added, setAdded] = useState(recipe.addedToFavorites)

    function setFavorite() {
        fetch(`http://localhost:8000/favorite/${recipe._id}`)
            .then(res => res.json())
            .then(data => {
                return !data.error ? setAdded(!added) : null
            })
    }
    function deleteRecipe() {
        fetch(`http://localhost:8000/deleteRecipe/${recipe._id}`)
            .then(res => res.json())
            .then(data => {
                return !data.error ? history.push('/') : null
            })
    }

    return (
        <div className="uploadCard d-flex-center">

            {favorite ?
                <div className='fav'>
                    <div onClick={setFavorite}>
                        {
                        !added ?
                            <i className="far fa-heart"> </i> :
                            <i className="fas fa-heart"> </i>
                        }
                    </div>
                    <div onClick={deleteRecipe}>
                        <i className="fas fa-trash-alt"> </i>
                    </div>
                </div>
                :
                <h3>Create your recipe!</h3>
            }

            <h3>{recipe.title}</h3>
            <img className='imageMain' src={recipe.image[0]} alt=""/>
            <div className='images'>
                {recipe.image.map((item, i) => i !== 0 ? <img src={item} alt="" key={i}/> : null)}
            </div>
            <ul>
                {recipe.ingredients.map((item, i) => <li key={i}>{item.ingredient}, {item.amount}</li>)}
            </ul>
            <ol>
                {recipe.prep.map((item, i) => <li key={i}>{item}</li>)}
            </ol>
        </div>
    );
}

export default RecipeCard;