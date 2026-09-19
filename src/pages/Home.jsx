import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Navigation />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Footer />
      </main>
      <footer className="shell flex flex-wrap items-center justify-between gap-4 border-t border-white/15 py-7 text-sm text-slate-300">
        <p>© {new Date().getFullYear()} Ahmed Adeshina · Abuja, Nigeria</p>
        <a className="text-link" href="#home">
          Back to top ↑
        </a>
      </footer>
    </>
  );
}
