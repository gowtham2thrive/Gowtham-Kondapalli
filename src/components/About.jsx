/**
 * @file About.jsx
 * @description "About Me" section displaying a short bio paragraph and a
 * grid of skills/interests.
 *
 * Layout:
 * - Two-column grid on desktop (bio left, skills right)
 * - Stacks to single column on mobile via auto-fit minmax
 * - Skills list uses its own inner grid that also collapses on narrow screens
 */
import React from 'react';

/** Skills data — edit this array to update displayed skills */
const skills = [
    'AI-Assisted Full-Stack Development',
    'Database Management (SQL)',
    'API Integration',
    'Supply Chain Automation',
    'D2C Operations',
    'Systems Architecture'
];

const About = () => {
    return (
        <section id="about" className="section container">
            {/* Section heading with gradient text (styled in global.css) */}
            <h2 className="section-title">About Me</h2>

            {/* Two-column grid: collapses to single column when viewport < 300px */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
                gap: 'var(--spacing-lg)'
            }}>
                {/* ---- Bio Column ---- */}
                <div>
                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, var(--font-size-lg))', /* Responsive paragraph */
                        color: '#cbd5e1',
                        lineHeight: 1.7,
                        marginBottom: 'var(--spacing-sm)'
                    }}>
                        B.Tech CSE candidate integrating backend development with real-world business operations. I build full-stack applications and proprietary operational software designed to manage the supply chain, automate workflows, and scale my early-stage D2C company.
                    </p>
                </div>

                {/* ---- Skills Column ---- */}
                <div>
                    <h3 style={{
                        fontSize: 'var(--font-size-2xl)',
                        marginBottom: 'var(--spacing-sm)'
                    }}>
                        Skills &amp; Interests
                    </h3>

                    {/* Skills grid: 2 columns on desktop, 1 on mobile via auto-fit */}
                    <ul style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))',
                        gap: 'var(--spacing-xs)',
                        listStyle: 'none'
                    }}>
                        {skills.map(skill => (
                            <li
                                key={skill}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: '#94a3b8',
                                    fontSize: 'var(--font-size-base)'
                                }}
                            >
                                {/* Arrow bullet — uses flexShrink: 0 so it never collapses */}
                                <span style={{
                                    color: 'var(--color-primary)',
                                    marginRight: '10px',
                                    flexShrink: 0
                                }}>
                                    ▹
                                </span>
                                <span>{skill}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
