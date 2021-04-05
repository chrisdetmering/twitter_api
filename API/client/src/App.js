import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Random from './components/Random';

function App() {
    return (
        <Router>
            <div>
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <span className="navbar-brand" href="/">Happy-Tweet</span>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/search">Search</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/random">Random</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
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