import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Random from './components/Random';

function App() {
    return (
        <Router>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <Link class="nav-link" to="/">Home</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link class="nav-link" to="/search">Search</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/random">Random</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
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