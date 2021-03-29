import React, { useState } from 'react';

function Random() {
    const [twitterUsers, setTwitterUsers] = useState([
        { username: "@DalaiLama", imageSrc: "" },
        { username: "@InspiringThinkn", imageSrc: "" },
        { username: "@Wendys", imageSrc: "" },
        { username: "@TheOnion", imageSrc: "" },
        { username: "@mental_floss", imageSrc: "" },
    ])

    const tweetUser = twitterUsers.map(item => {
        return <div className="col-2" key={Math.random()}>
            <div className="card" id="random-card">
                <img src="..." className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <p className="card-text">{item.username}</p>
                </div>
            </div>
        </div>
    })

    return (
        <div>
            <h1 id="random-header">Get random tweets</h1>
            <div className="container-fluid" id="twitter-users">
                <div className="row justify-content-center">
                    {tweetUser}
                </div>
            </div>
        </div>
    );
}

export default Random