'use client';

const items = ['USER INTERFACE', 'WEB DEVELOPMENT', 'MOBILE APPS', 'SYSTEM DESIGN', 'QUALITY ASSURANCE', 'IOT SYSTEMS', 'AI INTEGRATION', 'PROTOTYPING'];

export default function Marquee() {
  return (
    <div style={{
      background: '#fff', padding: '0.9rem 0',
      overflow: 'hidden',
    }}>
      <div className="ticker-wrap">
        <div className="ticker-inner">
          {[...items, ...items].map((item, i) => (
            <span key={i} style={{
              fontFamily: 'var(--sans)', fontSize: '0.72rem', fontWeight: 600,
              color: '#000', letterSpacing: '0.12em',
              padding: '0 2rem', whiteSpace: 'nowrap',
              display: 'inline-flex', alignItems: 'center', gap: '2rem',
            }}>
              {item}
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#000', display: 'inline-block', opacity: 0.3 }} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
