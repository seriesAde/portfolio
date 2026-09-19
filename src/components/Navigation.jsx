import { useEffect, useRef, useState } from 'react';
import { CVLink } from './Shared';
const sections = [
  'Home',
  'About',
  'Experience',
  'Projects',
  'Skills',
  'Contact',
];
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const button = useRef(null);
  useEffect(() => {
    const update = () => {
      let current = 'home';
      for (const label of sections) {
        const element = document.getElementById(label.toLowerCase());
        if (element?.getBoundingClientRect().top <= 180) current = element.id;
      }
      setActive(current);
    };
    const resize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', resize);
    update();
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', resize);
    };
  }, []);
  return (
    <header
      className="sticky top-0 z-50 border-b border-white/10 bg-[#09090f]/95 backdrop-blur-xl"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && open) {
          setOpen(false);
          button.current?.focus();
        }
      }}
    >
      <div className="shell flex min-h-20 flex-wrap items-center justify-between gap-x-5">
        <a
          href="#home"
          aria-label="Ahmed Adeshina — Home"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 font-semibold"
        >
          <span className="monogram">
            AA<span className="text-violet-300">.</span>
          </span>
          <span className="hidden text-sm sm:block">Ahmed Adeshina</span>
        </a>
        <button
          ref={button}
          type="button"
          className="button-secondary my-3 lg:hidden"
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close ✕' : 'Menu ☰'}
        </button>
        <nav
          id="site-navigation"
          aria-label="Main navigation"
          className={`${open ? 'flex' : 'hidden'} w-full flex-col gap-1 pb-5 lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-3 lg:pb-0`}
        >
          {sections.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              aria-current={
                active === label.toLowerCase() ? 'location' : undefined
              }
              onClick={() => setOpen(false)}
              className={`nav-link ${active === label.toLowerCase() ? 'text-violet-300 after:bg-violet-300' : 'text-slate-300'}`}
            >
              {label}
            </a>
          ))}
          <CVLink className="button-secondary lg:ml-2" />
        </nav>
      </div>
    </header>
  );
}
