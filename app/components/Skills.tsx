'use client';
import { ReactElement } from 'react';

// SVG icons for each tech tool
const icons: Record<string, ReactElement> = {
  Laravel: (
    <svg viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
      <path d="M49.626 11.564a.809.809 0 01.028.209v10.972a.8.8 0 01-.402.694l-9.209 5.302-.011.006v10.683a.801.801 0 01-.402.694L20.42 51.01c-.047.028-.098.044-.148.065-.017.007-.035.013-.052.02a.805.805 0 01-.41 0c-.022-.006-.045-.014-.068-.022-.044-.018-.09-.033-.132-.058L.402 39.97A.801.801 0 010 39.275V6.498a.806.806 0 01.03-.209c.008-.024.02-.047.03-.07.015-.035.026-.072.049-.105.014-.02.033-.036.05-.055.022-.025.04-.052.066-.073.023-.019.05-.031.076-.047.022-.014.04-.03.065-.041L9.97.114a.8.8 0 01.8 0l9.546 5.515.021.012a.801.801 0 01.382.688v10.369l8.861-5.128a.808.808 0 01.8 0zm-1.598 10.741v-9.79l-3.863 2.229-5.072 2.928v9.79l8.934-5.157zM39.229 38.967v-9.79l-4.994 2.868-14.243 8.2v9.874zM1.602 7.719v31.154l18.238 10.512v-9.874l-9.21-5.277-.023-.014-.022-.013c-.026-.016-.049-.035-.072-.053-.023-.018-.048-.032-.069-.053l-.008-.01c-.02-.021-.036-.044-.054-.067-.018-.023-.04-.044-.055-.069-.013-.02-.021-.042-.031-.063-.014-.028-.031-.055-.042-.084-.005-.013-.006-.027-.01-.04-.007-.025-.016-.05-.02-.076-.004-.025-.004-.05-.006-.075-.002-.025-.006-.05-.004-.076V14.056L8.653 11.13 1.602 7.72zm8.71-5.994L1.979 7.082l8.332 4.801 8.334-4.801-8.334-4.357zM19.447 21.65L24.5 18.768l-9.222-5.325-8.335 4.798 8.58 4.949 3.924-1.54zM25.392 39.318l14.202-8.174 3.933-2.256-8.278-4.774-9.22 5.325-4.072 2.349zm14.631-21.738l-8.334 4.8 8.334 4.8 8.333-4.8-8.333-4.8z" fill="#FF2D20"/>
    </svg>
  ),
  Flutter: (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
      <path fill="#54C5F8" d="M26.7 3L4 25.7l7.1 7.1L41 10z"/>
      <path fill="#01579B" d="M26.7 3L4 25.7l7.1 7.1L41 10z" opacity=".2"/>
      <path fill="#54C5F8" d="M4 25.7L19.8 41.5l7.2-7.1-7.9-8.7z"/>
      <path fill="#29B6F6" d="M19.8 41.5L27 34.4l7.4 7.2-7.4 7.1z"/>
      <path fill="#01579B" d="M19.8 41.5L27 34.4l3.7 3.7-7.5 7.5z" opacity=".2"/>
      <path fill="#54C5F8" d="M27 34.4L19.8 27l7.2-7.1 14.4 14.2z"/>
    </svg>
  ),
  'Next.js': (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
      <circle cx="24" cy="24" r="20" fill="#000"/>
      <path fill="#fff" d="M13.7 30.3V17.4h1.7l10.6 15.3v-15.3h1.6v12.9h-1.7L15.3 19.1v11.2z"/>
      <path fill="url(#nextgrad)" d="M29.4 17.4l5.5 8.4-5.5 4.5V17.4z" opacity=".7"/>
      <defs>
        <linearGradient id="nextgrad" x1="29.4" y1="17.4" x2="35" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff"/>
          <stop offset="1" stopColor="#fff" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  PHP: (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
      <ellipse cx="24" cy="24" rx="22" ry="13" fill="#6181B6"/>
      <path fill="#fff" d="M12 19h2.5l.5 2h1.5l-.5-2H18l1.5 8H18l-.5-2.5h-3l.5 2.5h-1.5zm2 4.5h2.5l-.5-2.5h-2.5zm8-4.5h4.5c1 0 1.5.5 1.5 1.5l-.5 3c-.2 1-1 1.5-2 1.5H24l.5-2h1.5l.3-2H24zm1 4h1l.5-2.5h-1zm5-4h4.5c1 0 1.5.5 1.5 1.5l-.5 3c-.2 1-1 1.5-2 1.5H30l.5-2h1.5l.3-2H30zm1 4h1l.5-2.5h-1z"/>
    </svg>
  ),
  MySQL: (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
      <path fill="#00BCD4" d="M32 10H6v28h26V10z"/>
      <path fill="#006064" d="M32 10h8v28h-8V10z"/>
      <path fill="#fff" d="M11 18h12v3H11zm0 5h8v3h-8zm0 5h10v3H11z"/>
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
      <path fill="#F4511E" d="M44.9 22.6L25.4 3.1c-0.8-0.8-2-0.8-2.8 0l-4.3 4.3 5.4 5.4c0.5-0.2 1-0.3 1.5-0.3 2.2 0 4 1.8 4 4 0 0.5-0.1 1-0.3 1.5l5.2 5.2c0.5-0.2 1-0.3 1.5-0.3 2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4c0-0.7 0.2-1.4 0.5-2l-4.8-4.8V34c1.5 0.7 2.5 2.2 2.5 3.9 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1.7 1-3.2 2.5-3.9V20.6c-1.5-0.7-2.5-2.2-2.5-3.9 0-0.7 0.2-1.4 0.5-2l-5.3-5.3-14 14c-0.8 0.8-0.8 2 0 2.8l19.5 19.5c0.8 0.8 2 0.8 2.8 0L44.9 25.4c0.8-0.8 0.8-2 0-2.8z"/>
    </svg>
  ),
  'REST API': (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
      <rect x="4" y="14" width="40" height="20" rx="4" fill="#1565C0"/>
      <text x="24" y="27" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">API</text>
    </svg>
  ),
  Cypress: (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
      <circle cx="24" cy="24" r="20" fill="#1B1E2E"/>
      <circle cx="24" cy="24" r="8" fill="none" stroke="#69D3A7" strokeWidth="2.5"/>
      <circle cx="24" cy="24" r="2.5" fill="#69D3A7"/>
    </svg>
  ),
  PHPUnit: (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
      <rect x="4" y="4" width="40" height="40" rx="6" fill="#6181B6"/>
      <text x="24" y="30" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">PHPu</text>
    </svg>
  ),
  OpenCV: (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
      <circle cx="16" cy="16" r="10" fill="#E53935"/>
      <circle cx="32" cy="16" r="10" fill="#43A047"/>
      <circle cx="24" cy="30" r="10" fill="#1E88E5"/>
    </svg>
  ),
  YOLO: (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
      <rect x="4" y="4" width="40" height="40" rx="4" fill="#222"/>
      <rect x="8" y="8" width="14" height="14" rx="2" fill="none" stroke="#fff" strokeWidth="2"/>
      <rect x="26" y="8" width="14" height="14" rx="2" fill="none" stroke="#fff" strokeWidth="2"/>
      <rect x="8" y="26" width="14" height="14" rx="2" fill="none" stroke="#fff" strokeWidth="2"/>
      <circle cx="33" cy="33" r="5" fill="#00E676"/>
    </svg>
  ),
  RAG: (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
      <rect x="4" y="4" width="40" height="40" rx="6" fill="#7C3AED"/>
      <path d="M14 24a10 10 0 0120 0" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="24" cy="28" r="4" fill="#fff"/>
    </svg>
  ),
  IoT: (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
      <circle cx="24" cy="24" r="6" fill="#00ACC1"/>
      <circle cx="24" cy="24" r="12" fill="none" stroke="#00ACC1" strokeWidth="2" opacity="0.5"/>
      <circle cx="24" cy="24" r="19" fill="none" stroke="#00ACC1" strokeWidth="1.5" opacity="0.25"/>
    </svg>
  ),
};

const techGroups = [
  {
    title: 'FRONTEND & MOBILE',
    skills: [
      { name: 'Laravel', label: 'Laravel / PHP', icon: 'Laravel' },
      { name: 'Next.js', label: 'Next.js', icon: 'Next.js' },
      { name: 'Flutter', label: 'Flutter', icon: 'Flutter' },
      { name: 'PHP', label: 'PHP', icon: 'PHP' },
    ],
  },
  {
    title: 'BACKEND & DATABASE',
    skills: [
      { name: 'MySQL', label: 'MySQL', icon: 'MySQL' },
      { name: 'REST API', label: 'REST API', icon: 'REST API' },
      { name: 'Git', label: 'Git', icon: 'Git' },
    ],
  },
  {
    title: 'TESTING & QA',
    skills: [
      { name: 'Cypress', label: 'Cypress', icon: 'Cypress' },
      { name: 'PHPUnit', label: 'PHPUnit', icon: 'PHPUnit' },
    ],
  },
  {
    title: 'AI & VISION',
    skills: [
      { name: 'RAG', label: 'RAG / LLM', icon: 'RAG' },
      { name: 'OpenCV', label: 'OpenCV / LBPH', icon: 'OpenCV' },
      { name: 'YOLO', label: 'YOLO', icon: 'YOLO' },
      { name: 'IoT', label: 'IoT Systems', icon: 'IoT' },
    ],
  },
];

const softSkills = ['Problem Solving', 'Team Collaboration', 'Continuous Learning', 'Attention to Detail'];

export default function Skills() {
  return (
    <section id="skills" style={{
      padding: '7rem 2.5rem',
      background: 'var(--bg-card)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.6rem', fontWeight: 500 }}>
          Technical Arsenal
        </p>
        <h2 style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '3.5rem' }}>
          My preferred tools<br />
          <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--text-muted)' }}>of choice.</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
          {techGroups.map(group => (
            <div key={group.title} style={{
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: 14, padding: '1.75rem',
            }}>
              <p style={{ fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem', fontWeight: 600 }}>
                {group.title}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {group.skills.map(skill => (
                  <div key={skill.name} style={{
                    display: 'flex', alignItems: 'center', gap: '0.6rem',
                    padding: '0.6rem 0.75rem',
                    background: 'var(--bg-card)', borderRadius: 8,
                    border: '1px solid var(--border)',
                    transition: 'border-color 0.2s',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border-strong)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                  >
                    <span style={{
                      width: 30, height: 30, borderRadius: 6,
                      background: '#1a1a1a',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      {icons[skill.icon] ?? (
                        <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#aaa' }}>{skill.name[0]}</span>
                      )}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontWeight: 400, lineHeight: 1.2 }}>
                      {skill.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ paddingTop: '2.5rem', borderTop: '1px solid var(--border)' }}>
          <p style={{ fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem', fontWeight: 600 }}>
            Soft Skills
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {softSkills.map(s => (
              <span key={s} style={{
                border: '1px solid var(--border-strong)',
                padding: '0.5rem 1.25rem', borderRadius: 100,
                fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: 400,
                transition: 'all 0.2s', cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#000'; e.currentTarget.style.borderColor = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-dim)'; e.currentTarget.style.borderColor = 'var(--border-strong)'; }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
