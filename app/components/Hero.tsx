'use client';
import { useEffect, useState, useRef, useCallback } from 'react';

// ─── Types ─────────────────────────────────────────────────────────────────────
type Point = { x: number; y: number };
type Dir = 'U' | 'D' | 'L' | 'R';

// ─── Constants ────────────────────────────────────────────────────────────────
const COLS = 16;
const ROWS = 14;
const CELL = 20;
const W = COLS * CELL;
const H = ROWS * CELL;
const OPP: Record<Dir, Dir> = { U: 'D', D: 'U', L: 'R', R: 'L' };

function randFood(snake: Point[]): Point {
  let p: Point;
  do { p = { x: Math.floor(Math.random() * COLS), y: Math.floor(Math.random() * ROWS) }; }
  while (snake.some(s => s.x === p.x && s.y === p.y));
  return p;
}

// ─── D-pad button style ───────────────────────────────────────────────────────
const dpadBtn: React.CSSProperties = {
  width: 36, height: 36,
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: 8,
  color: 'rgba(255,255,255,0.5)',
  fontSize: '0.75rem',
  cursor: 'pointer',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  fontFamily: 'var(--sans)',
};

// ─── Mini Snake Game ──────────────────────────────────────────────────────────
function MiniSnake() {
  const initSnake: Point[] = [{ x: 8, y: 7 }];
  const initFood: Point = { x: 12, y: 4 };

  const snakeRef = useRef<Point[]>(initSnake);
  const foodRef  = useRef<Point>(initFood);
  const dirRef   = useRef<Dir>('R');
  const aliveRef = useRef(false);

  const [renderSnake, setRenderSnake] = useState<Point[]>(initSnake);
  const [renderFood,  setRenderFood]  = useState<Point>(initFood);
  const [score, setScore] = useState(0);
  const [best,  setBest]  = useState(0);
  const [phase, setPhase] = useState<'idle' | 'playing' | 'dead'>('idle');

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopLoop = () => {
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
  };

  const startGame = useCallback(() => {
    stopLoop();
    const snake: Point[] = [{ x: 8, y: 7 }];
    const food: Point    = { x: 12, y: 4 };
    snakeRef.current  = snake;
    foodRef.current   = food;
    dirRef.current    = 'R';
    aliveRef.current  = true;
    setRenderSnake([...snake]);
    setRenderFood({ ...food });
    setScore(0);
    setPhase('playing');

    intervalRef.current = setInterval(() => {
      if (!aliveRef.current) return;

      const d    = dirRef.current;
      const head = snakeRef.current[0];
      const next: Point = {
        x: (head.x + (d === 'R' ? 1 : d === 'L' ? -1 : 0) + COLS) % COLS,
        y: (head.y + (d === 'D' ? 1 : d === 'U' ? -1 : 0) + ROWS) % ROWS,
      };

      // self-collision
      if (snakeRef.current.some(p => p.x === next.x && p.y === next.y)) {
        aliveRef.current = false;
        stopLoop();
        setPhase('dead');
        setScore(prev => { setBest(b => Math.max(b, prev)); return prev; });
        return;
      }

      const ate = next.x === foodRef.current.x && next.y === foodRef.current.y;
      const newSnake = ate
        ? [next, ...snakeRef.current]
        : [next, ...snakeRef.current.slice(0, -1)];

      snakeRef.current = newSnake;

      if (ate) {
        const newFood = randFood(newSnake);
        foodRef.current = newFood;
        setRenderFood({ ...newFood });
        setScore(s => s + 1);
      }

      setRenderSnake([...newSnake]);
    }, 120);
  }, []);

  // cleanup on unmount
  useEffect(() => () => stopLoop(), []);

  // keyboard
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      const map: Record<string, Dir> = {
        ArrowUp: 'U', ArrowDown: 'D', ArrowLeft: 'L', ArrowRight: 'R',
        w: 'U', s: 'D', a: 'L', d: 'R',
      };
      const nd = map[e.key];
      if (!nd) return;
      e.preventDefault();
      if (nd !== OPP[dirRef.current]) dirRef.current = nd;
      if (phase !== 'playing') startGame();
    };
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, [phase, startGame]);

  const pressDir = (nd: Dir) => {
    if (nd !== OPP[dirRef.current]) dirRef.current = nd;
    if (phase !== 'playing') startGame();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem', userSelect: 'none' }}>
      {/* Score bar */}
      <div style={{ width: W, display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Score <strong style={{ color: '#fff' }}>{score}</strong>
        </span>
        <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Best <strong style={{ color: '#fff' }}>{best}</strong>
        </span>
      </div>

      {/* Board */}
      <div style={{
        position: 'relative', width: W, height: H,
        background: '#0d0d0d',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 10, overflow: 'hidden',
      }}>
        {/* Grid dots */}
        {Array.from({ length: COLS * ROWS }).map((_, i) => {
          const cx = (i % COLS) * CELL + CELL / 2;
          const cy = Math.floor(i / COLS) * CELL + CELL / 2;
          return <div key={i} style={{ position: 'absolute', left: cx - 1, top: cy - 1, width: 2, height: 2, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />;
        })}

        {/* Food */}
        <div style={{
          position: 'absolute',
          left: renderFood.x * CELL + 3, top: renderFood.y * CELL + 3,
          width: CELL - 6, height: CELL - 6, borderRadius: 3,
          background: '#4ade80', boxShadow: '0 0 8px #4ade80',
        }} />

        {/* Snake */}
        {renderSnake.map((seg, i) => (
          <div key={i} style={{
            position: 'absolute',
            left: seg.x * CELL + (i === 0 ? 1 : 2),
            top:  seg.y * CELL + (i === 0 ? 1 : 2),
            width:  CELL - (i === 0 ? 2 : 4),
            height: CELL - (i === 0 ? 2 : 4),
            borderRadius: i === 0 ? 5 : 3,
            background: i === 0 ? '#ffffff' : `rgba(255,255,255,${Math.max(0.12, 0.75 - i * 0.04)})`,
          }} />
        ))}

        {/* Overlay */}
        {phase !== 'playing' && (
          <div style={{
            position: 'absolute', inset: 0,
            background: 'rgba(0,0,0,0.78)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: '0.65rem',
            backdropFilter: 'blur(2px)',
          }}>
            {phase === 'dead' && (
              <>
                <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Game Over</p>
                <p style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1 }}>{score}</p>
              </>
            )}
            {phase === 'idle' && (
              <p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: 'center', lineHeight: 1.8, padding: '0 1.25rem' }}>
                Arrow keys / WASD<br />or tap to play
              </p>
            )}
            <button onClick={startGame} style={{
              background: '#fff', color: '#000', border: 'none', cursor: 'pointer',
              padding: '0.45rem 1.4rem', borderRadius: 100,
              fontSize: '0.8rem', fontWeight: 700, fontFamily: 'var(--sans)',
            }}>
              {phase === 'dead' ? 'Restart' : 'Play'}
            </button>
          </div>
        )}
      </div>

      {/* D-pad */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, marginTop: 2 }}>
        <button onClick={() => pressDir('U')} style={dpadBtn}>▲</button>
        <div style={{ display: 'flex', gap: 3 }}>
          <button onClick={() => pressDir('L')} style={dpadBtn}>◀</button>
          <div style={{ width: 36, height: 36 }} />
          <button onClick={() => pressDir('R')} style={dpadBtn}>▶</button>
        </div>
        <button onClick={() => pressDir('D')} style={dpadBtn}>▼</button>
      </div>

      <p style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.18)', letterSpacing: '0.08em' }}>
        WASD / Arrow Keys
      </p>
    </div>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────
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
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '5rem 2.5rem 2.5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Grid bg */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: 1100, margin: '0 auto', width: '100%',
        display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap',
      }}>

        {/* ── LEFT ── */}
        <div style={{ flex: '1 1 400px', minWidth: 0 }}>

          {/* Badge */}
          <div className="fade-up" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)',
            padding: '0.4rem 1rem', borderRadius: 100, marginBottom: '1.75rem',
          }}>
          </div>

          {/* Hi */}
          <p className="fade-up-1" style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 300,
            color: 'rgba(255,255,255,0.4)', letterSpacing: '-0.01em',
            marginBottom: '0.2rem', fontStyle: 'italic',
          }}>
            Hi!
          </p>

          {/* I'm Hardi */}
          <h1 className="fade-up-1" style={{
            fontFamily: 'var(--sans)',
            fontSize: 'clamp(3rem, 9vw, 7rem)',
            fontWeight: 900, lineHeight: 0.92,
            letterSpacing: '-0.04em', color: '#fff',
            marginBottom: '0.4rem',
          }}>
            I&apos;m Hardi
          </h1>

          {/* Software Developer & IT Support */}
          <h2 className="fade-up-2" style={{
            fontFamily: 'var(--sans)',
            fontSize: 'clamp(1.4rem, 4vw, 3rem)',
            fontWeight: 800, lineHeight: 1.1,
            letterSpacing: '-0.03em', marginBottom: '1.5rem',
          }}>
            <span style={{ color: '#fff' }}>Software Developer</span>
            <br />
            <span style={{ color: 'rgba(255,255,255,0.28)', fontWeight: 400 }}>&amp; IT Support</span>
          </h2>

          {/* Rotating role */}
          <div className="fade-up-2" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div style={{ width: 24, height: 1, background: 'rgba(255,255,255,0.2)' }} />
            <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', fontWeight: 300, minWidth: 190 }}>
              {roles[roleIdx]}
            </span>
          </div>

          <p className="fade-up-2" style={{
            fontSize: '0.95rem', color: 'rgba(255,255,255,0.38)',
            fontWeight: 300, marginBottom: '2.5rem', lineHeight: 1.75, maxWidth: 440,
          }}>
            I build web, mobile, and IoT solutions that actually work.<br />
            Based in Batam, Indonesia.
          </p>

          {/* CTAs */}
          <div className="fade-up-3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: '#fff', color: '#000', border: 'none', cursor: 'pointer',
                padding: '0.9rem 2.2rem', borderRadius: 100,
                fontFamily: 'var(--sans)', fontSize: '0.9rem', fontWeight: 600,
                display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'opacity 0.2s',
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
            display: 'flex', gap: 0, marginTop: '3rem',
            paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.07)',
            flexWrap: 'wrap',
            opacity: visible ? 1 : 0, transition: 'opacity 0.8s 0.9s',
          }}>
            {[
              { num: '3.75', label: 'GPA / 4.00' },
              { num: '5+',   label: 'Projects Built' },
              { num: '2yr',  label: 'Work Experience' },
              { num: '2026', label: 'P2MW National' },
            ].map((s, i) => (
              <div key={s.label} style={{
                paddingRight: i < 3 ? '1.75rem' : 0,
                marginRight: i < 3 ? '1.75rem' : 0,
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', marginTop: '0.3rem', fontWeight: 300, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Game ── */}
        <div className="fade-up-4" style={{
          flex: '0 0 auto',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
        }}>
          <p style={{
            fontSize: '0.62rem', color: 'rgba(255,255,255,0.22)',
            letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 500,
            marginBottom: '0.2rem',
          }}>
            — Mini Game —
          </p>
          <MiniSnake />
        </div>

      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '2.5rem',
        display: 'flex', alignItems: 'center', gap: '0.4rem', opacity: 0.22,
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
        <span style={{ fontSize: '0.6rem', color: '#fff', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #home [data-game] { display: none !important; }
        }
      `}</style>
    </section>
  );
}
