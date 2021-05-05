import React from 'react';

function Recipecard({recipe}) {

    return (
        <div className="uploadCard d-flex-center">
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

export default Recipecard;