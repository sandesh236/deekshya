import { featuresData } from '@/data/features';

export default function FeaturesList() {
    return (
        <section id="features" style={{ background: 'var(--cream)', borderTop: '1px solid var(--gray-line)' }}>
            <div className="layout section-pad">

                {/* Header */}
                <div style={{ marginBottom: '5rem' }}>
                    <div className="overline" style={{ marginBottom: '1.25rem' }}>What Deekshya does</div>
                    <h2 style={{ maxWidth: '22ch', marginBottom: '1.5rem' }}>
                        Everything your school<br />
                        <span style={{ color: 'var(--blue)', fontStyle: 'italic' }}>needs to run itself.</span>
                    </h2>
                    <p style={{ maxWidth: '42rem', fontSize: '1.125rem', color: 'var(--ink-2)', lineHeight: 1.75 }}>
                        From student records to payroll, from library tracking to cloud backups —
                        Deekshya replaces the spreadsheets, the manual entry, and the guesswork.
                    </p>
                </div>

                {/* Feature rows */}
                <div style={{ borderTop: '1px solid var(--gray-line)' }}>
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
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '3rem',
                padding: '4rem 0',
                borderBottom: '1px solid var(--gray-line)',
                alignItems: 'center',
            }}
            className="feature-row"
        >
            <style>{`
                @media (min-width: 768px) {
                    .feature-row {
                        grid-template-columns: 1fr 1fr !important;
                    }
                }
            `}</style>

            {/* Text — swap order on even/odd */}
            <div style={{ order: isEven ? 1 : 2 }}>
                {/* Number */}
                <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.6875rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--blue)',
                    marginBottom: '1.25rem',
                }}>
                    {String(index + 1).padStart(2, '0')} /
                </div>

                <h3 style={{ marginBottom: '1.5rem', color: 'var(--ink)' }}>
                    {feature.title}
                </h3>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {feature.payload.data.map((item, i) => (
                        <li key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
                            <span style={{
                                width: '6px', height: '6px', borderRadius: '50%',
                                background: 'var(--blue)', flexShrink: 0, marginTop: '0.5rem',
                            }} />
                            <div>
                                <p style={{ fontWeight: 600, color: 'var(--ink)', marginBottom: '0.25rem', fontSize: '0.9375rem' }}>
                                    {item.title}
                                </p>
                                {item.subtitle && (
                                    <p style={{ color: 'var(--ink-3)', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                                        {item.subtitle}
                                    </p>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Image */}
            <div style={{
                order: isEven ? 2 : 1,
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                padding: '1rem',
            }}>
                <img
                    src={feature.payload.image}
                    alt={feature.title}
                    style={{ maxWidth: '100%', maxHeight: '300px', objectFit: 'contain' }}
                />
            </div>

        </div>
    );
}
