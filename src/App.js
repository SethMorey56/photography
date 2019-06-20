import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import './App.css';
import Homepage from './components/navigation/Homepage';
import About from './components/navigation/About';
import Gallery from './components/navigation/Gallery';

const App = () => {
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Homepage}></Route>
                    <Route path="/About" exact component={About}></Route>
                    <Route path="/Gallery" exact component={Gallery}></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;