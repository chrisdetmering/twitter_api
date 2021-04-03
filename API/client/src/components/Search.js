import axios from 'axios';
import { React, useState } from 'react';
import DisplayCard from './DisplayCard';
import './Style.css'

function Search() {
    const [search, setSearch] = useState('');
    const [twitterData, setTwitterData] = useState([]);

    const handleChange = event => setSearch(event.target.value);

    const searchQueryInput = event => {
        event.preventDefault();
        getTwitterData();
    }

    const getTwitterData = async () => {
        axios.get(`/api/Tweets/search/${search}`)
            .then(res => {
                const tweets = res.data.statuses;
                setTwitterData(tweets);
                console.log(tweets);
            })
            .catch(err => {
                console.log(err);
            })

    }

    return (
        <div>
            <h1 id="search-header">Search for your favourite Tweets</h1>
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
                <DisplayCard
                    twitterData={twitterData}
                />
            </div>
        </div>
    );
}

export default Search