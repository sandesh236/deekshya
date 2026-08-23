const year = new Date().getFullYear();

export default function Footer() {
    return (
        <footer
            id="footer"
            style={{
                background: 'var(--gray-subtle)',
                borderTop: '1px solid var(--gray-line)',
            }}
        >
            <div className="layout" style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>

                {/* Top grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '2.5rem',
                    marginBottom: '3.5rem',
                }}>

                    {/* Brand */}
                    <div style={{ gridColumn: 'span 1' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
                            <img src="/images/logo/nav-logo.png" alt="Deekshya" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                            <div style={{ lineHeight: 1 }}>
                                <div style={{
                                    fontFamily: "'Fraunces', Georgia, serif",
                                    fontWeight: 600, fontSize: '1.0625rem',
                                    letterSpacing: '-0.03em', color: 'var(--ink)',
                                }}>
                                    Deekshya
                                </div>
                                <div style={{
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: '0.5625rem', letterSpacing: '0.16em',
                                    textTransform: 'uppercase', color: 'var(--ink-3)',
                                    marginTop: '3px',
                                }}>
                                    School MIS
                                </div>
                            </div>
                        </div>
                        <p style={{ fontSize: '0.875rem', color: 'var(--ink-3)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                            School information management and automation software.
                        </p>
                        <p style={{ fontSize: '0.875rem', color: 'var(--ink-3)', lineHeight: 1.6 }}>
                            Built by{' '}
                            <a
                                href="https://tricodetechnology.com.np"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'var(--blue)', fontWeight: 600, textDecoration: 'none' }}
                            >
                                TriCode Technology
                            </a>
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <div style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '0.6875rem', letterSpacing: '0.1em',
                            textTransform: 'uppercase', color: 'var(--ink-3)',
                            marginBottom: '1.25rem',
                        }}>
                            Contact
                        </div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {[
                                { label: 'Phone',    value: '+977 9765354418',                     href: 'tel:+9779765354418' },
                                { label: 'Email',    value: 'official@tricodetechnology.com.np',   href: 'mailto:official@tricodetechnology.com.np' },
                                { label: 'Location', value: 'Kathmandu, Nepal',                    href: null },
                            ].map(({ label, value, href }) => (
                                <li key={label}>
                                    <div style={{
                                        fontFamily: "'JetBrains Mono', monospace",
                                        fontSize: '0.5625rem', letterSpacing: '0.1em',
                                        textTransform: 'uppercase', color: 'var(--ink-4)',
                                        marginBottom: '2px',
                                    }}>
                                        {label}
                                    </div>
                                    {href ? (
                                        <a href={href} style={{ fontSize: '0.875rem', color: 'var(--ink-2)', textDecoration: 'none' }}>
                                            {value}
                                        </a>
                                    ) : (
                                        <span style={{ fontSize: '0.875rem', color: 'var(--ink-2)' }}>{value}</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links */}
                    <div>
                        <div style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '0.6875rem', letterSpacing: '0.1em',
                            textTransform: 'uppercase', color: 'var(--ink-3)',
                            marginBottom: '1.25rem',
                        }}>
                            Links
                        </div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {[
                                { label: 'TriCode Technology', href: 'https://tricodetechnology.com.np' },
                                { label: 'Get a demo',         href: '#contact' },
                                { label: 'Features',           href: '#features' },
                            ].map(({ label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        style={{ fontSize: '0.875rem', color: 'var(--ink-2)', textDecoration: 'none' }}
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: 'var(--gray-line)', marginBottom: '1.5rem' }} />

                {/* Bottom bar */}
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.6875rem', letterSpacing: '0.1em',
                        textTransform: 'uppercase', color: 'var(--ink-4)',
                    }}>
                        © {year} TriCode Technology. All rights reserved.
                    </span>
                    <span style={{
                        fontFamily: "'Fraunces', Georgia, serif",
                        fontSize: '0.875rem', fontStyle: 'italic', color: 'var(--ink-4)',
                    }}>
                        Built with precision. Made for schools.
                    </span>
                </div>

            </div>
        </footer>
    );
}
