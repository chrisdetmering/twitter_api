import React from 'react';

function DisplayCard({ twitterData }) {

    return twitterData.map(element => {
        return (
            <div className="row justify-content-center" key={Math.random()}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{element.authorId}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{element.id}</h6>
                        <p className="card-text">{element.text}</p>
                        <a href="/" className="card-link">Card link</a>
                        <a href="/" className="card-link">Another link</a>
                    </div>
                </div>
            </div>
        )
    });
}

export default DisplayCard