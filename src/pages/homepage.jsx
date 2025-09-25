import '../css/home.css'
import empty_room from "../assets/home-page/room/empty_room-removebg-preview.png"
import closed_drapes from "../assets/home-page/room/closed_drapes-removebg-preview.png"
import open_drapes from "../assets/home-page/room/open_drapes-removebg-preview.png"
import glass_window from "../assets/home-page/room/window-removebg-preview.png"
import bed from "../assets/home-page/room/bed-removebg-preview.png"
import coffeetable_and_drawer from "../assets/home-page/room/coffee_table_and_drawer-removebg-preview.png"
import shelf from "../assets/home-page/room/shelf-removebg-preview.png"
import pctable from "../assets/home-page/room/pc_table-removebg-preview.png"
import plants from "../assets/home-page/room/plants-removebg-preview.png"
import papers from "../assets/home-page/room/papers-removebg-preview.png"
import awards from "../assets/home-page/room/awards-removebg-preview.png"
import picture_frame from "../assets/home-page/room/picture_frame-removebg-preview.png"
import hanging_frame from "../assets/home-page/room/hanging_frame-removebg-preview.png"
import lights from "../assets/home-page/room/lights-removebg-preview.png"
import stereo from "../assets/home-page/room/stereo-removebg-preview.png"
import music_off from "../assets/home-page/room/no_music.png"
import music_on from "../assets/home-page/room/music.gif"
import music_file from '../assets/home-page/room/kiss_my_scars.mp3';
import button_click from '../assets/buttons/Button 4.mp3'
import duoduo_bark_sound from '../assets/home-page/room/duoduo-bark.mp3';
import duoduo_sit from '../assets/home-page/room/duoduo.png';
import duoduo_bark from '../assets/home-page/room/duoduo_bark.png';

import { useState, useRef, useEffect } from 'react';
import { useHover } from '../context/hover';
import { useOverlay } from '../context/overlay';
import ButtonBar from '../components/buttonbar'
import PersonMenu from '../components/personmenu'
import { useAudio } from '../context/audio';

function Home() {

    const { openOverlay } = useOverlay();
    const { volume, sfxVolume } = useAudio();

    const [drapesOpen, setDrapesOpen] = useState(false);

    const { hoverText, setHoverText } = useHover();
    const DEFAULT_DESCRIPTION_TEXT = 'Hover over items to interact';
    const itemDescriptions = {
        lights: 'Toggle Lighting',
        dog: 'Pet DuoDuo',
        drapes: 'Toggle Drapes',
        pctable: 'Software, Libraries, + Packages',
        papers: 'My Projects',
        awards: 'Langauges',
        pictureframe: '₍^. .^₎⟆',
        hangingframe: '૮⍝• ᴥ •⍝ა',
        stereo: 'Toggle Music',
    };

    const [musicOff, toggleMusic] = useState(true);
    const audioRef = useRef(null);
    const clickSoundRef = useRef(null);
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);
    useEffect(() => {
        if (clickSoundRef.current) {
            clickSoundRef.current.volume = sfxVolume;
        }
    }, [sfxVolume]);
    const playMusic = () => {
        if (audioRef.current) {
            if (musicOff) {
                audioRef.current.play()
                    .then(() => toggleMusic(false))
                    .catch(e => console.error("Playback failed:", e));
            } else {
                audioRef.current.pause();
                toggleMusic(true);
            }
        }
    };
    const handleClick = (callback) => {
        if (clickSoundRef.current) {
            clickSoundRef.current.currentTime = 0;
            clickSoundRef.current.play().catch(e => console.error("Click sound failed:", e));
        }
        if (callback) callback();
    };

    const [lightsOn, setLightsOn] = useState(true);
    const toggleLights = () => {
        handleClick(() => {
            setLightsOn(!lightsOn);
        });
    };

    const [isBarking, setIsBarking] = useState(false);
    const barkAudio = useRef(new Audio(duoduo_bark_sound));
    const handleDogBark = () => {
        if (!barkAudio.current) return;

        setIsBarking(true);
        barkAudio.current.currentTime = 0;
        barkAudio.current.volume = sfxVolume;
        barkAudio.current.play().catch(e => console.error("Bark failed:", e));

        setTimeout(() => {
            setIsBarking(false);
        }, 400);
    };




    return (
        <>
            <audio ref={clickSoundRef} src={button_click} preload="auto" />
            <audio ref={audioRef} src={music_file} loop preload="auto" />

            <PersonMenu musicPlaying={!musicOff} />
            <ButtonBar setHoverText={setHoverText} handleClick={handleClick} />

            <div className='room_parent'>
                <img src={empty_room} alt="EMPTY ROOM" className={`room_background ${lightsOn ? 'lights-off' : ''}`} />
                <button className={`lights ${lightsOn ? 'lights-off' : ''}`} onClick={toggleLights}
                    onMouseEnter={() => setHoverText(itemDescriptions.lights)}
                    onMouseLeave={() => setHoverText(DEFAULT_DESCRIPTION_TEXT)}>
                    <img src={lights} className="lights-icon" />
                </button>
                <div className={`room_child ${lightsOn ? 'lights-off' : ''}`}>
                    {/* INANIMATE OBJECTS */}
                    <img className="glass_window" src={glass_window} />
                    <img className="bed" src={bed} />
                    <img className="coffeetable_and_drawer" src={coffeetable_and_drawer} />
                    <img className="shelf" src={shelf} />
                    <img className="plants" src={plants} />
                    <img className="music_notes" src={musicOff ? music_off : music_on} />

                    {/* ANIMATE OBJECTS */}
                    <button className="drapes_button" onClick={() => handleClick(() => setDrapesOpen(!drapesOpen))}
                        onMouseEnter={() => setHoverText(itemDescriptions.drapes)}
                        onMouseLeave={() => setHoverText(DEFAULT_DESCRIPTION_TEXT)}>
                        <img src={drapesOpen ? open_drapes : closed_drapes} />
                    </button>

                    <button className="pctable_button" onClick={() => handleClick(() => openOverlay('pctable'))}
                        onMouseEnter={() => setHoverText(itemDescriptions.pctable)}
                        onMouseLeave={() => setHoverText(DEFAULT_DESCRIPTION_TEXT)}>
                        <img src={pctable} />
                    </button>

                    <button className="papers_button" onClick={() => handleClick(() => openOverlay('papers'))}
                        onMouseEnter={() => setHoverText(itemDescriptions.papers)}
                        onMouseLeave={() => setHoverText(DEFAULT_DESCRIPTION_TEXT)}>
                        <img src={papers} />
                    </button>

                    <button className="awards_button" onClick={() => handleClick(() => openOverlay('awards'))}
                        onMouseEnter={() => setHoverText(itemDescriptions.awards)}
                        onMouseLeave={() => setHoverText(DEFAULT_DESCRIPTION_TEXT)}>
                        <img src={awards} />
                    </button>

                    <button className="pictureframe_button" onClick={() => handleClick(() => openOverlay('pictureframe'))}
                        onMouseEnter={() => setHoverText(itemDescriptions.pictureframe)}
                        onMouseLeave={() => setHoverText(DEFAULT_DESCRIPTION_TEXT)}>
                        <img src={picture_frame} />
                    </button>

                    <button className="hangingframe_button" onClick={() => handleClick(() => openOverlay('hangingframe'))}
                        onMouseEnter={() => setHoverText(itemDescriptions.hangingframe)}
                        onMouseLeave={() => setHoverText(DEFAULT_DESCRIPTION_TEXT)}>
                        <img src={hanging_frame} />
                    </button>

                    <button className={isBarking ? "duoduo_button_bark" : "duoduo_button"} onClick={() => handleClick(() => handleDogBark())}
                        onMouseEnter={() => setHoverText(itemDescriptions.dog)}
                        onMouseLeave={() => setHoverText(DEFAULT_DESCRIPTION_TEXT)}>
                        <img src={isBarking ? duoduo_bark : duoduo_sit} />
                    </button>

                    <button className="stereo_button" onClick={() => handleClick(() => { const newState = !musicOff; toggleMusic(newState); playMusic(); })}
                        onMouseEnter={() => setHoverText(itemDescriptions.stereo)}
                        onMouseLeave={() => setHoverText(DEFAULT_DESCRIPTION_TEXT)}>
                        <img src={stereo} />
                    </button>
                </div>
            </div>

            {/* DYNAMIC TEXT DESCRIPTION */}
            <div className="text-display">
                <div className={`hover_textbox ${["₍^. .^₎⟆", "૮⍝• ᴥ •⍝ა"].includes(hoverText) ? "pet-font" : ""}`}>
                    {hoverText || DEFAULT_DESCRIPTION_TEXT}
                </div>
            </div>
            <div className="music_nowplaying">
                {musicOff ? "" : (
                    <>
                        ♫ Now Playing:<br />
                        Kiss My Scars - August Royals
                    </>
                )}
            </div>
        </>
    );
}

export default Home