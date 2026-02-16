/**
 * @file Header.jsx
 * @description Fixed navigation bar at the top of the viewport.
 *
 * Features:
 * - Glassmorphism effect (semi-transparent background + backdrop blur)
 * - Responsive: nav links shrink on mobile, gap adjusts at small screens
 * - Container constrains content width and centers it
 */
import React from 'react';
import '../styles/global.css';

const Header = () => {
    return (
        <header style={{
            /* Fixed positioning: always visible at the top of the viewport */
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: 'var(--header-height)', /* Uses CSS variable; shrinks on mobile (see global.css) */

            /* Glassmorphism: semi-transparent bg + blur for a frosted-glass look */
            backgroundColor: 'rgba(15, 23, 42, 0.8)',
            backdropFilter: 'blur(10px)',

            /* Bottom border for visual separation from content */
            borderBottom: '1px solid var(--color-border)',

            /* Stack above all other content */
            zIndex: 1000,

            /* Center children vertically, add side padding */
            display: 'flex',
            alignItems: 'center',
            padding: '0 var(--spacing-md)'
        }}>
            {/* Inner container: constrains to max-width and spaces logo ↔ nav */}
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%'
            }}>
                {/* Site Logo / Title */}
                <h1 style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', fontWeight: 'bold' }}>
                    <a href="#">Portfolio</a>
                </h1>

                {/* Navigation Links */}
                <nav>
                    <ul style={{
                        display: 'flex',
                        gap: 'clamp(0.75rem, 2vw, var(--spacing-md))', /* Responsive gap */
                        listStyle: 'none'
                    }}>
                        {['About', 'Projects', 'Contact'].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    style={{
                                        fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)', /* Scales down on tiny screens */
                                        fontWeight: 500
                                    }}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
