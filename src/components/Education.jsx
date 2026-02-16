/**
 * @file Education.jsx
 * @description Education timeline section showing academic background.
 *
 * Layout:
 * - Desktop: horizontal timeline with icon nodes and connector lines
 * - Tablet/Mobile: vertical layout (reversed — school at top, degree at bottom)
 * - Each item has a circular icon/logo and a content card
 *
 * Styling:
 * - Timeline connectors and responsive layout handled in global.css
 * - Hover effects: icon scales up, card lifts and highlights
 * - Staggered fade-in animations
 */
import React from 'react';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';
import aietLogo from '../assets/AIET.png';
import apmsLogo from '../assets/APMS.png';

/**
 * Education data array.
 * Each entry includes the school name, degree, time period,
 * an icon (react-icons fallback), and an optional logo image.
 */
const education = [
    {
        school: 'AP Model School & Jr. College (APMS)',
        degree: 'Secondary School',
        period: 'June 2017 - April 2022',
        icon: <FaGraduationCap />,
        logo: apmsLogo
    },
    {
        school: 'Avanthi Institute of Engineering & Technology',
        degree: 'Diploma of Education, Computer Engineering',
        period: 'July 2022 - April 2025',
        icon: <FaUniversity />,
        logo: aietLogo
    },
    {
        school: 'Avanthi Institute of Engineering & Technology',
        degree: 'Bachelor of Technology - BTech, CSE',
        period: 'July 2025 - July 2028',
        icon: <FaUniversity />,
        logo: aietLogo
    }
];

const Education = () => {
    return (
        <section id="education" className="section container">
            <h2 className="section-title">Education</h2>

            {/* Timeline container — layout changes handled by CSS media queries */}
            <div className="education-timeline">
                {education.map((edu, index) => (
                    <div
                        key={index}
                        className="education-item animate-fade-in"
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        {/* Icon / Logo node — circular wrapper */}
                        <div className="education-icon-wrapper" style={{ overflow: 'hidden' }}>
                            {edu.logo ? (
                                /* If a logo image is provided, display it (covers the circle) */
                                <img
                                    src={edu.logo}
                                    alt={`${edu.school} Logo`}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            ) : (
                                /* Otherwise fall back to the react-icons icon */
                                edu.icon
                            )}
                        </div>

                        {/* Content card — degree, school name, and date range */}
                        <div className="education-card">
                            {/* Degree / qualification title */}
                            <h3 style={{
                                fontSize: 'clamp(1rem, 2vw, var(--font-size-lg))', /* Responsive */
                                color: 'var(--color-primary)',
                                marginBottom: '0.5rem',
                                fontWeight: 'bold'
                            }}>
                                {edu.degree}
                            </h3>

                            {/* Institution name */}
                            <p style={{
                                fontSize: 'clamp(0.875rem, 1.5vw, var(--font-size-base))',
                                color: '#e2e8f0',
                                marginBottom: '0.25rem'
                            }}>
                                {edu.school}
                            </p>

                            {/* Date range — monospace for clean alignment */}
                            <p style={{
                                fontSize: 'var(--font-size-sm)',
                                color: '#94a3b8',
                                fontFamily: 'var(--font-mono)'
                            }}>
                                {edu.period}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
