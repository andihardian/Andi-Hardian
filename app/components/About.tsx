'use client';

export default function About() {
  return (
    <section id="about" style={{
      padding: '7rem 2.5rem',
      background: '#fff', color: '#000',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
        {/* Left */}
        <div>
          <h2 style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.0, marginBottom: '1.5rem', color: '#000' }}>
            Who I Am
          </h2>
          <div style={{ width: 60, height: 3, background: '#000', marginBottom: '2rem' }} />

          <p style={{ fontSize: '1rem', color: '#444', lineHeight: 1.85, marginBottom: '1.25rem', fontWeight: 400 }}>
            I am an <strong style={{ color: '#000' }}>IT student at Politeknik Negeri Batam</strong> studying D4 Teknologi Rekayasa Perangkat Lunak (Software Engineering), currently in my 4th semester with a GPA of 3.75.
          </p>
          <p style={{ fontSize: '1rem', color: '#444', lineHeight: 1.85, marginBottom: '2.5rem', fontWeight: 400 }}>
            My work spans <strong style={{ color: '#000' }}>fullstack web development</strong>, mobile apps with Flutter, QA engineering, and AI integration. I have two years of professional experience and was selected for the P2MW national program in 2026 with Ecozyne.
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '2.5rem', marginBottom: '2.5rem' }}>
            {[
              { num: '3.75', label: 'GPA' },
              { num: '5+', label: 'Projects' },
              { num: '2yr', label: 'Exp.' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: 'var(--sans)', fontSize: '2.2rem', fontWeight: 800, color: '#000', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.3rem', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>

          <a
            href="/cv.pdf"
            download
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: '#000', color: '#fff',
              padding: '0.85rem 2rem', borderRadius: 100,
              fontFamily: 'var(--sans)', fontSize: '0.9rem', fontWeight: 600,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Download CV
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
          </a>
        </div>

        {/* Right: Photo */}
        <div style={{ position: 'relative' }}>
          <div style={{
            width: '100%', aspectRatio: '3/4',
            background: '#f0f0f0',
            borderRadius: 16, overflow: 'hidden',
            display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
            position: 'relative',
          }}>
            {/* Dotted pattern bg */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(circle, #ccc 1px, transparent 1px)',
              backgroundSize: '20px 20px', opacity: 0.5,
            }} />
            {/* Silhouette */}
            <svg width="65%" height="80%" viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'relative', zIndex: 1, opacity: 0.25 }}>
              <ellipse cx="100" cy="72" rx="52" ry="56" fill="#333"/>
              <path d="M5 260 Q5 165 100 158 Q195 165 195 260Z" fill="#333"/>
            </svg>
            {/* 
              TO ADD PHOTO: replace the above with:
              <img src="/images/photo.jpg" alt="Andi Hardiansya Permana"
                style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top', position:'absolute', inset:0 }} />
            */}
            <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem', textAlign: 'center' }}>
              <span style={{ fontSize: '0.7rem', color: '#999', letterSpacing: '0.05em' }}>Replace with your photo</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
