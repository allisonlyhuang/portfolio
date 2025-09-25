import { createContext, useState, useContext } from 'react';

const OverlayContext = createContext();

export function OverlayProvider({ children }) {
  const [overlay, setOverlay] = useState({
    isOpen: false,
    title: '',
  });

  const openOverlay = (title) => {
    setOverlay({
      isOpen: true,
      title: title,
    });
  };

  const closeOverlay = () => {
    setOverlay({
      isOpen: false,
      title: '',
    });
  };

  return (
    <OverlayContext.Provider value={{ overlay, openOverlay, closeOverlay }}>
      {children}
    </OverlayContext.Provider>
  );
}

export function useOverlay() {
  return useContext(OverlayContext);
}