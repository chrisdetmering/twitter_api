import React from 'react';
import ReactPlayer from 'react-player';
import { ReactComponent as VerifiedBadge } from '../images/Twitter_Verified_Badge.svg';
import { ReactComponent as RetweetIcon } from '../images/Retweet.svg';
import { ReactComponent as LikeIcon } from '../images/Like.svg';
import '../styles/TweetCard.css';

function TweetCard({ twitterData }) {

    const displayMedia = item => {
        switch (tweetMediaType(item)) {

            case "video":
                const media = item.extended_entities.media[0];
                const variants = media.video_info.variants;
                const videoQuality = findVideoQuality(variants);
                return displayTweetVideo(variants, videoQuality);

            case "animated_gif":
                return displayTweetVideo(media, 0);

            case "photo":
                const imageUrl = item.entities.media[0].media_url_https;
                return displayTweetPhoto(imageUrl);

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
            ? <VerifiedBadge className="twitter-verified" />
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
                                    <RetweetIcon />
                                    {formatCounts(item.retweet_count)}
                                </span>
                                <span className="favorite-count">
                                    <LikeIcon />
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

export default TweetCard