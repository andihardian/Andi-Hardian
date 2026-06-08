'use client';
import { useEffect, useState } from 'react';

const roles = ['Fullstack Developer', 'QA Engineer', 'Mobile Developer', 'AI Integrator'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const t = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center',
      padding: '0 2rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Subtle grid background */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Badge */}
        <div className="fade-up" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.12)',
          padding: '0.4rem 1rem', borderRadius: 100,
          marginBottom: '2.5rem',
        }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80' }} />
          <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.02em' }}>
            Open to opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="fade-up-1" style={{
          fontFamily: 'var(--sans)',
          fontSize: 'clamp(3.5rem, 11vw, 10rem)',
          fontWeight: 900,
          lineHeight: 0.9,
          letterSpacing: '-0.04em',
          color: '#fff',
          marginBottom: '1.5rem',
        }}>
          Andi Hardian<br />
          <span style={{ color: 'rgba(255,255,255,0.25)' }}>Software</span><br />
          <span style={{ color: 'rgba(255,255,255,0.25)' }}>Engineering.</span>
        </h1>

        {/* Rotating role */}
        <div className="fade-up-2" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
          marginBottom: '1.25rem',
        }}>
          <div style={{ width: 24, height: 1, background: 'rgba(255,255,255,0.2)' }} />
          <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', fontWeight: 300, minWidth: 200 }}>
            {roles[roleIdx]}
          </span>
          <div style={{ width: 24, height: 1, background: 'rgba(255,255,255,0.2)' }} />
        </div>

        <p className="fade-up-2" style={{
          fontSize: '0.95rem',
          color: 'rgba(255,255,255,0.4)', fontWeight: 300,
          marginBottom: '3rem', lineHeight: 1.7,
        }}>
          I build web, mobile, and IoT solutions that actually work.<br />
          Based in Batam, Indonesia.
        </p>

        {/* CTAs */}
        <div className="fade-up-3" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: '#fff', color: '#000',
              border: 'none', cursor: 'pointer',
              padding: '0.9rem 2.2rem', borderRadius: 100,
              fontFamily: 'var(--sans)', fontSize: '0.9rem', fontWeight: 600,
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            View My Work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'transparent', color: '#fff',
              border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer',
              padding: '0.9rem 2.2rem', borderRadius: 100,
              fontFamily: 'var(--sans)', fontSize: '0.9rem', fontWeight: 400,
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')}
          >
            Get in Touch
          </button>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: 0, marginTop: '6rem',
          paddingTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.07)',
          flexWrap: 'wrap', justifyContent: 'center',
          opacity: visible ? 1 : 0, transition: 'opacity 0.8s 0.9s',
        }}>
          {[
            { num: '3.75', label: 'GPA / 4.00' },
            { num: '5+', label: 'Projects Built' },
            { num: '2yr', label: 'Work Experience' },
            { num: '2026', label: 'P2MW National' },
          ].map((s, i) => (
            <div key={s.label} style={{
              padding: '0 2.5rem',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none',
            }}>
              <div style={{ fontFamily: 'var(--sans)', fontSize: '2rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.4rem', fontWeight: 300, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', opacity: 0.3 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
}
