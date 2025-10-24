import { useState, useRef, useEffect } from 'react';
import doors_open from '../assets/start-page/start_page_open_door.png';
import doors_closed from '../assets/start-page/start_page_closed_door.png';
import '../css/startpage.css';

function Start({ onNavigate, handleClick }) {
    const doorRef = useRef(null);
    const [doorsOpen, setDoorsOpen] = useState(false);
    const [dialogueIndex, setDialogueIndex] = useState(0);
    const [showOverlay, setShowOverlay] = useState(true); // overlay state

    const dialogue = [
        "Enter the house to begin",
        "Behind this door lies my digital domain",
        "Projects, skills, and secrets await inside",
        "Click the door to proceed"
    ];

    const nextDialogue = () => {
        setDialogueIndex((prev) => (prev + 1) % dialogue.length);
    };

    const handleDoorClick = (e) => {
        e.stopPropagation();
        handleClick();

        if (doorRef.current) {
            const rect = doorRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            onNavigate("/home", { x: centerX, y: centerY });
        }
    };

    // Hide overlay after a delay (optional)
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowOverlay(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const updateScale = () => {
            const baseWidth = 1400;
            const baseHeight = 550;
            const scale = Math.min(window.innerWidth / baseWidth, window.innerHeight / baseHeight);
            document.documentElement.style.setProperty('--scale', scale);
        };

        updateScale();
        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, []);

    return (
        <div>
            {showOverlay && (
                <div className="overlay">
                    <div className="overlay-content">
                        Website not supported on Mobile
                    </div>
                </div>
            )}
        <div className="monitor-page">
            <div className="monitor-wrapper">
                <div className="monitor-container">
                    <div className="monitor-bezel">
                        <div className="screen" onClick={nextDialogue}>
                            <img
                                className="screen-pattern"
                                src={doorsOpen ? doors_open : doors_closed}
                                alt="monitor background"
                            />
                            <div className="title_name">
                                Allison's <br />
                                Portfolio
                            </div>
                            <button
                                className="door-box"
                                onClick={handleDoorClick}
                                onMouseEnter={() => setDoorsOpen(true)}
                                onMouseLeave={() => setDoorsOpen(false)}
                                aria-label="Enter portfolio"
                            />
                            <div className="screen-text">{dialogue[dialogueIndex]}</div>
                            <div className="test" ref={doorRef}></div>
                        </div>
                        <div className="monitor-brand-container" />
                    </div>

                    <div className="stand-container">
                        <div className="stand-neck" />
                    </div>

                    <div className="stand-base" />
                </div>
            </div>
        </div>
        </div>
    );
}

export default Start;
