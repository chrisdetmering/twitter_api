import React from 'react';
import Search from './Search';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function Home() {
    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4">Welcome to Twit-stravaganza!</h1>
                <p className="lead">A twitter API showcase app.</p>
                <hr className="my-4"></hr>
                <p>Come on in and search for your favourite tweeters or get random tweets that will entice the soul and excite the mind.</p>
                <p className="lead">
                    <Router>
                        <Link className="btn btn-primary btn-lg" role="button" to="/search">Enter</Link>
                        <Switch>
                            <Route path="/search">
                                <Search />
                            </Route>
                        </Switch>
                    </Router>
                </p>
            </div>
        </div>
    );
}

export default Home