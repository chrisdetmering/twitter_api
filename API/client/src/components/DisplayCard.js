import React from 'react';
import ReactPlayer from 'react-player';

function DisplayCard({ twitterData }) {

    function displayMedia(item) {
        switch (tweetMediaType(item)) {
            case "video":
                return displayTweetVideo(item.extended_entities.media[0], 1);

            case "animated_gif":
                return displayTweetVideo(item.extended_entities.media[0], 0);

            case "photo":
                return displayTweetPhoto(item.entities.media[0])

            default:
                return;
        }
    };

    function tweetMediaType(item) {
        if (item.extended_entities) return item.extended_entities.media[0].type;
    }

    function displayTweetVideo(media, index) {
        return (
            <div>
                <ReactPlayer
                    controls={true}
                    className="body-video"
                    url={media.video_info.variants[index].url}
                />
            </div>
        );
    }

    function displayTweetPhoto(media) {
        return (
            <a href={media.media_url_https} target="_blank" rel="noopener noreferrer">
                <img src={media.media_url_https} className="body-img card-img" alt="..."></img>
            </a>
        );
    }

    function formatCounts(item) {
        let formattedCounts = 0;
        if (item > 999) {
            formattedCounts = item / 1000
            return ` ${formattedCounts.toFixed(1)}K`
        }
        else
            return ` ${item}`;
    }

    function formatFullText(item, textRange, urls) {
        if (urls.length < 1) {
            return (
                <div>
                    <p className="card-text">
                        {item.slice(textRange[0], textRange[1])}
                    </p>
                </div>
            )
        } else {
            return (
                <div>
                    <p className="card-text">
                        {item.slice(textRange[0], urls[0].indices[0])}
                        <a href={urls[0].url} target="_blank" rel="noopener noreferrer">{urls[0].display_url}</a>
                    </p>
                </div>
            )
        }
    }

    function formatDate(item) {
        let formattedDate = item.slice(4, 10);
        return formattedDate.indexOf("0") === 4 ? formattedDate.split("0").join("") : formattedDate;
    }
    
    return twitterData.map(item => {
        return (
            <div className="container" key={item.id}>
                <div className="row justify-content-center">
                    <div className="card" id="search-card">
                        <div className="card-name">
                            <img src={item.user.profile_image_url_https} className="profile-img" alt="..."></img>
                            <h5 className="card-title"><b>{item.user.name}</b></h5>
                            <h6 className="card-subtitle mt-0 text-muted">@{item.user.screen_name} • {formatDate(item.created_at)}</h6>
                        </div>
                        <div className="card-body">
                            {formatFullText(item.full_text, item.display_text_range, item.entities.urls)}
                            {displayMedia(item)}
                            <div className="counts row">
                                <span className="retweet-count">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-repeat" viewBox="0 0 16 16">
                                        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                                        <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
                                    </svg>
                                    {formatCounts(item.retweet_count)}
                                </span>
                                <span className="favorite-count">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                    </svg>
                                    {formatCounts(item.favorite_count)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    });
}

export default DisplayCard