import { createContext, useState, useContext } from 'react';

const HoverContext = createContext();

export function HoverProvider({ children }) {
    const [hoverText, setHoverText] = useState('Hover over items to interact');

    return (
        <HoverContext.Provider value={{ hoverText, setHoverText }}>
            {children}
        </HoverContext.Provider>
    );
}

export function useHover() {
    return useContext(HoverContext);
}