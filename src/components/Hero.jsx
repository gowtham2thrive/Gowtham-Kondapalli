/**
 * @file Hero.jsx
 * @description Main introduction / landing section of the portfolio.
 *
 * Features:
 * - Profile picture with circular crop and shadow
 * - Gradient text name heading
 * - Role subtitle and a short bio paragraph
 * - Call-to-action button with hover lift effect
 * - All text uses clamp() for responsive sizing
 * - Staggered fade-in animations via animation-delay
 */
import React from 'react';
import profilePic from '../assets/Gowtham-Kondapalli.jpeg';

const Hero = () => {
    return (
        <section
            id="hero"
            className="section container"
            style={{
                /* Full-height landing area, vertically centered */
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start'
            }}
        >
            {/* ---- Profile Picture ---- */}
            <div
                className="animate-fade-in"
                style={{
                    /* Responsive circle: shrinks on mobile */
                    width: 'clamp(100px, 20vw, 150px)',
                    height: 'clamp(100px, 20vw, 150px)',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    marginBottom: 'var(--spacing-md)',
                    border: '4px solid var(--color-surface)',
                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)'
                }}
            >
                <img
                    src={profilePic}
                    alt="Gowtham Kondapalli"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>

            {/* ---- Name (H1) — gradient text ---- */}
            <h1
                className="animate-fade-in"
                style={{
                    fontSize: 'clamp(2rem, 5vw, 3rem)', /* Scales between 2rem ↔ 3rem */
                    lineHeight: 1.1,
                    marginBottom: 'var(--spacing-md)',
                    background: 'linear-gradient(to right, #fff, #94a3b8)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    animationDelay: '0.1s'
                }}
            >
                Gowtham Kondapalli
            </h1>

            {/* ---- Role subtitle (H2) ---- */}
            <h2
                className="animate-fade-in"
                style={{
                    fontSize: 'clamp(1rem, 3vw, 1.75rem)', /* Min 1rem on tiny screens */
                    color: 'var(--color-primary)',
                    marginBottom: 'var(--spacing-md)',
                    animationDelay: '0.2s'
                }}
            >
                Balancing Books &amp; Business | Student Founder &amp; Published Author
            </h2>

            {/* ---- Short bio paragraph ---- */}
            <p
                className="animate-fade-in"
                style={{
                    fontSize: 'clamp(1rem, 2vw, var(--font-size-xl))', /* Responsive paragraph */
                    color: '#94a3b8',
                    maxWidth: '600px',
                    marginBottom: 'var(--spacing-lg)',
                    animationDelay: '0.3s'
                }}
            >
                Learning, building, and growing, focused on getting better every day...
            </p>

            {/* ---- CTA Button — links to projects section ---- */}
            <a
                href="#projects"
                className="animate-fade-in"
                style={{
                    display: 'inline-block',
                    padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)', /* Responsive padding */
                    backgroundColor: 'var(--color-primary)',
                    color: '#fff',
                    borderRadius: '50px',  /* Pill shape */
                    fontWeight: 600,
                    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                    textDecoration: 'none',
                    animationDelay: '0.4s',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
                /* Hover: lift effect + glowing shadow */
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 10px 20px -10px var(--color-primary)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                }}
            >
                View My Work
            </a>
        </section>
    );
};

export default Hero;
