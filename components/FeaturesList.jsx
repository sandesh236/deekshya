import { featuresData } from '@/data/features';

// Accent colours per feature — gives each card its own identity
const accents = [
    { light: '#e8f0fe', dark: '#1a73e8', icon: '📊' },
    { light: '#e6f4ea', dark: '#137333', icon: '⚙️' },
    { light: '#fce8e6', dark: '#c5221f', icon: '📈' },
    { light: '#e8f0fe', dark: '#1967d2', icon: '☁️' },
    { light: '#fff3e0', dark: '#e37400', icon: '🔔' },
    { light: '#f3e8fd', dark: '#8430ce', icon: '💰' },
];

export default function FeaturesList() {
    return (
        <section id="features" style={{ background: 'var(--cream)' }}>

            {/* ── Section header ── */}
            <div style={{
                background: 'var(--gray-subtle)',
                borderTop: '1px solid var(--gray-line)',
                borderBottom: '1px solid var(--gray-line)',
            }}>
                <div className="layout" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
                    <div className="overline" style={{ marginBottom: '1.25rem' }}>
                        What Deekshya does
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem' }}>
                        <h2 style={{ maxWidth: '22ch', margin: 0 }}>
                            Everything your school<br />
                            <span style={{ color: 'var(--blue)', fontStyle: 'italic' }}>
                                needs to run itself.
                            </span>
                        </h2>
                        <p style={{ maxWidth: '28rem', margin: 0, fontSize: '1.0625rem', color: 'var(--ink-2)', lineHeight: 1.75 }}>
                            Six fully integrated modules. One dashboard.
                            Replace every spreadsheet you rely on today.
                        </p>
                    </div>
                </div>
            </div>

            {/* ── Feature cards grid ── */}
            <div className="layout" style={{ paddingTop: '4rem', paddingBottom: '5rem' }}>

                {/* Top row: first 2 features — large horizontal cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    {featuresData.slice(0, 2).map((feature, index) => (
                        <LargeCard key={feature.id} feature={feature} index={index} accent={accents[index]} />
                    ))}
                </div>

                {/* Middle row: features 3 & 4 */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    {featuresData.slice(2, 4).map((feature, index) => (
                        <SmallCard key={feature.id} feature={feature} index={index + 2} accent={accents[index + 2]} />
                    ))}
                </div>

                {/* Bottom row: features 5 & 6 */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                    {featuresData.slice(4, 6).map((feature, index) => (
                        <SmallCard key={feature.id} feature={feature} index={index + 4} accent={accents[index + 4]} />
                    ))}
                </div>
            </div>

        </section>
    );
}

function LargeCard({ feature, index, accent }) {
    return (
        <div style={{
            background: '#ffffff',
            border: '1px solid var(--gray-line)',
            borderRadius: '12px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            transition: 'box-shadow 0.2s, transform 0.2s',
        }}
            className="feat-card"
        >
            {/* Coloured top strip */}
            <div style={{ height: '4px', background: accent.dark }} />

            <div style={{ padding: '2rem', flex: 1 }}>
                {/* Icon + number */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div style={{
                        width: '48px', height: '48px', borderRadius: '10px',
                        background: accent.light,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1.375rem',
                    }}>
                        {accent.icon}
                    </div>
                    <span style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.6875rem', letterSpacing: '0.1em',
                        textTransform: 'uppercase', color: 'var(--ink-4)',
                    }}>
                        {String(index + 1).padStart(2, '0')}
                    </span>
                </div>

                <h3 style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontSize: '1.375rem', fontWeight: 600,
                    letterSpacing: '-0.02em', color: 'var(--ink)',
                    marginBottom: '1rem',
                }}>
                    {feature.title}
                </h3>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {feature.payload.data.map((item, i) => (
                        <li key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', alignItems: 'flex-start' }}>
                            <span style={{
                                width: '5px', height: '5px', borderRadius: '50%',
                                background: accent.dark, flexShrink: 0, marginTop: '0.5rem',
                            }} />
                            <div>
                                <p style={{ fontWeight: 600, color: 'var(--ink)', fontSize: '0.875rem', marginBottom: '0.15rem', lineHeight: 1.4 }}>
                                    {item.title}
                                </p>
                                {item.subtitle && (
                                    <p style={{ color: 'var(--ink-3)', fontSize: '0.8125rem', lineHeight: 1.5, margin: 0 }}>
                                        {item.subtitle}
                                    </p>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Feature image */}
            {feature.payload.image && (
                <div style={{
                    padding: '0 2rem 2rem',
                    display: 'flex', justifyContent: 'center',
                }}>
                    <img
                        src={feature.payload.image}
                        alt={feature.title}
                        style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'contain', opacity: 0.85 }}
                    />
                </div>
            )}
            <style>{`
                .feat-card:hover {
                    box-shadow: 0 8px 32px rgba(1, 76, 143, 0.12);
                    transform: translateY(-2px);
                }
            `}</style>
        </div>
    );
}

function SmallCard({ feature, index, accent }) {
    return (
        <div style={{
            background: '#ffffff',
            border: '1px solid var(--gray-line)',
            borderRadius: '12px',
            overflow: 'hidden',
            transition: 'box-shadow 0.2s, transform 0.2s',
        }}
            className="feat-card"
        >
            <div style={{ height: '3px', background: accent.dark }} />
            <div style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem' }}>
                    <div style={{
                        width: '40px', height: '40px', borderRadius: '8px',
                        background: accent.light,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1.125rem', flexShrink: 0,
                    }}>
                        {accent.icon}
                    </div>
                    <h3 style={{
                        fontFamily: "'Fraunces', Georgia, serif",
                        fontSize: '1.125rem', fontWeight: 600,
                        letterSpacing: '-0.02em', color: 'var(--ink)', margin: 0,
                    }}>
                        {feature.title}
                    </h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {feature.payload.data.slice(0, 3).map((item, i) => (
                        <li key={i} style={{ display: 'flex', gap: '0.625rem', marginBottom: '0.5rem', alignItems: 'center' }}>
                            <span style={{
                                width: '4px', height: '4px', borderRadius: '50%',
                                background: accent.dark, flexShrink: 0,
                            }} />
                            <span style={{ color: 'var(--ink-2)', fontSize: '0.8125rem', lineHeight: 1.5 }}>
                                {item.title}
                            </span>
                        </li>
                    ))}
                    {feature.payload.data.length > 3 && (
                        <li style={{
                            fontFamily: "'JetBrains Mono'", fontSize: '0.625rem',
                            letterSpacing: '0.08em', textTransform: 'uppercase',
                            color: accent.dark, marginTop: '0.75rem',
                        }}>
                            +{feature.payload.data.length - 3} more
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}
