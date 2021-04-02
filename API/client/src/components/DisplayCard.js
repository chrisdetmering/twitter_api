import React from 'react';

function DisplayCard({ twitterData }) {

    return twitterData.statuses.map(item => {
        return (
            <div className="row justify-content-center" key={Math.random()}>
                <div className="card" id="search-card">
                    <div className="card-body">
                        <h5 className="card-title">{item.user.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{item.user.scree_name}</h6>
                        <p className="card-text">{item.text}</p>
                        <a href="/" className="card-link">Card link</a>
                        <a href="/" className="card-link">Another link</a>
                    </div>
                </div>
            </div>
        )
    });
}

export default DisplayCard