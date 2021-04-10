import React from 'react';
import '../styles/TwitterUserCard.css';

function TwitterUserCard({ twitterUserData, getRandomTweet }) {

    return twitterUserData.map(item => {
        return (
            <div key={item.id}>
                <div className="card random-card">
                    <img src={item.profile_image_url_https} className="card-user-img" alt="profile"></img>
                    <div className="card-body random-body">
                        <p className="card-text">@{item.screen_name}</p>
                        <button
                            className="btn btn-info ml-1"
                            data-toggle="modal"
                            data-target="#tweet-modal"
                            onClick={() => getRandomTweet(item.screen_name)}>
                            Random Tweet
                            </button>
                    </div>
                </div>
            </div>
        )
    });
}

export default TwitterUserCard