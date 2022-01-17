import './App.css';
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import TopBar from './Components/TopBar';
import AboutUs from './Pages/About Us/AboutUs'


function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/top" >
                        <TopBar />
                    </Route>
                    <Route path="/aboutUs" component={AboutUs}></Route>
                    <Route path="/" component={Home}></Route>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
