/**
 * @file Layout.jsx
 * @description Main layout wrapper that provides consistent page structure.
 *
 * Structure:
 *   <Header />        — fixed navigation bar
 *   <main>            — scrollable content area (children)
 *   <Footer />        — bottom of page
 *
 * The <main> element has top padding equal to the header height so content
 * doesn't hide behind the fixed header.
 *
 * @param {Object}         props
 * @param {React.ReactNode} props.children - Page content to render
 */
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Header />

            {/* Main content — top padding offsets the fixed header */}
            <main style={{
                paddingTop: 'var(--header-height)',
                minHeight: 'calc(100vh - 100px)' /* Prevent footer from riding too high */
            }}>
                {children}
            </main>

            <Footer />
        </>
    );
};

export default Layout;
