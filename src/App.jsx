import { useState, useEffect, useRef } from 'react';
import pers_pic from './assets/Prof_Photo.jpg';

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroOpacity = Math.max(0, 1 - scrollY / 500);
  const heroTranslate = scrollY * -0.4;

  const scrollToNext = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-bg-primary text-text-primary min-h-screen">
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-bg-primary/70 border-b border-accent-secondary/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-semibold tracking-tight">Carlos</span>
          <div className="hidden md:flex gap-8 text-sm text-text-muted">
            {['about', 'experience', 'achievements', 'projects', 'skills', 'contact'].map((id) => (
              <button
                key={id}
                onClick={() => {
                  const el = document.getElementById(id);
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                }}
                className="hover:text-text-primary transition-colors capitalize cursor-pointer bg-transparent border-none p-0 font-inherit text-inherit"
              >
                {id}
              </button>
            ))}
          </div>
          </div>
      </nav>

      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary/40 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div
          className="relative z-10 flex flex-col items-center text-center animate-fade-in"
          style={{
            opacity: heroOpacity,
            transform: `translateY(${heroTranslate}px)`,
          }}
        >
          <div className="relative mb-8 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-bg-secondary rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
            <img
              src={pers_pic}
              alt="Carlos"
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-bg-primary"
            />
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold tracking-tight mb-3 bg-gradient-to-b from-text-primary to-text-muted text-transparent"
            style={{ WebkitBackgroundClip: 'text', backgroundClip: 'text' }}
          >
            Carlos Jimenez-Hernandez
          </h1>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/40 mb-8">
            <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-text-primary">ISC2 Certified in Cybersecurity (CC)</span>
          </div>

          <p className="max-w-2xl text-lg md:text-xl text-text-muted leading-relaxed mb-10">
            Recent graduate from <span className="text-text-primary font-medium">Monmouth University</span> with
            a Bachelor's in Computer Science and a Minor in Mathematics. Concentrated in
            <span className="text-text-primary font-medium"> Cybersecurity</span>, with a passion for building
            secure, user-focused digital experiences.
          </p>
            {/* Hero Nav */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                }}
                className="px-6 py-3 bg-accent hover:bg-accent/80 rounded-full font-medium transition-colors text-text-primary cursor-pointer"
              >
                Get in touch
              </button>
              <a
                href="/Carlos_Jimenez-Hernandez_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-accent-secondary/40 hover:border-accent-secondary hover:bg-accent-secondary/10 rounded-full font-medium transition-all cursor-pointer text-center"
              >
                View Resume
              </a>
              <button
                onClick={() => {
                  const el = document.getElementById('about');
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                }}
                className="px-6 py-3 border border-accent-secondary/40 hover:border-accent-secondary hover:bg-accent-secondary/10 rounded-full font-medium transition-all cursor-pointer">
                Learn more
              </button>
            </div>
        </div>

        <button
          onClick={scrollToNext}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-text-primary transition-colors animate-bounce-slow"
          aria-label="Scroll down"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </section>

      <section
        ref={aboutRef}
        id="about"
        className="min-h-screen flex items-center px-6 py-20 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-accent mb-4">About me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            More than just code.
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-text-muted text-lg leading-relaxed">
            <p>
              I recently graduated from Monmouth University with a Bachelor's in Computer Science
              and a Minor in Mathematics. My focus throughout my studies, and now into my career,
              has been cybersecurity.
            </p>
            <p>
              Earning my ISC2 Certified in Cybersecurity credential taught me to think about
              systems defensively, anticipating failure modes before they happen. I'm now applying
              that same mindset to every project I take on.
            </p>
          </div>
        </div>
      </section>


{/* EXPERIENCE SECTION */}
<section
  id="experience"
  className="px-6 py-20 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary"
>
    <div className="space-y-6">
    <div className="p-6 md:p-8 rounded-2xl bg-bg-secondary/40 border border-accent-secondary/20 hover:border-accent/60 transition-all duration-300">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2">
        <div>
          <h3 className="text-2xl font-semibold">IT Internship</h3>
          <p className="text-accent font-medium">City of Long Branch · Long Branch, NJ</p>
        </div>
        <span className="text-sm text-text-muted">July 2025 — August 2025</span>
      </div>
      <ul className="text-text-muted leading-relaxed space-y-2 list-disc list-inside">
        <li>
          Deployed a Raspberry Pi-based digital signage system, handling OS setup,
          software configuration, and network integration to replace an aging display solution.
        </li>
        <li>
          Installed and configured a security camera system and structured ethernet
          cabling across municipal facilities, improving site coverage and network reliability.
        </li>
      </ul>
    </div>

      <div className="p-6 md:p-8 rounded-2xl bg-bg-secondary/40 border border-accent-secondary/20 hover:border-accent/60 transition-all duration-300">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2">
        <div>
          <h3 className="text-2xl font-semibold">Sales Associate</h3>
          <p className="text-accent font-medium">Capitol Lighting · Eatontown, NJ</p>
        </div>
        <span className="text-sm text-text-muted">June 2025 — Present</span>
      </div>
      <ul className="text-text-muted leading-relaxed space-y-2 list-disc list-inside">
        <li>
          Guide customers through lighting fixture selection by understanding their needs,
          space, and budget constraints to recommend products that fit their specific use case.
        </li>
        <li>
          Maintain product knowledge across a wide showroom inventory to confidently answer
          technical questions and present alternatives when needed.
        </li>
        <li>
          Build rapport with customers throughout the sales process, from initial consultation
          to final purchase decisions.
        </li>
      </ul>
    </div>

    <div className="p-6 md:p-8 rounded-2xl bg-bg-secondary/40 border border-accent-secondary/20 hover:border-accent/60 transition-all duration-300">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2">
        <div>
          <h3 className="text-2xl font-semibold">Retail Associate</h3>
          <p className="text-accent font-medium">Staples · Shrewsbury, NJ</p>
        </div>
        <span className="text-sm text-text-muted">February 2022 — June 2025</span>
      </div>
      <ul className="text-text-muted leading-relaxed space-y-2 list-disc list-inside">
        <li>
          Worked across both the Office Supplies and Technology departments, handling tech
          sales and providing product recommendations to customers with varying levels of
          technical knowledge.
        </li>
        <li>
          Managed shipping services and processed Amazon returns, ensuring accurate handling
          and a smooth customer experience.
        </li>
        <li>
          Performed full-store operational duties including stocking shelves, organizing
          inventory, building display chairs, and moving pallets of paper and heavy
          merchandise.
        </li>
        <li>
          Balanced retail responsibilities with full-time studies at Monmouth University for
          over three years, building strong time management and reliability.
        </li>
      </ul>
    </div>
  </div>
</section>

{/* ACHIEVEMENTS SECTION */}
<section id="achievements" className="px-6 py-20">
  <div className="max-w-5xl mx-auto">
    <p className="text-sm uppercase tracking-widest text-accent mb-4">Achievements</p>
    <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
      Recognition & competitions.
    </h2>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="p-6 md:p-8 rounded-2xl bg-bg-secondary/40 border border-accent-secondary/20 hover:border-accent/60 transition-all duration-300">
        <div className="flex justify-between items-start mb-3 gap-2">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">NCL Cyber Skyline</h3>
            <p className="text-accent text-sm font-medium">National Cyber League · Spring 2026</p>
          </div>
          <span className="text-xs text-text-muted whitespace-nowrap">Top Player</span>
        </div>
        <p className="text-text-muted leading-relaxed mb-4 text-sm">
          Placed in the top 500 nationally in a Capture the Flag (CTF) cybersecurity
          competition covering categories like cryptography, network analysis, web exploitation,
          forensics, and password cracking.
        </p>
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center p-3 rounded-lg bg-accent/10 border border-accent/30">
            <div className="text-2xl font-bold text-text-primary">#334</div>
            <div className="text-xs text-text-muted mt-1">Ranking</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-accent/10 border border-accent/30">
            <div className="text-2xl font-bold text-text-primary">92.31%</div>
            <div className="text-xs text-text-muted mt-1">Completion</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-accent/10 border border-accent/30">
            <div className="text-2xl font-bold text-text-primary">79%</div>
            <div className="text-xs text-text-muted mt-1">Accuracy</div>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 rounded-2xl bg-bg-secondary/40 border border-accent-secondary/20 hover:border-accent/60 transition-all duration-300">
        <div className="flex justify-between items-start mb-3 gap-2">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">ISC2 Certified in Cybersecurity</h3>
            <p className="text-accent text-sm font-medium">ISC2 · Certification</p>
          </div>
          <span className="text-xs text-text-muted whitespace-nowrap">Certified</span>
        </div>
        <p className="text-text-muted leading-relaxed text-sm">
          Earned the ISC2 CC certification, covering security principles, business continuity,
          access controls, network security, and security operations. The credential validates
          foundational cybersecurity knowledge and commitment to the field.
        </p>
      </div>
    </div>
  </div>
</section>

{/* PROJECTS SECTION */}
<section id="projects" className="px-6 py-20">
  <div className="max-w-5xl mx-auto">
    <p className="text-sm uppercase tracking-widest text-accent mb-4">Projects</p>
    <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
      What I've built.
    </h2>
    <div className="grid md:grid-cols-2 gap-6">
      {[
        {
          title: 'Snippet',
          subtitle: 'Senior Capstone Project',
          date: 'Sep 2025 — Apr 2026',
          desc: 'Led a 3-person team to build a community-based communication platform with 28 reusable React components and 26 pages, solving the lack of accessible peer-learning tools on campus. Implemented real-time video, audio, and messaging using WebRTC and Socket.IO, supporting 50+ concurrent users.',
          tags: ['React', 'Vite', 'Tailwind', 'Express', 'MongoDB', 'WebRTC', 'Socket.IO', 'Vercel'],
        },
        {
          title: 'Home Lab',
          subtitle: 'Personal Project',
          date: 'Ongoing',
          desc: 'Provisioned a self-hosted Kubernetes cluster on a mini-HP server with 2 Raspberry Pi worker nodes using Docker, k3s, and Linux. Created a sandbox to explore container orchestration, node networking, and production-grade deployment workflows.',
          tags: ['Kubernetes', 'k3s', 'Docker', 'Linux', 'Raspberry Pi'],
        },
      ].map((project) => (
        <div
          key={project.title}
          className="p-6 md:p-8 rounded-2xl bg-bg-secondary/40 border border-accent-secondary/20 hover:border-accent/60 hover:bg-bg-secondary/60 transition-all duration-300"
        >
          <div className="flex justify-between items-start mb-2 gap-2">
            <div>
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-accent text-sm font-medium">{project.subtitle}</p>
            </div>
            <span className="text-xs text-text-muted whitespace-nowrap">{project.date}</span>
          </div>
          <p className="text-text-muted leading-relaxed mb-4 text-sm">
            {project.desc}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs rounded-full bg-accent/10 border border-accent/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section
  ref={skillsRef}
  id="skills"
  className="min-h-screen flex items-center px-6 py-20"
>
  <div className="max-w-5xl mx-auto w-full">
    <p className="text-sm uppercase tracking-widest text-accent mb-4">What I do</p>
    <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
      Skills & technologies
    </h2>
    <div className="grid md:grid-cols-2 gap-6">
      {[
        {
          title: 'Security & Tools',
          icon: '🛡️',
          items: ['ISC2 CC', 'Wireshark', 'Nmap', 'Hashcat', 'John the Ripper', 'Aircrack-ng', 'Burp Suite', 'Volatility3', 'GDB', 'Kali Linux'],
        },
        {
          title: 'Networking & Systems',
          icon: '🖧',
          items: ['Linux', 'Shell Scripting', 'TCP/IP', 'Kubernetes', 'Docker', 'CI/CD'],
        },
        {
          title: 'Programming Languages',
          icon: '💻',
          items: ['Java', 'Python', 'JavaScript', 'C', 'C++', 'SQL', 'Bash', 'x86 Assembly (read-only)'],
        },
        {
          title: 'Web & Infrastructure',
          icon: '🌐',
          items: ['HTML', 'CSS', 'React', 'Node.js', 'Express', 'Tailwind CSS', 'WebRTC', 'Socket.IO', 'MongoDB', 'Raspberry Pi'],
        },
      ].map((category) => (
        <div
          key={category.title}
          className="p-6 rounded-2xl bg-bg-secondary/40 border border-accent-secondary/20 hover:border-accent/60 hover:bg-bg-secondary/60 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{category.icon}</span>
            <h3 className="text-xl font-semibold">{category.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {category.items.map((item) => (
              <span
                key={item}
                className="px-3 py-1 text-sm rounded-full bg-accent/10 border border-accent/30 text-text-primary"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>

</section>

      {/* CONTACT SECTION */}
<section id="contact" className="px-6 py-20 border-t border-accent-secondary/20">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's connect.</h2>
    <p className="text-text-muted mb-8">
      Open to opportunities in cybersecurity, software development, and IT.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a
        href="mailto:carlosjimher.320@gmail.com"
        className="px-6 py-3 bg-accent hover:bg-accent/80 rounded-full font-medium transition-colors text-text-primary"
      >
        Email me
      </a>
      <a
        href="/Carlos_Jimenez-Hernandez_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 border border-accent-secondary/40 hover:border-accent-secondary hover:bg-accent-secondary/10 rounded-full font-medium transition-all"
      >
        Resume
      </a>
      <a
        href="https://www.linkedin.com/in/carlos-jimenez-hernandez"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 border border-accent-secondary/40 hover:border-accent-secondary hover:bg-accent-secondary/10 rounded-full font-medium transition-all"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/Cjim12"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 border border-accent-secondary/40 hover:border-accent-secondary hover:bg-accent-secondary/10 rounded-full font-medium transition-all"
      >
        GitHub
      </a>
    </div>
  </div>
</section>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, 8px); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-bounce-slow { animation: bounce-slow 2s infinite; }
      `}</style>
    </div>
  );
}