import React from 'react';

function Search() {
    return (
        <div>
            <h1>Search for your favourite Tweeters</h1>
            <div className="container">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Twitter username" aria-label="username" aria-describedby="basic-addon2"></input>
                    <span class="input-group-text" id="basic-addon2">Search</span>
                </div>
            </div>
        </div>
    );
}

export default Search