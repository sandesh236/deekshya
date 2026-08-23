export default function HeroSection() {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            background: 'linear-gradient(160deg, #011f44 0%, #010f22 55%, #000810 100%)',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Single large glow — top right, subtle */}
            <div style={{
                position: 'absolute', top: '-20%', right: '-10%',
                width: '70vw', height: '70vw', maxWidth: '800px', maxHeight: '800px',
                borderRadius: '50%', pointerEvents: 'none',
                background: 'radial-gradient(circle, rgba(1,76,143,0.35) 0%, transparent 65%)',
            }} />

            {/* Thin top rule — brand blue */}
            <div style={{ height: '3px', background: '#014C8F', width: '100%', flexShrink: 0 }} />

            {/* Content */}
            <div className="layout" style={{
                flex: 1, display: 'flex', flexDirection: 'column',
                justifyContent: 'center',
                paddingTop: '7rem', paddingBottom: '4rem',
                position: 'relative', zIndex: 1,
            }}>

                {/* Overline */}
                <div style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.6875rem', letterSpacing: '0.12em',
                    textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)',
                    marginBottom: '2.5rem',
                }}>
                    <span style={{ display: 'inline-block', width: '1.75rem', height: '1.5px', background: '#014C8F', flexShrink: 0 }} />
                    School MIS · Built by TriCode Technology · Kathmandu, Nepal
                </div>

                {/* Headline */}
                <h1 style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontWeight: 600,
                    fontSize: 'clamp(3rem, 7vw, 6rem)',
                    letterSpacing: '-0.04em',
                    lineHeight: 0.98,
                    color: '#ffffff',
                    marginBottom: '2rem',
                    maxWidth: '16ch',
                }}>
                    Forget Excel.<br />
                    <span style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.45)' }}>
                        Run your school<br />on Deekshya.
                    </span>
                </h1>

                {/* Sub */}
                <p style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.125rem', lineHeight: 1.75,
                    color: 'rgba(255,255,255,0.55)',
                    maxWidth: '36rem',
                    marginBottom: '3rem',
                }}>
                    Records, payroll, library, and accounts — one connected system,
                    built to replace every spreadsheet your school runs on.
                </p>

                {/* CTAs */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', marginBottom: '5rem' }}>
                    <a href="#contact" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        background: '#ffffff', color: '#010f22',
                        border: '1.5px solid #ffffff',
                        padding: '0.875rem 2rem',
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.01em',
                        textDecoration: 'none',
                        transition: 'opacity 0.15s',
                    }}
                        onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
                        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                    >
                        Get a free demo →
                    </a>
                    <a href="#features" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        background: 'transparent', color: 'rgba(255,255,255,0.6)',
                        border: '1.5px solid rgba(255,255,255,0.2)',
                        padding: '0.875rem 2rem',
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 500, fontSize: '0.875rem',
                        textDecoration: 'none',
                        transition: 'border-color 0.15s, color 0.15s',
                    }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.color = 'rgba(255,255,255,0.9)' }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
                    >
                        See what it does
                    </a>
                </div>

            </div>

            {/* Stats strip — same pattern as TriCode homepage */}
            <div style={{
                width: '100%',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(0,0,0,0.2)',
                position: 'relative', zIndex: 1, flexShrink: 0,
            }}>
                <div className="layout">
                    <div style={{
                        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                        borderRight: '1px solid rgba(255,255,255,0.08)',
                    }}>
                        {[
                            { value: '6+',   label: 'Connected modules' },
                            { value: '100%', label: 'Cloud-based' },
                            { value: '24/7', label: 'Access from anywhere' },
                        ].map(s => (
                            <div key={s.label} style={{
                                padding: '1.5rem 1.75rem',
                                borderLeft: '1px solid rgba(255,255,255,0.08)',
                            }}>
                                <div style={{
                                    fontFamily: "'Fraunces', Georgia, serif",
                                    fontSize: '1.875rem', fontWeight: 600,
                                    letterSpacing: '-0.04em', color: '#ffffff', lineHeight: 1,
                                }}>{s.value}</div>
                                <div style={{
                                    fontFamily: "'Space Grotesk'", fontWeight: 500,
                                    fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)',
                                    marginTop: '0.25rem',
                                }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
