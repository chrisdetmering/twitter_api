import React from 'react';
import ReactPlayer from "react-player"

function DisplayCard({ twitterData }) {

    function displayImg(item) {
        if (item.extended_entities !== null && item.extended_entities.media[0].video_info !== null) {
            return (
                <div>
                    <ReactPlayer
                        controls="true"
                        className="body-video"
                        url={item.extended_entities.media[0].video_info.variants[2].url}
                    />
                </div>
            )
        } else if (item.entities.media) {
            return (
                <a href={item.entities.media[0].media_url_https}>
                    <img src={item.entities.media[0].media_url_https} className="body-img card-img" alt="..."></img>
                </a>
            )
        }
    };

    return twitterData.map(item => {
        return (
            <div className="row justify-content-center" key={item.id}>
                <div className="card" id="search-card">
                    <div className="card-body">
                        <img src={item.user.profile_image_url_https} className="profile-img" alt="..."></img>
                        <h5 className="card-title mt-3">{item.user.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">@{item.user.screen_name}</h6>
                        <p className="card-text">{item.full_text}</p>
                        {displayImg(item)}
                        <p className="counts">Retweets: {item.retweet_count} Likes: {item.favorite_count}</p>
                    </div>
                </div>
            </div>
        )
    });
}

export default DisplayCard