/**
 * @file App.jsx
 * @description Root application component.
 *
 * Responsibilities:
 * - Conditionally renders the LoadingScreen on fresh tab opens
 *   (uses sessionStorage — clears when the tab closes, persists on refresh)
 * - Once loading completes, renders the full page inside the Layout wrapper
 * - Sections: Hero → About → Experience + Education → Projects → Contact
 */
import React, { useState } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';

function App() {
  /*
   * sessionStorage check:
   * - New tab  → 'tabLoaded' not set → show loading animation
   * - Refresh  → 'tabLoaded' still set → skip loading
   * - Tab close + reopen → sessionStorage clears → show loading again
   */
  const isNewTab = !sessionStorage.getItem('tabLoaded');
  const [isLoading, setIsLoading] = useState(isNewTab);

  /** Called by LoadingScreen after its animation finishes */
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Show loading overlay only on fresh tab opens */}
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      {/* Main page content */}
      <Layout>
        <Hero />
        <About />

        {/* Experience + Education share a surface-colored background band */}
        <div
          id="experience-education"
          style={{
            background: 'var(--color-surface)',
            paddingTop: 'var(--spacing-lg)',
            paddingBottom: 'var(--spacing-md)'
          }}
        >
          <Experience />
          <Education />
        </div>

        <Projects />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
