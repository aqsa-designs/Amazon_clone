import { useEffect, useState } from "react";

const videoUrl = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260912_104303_0c6d60b2-9353-408e-9449-585108a22fb5.mp4";
const posterUrl = "https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/130837c4-0244-4f37-9c61-8d801d93fd29.jpg";

const focusAreas = [
  ["Technology & Engineering Partnerships", "Connecting organizations with technology partners and engineering capabilities that support their business objectives."],
  ["AI, SaaS & Software Solutions", "Exploring opportunities around AI, SaaS, software development, and digital solutions."],
  ["B2B Client Acquisition", "Building targeted prospecting strategies and developing relationships with decision-makers."],
  ["Strategic Partnerships", "Creating and managing partnerships that open new opportunities, markets, and revenue channels."],
  ["Market Expansion", "Researching new markets, identifying opportunities, and developing relationships with potential clients and partners."],
  ["Growth Strategy", "Combining market research, outbound prospecting, relationship building, and business strategy to create sustainable growth opportunities."],
];

const services = [
  ["Business Development", "Build qualified B2B pipelines and turn prospects into real opportunities."],
  ["Lead Generation", "Find the right companies, decision-makers, and conversations that matter."],
  ["Strategic Partnerships", "Build partnerships that open doors to new clients, markets, and opportunities."],
  ["Market Research", "Identify market gaps, target audiences, and growth opportunities."],
  ["Growth Strategy", "Create practical strategies to improve outreach, acquisition, and business growth."],
  ["Technology Solutions", "Connect businesses with the right AI, SaaS, software, and technical capabilities."],
];

const experience = [
  ["Business Development Team Lead — Preesoft", "2026 – Present", "Leading BD strategy, client acquisition, and pipeline growth across international markets."],
  ["Senior Business Development Executive — Preesoft", "2026 – Present", "Driving B2B growth through targeted prospecting and strategic client outreach."],
  ["Partnerships Manager — Nextmark.uk", "2025 – Present", "Building strategic partnerships and creating new opportunities for business growth."],
  ["Business Development Executive — Proviloops International", "2025 – 2026", "Focused on lead generation, client acquisition, and growth-focused business development."],
  ["Growth Executive — Mavericks United", "2024 – 2025", "Managed international clients and supported business development and growth initiatives."],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const video = document.querySelector(".hero-video");
    const syncMotion = () => {
      if (media.matches) video?.pause();
      else video?.play().catch(() => {});
    };
    syncMotion();
    media.addEventListener?.("change", syncMotion);
    return () => media.removeEventListener?.("change", syncMotion);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="hero-stage" id="top">
        <video className="hero-video" autoPlay muted loop playsInline preload="auto" poster={posterUrl} aria-hidden="true">
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="hero-veil" />
        <header className="topbar">
          <a className="brand" href="#top" aria-label="Shamoon Ijaz home"><span className="brand-mark">SI</span></a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#about">About</a><a href="#services">Services</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
          </nav>
          <a className="nav-cta" href="#contact">Let&apos;s Connect</a>
          <button className={`menu-button${menuOpen ? " is-open" : ""}`} type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}><i /><i /></button>
          <nav className={`mobile-menu${menuOpen ? " is-open" : ""}`} aria-label="Mobile navigation">
            {[["About", "about"], ["Services", "services"], ["Experience", "experience"], ["Contact", "contact"]].map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}><span>&gt;</span>{label}</a>)}
          </nav>
        </header>

        <main className="hero-content">
          <p className="eyebrow">Business Development Leader</p>
          <h1><span>Where Great Teams</span><span>Meet Great Technology</span></h1>
          <h2>Shamoon Ijaz</h2>
          <p className="hero-description">Business Development Team Lead | Driving Revenue Growth &amp; Marketing Expansion |<br />B2B Sales &amp; Strategic Partnerships | AI &amp; Software Solutions.</p>
          <div className="hero-actions"><a className="glass-button" href="#contact">Let&apos;s Connect</a><a className="glass-button" href="#experience">View Experience</a></div>
          <nav className="hero-links" aria-label="Explore sections">
            {["About", "Services", "Experience", "Contact"].map((label) => <a key={label} href={`#${label.toLowerCase()}`}><span>&gt;</span>{label}</a>)}
          </nav>
        </main>
      </div>

      <section className="content-section about-section" id="about"><div className="section-inner"><p className="section-label">About Me</p><div className="about-layout"><div className="about-copy"><h2>Business Development and Partnerships Professional</h2><p>I&apos;m a <strong>Business Development and Partnerships professional</strong> focused on helping businesses grow through strategic relationships, client acquisition, and market expansion.</p><p>I work across <strong>B2B growth, technology, SaaS, AI, lead generation, and strategic partnerships</strong>, connecting businesses with the right people, opportunities, and solutions.</p><p>My approach is simple: <strong>understand the market, start the right conversations, build trust, and turn relationships into growth.</strong></p><p className="expertise"><strong>Business Development · Strategic Partnerships · B2B Growth · Technology · Client Acquisition</strong></p></div><figure className="about-photo"><img src="/shamoon.jpeg" alt="Shamoon Ijaz" /></figure></div><div className="focus-list">{focusAreas.map(([title, copy]) => <article className="content-block" key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

      <section className="content-section" id="services"><div className="section-inner"><p className="section-label">Services</p><h2>What I Help Businesses Do</h2><div className="card-grid">{services.map(([title, copy]) => <article className="content-block" key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div><p className="section-cta">→ Let&apos;s Build Something That Grows</p></div></section>

      <section className="content-section" id="experience"><div className="section-inner"><p className="section-label">Experience</p><h2>Experience That Drives Growth</h2><p className="intro">A track record across <strong>business development, partnerships, client acquisition, and international growth</strong>.</p><div className="card-grid experience-grid">{experience.map(([title, date, copy]) => <article className="content-block" key={title}><h3>{title}</h3><em>{date}</em><p>{copy}</p></article>)}</div><p className="expertise"><strong>Core Expertise</strong><br />B2B Growth · Business Development · Strategic Partnerships · Lead Generation · Market Research · Client Acquisition · Growth Strategy</p></div></section>

      <section className="content-section contact-section" id="contact"><div className="section-inner"><p className="section-label">Contact</p><h2>Let&apos;s build what comes next.</h2><p className="intro">Have a partnership opportunity, a growth challenge, or an ambitious product to take to market? Let&apos;s start a conversation.</p><a className="contact-button" href="mailto:shamoon.ijaz@example.com">Let&apos;s Connect</a></div></section>
    </>
  );
}

export default App;
