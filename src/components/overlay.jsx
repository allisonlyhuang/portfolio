import '../css/overlay.css';
import FigmaDemo from '../components/figmademo';
import YearProgressBar from '../components/yearbar';
import { useOverlay } from '../context/overlay';
import { useAudio } from '../context/audio';
import button from '../assets/buttons/pressed button.png';
import book_overlay from '../assets/overlays/book_overlay.png';
import desktop_overlay from '../assets/overlays/desktop_overlay.png';
import pictureframe_overlay from '../assets/overlays/pictureframe_overlay.png';
import fifi_lowres from '../assets/overlays/fifi-lowres.png';
import hangingframe_overlay from '../assets/overlays/hangingframe_overlay.png';
import duoduo_highres from "../assets/overlays/duoduo_highres.jpg";
import shelf_overlay from '../assets/overlays/shelf_overlay.png';
import info_avatar from '../assets/overlays/info/info_avatar.png';
import info_menu from '../assets/overlays/info/info_menu.png';
import info_camera from '../assets/overlays/info/info_camera.svg';
import info_capybara from '../assets/overlays/info/info_capybara.svg';
import info_cat from '../assets/overlays/info/info_cat.svg';
import info_magnifyglass from '../assets/overlays/info/info_magnifyglass.svg';
import info_pretzel from '../assets/overlays/info/info_pretzel.svg';
import info_snowman from '../assets/overlays/info/info_snowman.svg';
import info_drink from '../assets/overlays/info/info_drink.png';
import info_airpods from '../assets/overlays/info/info_airpods.png';
import info_necklace from '../assets/overlays/info/info_necklace.png';
import info_qmark from '../assets/overlays/info/info_qmark.png';

import { useState, useEffect } from 'react';
import Gallery from '../components/gallery';
import arduino_icon from '../assets/overlays/languages/arduino_icon.png';
import canva_icon from '../assets/overlays/languages/canva_icon.png';
import cpp_icon from '../assets/overlays/languages/cpp_icon.png';
import css_icon from '../assets/overlays/languages/css_icon.png';
import figma_icon from '../assets/overlays/languages/figma_icon.png';
import github_icon from '../assets/overlays/languages/github_icon.png';
import google_icon from '../assets/overlays/languages/google_icon.png';
import html_icon from '../assets/overlays/languages/html_icon.png';
import intellij_icon from '../assets/overlays/languages/intellij_icon.png';
import java_icon from '../assets/overlays/languages/java_icon.png';
import js_icon from '../assets/overlays/languages/js_icon.png';
import microsoft_icon from '../assets/overlays/languages/microsoft_icon.png';
import pycharm_icon from '../assets/overlays/languages/pycharm_icon.png';
import python_icon from '../assets/overlays/languages/python_icon.webp';
import restapi_icon from '../assets/overlays/languages/restapi_icon.png';
import solidworks_icon from '../assets/overlays/languages/solidworks_icon.png';
import sql_icon from '../assets/overlays/languages/sql_icon.png';
import uiux_icon from '../assets/overlays/languages/uiux_icon.png';
import vscode_icon from '../assets/overlays/languages/vscode_icon.png';
import nodejs_icon from '../assets/overlays/languages/nodejs_icon.png';
import bootstrap_icon from '../assets/overlays/languages/bootstrap_icon.jpg';
import django_icon from '../assets/overlays/languages/django_icon.avif';
import react_icon from '../assets/overlays/languages/react_icon.png';
import pygame_icon from '../assets/overlays/languages/pygame_icon.ico';

import fitness1 from '../assets/overlays/projects/fitness1.png';
import fitness2 from '../assets/overlays/projects/fitness2.png';
import fitness3 from '../assets/overlays/projects/fitness3.jpg';
import fitness4 from '../assets/overlays/projects/fitness4.mp4';
import fitness5 from '../assets/overlays/projects/fitness5.jpg';
import rover1 from '../assets/overlays/projects/rover1.mp4';
import rover2 from '../assets/overlays/projects/rover2.mp4';
import fallingblocks1 from '../assets/overlays/projects/fallingblocks1.mp4';


function Overlay({ handleClick, onNavigate }) {
    const { overlay, closeOverlay } = useOverlay();
    const { volume, setVolume, sfxVolume, setSfxVolume } = useAudio();
    const [currentLanguageIndex, setLanguageIndex] = useState(0);
    const [currentProjectIndex, setProjectIndex] = useState(0);

    const handleVolumeChange = (e) => setVolume(parseFloat(e.target.value));
    const handleSfxVolumeChange = (e) => setSfxVolume(parseFloat(e.target.value));
    const onCloseButtonClick = () => handleClick(closeOverlay);
    const onBacktoStartButtonClick = () => {
        handleClick(closeOverlay);
        onNavigate('/');
    };

    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        setActiveTab(0);
    }, [currentProjectIndex]);


    const coding_languages = [
        { index: 1, icon: cpp_icon, title: "C++" },
        { index: 2, icon: python_icon, title: "Python" },
        { index: 3, icon: java_icon, title: "Java" },
        { index: 4, icon: html_icon, title: "HTML" },
        { index: 5, icon: js_icon, title: "JavaScript" },
        { index: 6, icon: css_icon, title: "CSS" },
        { index: 7, icon: uiux_icon, title: "UI/UX" },
        { index: 8, icon: sql_icon, title: "SQL" },
        { index: 9, icon: restapi_icon, title: "REST API" },
    ];

    const projects = [
        {
            index: 1, content: { type: 'none', files: null }, title: 'Websystem to Track Bug Logs (Software Engineer Intern at Montage Technology)', date: 'Aug - Sep 2025',
            description: `● Built a websystem for testing team to track and manage bug logs, enabling Excel uploads, advanced search/filtering, and CRUD functionality, which reduced manual data entry by ~60% and streamlined debugging workflows/efficiency
                          ● Developed the frontend with Node.js, Bootstrap, and C++, parsing Excel files client-side and integrating with backend REST APIs, while designing Django + SQLite data models for reliable data storage and simplified query handling
                          ● Collaborated closely with the testing team via Skype and Outlook, ensuring project features aligned with team needs`,
            caption: ' ',
            skills: 'Full-Stack Development (Python, JS, HTML, CSS, REST APIs), Database Design (SQLite, Django), UI/UX (Bootstrap, Node.js), Team Collaboration',
            other: [' ', ' ']
        },
        {
            index: 2, content: { type: 'none', files: null }, title: 'C++ Data Structures & Templates', date: 'Apr - Jun 2025',
            description: `● Engineered templated containers (arrays, matrices, setlists, maparrays) with exception handling, lambda initialization, and iterator compliance to mirror STL behavior and grasp understanding of core STL data structures and components\n
                          ● Applied object-oriented design, memory-safe practices and test-driven development to build reusable C++ data`,
            caption: ' ',
            skills: 'C++, Object-Oriented Programming (OOP), STL Libraries, Data Structures Implementation, Test-Driven Development (TDD), Smart Pointers',
            other: [' ', ' ']
        },
        {
            index: 3, content: { type: 'gallery', files: [{ type: 'image', src: fitness1 }, { type: 'image', src: fitness2 }, { type: 'image', src: fitness3 }, { type: 'video', src: fitness4 }, { type: 'image', src: fitness5 }] }, title: 'Two Steps Ahead: 3D Printed Wearable Fitness Tracker', date: 'Feb - Apr 2025',
            description: `● Engineered a unique 3D-printed, fully articulated wearable fitness tracker with fully articulated wristband and compact case housing key components including accelerometer, barometer, OLED display, battery, and Wemos board
                          ● Designed and developed integrated step and flight count monitoring algorithms with C++ on Arduino, achieving over 90% measurement accuracy using movement and barometric pressure data from sensors for accurate activity tracking
                          ● Integrated real-time data display and synchronization between the onboard OLED screen and the Blynk mobile app`,
            caption: 'Fitness Watch Documentation',
            skills: 'Embedded Systems (Wemos, Arduino), Algorithm Design (C++), Mobile App Integration (Blynk), 3D Modeling/CAD (SolidWorks), Woodworking, Soldering/Electronics Assembly, Report Documentation, Teamwork',
            other: ['Read our final report.', 'https://drive.google.com/file/d/1ObZvYRIc79x7PtC9ClYTtk_Bc_aavW94/view?usp=sharing']
        },
        {
            index: 4, content: { type: 'gallery', files: [{ type: 'video', src: fallingblocks1 },] }, title: 'Pygame Interactive Falling Blocks Game', date: 'Dec 2024',
            description: `● Developed an interactive Columns game using Python and Pygame, featuring a fully functional user interface, that challenges players to strategically match randomly generated colored jewels to earn points while racing against time
                          ● Implemented a grid-based game engine and applied data structures for game state updates and collision handling`,
            caption: 'PyGame Documentation',
            skills: 'Python, PyGame, Game Development',
            other: ['Open Github link.', 'https://github.com/allisonlyhuang/falling-blocks-game']
        },
        {
            index: 5, content: { type: 'none', files: null }, title: 'National Weather/ Geolocation Processing System', date: 'Nov 2024',
            description: `● Developed a functional weather forecasting program that retrieves real-time data from the National Weather Service API, processing and extracting relevant forecast information from the nearest weather station given a location
                          ● Integrated forward and reverse geocoding using Nominatim’s API using pathlib and urllib for location data processing
                          ● Built error-handling mechanisms for network requests, API failures, and data validation and applied object-oriented programming principles to structure JSON file handling, API requests, and data querying efficiently.`,
            caption: ' ',
            skills: 'Python, REST APIs, JSON Parsing, Object-Oriented Programming (OOP), Geolocation, Real-Time Data Processing',
            other: [' ', ' ']
        },
        {
            index: 6, content: { type: 'gallery', files: [{ type: 'video', src: rover1 }, { type: 'video', src: rover2 }] }, title: 'Big Steppas Rover', date: 'Sep - Dec 2022',
            description: `● Designed and built a 10” x 14” remote-controlled rover with a drive time of over 10 minutes using SolidWorks
                          ● Built with woodworking, soldering, and 3D-printing techniques using materials that came to a budget of $271.32`,
            caption: 'Rover Documentation',
            skills: '3D Modeling/CAD (SolidWorks), Woodworking, Soldering/Electronics Assembly, Report Documentation, Teamwork',
            other: ['Read our final report.', 'https://drive.google.com/file/d/1tVYL9UjuILWBAyXG-gR4VjySD5m3Rptr/view?usp=sharing']
        },
        {
            index: 7, content: { type: 'demo', files: "https://embed.figma.com/proto/Prw4eJoF92Y8trvXSQOjss/Mannequin-Software?node-id=319-5&p=f&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=319%3A5&embed-host=share" }, title: 'Mannequin', date: 'Aug 2022 - Aug 2023',
            description: `● Proposed a software that creates avatars using AR to help consumers with purchasing decisions when online shopping
                          ● Designed wireframes as an interactive prototype to use for live demonstration when pitching to investors and judges`,
            caption: 'Figma Wireframes for Demostration/Presentation',
            skills: 'Entrepreneurship, Project Management, Market Research/Analysis, Wireframing/UX (Figma)',
            other: ['Read our business report.', 'https://drive.google.com/file/d/1mrbenL6RQ6fFbB7-JV_IOWbYu_iNOOrR/view?usp=sharing']
        },
        {
            index: 8, content: { type: 'demo', files: "https://embed.figma.com/proto/Tq3OxTX5nBspP9neYknFSl/Healthy-Food-App?node-id=1-2&starting-point-node-id=1%3A2&embed-host=share" }, title: 'Bee Healthy Wireframes', date: 'May - Jun 2021',
            description: `● Built a theoretical application centered around healthy food substitutions for junk food using UI/UX elements on Figma
                          ● Utilized principles of graphic design to create brand guidelines: identity, logo, typography, color palette, and style/tone`,
            caption: 'Figma Demostration',
            skills: 'Wireframing, UX/UI (Figma), Brand Identity Design',
            other: [' ', ' ']
        },
    ]

    const handleNext = (state, library, index) => {
        setActiveTab(0);
        state(prev => (prev === library.length - index ? 0 : prev + index));
    };
    const handlePrevious = (state, library, index) => {
        setActiveTab(0);
        state(prev => (prev === 0 ? library.length - index : prev - index));
    };

    if (!overlay.isOpen) return null;

    if (overlay.title == 'settings') {
        return (
            <div className='overlay'>
                <div className='settings-container'>
                    <div className="close-button">
                        <button className="close-button_whole" onClick={onCloseButtonClick}>
                            <img src={button} className="close-button_background" />
                            <div className="close-button_x">X</div>
                        </button>
                    </div>
                    <div className="settings-body">
                        <div className="settings-volume">
                            <h3>MUSIC VOLUME</h3>
                            <div className="volume-control">
                                <input
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.01"
                                    value={volume}
                                    onChange={handleVolumeChange}
                                    className="volume-slider"
                                    style={{ '--fill-percent': `${volume * 100}%` }}
                                />
                                <span className="volume-value">{Math.round(volume * 100)}%</span>
                            </div>

                            <h3>SFX VOLUME</h3>
                            <div className="volume-control">
                                <input
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.01"
                                    value={sfxVolume}
                                    onChange={handleSfxVolumeChange}
                                    className="volume-slider"
                                    style={{ '--fill-percent': `${sfxVolume * 100}%` }}
                                />
                                <span className="volume-value">{Math.round(sfxVolume * 100)}%</span>
                            </div>
                        </div>
                        <div className="acknowledgements">
                            <h3>ACKNOWLEDGEMENTS</h3>
                            <div className="acknowledgements-text">
                                Assets are hand-drawn, AI-generated, or photos pixelated. Web application made with React. The home page inspired by Unpacking. Pixel icons from{' '}
                                <a href="https://sqkhor.com/pixel-icons/#" target="_blank" style={{ whiteSpace: 'nowrap' }}>Sqkor.</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else if (overlay.title == 'info') {
        return (
            <div className='overlay'>
                <div className='info-container'>
                    <div className="close-button">
                        <button className="close-button_whole" onClick={onCloseButtonClick}>
                            <img src={button} className="close-button_background" />
                            <div className="close-button_x">X</div>
                        </button>
                    </div>
                    <div className="info-body">
                        <div className="info-content">About Me</div>
                        <div className='info-content-body'>
                            <div className="info-content-body-column info-content-body-left">
                                <div className='info-content-body-column-section' data-label="Level 19">
                                    <YearProgressBar />
                                </div>

                                <div className='info-content-body-column-section' data-label="University of California-Irvine">
                                    Computer Science B.S.
                                </div>

                                <div className='info-content-body-column-section' data-label="Location">
                                    Irvine / San Francisco, CA
                                </div>

                                <div className='info-content-body-column-section' data-label='Likes'>
                                    <div className='info-value-container'>
                                        <div className='info-value-box'>
                                            <img src={info_cat} />
                                            <span className="popup-text">cats and dogs</span>
                                        </div>
                                        <div className='info-value-box'>
                                            <img src={info_capybara} />
                                            <span className="popup-text">capybara</span>
                                        </div>
                                        <div className='info-value-box'>
                                            <img src={info_camera} />
                                            <span className="popup-text">taking pics</span>
                                        </div>
                                        <div className='info-value-box'>
                                            <img src={info_pretzel} />
                                            <span className="popup-text">yummy food</span>
                                        </div>
                                        <div className='info-value-box'>
                                            <img src={info_snowman} />
                                            <span className="popup-text">winter</span>
                                        </div>
                                        <div className='info-value-box'>
                                            <img src={info_magnifyglass} />
                                            <span className="popup-text">exploring</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='info-content-image'>
                                <img className="info-avatar" src={info_avatar} />
                                <img className='info-content-image-menu' src={info_menu} />

                                <img className='info-drink' src={info_drink}/>
                                <div className='info-menu-overlay info-drink-overlay'>
                                    <div className='info-menu-overlay-title'>
                                        <img className='info-menu-overlay-icon' src={info_drink} />
                                        <h3 style={{ marginLeft: "10px" }}>Rose Milk Tea</h3>
                                    </div>
                                    <div className='info-menu-overlay-body'>
                                        <div className="info-menu-overlay-desc">
                                            Premium-quality milk tea from Ume Tea's Rose Series, part of their Valentine's Day promotion
                                        </div>
                                        <div className="info-menu-overlay-quirks">
                                            Quirks: Helps with digestion
                                        </div>
                                    </div>
                                </div>
                                <img className='info-airpods' src={info_airpods}/>
                                <div className='info-menu-overlay info-airpods-overlay'>
                                    <div className='info-menu-overlay-title'>
                                        <img className='info-menu-overlay-icon' src={info_airpods} />
                                        <h3 style={{ marginLeft: "10px" }}>AirPods Gen3</h3>
                                    </div>
                                    <div className='info-menu-overlay-body'>
                                        <div className="info-menu-overlay-desc">
                                            A must-have everyday carry, often playing Porter Robinson, LANY, or the 1975
                                        </div>
                                        <div className="info-menu-overlay-quirks">
                                            Quirks: Boosts productivity / focus, and uplifts mood
                                        </div>
                                    </div>
                                </div>
                                <img className='info-necklace' src={info_necklace}/>
                                <div className='info-menu-overlay info-necklace-overlay'>
                                    <div className='info-menu-overlay-title'>
                                        <img className='info-menu-overlay-icon saturn-icon' src={info_necklace} />
                                        <h3 style={{ marginLeft: "10px" }}>Saturn Necklace</h3>
                                    </div>
                                    <div className='info-menu-overlay-body'>
                                        <div className="info-menu-overlay-desc">
                                            Vivienne Westwood necklace bought with very first paycheck in high school
                                        </div>
                                        <div className="info-menu-overlay-quirks">
                                            Quirks: Looks good, keeps motivation levels up
                                        </div>
                                    </div>
                                </div>
                                <div className='info-qmark' />
                                <div className='info-menu-overlay info-qmark-overlay'>
                                    <div className='info-menu-overlay-title'>
                                        <img className='info-menu-overlay-icon qmark-icon' src={info_qmark} />
                                        <h3 style={{ marginLeft: "10px" }}>Empty Slot</h3>
                                    </div>
                                    <div className='info-menu-overlay-body'>
                                        <div className="info-menu-overlay-desc">
                                            Keeping one slot empty and my mind open for novel adventures and newer opportunities!
                                        </div>
                                        <div className="info-menu-overlay-quirks">
                                            Quirks: keeps me open-minded, flexible, and curious
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    /* else if (overlay.title == 'links') {
        return (
            <div className='overlay'>
                <div className='links-container'>
                    <div className="close-button">
                        <button className="close-button_whole" onClick={onCloseButtonClick}>
                            <img src={button} className="close-button_background" />
                            <div className="close-button_x">X</div>
                        </button>
                    </div>
                    <div className="links-body">
                        <div className="links-content">My Resumes</div>
                        <div className='links-content-body'>
                            <div className="links-content-body-link">
                                <a href="https://drive.google.com/file/d/1pJCIw_Dy19jJ34u61laLMOx2AjsVZu7M/view?usp=sharing" target="_blank">Software Engineer Oriented</a>
                            </div>
                            <div className="links-content-body-link">
                                <a href="https://drive.google.com/file/d/1OSyLxmwbpmoBE91NyIiufr39phjFWOL-/view?usp=sharing" target="_blank">General Work Experience</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } */
    else if (overlay.title == 'mail') {
        return (
            <div className='overlay'>
                <div className='mail-container'>
                    <div className="close-button">
                        <button className="close-button_whole" onClick={onCloseButtonClick}>
                            <img src={button} className="close-button_background" />
                            <div className="close-button_x">X</div>
                        </button>
                    </div>
                    <div className="mail-body">
                        <div className="mail-content">Contact Me
                            <div className="mail-links">
                                <div className="mail-link">
                                    <a href="https://linkedin.com/in/allisonlyhuang" target="_blank">LinkedIn</a>
                                </div>
                                <div className="mail-link">
                                    <a href="https://github.com/allisonlyhuang" target="_blank">GitHub</a>
                                </div>
                                <div className="mail-link">
                                    <a href="mailto:allisonlyhuang@gmail.com" target="_blank">Email Me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else if (overlay.title == 'papers') {
        return (
            <div className='overlay'>
                <div className="book-container">
                    <img className="book-image" src={book_overlay} />
                    <div className="close-button book-close-button">
                        <button className="close-button_whole" onClick={onCloseButtonClick}>
                            <img src={button} className="close-button_background" />
                            <div className="close-button_x">X</div>
                        </button>
                    </div>
                    <div className='book-body'>
                        <div className='book-body-left'>
                            <div className='book-text book-text-title'>
                                {projects[currentProjectIndex].title}
                            </div>
                            <div className='book-text book-text-date'>
                                {projects[currentProjectIndex].date}
                            </div>
                            <div className='book-text book-text-description'>
                                {projects[currentProjectIndex].description.split('\n').map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                            <div className='book-text book-text-skills'>
                                {projects[currentProjectIndex].skills}
                            </div>
                        </div>
                        <div className='book-body-right'>
                            <div className='book-project-image'>
                                <div className='book-project-content'>
                                    {projects[currentProjectIndex].content.type === 'gallery' && (
                                        <Gallery
                                            images={projects[currentProjectIndex].content.files}
                                            activeTab={activeTab}
                                            setActiveTab={setActiveTab}
                                        />
                                    )}

                                    {projects[currentProjectIndex].content.type === 'demo' && (
                                        <FigmaDemo
                                            figmalink={projects[currentProjectIndex].content.files}
                                        />
                                    )}
                                </div>

                                <div className='book-project-text'>
                                    <div className='book-text book-text-caption'>
                                        {projects[currentProjectIndex].caption}
                                    </div>
                                    <div className='book-text book-text-other'>
                                        <a href={projects[currentProjectIndex].other[1]} target="_blank">{projects[currentProjectIndex].other[0]}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='book-arrow-left' onClick={() => handleClick(() => handlePrevious(setProjectIndex, projects, 1))}>
                        &lt; Prev
                    </button>
                    <div className='book-page-index'>
                        Page {projects[currentProjectIndex].index}
                    </div>
                    <button className='book-arrow-right' onClick={() => handleClick(() => handleNext(setProjectIndex, projects, 1))}>
                        Next &gt;
                    </button>
                </div>
            </div>
        );
    }
    else if (overlay.title == 'pctable') {
        return (
            <div className='overlay'>
                <div className="desktop-container">
                    <img className="desktop-image" src={desktop_overlay} />
                    <div className="close-button desktop-close-button">
                        <button className="close-button_whole" onClick={onCloseButtonClick}>
                            <img src={button} className="close-button_background" />
                            <div className="close-button_x">X</div>
                        </button>
                    </div>
                    <div className='desktop-body'>
                        <div className='desktop-header'>
                            Software/Packages
                        </div>
                        <div className='desktop-description'>
                            <div className="grid-item">
                                <img src={github_icon} alt="Image 1" />
                                <span>Github</span>
                            </div>
                            <div className="grid-item">
                                <img src={figma_icon} alt="Image 2" />
                                <span>Figma</span>
                            </div>
                            <div className="grid-item">
                                <img src={vscode_icon} alt="Image 3" />
                                <span>Visual Studio Code</span>
                            </div>
                            <div className="grid-item">
                                <img src={arduino_icon} alt="Image 3" />
                                <span>Arduino IDE</span>
                            </div>
                            <div className="grid-item">
                                <img src={solidworks_icon} alt="Image 3" />
                                <span>SolidWorks</span>
                            </div>
                            <div className="grid-item">
                                <img src={canva_icon} alt="Image 3" />
                                <span>Canva</span>
                            </div>
                            <div className="grid-item">
                                <img src={google_icon} alt="Image 3" />
                                <span>Google Workspace</span>
                            </div>
                            <div className="grid-item">
                                <img src={microsoft_icon} alt="Image 3" />
                                <span>Microsoft 365</span>
                            </div>
                            <div className="grid-item">
                                <img src={pycharm_icon} alt="Image 3" />
                                <span>PyCharm</span>
                            </div>
                            <div className="grid-item">
                                <img src={intellij_icon} alt="Image 3" />
                                <span>IntelliJ</span>
                            </div>
                            <div className="grid-item">
                                <img src={django_icon} alt="Image 3" />
                                <span>Django</span>
                            </div>
                            <div className="grid-item">
                                <img src={react_icon} alt="Image 3" />
                                <span>React</span>
                            </div>
                            <div className="grid-item">
                                <img src={bootstrap_icon} alt="Image 3" />
                                <span>Bootstrap</span>
                            </div>
                            <div className="grid-item">
                                <img src={nodejs_icon} alt="Image 3" />
                                <span>Node.js</span>
                            </div>
                            <div className="grid-item">
                                <img src={pygame_icon} alt="Image 3" />
                                <span>PyGame</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else if (overlay.title == 'pictureframe') {
        return (
            <div className='overlay'>
                <div className="pictureframe-container">
                    <img className="pictureframe-image" src={pictureframe_overlay} />
                    <img className="pictureframe-background" src={fifi_lowres} />
                    <div className="close-button desktop-close-button">
                        <button className="close-button_whole" onClick={onCloseButtonClick}>
                            <img src={button} className="close-button_background" />
                            <div className="close-button_x">X</div>
                        </button>
                    </div>
                    <div className="pictureframe-texttop">
                        Fifi
                    </div>
                    <div className="pictureframe-textbottom">
                        2013-2020
                    </div>
                </div>
            </div>
        );
    }
    else if (overlay.title == 'hangingframe') {
        return (
            <div className='overlay'>
                <div className="hangingframe-container">
                    <img className="hangingframe-image" src={hangingframe_overlay} />
                    <div className="close-button hangingframe-close-button">
                        <button className="close-button_whole" onClick={onCloseButtonClick}>
                            <img src={button} className="close-button_background" />
                            <div className="close-button_x">X</div>
                        </button>
                    </div>
                    <div className="hangingframe-body">
                        <img className="hangingframe-bodyleft" src={duoduo_highres} />
                        <div className="hangingframe-bodyright">
                            <div className="hangingframe-bodyright-body">
                                <div className="hangingframe-title">DuoDuo</div>
                                <div className="hangingframe-content">
                                    <div className="hangingframe-content-header">Age: </div>
                                    <div className="hangingframe-content-text">3 years old (21 dog years old)</div>
                                </div>
                                <div className="hangingframe-content">
                                    <div className="hangingframe-content-header">Birthplace:</div>
                                    <div className="hangingframe-content-text">Lincoln, CA</div>
                                </div>
                                <div className="hangingframe-content">
                                    <div className="hangingframe-content-header">Hobbies:</div>
                                    <div className="hangingframe-content-text">Walking, eating, sleeping, meeting other doggies!</div>
                                </div>
                                <div className="hangingframe-content">
                                    <div className="hangingframe-content-header">Likes:</div>
                                    <div className="hangingframe-content-text">His family, road trips, small stuffed animals, belly rubs, beef liver treats</div>
                                </div>
                                <div className="hangingframe-content">
                                    <div className="hangingframe-content-header">Dislikes:</div>
                                    <div className="hangingframe-content-text">Doggy daycare, balloons, vaccuums, being alone</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else if (overlay.title == 'awards') {
        return (
            <div className='overlay'>
                <div className="shelf-container">
                    <img className="shelf-image" src={shelf_overlay} />
                    <div className="close-button shelf-close-button">
                        <button className="close-button_whole" onClick={onCloseButtonClick}>
                            <img src={button} className="close-button_background" />
                            <div className="close-button_x">X</div>
                        </button>
                    </div>
                    <div className="shelf-body">
                        {/* Previous arrow button */}
                        <button className="arrow-button left-arrow" onClick={() => handlePrevious(setLanguageIndex, coding_languages, 1)}>
                            &lt;
                        </button>

                        {/* Current award content */}
                        <div className="language-content">
                            <img
                                className="language-icon"
                                src={coding_languages[currentLanguageIndex].icon}
                                alt={coding_languages[currentLanguageIndex].title}
                            />
                            <div className="language-text">
                                <h3>{coding_languages[currentLanguageIndex].title}</h3>
                            </div>
                        </div>

                        {/* Next arrow button */}
                        <button className="arrow-button right-arrow" onClick={() => handleNext(setLanguageIndex, coding_languages, 1)}>
                            &gt;
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    else if (overlay.title == 'home') {
        return (
            <div className='overlay'>
                <div className='home-container'>
                    <div className="close-button">
                        <button className="close-button_whole" onClick={onCloseButtonClick}>
                            <img src={button} className="close-button_background" />
                            <div className="close-button_x">X</div>
                        </button>
                    </div>
                    <div className="home-body">
                        <div className="home-content">Are you sure you want to return to the Start Page?
                            <div className="homebutton-container">
                                <button
                                    className="homebutton-left"
                                    onClick={onBacktoStartButtonClick}
                                ><span className="homebutton-text">Yes</span></button>
                                <button
                                    className="homebutton-right"
                                    onClick={onCloseButtonClick}
                                ><span className="homebutton-text">No</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return;
}

export default Overlay;