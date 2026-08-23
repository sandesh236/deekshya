import { useState } from 'react';

export default function Consultation() {
    const [email, setEmail] = useState('');
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;
        // TODO: wire to backend
        setSent(true);
    };

    return (
        <section
            id="contact"
            style={{
                background: 'var(--gray-subtle)',
                borderTop: '1px solid var(--gray-line)',
                borderBottom: '1px solid var(--gray-line)',
            }}
        >
            <div className="layout section-pad">
                <div style={{ maxWidth: '38rem' }}>

                    <div className="overline" style={{ marginBottom: '1.25rem' }}>Get in touch</div>

                    <h2 style={{ marginBottom: '1.5rem' }}>
                        See Deekshya running<br />
                        <span style={{ color: 'var(--blue)', fontStyle: 'italic' }}>your school's actual data.</span>
                    </h2>

                    <p style={{ fontSize: '1.0625rem', color: 'var(--ink-2)', marginBottom: '2.5rem', lineHeight: 1.75 }}>
                        Leave your email and we'll walk you through it — no sales
                        pitch, just the product, tailored to how your school
                        actually works.
                    </p>

                    {sent ? (
                        <div style={{
                            padding: '1.25rem 1.75rem',
                            border: '1px solid var(--blue-border)',
                            background: 'var(--blue-soft)',
                        }}>
                            <p style={{ color: 'var(--blue)', fontWeight: 600, margin: 0 }}>
                                ✓ Got it — we'll be in touch within 24 hours.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                                {/* Label */}
                                <label style={{
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: '0.6875rem', letterSpacing: '0.1em',
                                    textTransform: 'uppercase', color: 'var(--ink-3)',
                                    marginBottom: '0.5rem',
                                }}>
                                    Your email address
                                </label>

                                {/* Input row */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0' }}>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="principal@school.edu.np"
                                        style={{
                                            flex: 1, minWidth: '200px',
                                            padding: '0.875rem 1rem',
                                            border: '1.5px solid var(--gray-line)',
                                            borderRight: 'none',
                                            background: 'var(--white)',
                                            fontFamily: "'Space Grotesk', sans-serif",
                                            fontSize: '0.9375rem',
                                            color: 'var(--ink)',
                                            outline: 'none',
                                        }}
                                        onFocus={e => e.target.style.borderColor = 'var(--blue)'}
                                        onBlur={e => e.target.style.borderColor = 'var(--gray-line)'}
                                    />
                                    <button
                                        type="submit"
                                        className="btn-primary"
                                        style={{ padding: '0.875rem 1.75rem' }}
                                    >
                                        Request a demo →
                                    </button>
                                </div>

                                <p style={{
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: '0.625rem', letterSpacing: '0.1em',
                                    textTransform: 'uppercase', color: 'var(--ink-4)',
                                    marginTop: '0.75rem',
                                }}>
                                    No spam. No sales call. Just a 20-minute walkthrough.
                                </p>
                            </div>
                        </form>
                    )}

                </div>
            </div>
        </section>
    );
}
