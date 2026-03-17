import React from 'react';
import './LandingPage.css';

function LandingPage({ onEnter }) {
    return (
        <div className="landing-page basic-landing">
            {/* Top MARVEL logo */}
            <div className="marvel-logo-bar">
                <span className="marvel-logo-text">MARVEL</span>
            </div>

            {/* Center content */}
            <div className="landing-center">
                <h1 className="landing-title">
                    <span className="title-avengers">AVENGERS</span>
                    <span className="title-sub">LANGUAGE LEARNER</span>
                </h1>
                <p className="landing-desc">
                    Translate across the Multiverse. Simple, fast, and easy to use.
                </p>
                <button className="enter-btn basic-enter-btn" onClick={onEnter}>
                    START TRANSLATING &rarr;
                </button>
            </div>

            {/* Bottom bar */}
            <div className="landing-footer">
                <span>Powered by Stark Industries</span>
            </div>
        </div>
    );
}

export default LandingPage;
