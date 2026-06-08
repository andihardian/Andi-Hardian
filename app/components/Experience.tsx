'use client';
import { useState } from 'react';

const workPoints = [
  'Developed a Flutter mobile app for credit cost calculation, replacing a manual Excel-based process',
  'Provided hardware and software troubleshooting and technical support',
  'Installed, configured, and updated software required for company operations',
  'Managed customer data and administrative records accurately',
  'Generated reports and processed data using Microsoft Excel and Word',
  'Validated and cross-checked physical and digital document records',
];

export default function Experience() {
  const [open, setOpen] = useState(true);

  return (
    <section id="experience" style={{ padding: '7rem 2.5rem', maxWidth: 1100, margin: '0 auto' }}>
      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.6rem', fontWeight: 500 }}>
        Career Path
      </p>
      <h2 style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '4rem' }}>
        Experience &amp; Education
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>

        {/* Work */}
        <div>
          <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '2rem' }}>
            Work Experience
          </p>

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--sans)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                  IT Support &amp; Administrative Staff
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 500 }}>PT Kaisar </p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 400, marginTop: '0.15rem' }}>Batam, Kepulauan Riau</p>
              </div>
              <span style={{
                fontSize: '0.7rem', color: 'var(--text-muted)',
                border: '1px solid var(--border)', padding: '0.2rem 0.65rem',
                borderRadius: 4, height: 'fit-content', whiteSpace: 'nowrap',
              }}>
                May 2024 – May 2026
              </span>
            </div>

            <button onClick={() => setOpen(!open)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: '0.78rem', color: 'var(--text-muted)',
              fontFamily: 'var(--sans)', fontWeight: 400,
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              marginBottom: open ? '1.25rem' : 0, padding: 0,
            }}>
              {open ? 'Hide details' : 'Show details'}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>

            {open && (
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {workPoints.map((pt, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7, fontWeight: 300 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 3 }}>
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Education + Award */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {/* Education */}
          <div>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '2rem' }}>
              Education
            </p>
            <div style={{
              border: '1px solid var(--border)', borderRadius: 14,
              padding: '1.75rem', background: 'var(--bg-card)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <h3 style={{ fontFamily: 'var(--sans)', fontSize: '1.05rem', fontWeight: 700 }}>Politeknik Negeri Batam</h3>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', border: '1px solid var(--border)', padding: '0.2rem 0.6rem', borderRadius: 4 }}>
                  2024 – 2028
                </span>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 400, marginBottom: '1rem' }}>
                D4 Teknologi Rekayasa Perangkat Lunak
              </p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                <span style={{ fontFamily: 'var(--sans)', fontSize: '2rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>3.75</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>/ 4.00 GPA</span>
              </div>
            </div>
          </div>

          {/* Award */}
          <div>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '2rem' }}>
              Awards
            </p>
            <div style={{
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 14, padding: '1.75rem',
              background: 'var(--bg-card)',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                background: 'linear-gradient(to right, #fff, transparent)',
              }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>2026</span>
                <span style={{
                  fontSize: '0.68rem', fontWeight: 600,
                  background: 'rgba(255,255,255,0.1)',
                  color: '#fff', padding: '0.2rem 0.6rem', borderRadius: 100,
                  border: '1px solid rgba(255,255,255,0.15)',
                }}>
                  National Level
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--sans)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                P2MW 2026
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.75, fontWeight: 300 }}>
                Passed internal campus selection with <strong style={{ color: '#fff', fontWeight: 600 }}>Ecozyne</strong> — a mobile platform combining eco-enzyme education, waste bank marketplace, gamification, and AI waste scanning. Represented Politeknik Negeri Batam at national level.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #experience > div:last-child { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
