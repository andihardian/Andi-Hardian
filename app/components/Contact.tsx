'use client';
import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText('andihardi1301@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" style={{
      padding: '7rem 2.5rem',
      background: 'var(--bg-card)',
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* CTA block */}
        <div style={{
          border: '1px solid var(--border)',
          borderRadius: 20, padding: 'clamp(3rem, 6vw, 5rem)',
          background: 'var(--bg)', marginBottom: '4rem',
          textAlign: 'center', position: 'relative', overflow: 'hidden',
        }}>
          {/* subtle glow */}
          <div style={{
            position: 'absolute', top: '-120px', left: '50%', transform: 'translateX(-50%)',
            width: 500, height: 500, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 65%)',
            pointerEvents: 'none',
          }} />

          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem', fontWeight: 500 }}>
            Get in Touch
          </p>
          <h2 style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(2.2rem, 6vw, 5.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 0.95, marginBottom: '1.25rem' }}>
            Let&apos;s make something<br />
            <span style={{ color: 'var(--text-muted)', fontStyle: 'italic', fontWeight: 300 }}>amazing</span> together.
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 300, maxWidth: 400, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Open to internship opportunities, collaborations, and conversations about technology.
          </p>

          <button onClick={copy} style={{
            background: '#fff', color: '#000',
            border: 'none', cursor: 'pointer',
            padding: '0.9rem 2.2rem', borderRadius: 100,
            fontFamily: 'var(--sans)', fontSize: '0.9rem', fontWeight: 600,
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            {copied ? 'Copied!' : 'andihardi1301@gmail.com'}
            {!copied && (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
            )}
          </button>
          <p style={{ fontSize: '0.7rem', color: 'var(--text-dim)', marginTop: '0.75rem' }}>Click to copy email address</p>
        </div>

        {/* Link cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '4rem' }}>
          {[
            { label: 'Email', val: 'andihardi1301@gmail.com', href: 'mailto:andihardi1301@gmail.com' },
            { label: 'LinkedIn', val: 'andihardiansyapermana', href: 'https://www.linkedin.com/in/andihardiansyapermana' },
            { label: 'GitHub', val: 'andihardian', href: 'https://github.com/andihardian' },
            { label: 'Phone', val: '+62 878 9084 2881', href: 'tel:+6287890842881' },
          ].map(c => (
            <div key={c.label} style={{
              background: 'var(--bg)', border: '1px solid var(--border)',
              borderRadius: 12, padding: '1.5rem',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border-strong)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 500 }}>{c.label}</p>
              <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                style={{ fontSize: '0.82rem', color: '#fff', fontWeight: 400, wordBreak: 'break-all', transition: 'opacity 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                {c.val}
              </a>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ paddingTop: '2.5rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <span style={{ fontFamily: 'var(--sans)', fontSize: '1.15rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>Andi.</span>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 300 }}>Andi Hardiansya Permana — Batam, Indonesia — 2026</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[
              { label: 'GitHub', href: 'https://github.com/andihardian' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andihardiansyapermana' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 300, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
