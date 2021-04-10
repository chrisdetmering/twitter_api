import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
    return (
        <div className="container home-container">
            <div className="row">
                <div className="jumbotron home-title">
                    <h1 className="display-4" id="home-header">Welcome to Happy-Tweet!</h1>
                    <p className="lead">A Twitter API showcase app.</p>
                    <hr className="my-4"></hr>
                    <p>This full-stack web application has been built in C# with ASP.NET Core, React JS, styled using Bootstrap 4 and deployed on Azure.
                    Come on in and search for tweets by keyword or username, or get random tweets that will entice the soul and excite the mind.
                    A capstone project for the Software Developer Mastermind program, where students learn by building projects, it is meant to
                    push students out of their comfort zone.
                </p>
                </div>
            </div>
            <Router>
                <div className="row nav-buttons">
                    <div className="col-3">
                        <button className="btn btn-info">Search Twitter</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-info">Random Tweets</button>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default Home