import { React, useState } from 'react';
import './Style.css'

function Search() {
    const [search, setSearch] = useState('');

    const handleChange = event => setSearch(event.target.value);

    const searchQueryInput = event => {
        event.preventDefault();
        console.log(search);
    }

    return (
        <div>
            <h1 id="search-header">Search for your favourite Tweeters</h1>
            <form>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="input-group col-6">
                            <input type="text"
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Twitter username"
                                aria-label="username"
                                aria-describedby="basic-addon2"></input>
                            <button className="input-group-text"
                                type="submit"
                                onClick={searchQueryInput}>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="card-link">Card link</a>
                            <a href="/" className="card-link">Another link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search