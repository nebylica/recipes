import {useState, useRef, useEffect} from 'react';
import {useParams} from "react-router-dom";

function Reviews() {

    const {id} = useParams();
    const [review, setReview] = useState()
    const [reviewFromRecipe, setReviewFromRecipe] = useState()
    const [errorMsg, setErrorMsg] = useState('')
    const email = useRef()
    const rate = useRef()
    const text = useRef()

    function addReview() {

        const emailValue = email.current.value
        const rateValue = rate.current.value
        const textValue = text.current.value

        setReview(review => ({
            ...review,
            email: emailValue,
            rate: rateValue,
            review: textValue
        }))

        email.current.value = ''
        text.current.value = ''
    }

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


    function star(i) {
        let arr = []
        for (let j = 0; j < i; j++) {
            arr.push(<i className="fas fa-star"></i>)
        }
        return (
            <div>
                {arr.map(item => item)}
            </div>
        )
    }

    return (
        <div className="uploadCard d-flex-wrap">

            {
                reviewFromRecipe !== undefined && (
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
                )
            }


            <div className='d-flex-center column'>
                <h3>Write your review!</h3>
                <input ref={email} type="email" placeholder='Write your email'/>
                <div className='d-flex-center'>
                    <label htmlFor="vol">Rate recipe from 1 to 5</label>
                    <input ref={rate} type="range" id="vol" name="vol" min="1" max="5"/>
                </div>
                <textarea ref={text} cols="30" rows="3" placeholder='Write your review'/>
                <div className='btn' onClick={addReview}>Add review</div>
                <small style={{color: 'darkred'}}>{errorMsg}</small>
            </div>
        </div>
    );
}

export default Reviews;