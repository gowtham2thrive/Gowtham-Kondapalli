/**
 * @file Contact.jsx
 * @description "Get In Touch" section with social media links.
 *
 * Features:
 * - Centred layout with max-width constraint
 * - Pill-shaped social buttons (LinkedIn, GitHub)
 * - Hover effects: background fill (LinkedIn), border/color change (GitHub)
 * - Fully responsive — buttons wrap on narrow screens
 */
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <section
            id="contact"
            className="section container"
            style={{
                textAlign: 'center',
                maxWidth: '600px' /* Narrower for a focused, centred look */
            }}
        >
            <h2 className="section-title">Get In Touch</h2>

            {/* Introductory text */}
            <p style={{
                fontSize: 'clamp(1rem, 2vw, var(--font-size-lg))', /* Responsive */
                color: '#94a3b8',
                marginBottom: 'var(--spacing-lg)'
            }}>
                I'm currently in Visakhapatnam, Andhra Pradesh, India. Feel free to connect with me on social media!
            </p>

            {/* Social links — flex container that wraps on mobile */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'var(--spacing-md)',
                flexWrap: 'wrap'
            }}>
                {/* ---- LinkedIn Button ---- */}
                <a
                    href="https://www.linkedin.com/in/gowtham2thrive/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.25rem, 3vw, 2rem)',
                        border: '1px solid var(--color-primary)',
                        color: 'var(--color-primary)',
                        borderRadius: '50px',       /* Pill shape */
                        fontSize: 'clamp(0.875rem, 1.5vw, var(--font-size-base))',
                        fontWeight: 600,
                        textDecoration: 'none',
                        transition: 'all 0.2s ease'
                    }}
                    /* Hover: subtle background fill */
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(56, 189, 248, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                >
                    <FaLinkedin size={20} /> LinkedIn
                </a>

                {/* ---- GitHub Button ---- */}
                <a
                    href="https://github.com/gowtham2thrive"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.25rem, 3vw, 2rem)',
                        border: '1px solid var(--color-text)',
                        color: 'var(--color-text)',
                        borderRadius: '50px',       /* Pill shape */
                        fontSize: 'clamp(0.875rem, 1.5vw, var(--font-size-base))',
                        fontWeight: 600,
                        textDecoration: 'none',
                        transition: 'all 0.2s ease'
                    }}
                    /* Hover: border and text switch to primary color */
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-primary)';
                        e.currentTarget.style.color = 'var(--color-primary)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-text)';
                        e.currentTarget.style.color = 'var(--color-text)';
                    }}
                >
                    <FaGithub size={20} /> GitHub
                </a>
            </div>
        </section>
    );
};

export default Contact;
