import React from 'react';
import ReactPlayer from "react-player"

function DisplayCard({ twitterData }) {

    function displayImg(item) {
        if (item.extended_entities !== null && item.extended_entities.media[0].video_info !== null) {
            return (
                <div>
                    <ReactPlayer
                        controls={true}
                        className="body-video"
                        url={item.extended_entities.media[0].video_info.variants[2].url}
                    />
                </div>
            )
        } else if (item.entities.media) {
            return (
                <a href={item.entities.media[0].media_url_https} target="_blank" rel="noopener noreferrer">
                    <img src={item.entities.media[0].media_url_https} className="body-img card-img" alt="..."></img>
                </a>
            )
        }
    };

    function formatCounts(item) {
        let formattedCounts = 0;
        if (item > 999) {
            formattedCounts = item / 1000
            return `${formattedCounts.toFixed(1)}K`
        }
        else
            return item;
    }

    function formatFullText(item, textRange, urls) {
        let formattedFullText = item.slice(textRange[0], textRange[1]);
        let formattedFullTextLink = "";
        if (urls.length < 1) {
            return formattedFullText;
        } else {
            formattedFullTextLink = formattedFullText.slice(textRange[0], urls[0].indices[0])
            return (
                <div>
                    <p className="card-text">
                        {formattedFullTextLink}
                        <a href={urls[0].url} target="_blank" rel="noopener noreferrer">{urls[0].display_url}</a>
                    </p>
                </div>
            )
        }
    }

    return twitterData.map(item => {
        return (
            <div className="container" key={item.id}>
                <div className="row justify-content-center">
                    <div className="card" id="search-card">
                        <div className="card-name">
                            <img src={item.user.profile_image_url_https} className="profile-img" alt="..."></img>
                            <h5 className="card-title"><b>{item.user.name}</b></h5>
                            <h6 className="card-subtitle mt-0 text-muted">@{item.user.screen_name}</h6>
                        </div>
                        <div className="card-body">
                            {formatFullText(item.full_text, item.display_text_range, item.entities.urls)}
                            {displayImg(item)}
                            <div className="counts row">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                                    </svg>
                                    {formatCounts(item.retweet_count)}
                                </span>
                                <span>
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