import React from 'react';
import ReactPlayer from 'react-player';
import { ReactComponent as VerifiedBadge } from '../images/Twitter_Verified_Badge.svg';
import { ReactComponent as RetweetIcon } from '../images/Retweet.svg';
import { ReactComponent as LikeIcon } from '../images/Like.svg';
import '../styles/TweetCard.css';

function TweetCard({ twitterData }) {

    const displayMedia = twitterData => {
        switch (tweetMediaType(twitterData)) {

            case "video":
                const media = twitterData.extended_entities.media[0];
                const variants = media.video_info.variants;
                const videoQuality = findVideoQuality(variants);
                return displayTweetVideo(variants, videoQuality);

            case "animated_gif":
                const gif = twitterData.extended_entities.media[0].video_info.variants;
                return displayTweetVideo(gif, 0);

            case "photo":
                const imageUrl = twitterData.entities.media[0].media_url_https;
                return displayTweetPhoto(imageUrl);

            default:
                return;
        }
    };

    const tweetMediaType = twitterData => {
        if (twitterData.extended_entities) return twitterData.extended_entities.media[0].type;
    }

    const findVideoQuality = media => {
        const videoQuality = "720";
        for (let i = 0; i < media.length; i++) {
            if (media[i].url.includes(videoQuality))
                return i;
        }
        return 0;
    }

    const displayTweetVideo = (variants, index) => {
        return (
            <div>
                <ReactPlayer
                    controls={true}
                    className="body-video"
                    url={variants[index].url}
                />
            </div>
        );
    }

    const displayTweetPhoto = imageUrl => {
        return (
            <a href={imageUrl} target="_blank" rel="noopener noreferrer">
                <img src={imageUrl} className="body-img card-img" alt="..."></img>
            </a>
        );
    }

    const formatCounts = twitterData => {
        let formattedCounts = 0;
        if (twitterData > 999) {
            formattedCounts = twitterData / 1000
            return ` ${formattedCounts.toFixed(1)}K`
        }
        else
            return ` ${twitterData}`;
    }

    const formatFullText = (twitterData, textRange, urls) => {
        if (urls.length < 1) {
            return (
                <div>
                    <p className="card-text">
                        {twitterData.slice(textRange[0], textRange[1])}
                    </p>
                </div>
            )
        } else {
            return (
                <div>
                    <p className="card-text">
                        {twitterData.slice(textRange[0], urls[0].indices[0])}
                        <a href={urls[0].url} target="_blank" rel="noopener noreferrer">{urls[0].display_url}</a>
                    </p>
                </div>
            )
        }
    }

    const formatDate = twitterData => {
        let formattedDate = twitterData.slice(4, 10);
        return formattedDate.indexOf("0") === 4 ? formattedDate.split("0").join("") : formattedDate;
    }

    const checkVerifiedUser = user => {
        return user.verified ? <VerifiedBadge className="twitter-verified" /> : null;
    }

    console.log(twitterData);

    if (!twitterData.id) {
        return null; 
    }

    return (
        <div className="container" key={twitterData.id}>
            <div className="row justify-content-center">
                <div className="card" id="search-card">
                    <div className="card-name">
                        <img src={twitterData.user.profile_image_url_https} className="profile-img" alt="..."></img>
                        <h5 className="card-title"><b>{twitterData.user.name}</b></h5><span>{checkVerifiedUser(twitterData.user)}</span>
                        <h6 className="card-subtitle mt-0 text-muted">@{twitterData.user.screen_name} • {formatDate(twitterData.created_at)}</h6>
                    </div>
                    <div className="card-body">
                        {formatFullText(twitterData.full_text, twitterData.display_text_range, twitterData.entities.urls)}
                        {displayMedia(twitterData)}
                        <div className="counts row">
                            <span className="retweet-count">
                                <RetweetIcon />
                                {formatCounts(twitterData.retweet_count)}
                            </span>
                            <span className="favorite-count">
                                <LikeIcon />
                                {formatCounts(twitterData.favorite_count)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default TweetCard