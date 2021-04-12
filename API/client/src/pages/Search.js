import axios from 'axios';
import { React, useState } from 'react';
import TweetCard from '../components/TweetCard';
import '../styles/Search.css';

function Search() {
    const [search, setSearch] = useState('');
    const [twitterData, setTwitterData] = useState([]);
    const [searchType, setSearchType] = useState("username");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = event => setSearch(event.target.value);

    const setSearchTypeValue = (event) => setSearchType(event.target.value);

    const searchQueryInput = event => {
        event.preventDefault();
        if (search === "") return;
        getTwitterData();
    }

    const getTwitterData = async () => {
        axios.get(`/api/Tweets/${searchType}/${search}`)
            .then(response => {
                handleTwitterData(response)
            })
            .catch(error => {
                handleTwitterError(error)
            })
    }

    const handleTwitterData = response => {
        searchType === "username" ? setTwitterData(response.data) : setTwitterData(response.data.statuses);
        setErrorMessage("");
    }

    const handleTwitterError = error => {
        setErrorMessage(error.response.data)
        setTwitterData([])
    }

    return (
        <div>
            <h1 id="search-header">Search Twitter</h1>
            <form>
                <div className="container search-input">
                    <div className="row justify-content-center">
                        <div className="input-group col-12">
                            <input type="text"
                                className="form-control"
                                value={search}
                                onChange={handleChange}
                                placeholder="Twitter search"
                                aria-label="username"
                                aria-describedby="basic-addon2"></input>
                            <select
                                className="search-type-selector"
                                onChange={setSearchTypeValue}>
                                <option value={"username"}>User</option>
                                <option value={"keyword"}>Keyword</option>
                            </select>
                            <button className="btn btn-info"
                                type="submit"
                                onClick={searchQueryInput}>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            <div className="error-message">
                <h5>{errorMessage}</h5>
            </div>
            <div className="container card-container">
                <div>
                    <TweetCard
                        twitterData={twitterData}
                    />
                </div>
            </div>
        </div>
    );
}

export default Search