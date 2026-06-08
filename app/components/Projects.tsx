'use client';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    name: 'DocuCo',
    category: 'Web',
    year: '2026',
    role: 'Fullstack Developer',
    desc: 'Web-based company document control system with an AI Assistant powered by RAG. Features semantic search, RBAC-based document filtering, and natural language query for enterprise document management.',
    tags: ['Laravel', 'RAG', 'AI', 'RBAC', 'PHP'],
    link: 'https://github.com/andihardian/Document-Controller-Admin',
  },
  {
    id: 2,
    name: 'Smart Door',
    category: 'IoT',
    year: '2026',
    role: 'Fullstack Developer',
    desc: 'IoT security monitoring system using LBPH face recognition to detect unrecognized individuals and instantly notify the property owner via Telegram bot with a real-time dashboard.',
    tags: ['Laravel', 'OpenCV', 'LBPH', 'IoT', 'Telegram'],
    link: 'https://github.com/andihardian/computer-vision-OpenCV-smart-monitoring-door',
  },
  {
    id: 3,
    name: 'Voltawaste',
    category: 'IoT',
    year: '2026',
    role: 'QA Engineer',
    desc: 'IoT-based e-waste sorting system using AI YOLO object detection for PCB and battery classification. Designed comprehensive unit, integration, and end-to-end test scenarios.',
    tags: ['IoT', 'YOLO', 'QA Testing', 'Computer Vision'],
    link: 'https://github.com/Voltawaste',
  },
  {
    id: 4,
    name: 'Ecozyne',
    category: 'Mobile',
    year: '2025',
    role: 'UI/UX & QA',
    desc: 'Flutter mobile platform for eco-enzyme education with waste bank marketplace, gamification, and AI-powered waste scanning. Selected for P2MW 2026 national level.',
    tags: ['Flutter', 'Mobile', 'Gamification', 'AI Scan'],
    link: 'https://github.com/ECOZYNE/ECOZYNE-APP',
  },
  {
    id: 5,
    name: 'KaisarTools',
    category: 'Mobile',
    year: '2025',
    role: 'Fullstack Developer',
    desc: 'Flutter mobile app replacing manual Excel-based credit cost calculations at PT Kaisar Auto Makmurindo. Used directly by operational staff in daily operations.',
    tags: ['Flutter', 'Mobile', 'UI/UX'],
    link: 'https://github.com/andihardian/kaisartools',
  },
];

const filters = ['All', 'Web', 'Mobile', 'IoT'];

export default function Projects() {
  const [active, setActive] = useState('All');
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" style={{ padding: '7rem 2.5rem', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.6rem', fontWeight: 500 }}>Portfolio</p>
          <h2 style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>
            Featured Projects
          </h2>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {filters.map(f => (
            <button key={f} onClick={() => setActive(f)} style={{
              background: active === f ? '#fff' : 'transparent',
              color: active === f ? '#000' : 'var(--text-muted)',
              border: '1px solid',
              borderColor: active === f ? '#fff' : 'var(--border-strong)',
              cursor: 'pointer',
              padding: '0.45rem 1.1rem', borderRadius: 100,
              fontFamily: 'var(--sans)', fontSize: '0.82rem',
              fontWeight: active === f ? 600 : 400,
              transition: 'all 0.2s',
            }}>
              {f}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
        {filtered.map(p => (
          <div
            key={p.id}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: hovered === p.id ? 'var(--bg-hover)' : 'var(--bg-card)',
              border: '1px solid',
              borderColor: hovered === p.id ? 'var(--border-strong)' : 'var(--border)',
              borderRadius: 16,
              padding: '2rem',
              transition: 'all 0.25s ease',
              display: 'flex', flexDirection: 'column', gap: '1.25rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: 'var(--bg-hover)',
                border: '1px solid var(--border-strong)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-muted)' }}>
                  {p.name[0]}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <span style={{
                  fontSize: '0.68rem', color: 'var(--text-muted)',
                  border: '1px solid var(--border)', padding: '0.2rem 0.6rem',
                  borderRadius: 100, fontWeight: 400,
                }}>{p.category}</span>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 400, alignSelf: 'center' }}>{p.year}</span>
              </div>
            </div>

            <div>
              <h3 style={{ fontFamily: 'var(--sans)', fontSize: '1.3rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.2rem' }}>
                {p.name}
              </h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 400 }}>{p.role}</p>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.75, fontWeight: 300, flex: 1 }}>
              {p.desc}
            </p>

            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {p.tags.map(t => (
                <span key={t} style={{
                  fontSize: '0.68rem', color: 'var(--text-dim)',
                  background: 'var(--bg)', border: '1px solid var(--border)',
                  padding: '0.2rem 0.55rem', borderRadius: 4,
                }}>{t}</span>
              ))}
            </div>

            <a href={p.link} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.82rem', color: '#fff', fontWeight: 500,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              View on GitHub
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
