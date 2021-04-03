import React from 'react';

function DisplayCard({ twitterData }) {

    return twitterData.map(item => {
        return (
            <div className="row justify-content-center" key={item.id}>
                <div className="card" id="search-card">
                    <div className="card-body">
                        <img src={item.user.profile_image_url_https} className="profile-img" alt="..."></img>
                        <h5 className="card-title mt-3">{item.user.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">@{item.user.screen_name}</h6>
                        <p className="card-text">{item.text}</p>
                        <p className="counts">Retweets: {item.retweet_count} Likes: {item.favorite_count}</p>
                    </div>
                </div>
            </div>
        )
    });
}

export default DisplayCard