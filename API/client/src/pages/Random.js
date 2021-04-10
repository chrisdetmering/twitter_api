import axios from 'axios';
import React, { useState, useEffect } from 'react';
import TweetModal from '../components/TweetModal';
import TwitterUserCard from '../components/TwitterUserCard';
import '../styles/Random.css';

function Random() {
    const [twitterUsers] = useState(["nhl", "nasa", "ConanObrien", "TheOnion", "mental_floss"]);
    const [twitterUserData, setTwitterUserData] = useState([]);
    const [randomTweet, setRandomTweet] = useState([]);

    useEffect(() => {
        getTwitterUserData(twitterUsers);
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                setRandomTweet([res.data.statuses[index]]);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <h1 id="random-header">Get random Tweets</h1>
            <div className="container twitter-users">
                <TwitterUserCard
                    twitterUserData={twitterUserData}
                    getRandomTweet={getRandomTweet}
                />
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