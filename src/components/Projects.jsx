/**
 * @file Projects.jsx
 * @description Showcases built projects in a responsive card grid,
 * followed by a dedicated Publications section.
 *
 * Features:
 * - Responsive grid: 3 columns on desktop → 1 column on mobile
 * - Cards lift on hover with smooth transform
 * - Tags rendered as pill-shaped badges
 * - External link icon (SVG) on each project title
 * - Publications card with mentor credits
 */
import React from 'react';

/**
 * Projects data array.
 * Each project has a title, description, tags, and a link (e.g. GitHub).
 */
const projects = [
    {
        title: 'Echo',
        description: 'A modern, AI-enhanced Hostel Management System built with React and Supabase. Streamlines complaints, outing requests, and staff approvals with role-based access and real-time analytics.',
        tags: ['React', 'Supabase', 'llama-3.3-70b-versatile', 'Glassmorphism', 'Groq Cloud'],
        link: 'https://github.com/gowtham2thrive/Echo'
    },
    {
        title: 'Silicon-Apocalypse',
        description: 'IoT-based disaster resilience simulation using Cisco Packet Tracer. Models a self-sufficient smart grid and autonomous perimeter defense logic.',
        tags: ['Iot', 'Smart-Grid', 'Cisco-Packet-Tracer', 'Network-Simulation', 'Disaster-Resilience'],
        link: 'https://github.com/gowtham2thrive/Silicon-Apocalypse'
    },
    {
        title: 'Timely',
        description: 'Timely is a privacy-first, client-side web tool built with vanilla JavaScript and Web Workers to automate complex academic scheduling without server dependencies.',
        tags: ['Vanilla-JavaScript', 'Web-Workers', 'Academic-Scheduling', 'Privacy-First', 'Client-Side'],
        link: 'https://github.com/gowtham2thrive/Timely'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section container">
            <h2 className="section-title">Some Things I've Built</h2>

            {/* ---- Projects Grid ---- */}
            <div style={{
                display: 'grid',
                /* min() prevents overflow on screens narrower than 280px */
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                gap: 'var(--spacing-lg)',
                marginBottom: 'var(--spacing-xl)'
            }}>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: 'var(--color-surface)',
                            padding: 'clamp(1rem, 3vw, var(--spacing-md))', /* Responsive padding */
                            borderRadius: '24px',
                            transition: 'transform 0.3s ease',
                            border: '1px solid var(--color-border)',
                            display: 'flex',
                            flexDirection: 'column' /* Ensure consistent card height */
                        }}
                        /* Hover: card lifts up */
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        {/* Project title with external-link icon */}
                        <h3 style={{
                            fontSize: 'clamp(1.25rem, 3vw, var(--font-size-2xl))',
                            marginBottom: 'var(--spacing-sm)'
                        }}>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                            >
                                {project.title}
                                {/* External link SVG icon */}
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                            </a>
                        </h3>

                        {/* Project description */}
                        <p style={{
                            color: '#94a3b8',
                            marginBottom: 'var(--spacing-md)',
                            fontSize: 'var(--font-size-base)',
                            flex: 1 /* Push tags to the bottom of the card */
                        }}>
                            {project.description}
                        </p>

                        {/* Tags — pill-shaped badges */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {project.tags.map(tag => (
                                <span key={tag} style={{
                                    fontSize: 'var(--font-size-xs)',
                                    color: 'var(--color-primary)',
                                    backgroundColor: 'rgba(56, 189, 248, 0.1)',
                                    padding: '4px 12px',
                                    borderRadius: '9999px',     /* Full pill shape */
                                    fontFamily: 'var(--font-mono)',
                                    border: '1px solid rgba(56, 189, 248, 0.2)'
                                }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* ---- Publications Section ---- */}
            <h2 className="section-title" style={{ marginTop: 'var(--spacing-xl)' }}>Publications</h2>

            <div style={{
                backgroundColor: 'var(--color-surface)',
                padding: 'clamp(1rem, 4vw, var(--spacing-lg))', /* Responsive padding */
                borderRadius: '24px',
                border: '1px solid var(--color-border)'
            }}>
                {/* Publication title */}
                <h3 style={{
                    fontSize: 'clamp(1.25rem, 3vw, var(--font-size-2xl))',
                    color: '#e2e8f0',
                    marginBottom: 'var(--spacing-xs)'
                }}>
                    Silicon Apocalypse Using Cisco Packet Tracer
                </h3>

                {/* Journal name */}
                <p style={{
                    color: 'var(--color-primary)',
                    marginBottom: 'var(--spacing-md)',
                    fontSize: 'clamp(1rem, 2vw, var(--font-size-lg))'
                }}>
                    Mukt Shabd Journal (UGC Approved)
                </p>

                {/* Publication details */}
                <div style={{
                    display: 'grid',
                    gap: 'var(--spacing-sm)',
                    marginBottom: 'var(--spacing-md)',
                    color: '#cbd5e1',
                    fontSize: 'clamp(0.875rem, 1.5vw, var(--font-size-base))'
                }}>
                    <p><strong>Date:</strong> 04-April 2025</p>
                    <p><strong>ISSN:</strong> 2347-315013</p>
                    <p>
                        This paper bridges the gap between theoretical network design and real-world crisis management.
                        We utilized Cisco Packet Tracer to simulate how IoT and smart automation can be engineered to
                        drastically enhance disaster preparedness in smart environments. The core objective was to take
                        complex, abstract networking theories and apply them directly to critical infrastructure challenges.
                    </p>
                </div>

                {/* Mentors section — separated by a top border */}
                <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--spacing-sm)' }}>
                    <p style={{ fontSize: 'var(--font-size-sm)', color: '#94a3b8', marginBottom: '0.5rem' }}>
                        Mentors:
                    </p>
                    <ul style={{
                        listStyle: 'none',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '1rem',
                        color: '#cbd5e1',
                        fontSize: 'clamp(0.8rem, 1.5vw, var(--font-size-base))'
                    }}>
                        <li>• S. Phani Varaprasad (Head of Department, ECE)</li>
                        <li>• B. Padmavathi (Head of Department, CME)</li>
                        <li>• S. Hemalatha (Class Coordinator)</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Projects;
