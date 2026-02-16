/**
 * @file Experience.jsx
 * @description Professional experience section with a vertical timeline.
 *
 * Features:
 * - Dynamic duration calculation from start date to present
 * - Vertical timeline with dots and a continuous connector line
 * - Supports both single-paragraph and bullet-list descriptions
 * - Responsive: timeline aligns properly on all screen sizes
 */
import React from 'react';

/**
 * Calculates the human-readable duration between two dates.
 * @param {string}      startDate - ISO date string (e.g. '2025-01-01')
 * @param {string|Date} endDate   - End date; defaults to current date
 * @returns {string} e.g. "1 year 6 months"
 */
const calculateDuration = (startDate, endDate = new Date()) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    /* Correct for negative months */
    if (months < 0) {
        years--;
        months += 12;
    }

    /* Include the current (partial) month */
    months += 1;
    if (months >= 12) {
        years++;
        months -= 12;
    }

    /* Build readable string, filtering out zero values */
    const yearStr = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
    const monthStr = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : '';
    return [yearStr, monthStr].filter(Boolean).join(' ');
};

/**
 * Experience data array.
 * Each entry can have an optional `company` field and the `description`
 * can be either a plain string or an array of bullet-point strings.
 */
const experiences = [
    {
        role: 'Founder',
        company: 'Kc',
        period: 'January 2025 - Present',
        startDate: '2025-01-01',
        description: 'Project KC is currently in progress, and additional details will be disclosed at a later time.'
    },
    {
        role: 'Stock Market Investor',
        period: 'August 2020 - Present',
        startDate: '2020-08-01',
        description: [
            'Evaluating financials and profitability.',
            'Analyzing industry trends & market conditions.',
            'Conducting historical data–driven management evaluations.',
            'Identifying & assessing potential risks.'
        ]
    },
    {
        role: 'Photography & Editing',
        company: 'Sai Studio',
        period: 'February 2018 - Present',
        startDate: '2018-02-01',
        description: [
            'A family-owned photography studio.',
            'Responsible for operating cameras during events and photoshoots.',
            'Proficient in photo and video editing.'
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section container">
            <h2 className="section-title">Experience</h2>

            {/* Timeline wrapper — uses relative positioning for the vertical line */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-lg)',
                position: 'relative',
                paddingLeft: '20px'
            }}>
                {/* Continuous vertical connector line running behind all dots */}
                <div style={{
                    position: 'absolute',
                    left: '4px',        /* Aligned with dot centers */
                    top: '10px',
                    bottom: '10px',
                    width: '2px',
                    backgroundColor: 'var(--color-border)'
                }} />

                {experiences.map((exp, index) => {
                    const duration = calculateDuration(exp.startDate);
                    return (
                        <div
                            key={index}
                            style={{
                                paddingLeft: 'var(--spacing-md)',
                                position: 'relative'
                            }}
                        >
                            {/* Timeline dot — aligned to the left edge of the container */}
                            <div style={{
                                position: 'absolute',
                                left: '-20px',   /* Pull back to align with the vertical line */
                                top: '7px',
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--color-primary)',
                                outline: '4px solid var(--color-bg)', /* Gap effect around dot */
                                zIndex: 1
                            }} />

                            {/* Role title — conditionally appends company name */}
                            <h3 style={{
                                fontSize: 'clamp(1.25rem, 3vw, var(--font-size-2xl))',
                                color: '#e2e8f0',
                                lineHeight: 1.2
                            }}>
                                {exp.role}
                                {exp.company && (
                                    <span style={{ color: 'var(--color-primary)' }}>
                                        {' '}@ {exp.company}
                                    </span>
                                )}
                            </h3>

                            {/* Date range + calculated duration */}
                            <p style={{
                                fontSize: 'var(--font-size-sm)',
                                color: '#94a3b8',
                                marginBottom: 'var(--spacing-sm)',
                                fontFamily: 'var(--font-mono)',
                                wordBreak: 'break-word' /* Prevent overflow on narrow screens */
                            }}>
                                {exp.period}{' '}
                                <span style={{ opacity: 0.6 }}>({duration})</span>
                            </p>

                            {/* Description — render as bullet list or plain paragraph */}
                            {Array.isArray(exp.description) ? (
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {exp.description.map((item, i) => (
                                        <li
                                            key={i}
                                            style={{
                                                marginBottom: '0.5rem',
                                                color: '#cbd5e1',
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                fontSize: 'var(--font-size-base)'
                                            }}
                                        >
                                            {/* Arrow bullet */}
                                            <span style={{
                                                color: 'var(--color-primary)',
                                                marginRight: '10px',
                                                marginTop: '4px',
                                                flexShrink: 0
                                            }}>
                                                ▹
                                            </span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p style={{
                                    color: '#cbd5e1',
                                    fontSize: 'var(--font-size-base)'
                                }}>
                                    {exp.description}
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Experience;
