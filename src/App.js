import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {useState} from "react"
import Upload from "./components/Upload";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Recipe from "./components/Recipe";


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
                </Switch>
            </div>
        </Router>
    );
}

export default App;
