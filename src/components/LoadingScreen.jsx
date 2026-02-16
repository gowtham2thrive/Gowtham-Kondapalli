/**
 * @file LoadingScreen.jsx
 * @description Full-screen loading overlay with an animated icon.
 *
 * Behaviour:
 * - Displays a centered GIF animation on a solid background
 * - After 1.8 seconds, fades out over 0.5 seconds
 * - Once fade completes, calls onLoadingComplete() to unmount
 * - Uses sessionStorage in App.jsx to ensure it only shows on fresh tab opens
 *   (not on page refresh)
 *
 * @param {Function} onLoadingComplete - Callback fired after animation ends
 */
import React, { useState, useEffect } from 'react';
import iconAnimation from '../assets/icon-animation.gif';

const LoadingScreen = ({ onLoadingComplete }) => {
    /* Controls the CSS opacity — starts visible, set to 0 to trigger fade-out */
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        /* --- Timer sequence ---
         * 1. Wait 1.8s for the icon animation to play
         * 2. Set opacity to 0 (triggers CSS transition)
         * 3. After 0.5s fade, mark sessionStorage and call parent callback
         */
        const timer = setTimeout(() => {
            setIsVisible(false);                           // Begin fade-out
            sessionStorage.setItem('tabLoaded', 'true');   // Mark tab as loaded
            setTimeout(() => {
                onLoadingComplete();                       // Remove component from DOM
            }, 500);
        }, 1800);

        /* Cleanup: cancel timer if component unmounts early */
        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    return (
        <div style={{
            /* Full-screen overlay, centered content */
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'var(--color-bg)',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            /* Stack above everything */
            zIndex: 9999,

            /* Opacity-based fade-out controlled by isVisible state */
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.5s ease-out',

            /* Allow clicks to pass through once invisible */
            pointerEvents: isVisible ? 'auto' : 'none'
        }}>
            {/* Animated icon — responsive size */}
            <img
                src={iconAnimation}
                alt="Loading"
                style={{
                    width: 'clamp(80px, 20vw, 150px)',
                    height: 'clamp(80px, 20vw, 150px)',
                    objectFit: 'contain'
                }}
            />
        </div>
    );
};

export default LoadingScreen;
