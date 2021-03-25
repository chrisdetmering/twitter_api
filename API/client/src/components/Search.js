import React from 'react';
import './Search.css'

function Search() {
    return (
        <div>
            <h1>Search for your favourite Tweeters</h1>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="input-group col-6">
                        <input type="text" className="form-control" placeholder="Twitter username" aria-label="username" aria-describedby="basic-addon2"></input>
                        <button className="input-group-text">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search