import React from 'react';
import {Link} from "react-router-dom";

function RenderAllRecipes({recipes}) {
    return (
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
    );
}

export default RenderAllRecipes;