import {Link, useLocation} from "react-router-dom";
import {useState, useEffect} from 'react'

function Navbar() {

    let path = useLocation()
    const [home, setHome] = useState('white')
    const [upload, setUpload] = useState('white')
    const [favorites, setFavorites] = useState('white')
    const [find, setFind] = useState('white')

    useEffect(() => {
        let setColor = (url, setCol) =>{
            path.pathname === url ? setCol('#bb8cd9') : setCol('white')
        }
        setColor('/', setHome)
        setColor('/upload', setUpload)
        setColor('/favorites', setFavorites)
        setColor('/find', setFind)
    }, [path])

    return (
        <div className='navbar'>
            <Link style={{color: home}} to='/'>Home</Link>
            <Link style={{color: upload}} to='/upload'>Upload your recipe</Link>
            <Link style={{color: favorites}} to='/favorites'>Favorites</Link>
            <Link style={{color: find}} to='/find'>Find Recipe</Link>
        </div>
    );
}

export default Navbar;