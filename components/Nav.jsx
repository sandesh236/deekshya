import { useEffect, useState } from 'react';
import UnstyledLink from './UnstyledLink';

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 24);
        window.addEventListener('scroll', fn, { passive: true });
        return () => window.removeEventListener('scroll', fn);
    }, []);

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 50,
                transition: 'background 0.3s, border-color 0.3s',
                background: scrolled ? 'rgba(250,249,247,0.94)' : 'transparent',
                backdropFilter: scrolled ? 'blur(14px)' : 'none',
                WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--gray-line)' : '1px solid transparent',
            }}
        >
            <div className="layout">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

                    {/* Logo + wordmark */}
                    <UnstyledLink href="/">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img
                                src="/images/logo/nav-logo.png"
                                alt="Deekshya"
                                style={{ width: '32px', height: '32px', objectFit: 'contain' }}
                            />
                            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                                <span style={{
                                    fontFamily: "'Fraunces', Georgia, serif",
                                    fontWeight: 600,
                                    fontSize: '1.0625rem',
                                    letterSpacing: '-0.03em',
                                    color: scrolled ? 'var(--ink)' : '#ffffff',
                                    lineHeight: 1,
                                    transition: 'color 0.3s',
                                }}>
                                    Deekshya
                                </span>
                                <span style={{
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: '0.5625rem',
                                    letterSpacing: '0.16em',
                                    textTransform: 'uppercase',
                                    color: scrolled ? 'var(--ink-3)' : 'rgba(255,255,255,0.6)',
                                    lineHeight: 1,
                                    marginTop: '3px',
                                    transition: 'color 0.3s',
                                }}>
                                    School MIS
                                </span>
                            </div>
                        </div>
                    </UnstyledLink>

                    {/* Nav links */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                        <UnstyledLink
                            href="https://tricodetechnology.com.np"
                            style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                color: scrolled ? 'var(--ink-2)' : 'rgba(255,255,255,0.75)',
                                textDecoration: 'none',
                                transition: 'color 0.2s',
                            }}
                        >
                            By TriCode ↗
                        </UnstyledLink>
                        <a
                            href="#contact"
                            className="btn-primary"
                            style={{ padding: '0.625rem 1.25rem', fontSize: '0.8125rem' }}
                        >
                            Get a demo
                        </a>
                    </div>

                </div>
            </div>
        </nav>
    );
}
