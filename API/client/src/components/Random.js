import axios from 'axios';
import React, { useState, useEffect } from 'react';
import TweetModal from './TweetModal';

function Random() {
    const [twitterUsers] = useState(["dalailama", "nasa", "funnyordie", "TheOnion", "mental_floss"]);
    const [twitterUserData, setTwitterUserData] = useState([]);
    const [randomTweet, setRandomTweet] = useState([]);

    const getTwitterUserData = async () => {
        twitterUsers.forEach(item => {
            axios.get(`api/Tweets/user/${item}`)
                .then(res => {
                    addNewUserData(res.data);
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
                })
        })
    }

    const addNewUserData = (data) => {
        setTwitterUserData(prevState =>
            [...prevState, data]
        );
    }

    const getRandomTweet = async (user) => {
        axios.get(`/api/Tweets/random/${user}`)
            .then(res => {
                setRandomTweet(res.data.statuses);
                console.log(res.data.statuses);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getTwitterUserData(twitterUsers);
    }, []);

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