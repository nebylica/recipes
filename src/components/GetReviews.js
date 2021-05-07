import React from 'react';

function GetReviews({reviewFromRecipe}) {

    function star(i) {
        let arr = []
        for (let j = 0; j < i; j++) {
            arr.push(<i key={j} className="fas fa-star"> </i>)
        }
        return (
            <div>
                {arr.map(item => item)}
            </div>
        )
    }

    return (
        <div>
            {reviewFromRecipe.map((item, i) => (
                <div key={i}>
                    <h4>{item.email}</h4>
                    <div>
                        {star(item.rate)}
                    </div>
                    <p>{item.review}</p>
                </div>
            ))}
        </div>
    );
}

export default GetReviews;