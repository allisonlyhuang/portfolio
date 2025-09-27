import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/homepage';
import Start from './pages/startpage';
import Settings from './components/settings';
import { HoverProvider } from './context/hover';
import { OverlayProvider } from './context/overlay';
import Overlay from './components/overlay';
import { AudioProvider, useAudio } from './context/audio';
import { useRef, useEffect, useState } from 'react';
import button_click from './assets/buttons/Button 4 (1).mp3';
import TransitionCircle from './components/transition';
import { usePreloadAssets } from "./hooks/preloadassets";

function App() {
  usePreloadAssets();

  return (
    <HoverProvider>
      <OverlayProvider>
        <AudioProvider>
          <MainContent />
        </AudioProvider>
      </OverlayProvider>
    </HoverProvider>
  );
}

function MainContent() {
  const navigate = useNavigate();
  const { sfxVolume } = useAudio();
  const clickSoundRef = useRef(null);
  const [transitionState, setTransitionState] = useState({
    active: false,
    targetRoute: null,
    x: 0,
    y: 0
  });

  useEffect(() => {
    if (clickSoundRef.current) {
      clickSoundRef.current.volume = sfxVolume;
    }
  }, [sfxVolume]);

  const handleClick = (callback) => {
    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0;
      clickSoundRef.current.play().catch(e => console.error("Click sound failed:", e));
    }
    if (callback) callback();
  };

  const handleNavigateWithTransition = (to, coordinates = { x: '50%', y: '50%' }) => {
    setTransitionState({
      active: true,
      targetRoute: to,
      x: coordinates.x,
      y: coordinates.y
    });
  };

  const handleTransitionComplete = () => {
    setTransitionState(prev => ({ ...prev, active: false }));
  };

  return (
    <main className="main-content">
      <audio ref={clickSoundRef} src={button_click} preload="auto" />
      <Settings handleClick={handleClick} />
      
      <Routes>
        <Route 
          path="/" 
          element={
            <Start 
              onNavigate={handleNavigateWithTransition} 
              handleClick={handleClick} 
            />
          } 
        />
        <Route path="/home" element={<Home />} />
      </Routes>

      <Overlay 
        handleClick={handleClick} 
        onNavigate={handleNavigateWithTransition}
      />

      <TransitionCircle
        trigger={transitionState.active}
        to={transitionState.targetRoute}
        startX={transitionState.x}
        startY={transitionState.y}
        onComplete={handleTransitionComplete}
      />
    </main>
  );
}

export default App;