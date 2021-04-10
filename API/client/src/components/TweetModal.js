import React from 'react';
import TweetCard from './TweetCard';
import '../styles/TweetModal.css';

function TweetModal({ twitterData }) {

    return (
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title">It's a random Tweet</h3>
                    <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="currentColor"
                            className="bi bi-x"
                            viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                </div>
                <div className="modal-body">
                    <TweetCard
                        twitterData={twitterData}
                    />
                </div>
            </div>
        </div>
    )
}

export default TweetModal