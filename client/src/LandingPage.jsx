import React from 'react';
import './LandingPage.css';

function LandingPage({ onEnter, isDarkMode, setIsDarkMode }) {
    return (
        <div className="landing-page basic-landing">
            {/* Theme Toggle */}
            <button
                className="theme-toggle"
                onClick={() => setIsDarkMode(!isDarkMode)}
                style={{
                    position: 'absolute',
                    right: '20px',
                    top: '20px',
                    zIndex: 10
                }}
            >
                {isDarkMode ? '☀️ LIGHT' : '🌙 DARK'}
            </button>

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

            {/* Bottom Hero Silhouettes */}
            <div className="hero-silhouettes-basic">
                {/* Iron Man */}
                <div className="hero-figure">
                    <svg viewBox="0 0 80 160" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="40" cy="22" rx="16" ry="18" fill="#8B0000" />
                        <rect x="24" y="38" width="32" height="58" rx="4" fill="#8B0000" />
                        <rect x="10" y="42" width="14" height="40" rx="4" fill="#8B0000" />
                        <rect x="56" y="42" width="14" height="40" rx="4" fill="#8B0000" />
                        <rect x="24" y="96" width="12" height="50" rx="3" fill="#8B0000" />
                        <rect x="44" y="96" width="12" height="50" rx="3" fill="#8B0000" />
                        <ellipse cx="40" cy="55" rx="7" ry="7" fill="#e62429" opacity="0.8" />
                    </svg>
                </div>

                {/* Captain America */}
                <div className="hero-figure">
                    <svg viewBox="0 0 80 160" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="40" cy="22" rx="16" ry="18" fill="#4a4a8a" />
                        <rect x="24" y="38" width="32" height="58" rx="4" fill="#4a4a8a" />
                        <rect x="10" y="42" width="14" height="40" rx="4" fill="#4a4a8a" />
                        <rect x="56" y="42" width="14" height="40" rx="4" fill="#4a4a8a" />
                        <rect x="24" y="96" width="12" height="50" rx="3" fill="#4a4a8a" />
                        <rect x="44" y="96" width="12" height="50" rx="3" fill="#4a4a8a" />
                        <circle cx="40" cy="58" r="10" fill="none" stroke="#ffffff" strokeWidth="2" />
                        <path d="M40 49 L40 67" stroke="#ffffff" strokeWidth="2" />
                        <path d="M31 58 L49 58" stroke="#ffffff" strokeWidth="2" />
                    </svg>
                </div>

                {/* Thor */}
                <div className="hero-figure">
                    <svg viewBox="0 0 80 160" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="40" cy="22" rx="16" ry="18" fill="#5a5a2a" />
                        <rect x="22" y="38" width="36" height="58" rx="5" fill="#5a5a2a" />
                        <rect x="8" y="42" width="14" height="40" rx="4" fill="#5a5a2a" />
                        <rect x="58" y="42" width="14" height="40" rx="4" fill="#5a5a2a" />
                        <rect x="24" y="96" width="12" height="50" rx="3" fill="#5a5a2a" />
                        <rect x="44" y="96" width="12" height="50" rx="3" fill="#5a5a2a" />
                        <rect x="58" y="30" width="14" height="22" rx="3" fill="#aaa" />
                        <rect x="62" y="52" width="6" height="30" rx="2" fill="#888" />
                    </svg>
                </div>

                {/* Hulk */}
                <div className="hero-figure">
                    <svg viewBox="0 0 80 160" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="40" cy="20" rx="19" ry="18" fill="#2d6a2d" />
                        <rect x="20" y="36" width="40" height="60" rx="6" fill="#2d6a2d" />
                        <rect x="4" y="38" width="18" height="50" rx="5" fill="#2d6a2d" />
                        <rect x="58" y="38" width="18" height="50" rx="5" fill="#2d6a2d" />
                        <rect x="22" y="96" width="14" height="48" rx="4" fill="#2d6a2d" />
                        <rect x="44" y="96" width="14" height="48" rx="4" fill="#2d6a2d" />
                    </svg>
                </div>

                {/* Black Widow */}
                <div className="hero-figure">
                    <svg viewBox="0 0 80 160" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="40" cy="22" rx="14" ry="17" fill="#1a1a1a" />
                        <rect x="26" y="37" width="28" height="58" rx="4" fill="#1a1a1a" />
                        <rect x="12" y="42" width="14" height="36" rx="4" fill="#1a1a1a" />
                        <rect x="54" y="42" width="14" height="36" rx="4" fill="#1a1a1a" />
                        <rect x="26" y="95" width="11" height="52" rx="3" fill="#1a1a1a" />
                        <rect x="43" y="95" width="11" height="52" rx="3" fill="#1a1a1a" />
                        <circle cx="40" cy="60" r="5" fill="#e62429" opacity="0.9" />
                    </svg>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="landing-footer">
                <span>Powered by Game Of Codes</span>
            </div>
        </div>
    );
}

export default LandingPage;
