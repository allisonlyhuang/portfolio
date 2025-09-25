import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TransitionCircle({ to, trigger, onComplete, startX, startY }) {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (trigger) {
      setIsVisible(true);
    }
  }, [trigger]);

  const circleStyle = {
    position: 'fixed',
    borderRadius: '50%',
    backgroundColor: 'black',
    transform: 'translate(-50%, -50%)',
    zIndex: 9999,
    pointerEvents: 'none',
    mixBlendMode: 'normal'
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    zIndex: 9998,
    pointerEvents: 'none'
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Fade Out Overlay */}
          <motion.div
            key="fade-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            style={overlayStyle}
          />

          {/* Expanding Circle */}
          <motion.div
            key="circle"
            initial={{ 
              width: 0,
              height: 0,
              top: startY,
              left: startX,
              opacity: 0
            }}
            animate={{ 
              width: '200vmax',
              height: '200vmax',
              top: '50vh',
              left: '50vw',
              opacity: 1
            }}
            exit={{
              width: 0,
              height: 0,
              opacity: 0
            }}
            transition={{ 
              duration: 1,
              ease: [0.22, 1, 0.36, 1]
            }}
            style={circleStyle}
            onAnimationComplete={() => {
              if (to) navigate(to);
              setTimeout(() => {
                setIsVisible(false);
                onComplete?.();
              }, 100);
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
}