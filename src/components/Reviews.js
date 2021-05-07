import {useState, useRef, useEffect} from 'react';
import {useParams} from "react-router-dom";
import GetReviews from "./GetReviews";
import ReviewForm from "./ReviewForm";

function Reviews() {

    const {id} = useParams();
    const [review, setReview] = useState()
    const [reviewFromRecipe, setReviewFromRecipe] = useState()
    const [errorMsg, setErrorMsg] = useState('')

    useEffect(() => {
        fetch(`http://localhost:8000/review`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({review, id})
        })
            .then(res => res.json())
            .then(data => {
                data.error ? setErrorMsg(data.msg) : setReviewFromRecipe(data.recipe.reviews)

                setReview(null)
            })
    }, [review])

    function setRev(review) {
        setReview(review)
    }

    return (
        <div className="uploadCard d-flex-wrap">
            {reviewFromRecipe !== undefined && <GetReviews reviewFromRecipe={reviewFromRecipe}/>}
            <ReviewForm errorMsg={errorMsg} setRev={setRev} />
        </div>
    );
}

export default Reviews;