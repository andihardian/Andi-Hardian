'use client';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center',
      padding: '0 2rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Photo circle behind text */}
      <div style={{
        position: 'absolute',
        width: 'min(520px, 70vw)', height: 'min(520px, 70vw)',
        borderRadius: '50%',
        background: '#1c1c1c',
        overflow: 'hidden',
        zIndex: 0,
        top: '50%', left: '50%',
        transform: 'translate(-50%, -54%)',
      }}>
        {/*
          CARA TAMBAH FOTO:
          1. Taruh file foto kamu di folder public/images/ (contoh: public/images/photo.jpg)
          2. Hapus blok <div>...</div> di bawah ini
          3. Ganti dengan: <img src="/images/photo.jpg" alt="Andi" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top' }} />
        */}
        <div style={{
          width: '100%', height: '100%',
          display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
          background: 'linear-gradient(to bottom, #1a1a1a 0%, #222 100%)',
        }}>
          <svg width="60%" height="85%" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.35 }}>
            <ellipse cx="100" cy="68" rx="48" ry="52" fill="#555"/>
            <path d="M10 240 Q10 155 100 148 Q190 155 190 240Z" fill="#555"/>
          </svg>
        </div>
      </div>

      {/* Content — sits on top */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1 className="fade-up" style={{
          fontFamily: 'var(--sans)',
          fontSize: 'clamp(3.5rem, 11vw, 10rem)',
          fontWeight: 900,
          lineHeight: 0.9,
          letterSpacing: '-0.04em',
          color: '#fff',
          marginBottom: '1.5rem',
        }}>
          Andi Hardian<br />
          <span style={{ color: 'rgba(255,255,255,0.35)' }}>Software</span><br />
          <span style={{ color: 'rgba(255,255,255,0.35)' }}>Engineering.</span>
        </h1>

        <p className="fade-up-2" style={{
          fontFamily: 'var(--sans)', fontSize: '1rem',
          color: 'rgba(255,255,255,0.5)', fontWeight: 300,
          marginBottom: '3rem', lineHeight: 1.6,
        }}>
          I build web, mobile, and IoT solutions that actually work.
        </p>

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
      </div>
    </section>
  );
}
