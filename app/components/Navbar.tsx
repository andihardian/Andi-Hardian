'use client';
import { useEffect, useState } from 'react';

const links = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        height: 64, padding: '0 2.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(10,10,10,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}>
        <button onClick={() => go('home')} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: 'var(--sans)', fontSize: '1.15rem', fontWeight: 800,
          color: 'var(--text)', letterSpacing: '-0.02em',
        }}>
          Andi.
        </button>

        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="desktop-nav">
          {links.map(l => (
            <button key={l} onClick={() => go(l)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--sans)', fontSize: '0.875rem', fontWeight: 400,
              color: 'var(--text-muted)', transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {l}
            </button>
          ))}
          <button onClick={() => go('contact')} style={{
            background: '#fff', color: '#000',
            border: 'none', cursor: 'pointer',
            padding: '0.5rem 1.3rem', borderRadius: 100,
            fontFamily: 'var(--sans)', fontSize: '0.875rem', fontWeight: 600,
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Let&apos;s Talk
          </button>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-btn" style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'none', flexDirection: 'column', gap: 5, padding: 4,
        }}>
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 22, height: 1.5, background: '#fff',
              transition: 'all 0.3s',
              transform: menuOpen && i === 0 ? 'rotate(45deg) translate(4px,4px)' : menuOpen && i === 2 ? 'rotate(-45deg) translate(4px,-4px)' : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {menuOpen && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0, zIndex: 199,
          background: 'rgba(10,10,10,0.98)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)',
          padding: '2rem 2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem',
        }}>
          {links.map(l => (
            <button key={l} onClick={() => go(l)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--sans)', fontSize: '1.1rem', fontWeight: 500,
              color: '#fff', textAlign: 'left',
            }}>{l}</button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
