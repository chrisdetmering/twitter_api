import axios from 'axios';
import { React, useEffect, useState } from 'react';
import DisplayCard from '../components/DisplayCard';
import '../styles/Style.css'

function Search() {
    const [search, setSearch] = useState('');
    const [twitterData, setTwitterData] = useState([]);

    const handleChange = event => setSearch(event.target.value);

    const searchQueryInput = event => {
        event.preventDefault();
        if (search === "") return;
        getTwitterData();
    }

    const getTwitterData = async () => {
        axios.get(`/api/Tweets/search/${search}`)
            .then(res => {
                // checkTwitterResponse(res.data.statuses);
                setTwitterData(res.data.statuses);
                console.log(res.data.statuses);
            })
            .catch(err => {
                console.log(err);
            })
    }

    // useEffect(() => {
    //     const checkTwitterResponse = twitterResponse => {
    //         if (twitterResponse.length < 1) {
    //             return (
    //                 <div>
    //                     <h3>Search term not found.</h3>
    //                 </div>
    //             )
    //         } else {
    //             return (
    //                 <div className="container">
    //                     <DisplayCard
    //                         twitterData={twitterData}
    //                     />
    //                 </div>
    //             )
    //         }
    //     }
    // }, [twitterData]);

    return (
        <div>
            <h1 id="search-header">Search for your favourite Twitter user</h1>
            <form>
                <div className="container search-input">
                    <div className="row justify-content-center">
                        <div className="input-group col-6">
                            <input type="text"
                                className="form-control"
                                value={search}
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
            {/* {checkTwitterResponse(twitterData)} */}
        </div>
    );
}

export default Search