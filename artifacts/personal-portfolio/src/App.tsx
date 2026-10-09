import { type ReactNode } from 'react';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Asterisk, Menu, X } from 'lucide-react';

const queryClient = new QueryClient();

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const displayName = 'Abiha';
  const email = 'hello@example.com';
  const navItems = [
    ['About Me', '#about'], ['Projects', '#projects'], ['Skills', '#skills'], ['Contact', '#contact'],
  ];
  const projects = [
    { no: '01', name: 'Soft Signal', kind: 'IDENTITY · DIGITAL', year: '2024', tone: 'peach', mark: 's/s', desc: 'A softer kind of signal in a very loud world.' },
    { no: '02', name: 'Form & Field', kind: 'ART DIRECTION · WEB', year: '2023', tone: 'lilac', mark: 'F/F', desc: 'A new visual language for objects made to last.' },
    { no: '03', name: 'Daybreak Radio', kind: 'CAMPAIGN · CULTURE', year: '2023', tone: 'lime', mark: 'DBR', desc: 'A little more feeling in the daily forecast.' },
  ];
  const skills = [
    ['01', 'Brand worlds', 'Identity systems, naming, art direction'],
    ['02', 'Digital things', 'Websites, product surfaces, the in-between'],
    ['03', 'Good stories', 'Campaigns, concepts, words with a point of view'],
  ];
  return (
    <div className="portfolio grain min-h-[100dvh]">
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Go to home"><span className="mark-dot">●</span> <b>{displayName}'s Portfolio</b></a>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
          {navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <a className="availability" href={`mailto:${email}?subject=Project%20enquiry`}><span className="pulse" /> Available for select projects <ArrowUpRight size={14} /></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow reveal"><span className="eyebrow-line" /> INDEPENDENT CREATIVE · BASED ANYWHERE</p>
              <h1 className="hero-title reveal delay-1">Making<br />good things<br /><em>mean more.</em></h1>
              <p className="hero-intro reveal delay-2">I’m <strong>{displayName}</strong> — a curious creative drawn to thoughtful ideas, expressive visuals, and the little details that make a big difference.</p>
              <div className="hero-actions reveal delay-3">
                <a className="button button-pink" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
                <a className="text-link" href={`mailto:${email}?subject=Hello%20there`}>Say hello <ArrowUpRight size={15} /></a>
              </div>
              <div className="hero-footnote"><span>SCROLL A LITTLE</span><ArrowDown size={14} /></div>
            </div>
            <div className="hero-art reveal delay-2" aria-label="Abstract rose and charcoal graphic" role="img">
              <div className="art-caption">A PRACTICE IN<br />PAYING ATTENTION</div>
              <div className="orbit orbit-one" /><div className="orbit orbit-two" />
              <div className="art-sun" /><div className="art-shape art-shape-one" /><div className="art-shape art-shape-two" />
              <div className="art-star"><Asterisk size={56} strokeWidth={1} /></div>
              <span className="art-index">FIG. 01 — A GOOD PLACE TO BEGIN</span>
            </div>
          </div>
          <div className="hero-stamp"><span>CURIOUS BY NATURE</span><span className="stamp-star"><Asterisk size={20} /></span><span>INTENTIONAL BY DESIGN</span></div>
        </section>

        <div className="ticker" aria-hidden="true"><div className="ticker-track marquee">{Array.from({ length: 4 }).map((_, i) => <span key={i}>A little thought goes a long way <i>·</i> GOOD WORK, GOOD PEOPLE <i>·</i> Make it matter <i>·</i></span>)}</div></div>

        <section className="section about-section" id="about">
          <div className="section-label"><span>01 / ABOUT ME</span><span>A LITTLE MORE HUMAN</span></div>
          <div className="about-layout">
            <h2 className="section-title">A little<br />about <em>me.</em></h2>
            <div className="about-copy">
              <p className="lead">I’m Abiha — a curious creative with a love for meaningful ideas, expressive details, and work that brings people together.</p>
              <p>I enjoy exploring different perspectives, finding what makes each idea distinctive, and turning it into something clear, memorable, and made with care.</p>
              <p>I believe good work can be both thoughtful and playful. My favorite projects leave room for collaboration, experimentation, and a little unexpected joy.</p>
              <a className="under-link" href="#contact">Let’s work together <ArrowRight size={15} /></a>
            </div>
          </div>
          <div className="about-note"><span className="note-mark">“</span><p>Good design doesn’t need to shout.<br /><em>It just needs to know what it means.</em></p><span className="note-sign">— THE WORKING THEORY</span></div>
        </section>

        <section className="work-section" id="projects">
          <div className="section work-inner">
            <div className="section-label"><span>02 / PROJECTS</span><span>SAMPLE PROJECTS</span></div>
            <div className="work-heading"><h2 className="section-title">Made with<br /><em>meaning.</em></h2><p>These sample concepts are ready for your own project names, visuals, and stories.</p></div>
            <div className="project-list">
              {projects.map(project => <article className="project-row" key={project.no}>
                <div className={`project-art ${project.tone}`}>
                  <span className="project-art-no">{project.no} / CASE STUDY</span>
                  <div className="project-symbol">{project.mark}</div>
                  <span className="project-art-caption">A WORLD, WELL MADE.</span>
                </div>
                <div className="project-info">
                  <div className="project-meta"><span>{project.kind}</span><span>{project.year}</span></div>
                  <h3>{project.name}</h3><p>{project.desc}</p>
                  <a className="project-cta" href="#contact">Start a conversation <ArrowUpRight size={16} /></a>
                </div>
              </article>)}
            </div>
            <p className="work-endnote">The details are better over a conversation. <a href={`mailto:${email}?subject=Show%20me%20more`}>Ask me what else is in the archive <ArrowRight size={14} /></a></p>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-label"><span>03 / THE PRACTICE</span><span>THOUGHTFUL, END TO END</span></div>
          <div className="skills-heading"><h2 className="section-title">A few ways<br />I can <em>help.</em></h2><p>Small enough to stay close to the work.<br />Wide-ranging enough to see the whole picture.</p></div>
          <div className="skill-list">{skills.map(([no, title, detail]) => <a className="skill-row" key={no} href={`mailto:${email}?subject=${encodeURIComponent(`Tell me about ${title}`)}`} aria-label={`Contact me about ${title}`}><span className="skill-no">{no}</span><h3>{title}</h3><p>{detail}</p><ArrowUpRight size={18} /></a>)}</div>
          <div className="toolkit"><span className="toolkit-title">THE TOOLKIT, IN NO PARTICULAR ORDER</span><div className="tool-tags">{['Creative direction', 'Visual identity', 'Digital design', 'Art direction', 'Web design', 'Concept & copy', 'Prototyping', 'A good playlist'].map(item => <span key={item}>{item}</span>)}</div></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner">
            <div className="section-label"><span>04 / YOUR TURN</span><span>OPEN DOOR, GOOD COFFEE</span></div>
            <p className="contact-kicker">HAVE A GOOD ONE IN MIND?</p>
            <h2>Let’s make<br /><em>something matter.</em></h2>
            <p className="contact-description">Have a project, a half-formed thought, or just want to talk shop? I’d love to hear what you’re thinking.</p>
            <a className="button button-pink contact-button" href={`mailto:${email}?subject=Let's%20make%20something%20matter`}>Write me a note <ArrowUpRight size={18} /></a>
            <span className="email-note">DEMO ADDRESS — REPLACE BEFORE PUBLISHING</span>
            <a className="email-link" href={`mailto:${email}`}>{email}</a>
            <div className="contact-doodle"><Asterisk size={100} strokeWidth={.75} /></div>
          </div>
        </section>
      </main>
      <footer className="footer"><a className="wordmark" href="#home"><span className="mark-dot">●</span> <b>{displayName}'s Portfolio</b></a><span>MADE WITH CURIOSITY & CARE</span><a href="#home">BACK TO TOP ↑</a><span>© {new Date().getFullYear()} · {displayName}'s Portfolio</span></footer>
    </div>
  );
}

function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
