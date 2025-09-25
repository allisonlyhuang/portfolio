import { createContext, useState, useContext } from 'react';

const AudioContext = createContext();

export function AudioProvider({ children }) {
    const [volume, setVolume] = useState(0.1);
    const [sfxVolume, setSfxVolume] = useState(1);

    return (
        <AudioContext.Provider value={{ volume, setVolume, sfxVolume, setSfxVolume }}>
            {children}
        </AudioContext.Provider>
    );
}

export function useAudio() {
    return useContext(AudioContext);
}