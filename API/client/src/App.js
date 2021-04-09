import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Random from './pages/Random';

function App() {
    return (
        <Router>
            <div>
                <div className="container-fluid">
                    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light shadow mb-5 bg-body rounded">
                        <span className="navbar-brand" href="/">
                            Happy-Tweet
                            <svg className="twitter-icon" viewBox="328 355 335 276" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A  70,  70 0 0 1 370, 523 A  70,  70 0 0 0 401, 521 A  70,  70 0 0 1 344, 455 A  70,  70 0 0 0 372, 460 A  70,  70 0 0 1 354, 370 A 195, 195 0 0 0 495, 442 A  67,  67 0 0 1 611, 380 A 117, 117 0 0 0 654, 363 A  65,  65 0 0 1 623, 401 A 117, 117 0 0 0 662, 390 A  65,  65 0 0 1 630, 425 Z" />
                            </svg>
                        </span>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav nav-links">
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