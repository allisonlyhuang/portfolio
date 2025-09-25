import '../css/personmenu.css';
import person_icon from '../assets/home-page/person_icon.png';
import music_on from "../assets/home-page/room/music.gif";
import { useState, useEffect } from 'react';

function PersonMenu({ musicPlaying }) {
    const moods = [
        'Innovating', 'Creating', 'Designing', 'Jamming', 'Healthy', 'Coding',
        'Exploring', 'Learning', 'Growing', 'Building', 'Developing'
    ];
    
    const getDayOfYear = () => {
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now - start;
        const oneDay = 1000 * 60 * 60 * 24;
        const day = Math.floor(diff / oneDay);
        return day;
    };

    const [currentMood, setCurrentMood] = useState('Healthy');
    const [dayOfYear, setDayOfYear] = useState(getDayOfYear());

    useEffect(() => {
        const randomMood = moods[Math.floor(Math.random() * moods.length)];
        setCurrentMood(randomMood);
        
        const moodInterval = setInterval(() => {
            const randomMood = moods[Math.floor(Math.random() * moods.length)];
            setCurrentMood(randomMood);
        }, 30000 + Math.random() * 90000);

        const now = new Date();
        const midnight = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + 1,
            0, 0, 0
        );
        const timeToMidnight = midnight - now;
        
        const dayUpdateTimeout = setTimeout(() => {
            setDayOfYear(getDayOfYear());
            setInterval(() => setDayOfYear(getDayOfYear()), 86400000);
        }, timeToMidnight);
        
        return () => {
            clearInterval(moodInterval);
            clearTimeout(dayUpdateTimeout);
        };
    }, []);

    return (
        <div className="health-bar-container">
            <div className="health-bar-content">
                <div className="character-icon-container">
                    <div className="character-icon">
                        <img src={person_icon} />
                    </div>
                    {musicPlaying && (
                        <div className="music-notes">
                            <img className="music-notes-left" src={music_on} alt="Music notes" />
                        </div>
                    )}
                </div>

                <div className="health-info">
                    <div className="player-name">Allison Huang</div>

                </div>
                <div className="status-container">
                        <div className="level-status">
                            <span className="level-status-text">Lv.19</span>
                        </div>
                        <div className="mood-status">
                            <span className="mood-status-text">• {currentMood}</span>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default PersonMenu;