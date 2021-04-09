import React from 'react';

function Home() {
    return (
        <div className="container home-container">
            <div className="jumbotron home-title">
                <h1 className="display-4" id="home-header">Welcome to Happy-Tweet!</h1>
                <p className="lead">A Twitter API showcase app.</p>
                <hr className="my-4"></hr>
                <p>Come on in and search for your favourite tweeters or get random tweets that will entice the soul and excite the mind.
                This full-stack web application built in C# with ASP.NET Core, React JS, and styled using Bootstrap 4. </p>

            </div>
        </div>
    );
}

export default Home