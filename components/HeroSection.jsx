export default function HeroSection() {
    return (
        <section
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                background: '#010f22',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* ── Background elements ── */}
            {/* Large blue circle glow — top right */}
            <div style={{
                position: 'absolute', top: '-10%', right: '-5%',
                width: '55vw', height: '55vw', maxWidth: '700px', maxHeight: '700px',
                borderRadius: '50%', pointerEvents: 'none',
                background: 'radial-gradient(circle, rgba(1,76,143,0.5) 0%, transparent 70%)',
            }} />
            {/* Smaller accent — bottom left */}
            <div style={{
                position: 'absolute', bottom: '5%', left: '-8%',
                width: '35vw', height: '35vw', maxWidth: '400px', maxHeight: '400px',
                borderRadius: '50%', pointerEvents: 'none',
                background: 'radial-gradient(circle, rgba(1,76,143,0.25) 0%, transparent 70%)',
            }} />
            {/* Grid lines */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
                backgroundSize: '64px 64px',
            }} />

            {/* ── Main content ── */}
            <div className="layout" style={{
                flex: 1, display: 'flex', alignItems: 'center',
                paddingTop: '7rem', paddingBottom: '3rem',
                position: 'relative', zIndex: 1,
                gap: '4rem',
            }}>

                {/* Left — text */}
                <div style={{ flex: '1 1 0', minWidth: 0 }}>

                    {/* Logo + wordmark */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2.5rem' }}>
                        <img
                            src="/favicon/ms-icon-150x150.png"
                            alt="Deekshya"
                            style={{ width: '44px', height: '44px', borderRadius: '10px' }}
                        />
                        <div style={{ lineHeight: 1 }}>
                            <div style={{
                                fontFamily: "'Fraunces', Georgia, serif",
                                fontWeight: 700, fontSize: '1.375rem',
                                letterSpacing: '-0.03em', color: '#ffffff',
                            }}>
                                Deekshya
                            </div>
                            <div style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: '0.5625rem', letterSpacing: '0.16em',
                                textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)',
                                marginTop: '3px',
                            }}>
                                School MIS
                            </div>
                        </div>
                    </div>

                    {/* Badge */}
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        background: 'rgba(1,76,143,0.4)', border: '1px solid rgba(1,76,143,0.6)',
                        borderRadius: '100px', padding: '0.3rem 0.875rem',
                        marginBottom: '1.75rem',
                    }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4da6ff', display: 'inline-block' }} />
                        <span style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '0.625rem', letterSpacing: '0.1em',
                            textTransform: 'uppercase', color: '#4da6ff',
                        }}>
                            Built by TriCode Technology, Kathmandu
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 style={{
                        fontFamily: "'Fraunces', Georgia, serif",
                        fontWeight: 700,
                        fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                        letterSpacing: '-0.035em',
                        lineHeight: 1.05,
                        color: '#ffffff',
                        marginBottom: '1.5rem',
                    }}>
                        Stop managing<br />
                        your school<br />
                        <span style={{
                            fontStyle: 'italic',
                            background: 'linear-gradient(90deg, #4da6ff, #7ec8ff)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            with Excel.
                        </span>
                    </h1>

                    <p style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '1.0625rem', lineHeight: 1.75,
                        color: 'rgba(255,255,255,0.6)',
                        maxWidth: '34rem', marginBottom: '2.5rem',
                    }}>
                        Student records, HR, payroll, library, accounting, and
                        notifications — all in one system. Automated. Cloud-based.
                        No formula errors.
                    </p>

                    {/* CTAs */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', marginBottom: '3rem' }}>
                        <a href="#contact" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: '#014C8F', color: '#ffffff',
                            border: '1.5px solid #4da6ff',
                            padding: '0.875rem 1.875rem',
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 600, fontSize: '0.875rem',
                            textDecoration: 'none', borderRadius: '6px',
                            transition: 'background 0.2s',
                            boxShadow: '0 0 24px rgba(1,76,143,0.5)',
                        }}>
                            Get a free demo →
                        </a>
                        <a href="#features" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.8)',
                            border: '1.5px solid rgba(255,255,255,0.15)',
                            padding: '0.875rem 1.875rem',
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 500, fontSize: '0.875rem',
                            textDecoration: 'none', borderRadius: '6px',
                        }}>
                            See features
                        </a>
                    </div>

                    {/* Trust row */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                        {['No setup fee', 'Free migration', 'Nepal-based support'].map(t => (
                            <div key={t} style={{
                                display: 'flex', alignItems: 'center', gap: '0.5rem',
                            }}>
                                <span style={{ color: '#4da6ff', fontSize: '0.875rem' }}>✓</span>
                                <span style={{
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)',
                                }}>{t}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right — floating dashboard mockup cards */}
                <div style={{
                    flex: '1 1 0', minWidth: 0,
                    display: 'none',
                    position: 'relative', height: '420px',
                }}
                    className="hero-visual"
                >
                    {/* Main card */}
                    <div style={{
                        position: 'absolute', top: '0', left: '5%', right: '5%',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '12px', padding: '1.5rem',
                        backdropFilter: 'blur(12px)',
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                            <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 600, fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>
                                Student Overview
                            </span>
                            <span style={{ fontFamily: "'JetBrains Mono'", fontSize: '0.625rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em' }}>
                                2081 B.S.
                            </span>
                        </div>
                        {/* Mini bar chart */}
                        {[
                            { label: 'Grade 1', val: 85 },
                            { label: 'Grade 2', val: 72 },
                            { label: 'Grade 3', val: 91 },
                            { label: 'Grade 4', val: 68 },
                        ].map(row => (
                            <div key={row.label} style={{ marginBottom: '0.75rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                    <span style={{ fontFamily: "'Space Grotesk'", fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>{row.label}</span>
                                    <span style={{ fontFamily: "'JetBrains Mono'", fontSize: '0.6875rem', color: '#4da6ff' }}>{row.val}%</span>
                                </div>
                                <div style={{ height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px' }}>
                                    <div style={{ width: `${row.val}%`, height: '100%', background: 'linear-gradient(90deg, #014C8F, #4da6ff)', borderRadius: '2px' }} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Floating stat chip — bottom left */}
                    <div style={{
                        position: 'absolute', bottom: '10%', left: '-5%',
                        background: 'rgba(1,76,143,0.7)',
                        border: '1px solid rgba(77,166,255,0.3)',
                        borderRadius: '10px', padding: '0.875rem 1.125rem',
                        backdropFilter: 'blur(16px)',
                    }}>
                        <div style={{ fontFamily: "'Fraunces'", fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', lineHeight: 1 }}>248</div>
                        <div style={{ fontFamily: "'JetBrains Mono'", fontSize: '0.5625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginTop: '4px' }}>Students</div>
                    </div>

                    {/* Floating notification chip — top right */}
                    <div style={{
                        position: 'absolute', top: '35%', right: '-5%',
                        background: 'rgba(255,255,255,0.07)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '10px', padding: '0.75rem 1rem',
                        backdropFilter: 'blur(16px)',
                        display: 'flex', alignItems: 'center', gap: '0.625rem',
                    }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4da6ff', flexShrink: 0 }} />
                        <div>
                            <div style={{ fontFamily: "'Space Grotesk'", fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>Payroll generated</div>
                            <div style={{ fontFamily: "'JetBrains Mono'", fontSize: '0.5625rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.05em' }}>2 min ago</div>
                        </div>
                    </div>
                </div>

                <style>{`
                    @media (min-width: 900px) {
                        .hero-visual { display: block !important; }
                    }
                `}</style>
            </div>

            {/* ── Stats strip ── */}
            <div style={{
                width: '100%',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(0,0,0,0.25)',
                position: 'relative', zIndex: 1,
            }}>
                <div className="layout">
                    <div style={{
                        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                        borderRight: '1px solid rgba(255,255,255,0.08)',
                    }}>
                        {[
                            { value: '6+',   label: 'Core modules',  sub: 'Fully integrated' },
                            { value: '100%', label: 'Cloud-based',   sub: 'Access anywhere' },
                            { value: '24/7', label: 'Data access',   sub: 'Real-time sync' },
                        ].map((s) => (
                            <div key={s.label} style={{
                                padding: '1.25rem 1.75rem',
                                borderLeft: '1px solid rgba(255,255,255,0.08)',
                            }}>
                                <div style={{
                                    fontFamily: "'Fraunces', Georgia, serif",
                                    fontSize: '1.875rem', fontWeight: 700,
                                    letterSpacing: '-0.03em', color: '#ffffff',
                                    lineHeight: 1, marginBottom: '0.2rem',
                                }}>{s.value}</div>
                                <div style={{
                                    fontFamily: "'Space Grotesk'", fontWeight: 500,
                                    fontSize: '0.8125rem', color: 'rgba(255,255,255,0.65)',
                                }}>{s.label}</div>
                                <div style={{
                                    fontFamily: "'JetBrains Mono'", fontSize: '0.5625rem',
                                    letterSpacing: '0.08em', textTransform: 'uppercase',
                                    color: 'rgba(255,255,255,0.3)', marginTop: '2px',
                                }}>{s.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
