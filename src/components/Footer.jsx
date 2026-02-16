/**
 * @file Footer.jsx
 * @description Simple footer with a copyright notice and tech credit.
 * Centred text, separated from content by a top border.
 */
import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: 'var(--spacing-lg) 0',
            borderTop: '1px solid var(--color-border)', /* Visual separator */
            textAlign: 'center',
            color: '#94a3b8'
        }}>
            <div className="container">
                {/* Dynamic year so it never goes stale */}
                <p>&copy; {new Date().getFullYear()} Portfolio. Built with React &amp; Vite.</p>
            </div>
        </footer>
    );
};

export default Footer;
