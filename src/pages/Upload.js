import {useState, useRef} from 'react'
import Recipecard from "./Recipecard";

function Upload() {

    const [recipe, setRecipe] = useState({
        title: '',
        image: [],
        ingredients: [],
        prep: []
    })
    const [errorMsg, setErrorMsg] = useState('')

    const title = useRef()
    const image = useRef()
    const ingredient = useRef()
    const amount = useRef()
    const prep = useRef()


    function setTitle() {
        const name = title.current.value
        setRecipe(recipe => ({
            ...recipe,
            title: name
        }))
    }

    function addImage() {
        let value = image.current.value

        const currentArr = recipe.image
        currentArr.push(value)

        setRecipe(recipe => ({
            ...recipe,
            image: currentArr
        }))

        image.current.value = null
    }

    function addIngredient() {
        let value = ingredient.current.value
        let value2 = amount.current.value

        const currentArr = recipe.ingredients
        currentArr.push({ingredient: value, amount: value2})

        setRecipe(recipe => ({
            ...recipe,
            ingredients: currentArr
        }))

        ingredient.current.value = null
        amount.current.value = null
    }

    function addPrep() {
        let value = prep.current.value

        const currentArr = recipe.prep
        currentArr.push(value)

        setRecipe(recipe => ({
            ...recipe,
            prep: currentArr
        }))

        prep.current.value = null
    }

    function submit() {
        console.log(recipe)
        fetch('http://localhost:8000/upload', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(recipe)
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setErrorMsg(data.msg)
                }
                title.current.value = null

                window.location.href = '/'
            })
    }

    return (

        <div className='d-flex-center'>
            <div className="uploadCard d-flex-center">
                <h3>Upload your recipe!</h3>

                <input ref={title} type='text' placeholder='Write recipe title' onChange={setTitle}/>

                <input ref={image} type='text' placeholder='Insert image url'/>
                <div className='btn' onClick={addImage}>Add image</div>

                <input ref={ingredient} type='text' placeholder='Write ingredient'/>
                <input ref={amount} type='text' placeholder='How many (g, ml, sp)'/>
                <div className='btn' onClick={addIngredient}>Add ingredient</div>

                <input ref={prep} type='text' placeholder='Write prep directions by step'/>
                <div className='btn' onClick={addPrep}>Add direction</div>

                <small style={{color: 'darkred'}}>{errorMsg}</small>
                <div onClick={submit} className='submit'>SUBMIT</div>
            </div>

            <Recipecard recipe={recipe} favorite={false}/>
        </div>
    );
}

export default Upload;