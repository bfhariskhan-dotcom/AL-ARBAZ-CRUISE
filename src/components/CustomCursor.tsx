import { useState, useEffect, useRef } from 'react';

/**
 * Luxury Golden Cursor with Radiant Light Aura & Rainbow-Gold Shimmer
 * Features soft glowing light halo, golden trail, and interactive bloom on clickable elements.
 * Automatically disabled on touch devices.
 */
export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    // Check for touch device or fine pointer
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;

    if (hasTouch && !isFinePointer) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'SELECT' ||
          target.tagName === 'TEXTAREA' ||
          target.closest('button') ||
          target.closest('a') ||
          target.closest('[role="button"]') ||
          target.classList.contains('cursor-pointer') ||
          window.getComputedStyle(target).cursor === 'pointer';

        setIsPointer(!!isClickable);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isVisible]);

  // Smooth lag / fluid physics for the radiant golden light aura
  useEffect(() => {
    if (isTouchDevice) return;

    const followMouse = () => {
      setTrailingPos((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.16,
          y: prev.y + dy * 0.16,
        };
      });
      requestRef.current = requestAnimationFrame(followMouse);
    };

    requestRef.current = requestAnimationFrame(followMouse);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [position, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none">
      {/* 1. Radiant Golden Light Halo (Luminous soft glow spreading around mouse) */}
      <div
        className="fixed top-0 left-0 rounded-full will-change-transform transition-[width,height] duration-200 ease-out"
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
          width: isPointer ? '90px' : '65px',
          height: isPointer ? '90px' : '65px',
          background: isPointer
            ? 'radial-gradient(circle, rgba(255, 245, 219, 0.45) 0%, rgba(214, 181, 109, 0.3) 35%, rgba(255, 180, 123, 0.15) 55%, transparent 75%)'
            : 'radial-gradient(circle, rgba(214, 181, 109, 0.35) 0%, rgba(243, 229, 200, 0.2) 40%, transparent 70%)',
          filter: 'blur(3px)',
        }}
      />

      {/* 2. Shimmering Rainbow-Gold Ring with Glowing Edge */}
      <div
        className={`fixed top-0 left-0 rounded-full will-change-transform transition-all duration-150 ${
          isPointer
            ? 'scale-125 border-[#FFF2D0]'
            : 'border-[#D6B56D]'
        } ${isClicking ? 'scale-90 opacity-90' : 'opacity-100'}`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
          width: '30px',
          height: '30px',
          borderWidth: '1.5px',
          boxShadow: isPointer
            ? '0 0 16px 2px rgba(255, 240, 190, 0.8), 0 0 30px rgba(214, 181, 109, 0.5), inset 0 0 8px rgba(243, 229, 200, 0.4)'
            : '0 0 12px 1px rgba(214, 181, 109, 0.6), inset 0 0 5px rgba(214, 181, 109, 0.3)',
          background: isPointer
            ? 'linear-gradient(135deg, rgba(255, 245, 219, 0.2) 0%, rgba(214, 181, 109, 0.15) 100%)'
            : 'transparent',
        }}
      />

      {/* 3. Sharp Golden Core Dot with Intense Pinpoint Light */}
      <div
        className={`fixed top-0 left-0 rounded-full will-change-transform transition-transform duration-75 ${
          isClicking ? 'scale-125' : 'scale-100'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          width: isPointer ? '8px' : '6px',
          height: isPointer ? '8px' : '6px',
          background: 'radial-gradient(circle, #FFFFFF 0%, #FFF5DB 40%, #D6B56D 100%)',
          boxShadow: '0 0 8px #FFF9E6, 0 0 16px #D6B56D, 0 0 24px rgba(214, 181, 109, 0.8)',
        }}
      />
    </div>
  );
}
