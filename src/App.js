import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Upload from "./pages/Upload";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Recipe from "./pages/Recipe";
import Favorites from "./pages/Favorites";
import FindRecipe from "./pages/FindRecipe";


function App() {

    return (
        <Router>
            <div className='bg'>
                <Navbar/>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/upload">
                        <Upload />
                    </Route>
                    <Route path="/recipe/:id">
                        <Recipe/>
                    </Route>
                    <Route path="/favorites">
                        <Favorites/>
                    </Route>
                    <Route path="/find">
                        <FindRecipe/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
