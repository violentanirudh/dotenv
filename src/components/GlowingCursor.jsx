import { useState, useEffect, useRef } from 'react';

export default function GlowingCursor({ children }) {
  const cursorRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isReady, setIsReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // State to track mobile devices
  const rafRef = useRef(null);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const dx = targetRef.current.x - cursorRef.current.x;
      const dy = targetRef.current.y - cursorRef.current.y;
      
      cursorRef.current.x += dx * 0.15;
      cursorRef.current.y += dy * 0.15;
      
      setPosition({
        x: Math.round(cursorRef.current.x),
        y: Math.round(cursorRef.current.y)
      });
      
      rafRef.current = requestAnimationFrame(animate);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Check if screen width is less than 768px
    };

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('resize', checkMobile); // Listen to window resize for responsiveness
    checkMobile(); // Initial check on mount

    rafRef.current = requestAnimationFrame(animate);
    setIsReady(true);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('resize', checkMobile);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <>
      {isReady && !isMobile && ( // Hide the cursor for mobile devices
        <>
          <div 
            className="pointer-events-none fixed top-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full mix-blend-screen z-50 will-change-transform"
            style={{
              transform: `translate3d(${position.x - 192}px, ${position.y - 192}px, 0)`,
              filter: 'blur(80px)',
            }}
          />
          <div 
            className="pointer-events-none fixed top-0 left-0 w-4 h-4 bg-white rounded-full z-50 will-change-transform"
            style={{
              transform: `translate3d(${position.x - 8}px, ${position.y - 8}px, 0)`,
            }}
          />
        </>
      )}
      <div className={isMobile ? '' : 'cursor-none'}>
        {children}
      </div>
    </>
  );
}
