'use client';
import { useEffect, useRef, useState, useCallback } from 'react';

const W = 400;
const H = 500;
const BIRD_X = 80;
const BIRD_R = 14;
const GRAVITY = 0.45;
const JUMP = -8;
const PIPE_W = 52;
const PIPE_GAP = 145;
const PIPE_SPEED = 2.4;
const PIPE_INTERVAL = 1600;

interface Pipe {
  x: number;
  topH: number;
  passed: boolean;
}

type Phase = 'idle' | 'playing' | 'dead';

export default function MiniGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    phase: 'idle' as Phase,
    birdY: H / 2,
    birdVY: 0,
    pipes: [] as Pipe[],
    score: 0,
    best: 0,
    frame: 0,
    lastPipe: 0,
    animId: 0,
  });
  const [display, setDisplay] = useState({ phase: 'idle' as Phase, score: 0, best: 0 });

  const jump = useCallback(() => {
    const s = stateRef.current;
    if (s.phase === 'idle' || s.phase === 'dead') {
      s.birdY = H / 2;
      s.birdVY = 0;
      s.pipes = [];
      s.score = 0;
      s.frame = 0;
      s.lastPipe = 0;
      s.phase = 'playing';
      setDisplay(d => ({ ...d, phase: 'playing', score: 0 }));
    }
    if (s.phase === 'playing') {
      s.birdVY = JUMP;
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const randPipe = (): Pipe => ({
      x: W + PIPE_W,
      topH: 60 + Math.random() * (H - PIPE_GAP - 120),
      passed: false,
    });

    const draw = (now: number) => {
      const s = stateRef.current;
      s.animId = requestAnimationFrame(draw);
      s.frame++;

      // ---- update ----
      if (s.phase === 'playing') {
        s.birdVY += GRAVITY;
        s.birdY += s.birdVY;

        // spawn pipes
        if (now - s.lastPipe > PIPE_INTERVAL) {
          s.pipes.push(randPipe());
          s.lastPipe = now;
        }

        // move pipes
        s.pipes.forEach(p => { p.x -= PIPE_SPEED; });
        s.pipes = s.pipes.filter(p => p.x > -PIPE_W - 10);

        // score
        s.pipes.forEach(p => {
          if (!p.passed && p.x + PIPE_W < BIRD_X) {
            p.passed = true;
            s.score++;
            if (s.score > s.best) s.best = s.score;
            setDisplay(d => ({ ...d, score: s.score, best: s.best }));
          }
        });

        // collision — floor/ceiling
        if (s.birdY + BIRD_R > H || s.birdY - BIRD_R < 0) {
          s.phase = 'dead';
          setDisplay(d => ({ ...d, phase: 'dead', score: s.score, best: s.best }));
        }

        // collision — pipes
        for (const p of s.pipes) {
          const inX = BIRD_X + BIRD_R > p.x && BIRD_X - BIRD_R < p.x + PIPE_W;
          const inY = s.birdY - BIRD_R < p.topH || s.birdY + BIRD_R > p.topH + PIPE_GAP;
          if (inX && inY) {
            s.phase = 'dead';
            setDisplay(d => ({ ...d, phase: 'dead', score: s.score, best: s.best }));
          }
        }
      }

      // ---- draw ----
      // background
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, W, H);

      // grid
      ctx.strokeStyle = 'rgba(255,255,255,0.03)';
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
      for (let y = 0; y < H; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

      // pipes
      s.pipes.forEach(p => {
        // top pipe
        ctx.fillStyle = '#1a1a1a';
        ctx.fillRect(p.x, 0, PIPE_W, p.topH);
        ctx.strokeStyle = 'rgba(255,255,255,0.12)';
        ctx.lineWidth = 1;
        ctx.strokeRect(p.x, 0, PIPE_W, p.topH);
        // cap
        ctx.fillStyle = '#222';
        ctx.fillRect(p.x - 4, p.topH - 14, PIPE_W + 8, 14);
        ctx.strokeRect(p.x - 4, p.topH - 14, PIPE_W + 8, 14);

        // bottom pipe
        const botY = p.topH + PIPE_GAP;
        ctx.fillStyle = '#1a1a1a';
        ctx.fillRect(p.x, botY, PIPE_W, H - botY);
        ctx.strokeStyle = 'rgba(255,255,255,0.12)';
        ctx.strokeRect(p.x, botY, PIPE_W, H - botY);
        // cap
        ctx.fillStyle = '#222';
        ctx.fillRect(p.x - 4, botY, PIPE_W + 8, 14);
        ctx.strokeRect(p.x - 4, botY, PIPE_W + 8, 14);
      });

      // floor line
      ctx.strokeStyle = 'rgba(255,255,255,0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, H - 1); ctx.lineTo(W, H - 1); ctx.stroke();

      // bird
      const wobble = s.phase === 'playing' ? Math.sin(s.frame * 0.18) * 1.5 : 0;
      const tilt = s.phase === 'playing' ? Math.min(Math.max(s.birdVY * 3, -25), 50) : 0;

      ctx.save();
      ctx.translate(BIRD_X, s.birdY + wobble);
      ctx.rotate((tilt * Math.PI) / 180);

      // shadow
      ctx.beginPath();
      ctx.ellipse(0, BIRD_R + 2, BIRD_R * 0.8, 4, 0, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,0,0,0.3)';
      ctx.fill();

      // body
      ctx.beginPath();
      ctx.arc(0, 0, BIRD_R, 0, Math.PI * 2);
      ctx.fillStyle = s.phase === 'dead' ? '#555' : '#fff';
      ctx.fill();
      ctx.strokeStyle = s.phase === 'dead' ? '#333' : 'rgba(255,255,255,0.3)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // eye
      ctx.beginPath();
      ctx.arc(5, -4, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = '#0a0a0a';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(6, -5, 1.2, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.fill();

      // beak
      ctx.beginPath();
      ctx.moveTo(BIRD_R - 2, 0);
      ctx.lineTo(BIRD_R + 7, 2);
      ctx.lineTo(BIRD_R - 2, 5);
      ctx.closePath();
      ctx.fillStyle = s.phase === 'dead' ? '#555' : '#ddd';
      ctx.fill();

      ctx.restore();

      // overlay text
      if (s.phase === 'idle') {
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        ctx.fillRect(0, 0, W, H);
        ctx.textAlign = 'center';
        ctx.fillStyle = '#fff';
        ctx.font = '800 2rem Inter, sans-serif';
        ctx.fillText('Flappy Dev', W / 2, H / 2 - 30);
        ctx.font = '300 0.9rem Inter, sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.45)';
        ctx.fillText('Press Space / Tap to start', W / 2, H / 2 + 10);
      }

      if (s.phase === 'dead') {
        ctx.fillStyle = 'rgba(0,0,0,0.65)';
        ctx.fillRect(0, 0, W, H);
        ctx.textAlign = 'center';
        ctx.fillStyle = '#fff';
        ctx.font = '800 1.8rem Inter, sans-serif';
        ctx.fillText('Game Over', W / 2, H / 2 - 50);
        ctx.font = '400 1rem Inter, sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.6)';
        ctx.fillText(`Score: ${s.score}`, W / 2, H / 2);
        ctx.fillText(`Best: ${s.best}`, W / 2, H / 2 + 30);
        ctx.font = '300 0.85rem Inter, sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.35)';
        ctx.fillText('Press Space / Tap to retry', W / 2, H / 2 + 75);
      }
    };

    stateRef.current.animId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(stateRef.current.animId);
  }, []);

  // keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.code === 'Space') { e.preventDefault(); jump(); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [jump]);

  return (
    <section id="game" style={{ padding: '7rem 2.5rem', maxWidth: 1100, margin: '0 auto' }}>
      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.6rem', fontWeight: 500 }}>
        Mini Game
      </p>
      <h2 style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.75rem' }}>
        Flappy Dev
      </h2>
      <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 300, marginBottom: '2.5rem' }}>
        Take a break. Press Space or tap to play.
      </p>

      <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        {/* Canvas */}
        <div style={{ position: 'relative' }}>
          <canvas
            ref={canvasRef}
            width={W}
            height={H}
            onClick={jump}
            style={{
              display: 'block',
              borderRadius: 16,
              border: '1px solid var(--border)',
              cursor: 'pointer',
              maxWidth: '100%',
            }}
          />
        </div>

        {/* Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: 160 }}>
          {[
            { label: 'Score', val: display.score },
            { label: 'Best', val: display.best },
          ].map(item => (
            <div key={item.label} style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 12, padding: '1.25rem 1.5rem',
            }}>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.4rem', fontWeight: 600 }}>
                {item.label}
              </div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: '2.2rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em' }}>
                {item.val}
              </div>
            </div>
          ))}

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem 1.5rem' }}>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 600 }}>
              Controls
            </div>
            {[
              { key: 'Space', desc: 'Jump' },
              { key: 'Tap', desc: 'Jump' },
            ].map(c => (
              <div key={c.key} style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', background: '#1a1a1a', border: '1px solid var(--border-strong)', padding: '0.15rem 0.5rem', borderRadius: 4, color: '#fff', fontWeight: 600 }}>{c.key}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 300 }}>{c.desc}</span>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem 1.5rem' }}>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 600 }}>
              Status
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.8rem', fontWeight: 500,
              color: display.phase === 'playing' ? '#4ade80' : display.phase === 'dead' ? '#f87171' : 'var(--text-muted)',
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%',
                background: display.phase === 'playing' ? '#4ade80' : display.phase === 'dead' ? '#f87171' : '#555',
              }} />
              {display.phase === 'idle' ? 'Ready' : display.phase === 'playing' ? 'Playing' : 'Game Over'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}