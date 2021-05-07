import {useRef, useState} from 'react';

function FindForm({getRecipes}) {

    const prod = useRef()
    const [products, setProducts] = useState([])

    function addProduct() {
        const product = prod.current.value
        setProducts([...products, product])
        prod.current.value = ''
    }

    function findRecipe() {
        fetch('http://localhost:8000/findRecipe', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                getRecipes(data)
            })
    }


    return (
        <div className="uploadCard d-flex-center">
            <h3>Find recipe!</h3>
            <p>Write down products that you have in your fridge. </p>

            <input ref={prod} type='text' placeholder='Write product by one'/>
            <div onClick={addProduct} className='btn'>Add product</div>

            <h3>Your products:</h3>
            <ul>
                {products.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <small style={{color: 'darkred'}}>{}</small>
            <div onClick={findRecipe} className='submit'>SUBMIT</div>
        </div>
    );
}

export default FindForm;