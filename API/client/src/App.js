import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Random from './components/Random';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/search">Search</Link></li>
                        <li><Link to="/random">Random</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/search">
                        <Search />
                    </Route>
                    <Route path="/random">
                        <Random />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>);
}

export default App