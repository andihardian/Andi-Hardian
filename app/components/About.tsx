'use client';

export default function About() {
  return (
    <section id="about" style={{
      padding: '7rem 2.5rem',
      background: '#fff', color: '#000',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.0, marginBottom: '1.5rem', color: '#000' }}>
          Who I Am
        </h2>
        <div style={{ width: 60, height: 3, background: '#000', marginBottom: '2.5rem' }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}>
          <div>
            <p style={{ fontSize: '1rem', color: '#444', lineHeight: 1.9, marginBottom: '1.25rem', fontWeight: 400 }}>
              I am an <strong style={{ color: '#000' }}>IT student at Politeknik Negeri Batam</strong> studying D4 Teknologi Rekayasa Perangkat Lunak (Software Engineering), currently in my 4th semester with a GPA of 3.75.
            </p>
            <p style={{ fontSize: '1rem', color: '#444', lineHeight: 1.9, marginBottom: '2.5rem', fontWeight: 400 }}>
              My work spans <strong style={{ color: '#000' }}>fullstack web development</strong>, mobile apps with Flutter, QA engineering, and AI integration. I have two years of professional experience and was selected for the P2MW national program in 2026 with Ecozyne.
            </p>

            <a href="/cv.pdf" download style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: '#000', color: '#fff',
              padding: '0.85rem 2rem', borderRadius: 100,
              fontFamily: 'var(--sans)', fontSize: '0.9rem', fontWeight: 600,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Download CV
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Stats */}
            <div style={{ display: 'flex', gap: '2.5rem', paddingBottom: '2rem', borderBottom: '1px solid #eee' }}>
              {[
                { num: '3.75', label: 'GPA / 4.00' },
                { num: '5+', label: 'Projects' },
                { num: '2yr', label: 'Experience' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: '2.2rem', fontWeight: 800, color: '#000', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: '0.72rem', color: '#999', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.3rem', fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Info rows */}
            {[
              { label: 'Name', val: 'Andi Hardiansya Permana' },
              { label: 'Location', val: 'Batam, Kepulauan Riau' },
              { label: 'Email', val: 'andihardi1301@gmail.com' },
              { label: 'Status', val: 'Open to Work' },
              { label: 'Focus', val: 'Web, Mobile, QA, AI' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', gap: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #f0f0f0' }}>
                <span style={{ fontSize: '0.75rem', color: '#999', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, minWidth: 80 }}>{item.label}</span>
                <span style={{ fontSize: '0.9rem', color: '#222', fontWeight: 400 }}>{item.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div > div:last-child { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
