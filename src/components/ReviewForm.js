import {useRef} from 'react';

function ReviewForm({setRev, errorMsg}) {

    const email = useRef()
    const rate = useRef()
    const text = useRef()

    function addReview() {
        const emailValue = email.current.value
        const rateValue = rate.current.value
        const textValue = text.current.value

        setRev(review => ({
            ...review,
            email: emailValue,
            rate: rateValue,
            review: textValue
        }))

        email.current.value = ''
        text.current.value = ''
    }

    return (
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
    );
}

export default ReviewForm;