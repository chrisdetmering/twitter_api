import React from 'react';
import ReactPlayer from 'react-player';

function DisplayCard({ twitterData }) {

    const displayMedia = item => {
        switch (tweetMediaType(item)) {
            case "video":
                const videoQuality = findVideoQuality(item.extended_entities.media[0].video_info.variants)
                return displayTweetVideo(item.extended_entities.media[0], videoQuality);

            case "animated_gif":
                return displayTweetVideo(item.extended_entities.media[0], 0);

            case "photo":
                return displayTweetPhoto(item.entities.media[0])

            default:
                return;
        }
    };

    const tweetMediaType = item => {
        if (item.extended_entities) return item.extended_entities.media[0].type;
    }

    const findVideoQuality = media => {
        const videoQuality = "720";
        for (let i = 0; i < media.length; i++) {
            if (media[i].url.includes(videoQuality))
                return i;
        }
        return 0;
    }

    const displayTweetVideo = (media, index) => {
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

    const displayTweetPhoto = media => {
        return (
            <a href={media.media_url_https} target="_blank" rel="noopener noreferrer">
                <img src={media.media_url_https} className="body-img card-img" alt="..."></img>
            </a>
        );
    }

    const formatCounts = item => {
        let formattedCounts = 0;
        if (item > 999) {
            formattedCounts = item / 1000
            return ` ${formattedCounts.toFixed(1)}K`
        }
        else
            return ` ${item}`;
    }

    const formatFullText = (item, textRange, urls) => {
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

    const formatDate = item => {
        let formattedDate = item.slice(4, 10);
        return formattedDate.indexOf("0") === 4 ? formattedDate.split("0").join("") : formattedDate;
    }

    const checkVerifiedUser = user => {
        return user.verified
            ? <svg className="twitter-verified"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24">
                <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5c-1.51 0-2.816.917-3.437 2.25-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
            </svg>
            : null;
    }

    return twitterData.map(item => {
        return (
            <div className="container" key={item.id}>
                <div className="row justify-content-center">
                    <div className="card" id="search-card">
                        <div className="card-name">
                            <img src={item.user.profile_image_url_https} className="profile-img" alt="..."></img>
                            <h5 className="card-title"><b>{item.user.name}</b></h5><span>{checkVerifiedUser(item.user)}</span>
                            <h6 className="card-subtitle mt-0 text-muted">@{item.user.screen_name} • {formatDate(item.created_at)}</h6>
                        </div>
                        <div className="card-body">
                            {formatFullText(item.full_text, item.display_text_range, item.entities.urls)}
                            {displayMedia(item)}
                            <div className="counts row">
                                <span className="retweet-count">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-arrow-repeat"
                                        viewBox="0 0 16 16">
                                        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                                        <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
                                    </svg>
                                    {formatCounts(item.retweet_count)}
                                </span>
                                <span className="favorite-count">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-heart"
                                        viewBox="0 0 16 16">
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