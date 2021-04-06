import axios from 'axios';
import React, { useState, useEffect } from 'react';
import TweetModal from './TweetModal';

function Random() {
    const [twitterUsers] = useState(["nhl", "nasa", "ConanObrien", "TheOnion", "mental_floss"]);
    const [twitterUserData, setTwitterUserData] = useState([]);
    const [randomTweet, setRandomTweet] = useState([]);
    
    useEffect(() => {
        getTwitterUserData(twitterUsers);
    }, []);

    const getTwitterUserData = async () => {
        twitterUsers.forEach(item => {
            axios.get(`api/Tweets/user/${item}`)
                .then(res => {
                    addUserData(res.data);
                })
                .catch(err => {
                    console.log(err);
                })
        })
    }

    const addUserData = (data) => {
        setTwitterUserData(prevState =>
            [...prevState, data]
        );
    }

    const getRandomTweet = async (user) => {
        setRandomTweet([]);
        axios.get(`/api/Tweets/random/${user}`)
            .then(res => {
                const index = Math.floor(Math.random() * res.data.statuses.length);
                setRandomTweet([res.data.statuses[index]])
            })
            .catch(err => {
                console.log(err);
            })
    }

    const tweetUser = twitterUserData.map(item => {
        return (
            <div key={item.id}>
                <div className="card random-card">
                    <img src={item.profile_image_url_https} className="card-user-img" alt="profile"></img>
                    <div className="card-body random-body">
                        <p className="card-text">@{item.screen_name}</p>
                        <button className="btn btn-primary justify-content-center" data-toggle="modal" data-target="#tweet-modal" onClick={() => getRandomTweet(item.screen_name)}>Random Tweet</button>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div>
            <h1 id="random-header">Get random Tweets</h1>
            <div className="container twitter-users">
                {tweetUser}
            </div>
            <div className="modal" id="tweet-modal" tabIndex="-1">
                <TweetModal
                    twitterData={randomTweet}
                />
            </div>
        </div>
    );
}

export default Random