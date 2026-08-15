'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const greetings = [
  'नमस्ते', 'Hello', 'Hola', 'Bonjour', 'Hallo', 'Ciao', 'Olá',
  'Привет', '你好', 'こんにちは', '안녕하세요', 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ',
  'নমস্কার', 'નમસ્તે', 'வணக்கம்', 'నమస్కారం', 'نمسکارم',
  'السلام عليكم', 'Merhaba', 'Hej',
];

const navItems = [
  { href: '/', label: 'About', num: '01' },
  { href: '/projects', label: 'Projects', num: '02' },
  { href: '/experience', label: 'Experience', num: '03' },
  { href: '/skills', label: 'Skills', num: '04' },
  { href: '/bucket-list', label: 'Bucket List', num: '05' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [greetingIdx, setGreetingIdx] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setGreetingIdx(i => (i + 1) % greetings.length);
        setFading(false);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <Link href="/" className="logo">
          Gaurav<span>.</span>
        </Link>
        <p className="tagline">Software Developer</p>
        <div className="greeting-ticker">
          <span className={fading ? 'out' : ''}>{greetings[greetingIdx]}</span>
        </div>
      </div>

      <nav>
        {navItems.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href ? 'active' : ''}
          >
            <span className="nav-num">{item.num}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="social-row">
          {/* GitHub */}
          <a href="https://github.com/gaurav1832" target="_blank" rel="noreferrer" title="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/gaurav1832/" target="_blank" rel="noreferrer" title="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          {/* Email */}
          <a href="mailto:garwagaurav@gmail.com" title="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
          {/* Resume */}
          <a href="https://drive.google.com/file/d/1EMo-174tGIjw9gPNRTaFwgxwZNTiOmmZ/view?usp=sharing" target="_blank" rel="noreferrer" title="Resume" style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', border: '1px solid var(--accent-dim)', padding: '3px 8px' }}>
            CV
          </a>
        </div>
      </div>
    </aside>
  );
}
