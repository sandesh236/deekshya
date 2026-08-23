import { featuresData } from '@/data/features';

export default function FeaturesList() {
    return (
        <section id="features" style={{ background: 'var(--cream)' }}>

            {/* Section header */}
            <div style={{ borderTop: '1px solid var(--gray-line)', borderBottom: '1px solid var(--gray-line)', background: 'var(--gray-subtle)' }}>
                <div className="layout" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
                    <div className="overline" style={{ marginBottom: '1.25rem' }}>What it does</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem' }}>
                        <h2 style={{ maxWidth: '20ch', margin: 0 }}>
                            Six modules.<br />
                            <span style={{ color: 'var(--blue)', fontStyle: 'italic' }}>One system.</span>
                        </h2>
                        <p style={{ maxWidth: '28rem', margin: 0, fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.75 }}>
                            Each module works on its own or together — student records
                            feed HR, HR feeds payroll, everything stays in sync automatically.
                        </p>
                    </div>
                </div>
            </div>

            {/* Feature rows — editorial numbered list, matches TriCode pattern */}
            <div className="layout" style={{ paddingTop: '1rem', paddingBottom: '5rem' }}>
                <div style={{ borderBottom: '1px solid var(--gray-line)' }}>
                    {featuresData.map((feature, index) => (
                        <FeatureRow key={feature.id} feature={feature} index={index} />
                    ))}
                </div>
            </div>

        </section>
    );
}

function FeatureRow({ feature, index }) {
    const isEven = index % 2 === 0;

    return (
        <div
            className="feat-row"
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '0',
                borderTop: '1px solid var(--gray-line)',
                padding: '4rem 0',
                alignItems: 'center',
                transition: 'background 0.2s',
            }}
        >
            <style>{`
                @media (min-width: 768px) {
                    .feat-row { grid-template-columns: 1fr 1fr !important; }
                }
                .feat-row:hover { background: var(--gray-subtle); }
            `}</style>

            {/* Text */}
            <div style={{ order: isEven ? 1 : 2, paddingRight: isEven ? '3rem' : 0, paddingLeft: isEven ? 0 : '3rem' }}>
                {/* Index */}
                <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.6875rem', letterSpacing: '0.1em',
                    textTransform: 'uppercase', color: 'var(--blue)',
                    marginBottom: '1.25rem',
                }}>
                    {String(index + 1).padStart(2, '0')} /
                </div>

                <h3 style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontSize: 'clamp(1.375rem, 2.5vw, 1.75rem)',
                    fontWeight: 600, letterSpacing: '-0.025em',
                    color: 'var(--ink)', marginBottom: '1.5rem',
                }}>
                    {feature.title}
                </h3>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {feature.payload.data.map((item, i) => (
                        <li key={i} style={{
                            display: 'flex', gap: '1rem',
                            marginBottom: '0.875rem', alignItems: 'flex-start',
                        }}>
                            <span style={{
                                width: '5px', height: '5px', borderRadius: '50%',
                                background: 'var(--blue)', flexShrink: 0, marginTop: '0.5rem',
                            }} />
                            <div>
                                <p style={{ fontWeight: 600, color: 'var(--ink)', fontSize: '0.9375rem', marginBottom: '0.2rem', lineHeight: 1.4 }}>
                                    {item.title}
                                </p>
                                {item.subtitle && (
                                    <p style={{ color: 'var(--ink-3)', fontSize: '0.875rem', lineHeight: 1.55, margin: 0 }}>
                                        {item.subtitle}
                                    </p>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Image — clean, no box */}
            <div style={{
                order: isEven ? 2 : 1,
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                padding: '1rem 0',
            }}>
                <img
                    src={feature.payload.image}
                    alt={feature.title}
                    style={{ maxWidth: '100%', maxHeight: '280px', objectFit: 'contain', opacity: 0.88 }}
                />
            </div>

        </div>
    );
}
