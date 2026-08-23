export default function HeroSection() {
    return (
        <section
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'linear-gradient(135deg, #014C8F 0%, #013970 60%, #010f22 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Subtle grid texture */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
            }} />

            {/* Radial glow */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: 'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(255,255,255,0.05) 0%, transparent 70%)',
            }} />

            {/* Main content */}
            <div className="layout" style={{ flex: 1, display: 'flex', alignItems: 'center', paddingTop: '7rem', paddingBottom: '4rem', position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '52rem' }}>

                    {/* Overline */}
                    <div style={{
                        display: 'flex', alignItems: 'center', gap: '0.75rem',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.6875rem', letterSpacing: '0.12em',
                        textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)',
                        marginBottom: '1.5rem',
                    }}>
                        <span style={{ display: 'inline-block', width: '1.75rem', height: '1.5px', background: 'rgba(255,255,255,0.4)' }} />
                        School MIS · Built by TriCode Technology · Kathmandu, Nepal
                    </div>

                    {/* Headline */}
                    <h1 style={{
                        fontFamily: "'Fraunces', Georgia, serif",
                        fontWeight: 600,
                        fontSize: 'clamp(2.75rem, 7vw, 5.5rem)',
                        letterSpacing: '-0.035em',
                        lineHeight: 1.0,
                        color: '#ffffff',
                        marginBottom: '1.5rem',
                    }}>
                        Forget Excel.<br />
                        <span style={{ color: 'rgba(255,255,255,0.55)', fontStyle: 'italic' }}>
                            Manage with Deekshya.
                        </span>
                    </h1>

                    {/* Subtext */}
                    <p style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '1.125rem',
                        lineHeight: 1.7,
                        color: 'rgba(255,255,255,0.65)',
                        maxWidth: '38rem',
                        marginBottom: '3rem',
                    }}>
                        All-in-one school management software. Student records, HR,
                        accounting, library, notifications — automated and accessible
                        from anywhere.
                    </p>

                    {/* CTAs */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                        <a
                            href="#contact"
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                background: '#ffffff', color: 'var(--blue)',
                                border: '1.5px solid #ffffff',
                                padding: '0.875rem 2rem',
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.02em',
                                cursor: 'pointer', textDecoration: 'none', transition: 'opacity 0.2s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                        >
                            Get a free demo
                        </a>
                        <a
                            href="#features"
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                background: 'transparent', color: 'rgba(255,255,255,0.85)',
                                border: '1.5px solid rgba(255,255,255,0.3)',
                                padding: '0.875rem 2rem',
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontWeight: 500, fontSize: '0.875rem',
                                cursor: 'pointer', textDecoration: 'none', transition: 'border-color 0.2s',
                            }}
                        >
                            See features →
                        </a>
                    </div>

                </div>
            </div>

            {/* Stats strip */}
            <div style={{
                width: '100%', borderTop: '1px solid rgba(255,255,255,0.12)',
                background: 'rgba(0,0,0,0.15)', position: 'relative', zIndex: 1,
            }}>
                <div className="layout">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                        {[
                            { value: '6+',   label: 'Core modules' },
                            { value: '100%', label: 'Cloud-based' },
                            { value: '24/7', label: 'Data access' },
                        ].map((s) => (
                            <div key={s.label} style={{
                                padding: '1.25rem 1.75rem',
                                borderLeft: '1px solid rgba(255,255,255,0.1)',
                            }}>
                                <div style={{
                                    fontFamily: "'Fraunces', Georgia, serif",
                                    fontSize: '1.75rem', fontWeight: 600,
                                    letterSpacing: '-0.03em', color: '#ffffff',
                                    lineHeight: 1, marginBottom: '0.25rem',
                                }}>{s.value}</div>
                                <div style={{
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: '0.625rem', letterSpacing: '0.1em',
                                    textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)',
                                }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
