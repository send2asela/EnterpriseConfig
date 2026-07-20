import Link from "next/link";
import { servicePages } from "./services/service-data";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "Industries", href: "#industries" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const technologies = [
  "Cisco",
  "Fortinet",
  "Microsoft",
  "VMware",
  "AWS",
  "Python",
];

const contactEmail = "consult@enterpriseconfig.com";

const businessDetails = [
  { label: "Company", value: "Enterprise Config" },
  { label: "KVK number", value: "98085956" },
  { label: "BTW identification number", value: "NL005307322B79" },
  { label: "Registered in", value: "The Netherlands" },
];

const webPortfolio = {
  title: "Sri Lankan Artist",
  description:
    "A polished, modern website for a creative brand, designed to present artistic work with clarity and elegance.",
  link: "https://www.srilankanartist.com/",
  tags: ["Design", "Frontend", "Brand Presence"],
};

const reasons = [
  {
    title: "Engineering quality",
    description:
      "Every engagement is grounded in practical design, implementation discipline, and long-term maintainability.",
  },
  {
    title: "Security-first thinking",
    description:
      "Architecture decisions are shaped by resilience, visibility, and operational continuity.",
  },
  {
    title: "Clear delivery",
    description:
      "Projects are structured around outcomes, transparent communication, and measurable progress.",
  },
];

const projects = [
  {
    title: "Branch modernization",
    description:
      "A secure and scalable network refresh for a distributed business environment.",
  },
  {
    title: "Industrial network hardening",
    description:
      "A layered security approach for operational environments with strict uptime needs.",
  },
  {
    title: "Automation framework",
    description:
      "Operational tooling and workflow automation to reduce manual effort and improve consistency.",
  },
];

const articles = [
  {
    title: "Designing resilient enterprise networks",
    description:
      "A practical view on architecture choices that balance reliability and complexity.",
  },
  {
    title: "Securing OT environments without slowing operations",
    description:
      "How to approach industrial security with measurable, sensible controls.",
  },
  {
    title: "Python automation for infrastructure operations",
    description:
      "Examples of automation patterns that reduce repetitive engineering work.",
  },
];

function ServiceDrawing({ slug }: { slug: string }) {
  const frameClass =
    "h-40 overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_20%_20%,_rgba(245,158,11,0.16),_transparent_34%),linear-gradient(135deg,_rgba(255,255,255,0.06),_rgba(255,255,255,0.02))] p-3";
  const labelClass = "fill-stone-100 text-[9px] font-semibold tracking-wide";

  if (slug === "enterprise-networking") {
    return (
      <div className={frameClass}>
        <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 320 150">
          <defs>
            <linearGradient id="network-gold" x1="0" x2="1">
              <stop stopColor="#fbbf24" stopOpacity="0.95" />
              <stop offset="1" stopColor="#34d399" stopOpacity="0.85" />
            </linearGradient>
          </defs>
          <path
            d="M32 54 C78 20 111 20 151 52 S224 88 286 54"
            fill="none"
            stroke="url(#network-gold)"
            strokeDasharray="5 6"
            strokeWidth="2"
          />
          <path
            d="M32 94 C77 126 116 125 153 96 S224 62 286 94"
            fill="none"
            stroke="url(#network-gold)"
            strokeDasharray="5 6"
            strokeOpacity="0.7"
            strokeWidth="2"
          />
          <g>
            <ellipse cx="50" cy="74" fill="#1c1917" rx="35" ry="22" stroke="#fbbf24" strokeOpacity="0.55" />
            <path d="M23 74h54M31 62c9 10 9 23 0 33M68 62c-9 10-9 23 0 33" fill="none" stroke="#fbbf24" strokeOpacity="0.45" />
            <text className={labelClass} x="38" y="78">WAN</text>
          </g>
          <g>
            <path d="M132 43h58l16 15v48l-16 15h-58l-16-15V58z" fill="#16382c" stroke="#34d399" strokeOpacity="0.7" />
            <path d="M135 61h53M135 78h53M135 95h53" stroke="#d1fae5" strokeOpacity="0.35" />
            <text className={labelClass} x="144" y="84">HA EDGE</text>
          </g>
          <g>
            <path d="M238 45h45l18 18v52h-63z" fill="#111827" stroke="#e7e5e4" strokeOpacity="0.25" />
            <path d="M247 60h34M247 75h44M247 90h37" stroke="#f5f5f4" strokeOpacity="0.35" strokeWidth="3" />
            <circle cx="288" cy="113" fill="#fbbf24" r="4" />
            <text className={labelClass} x="246" y="132">CORE / DC / AZURE</text>
          </g>
        </svg>
      </div>
    );
  }

  if (slug === "network-security") {
    return (
      <div className={frameClass}>
        <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 320 150">
          <defs>
            <linearGradient id="security-shield" x1="0" x2="1">
              <stop stopColor="#f59e0b" />
              <stop offset="1" stopColor="#10b981" />
            </linearGradient>
          </defs>
          <path d="M44 42h74M44 75h74M44 108h74M202 42h74M202 75h74M202 108h74" stroke="#fbbf24" strokeOpacity="0.32" strokeWidth="2" />
          <path d="M160 29l53 19v34c0 29-19 48-53 59-34-11-53-30-53-59V48z" fill="#1c1917" stroke="url(#security-shield)" strokeWidth="2" />
          <path d="M139 79l14 14 31-35" fill="none" stroke="#fef3c7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
          {[
            [46, 31, "USERS"],
            [46, 64, "GUEST"],
            [46, 97, "CLOUD"],
            [226, 31, "APPS"],
            [226, 64, "DC"],
            [226, 97, "OT"],
          ].map(([x, y, label]) => (
            <g key={label as string}>
              <rect fill="#111111" height="24" rx="8" stroke="#ffffff" strokeOpacity="0.12" width="70" x={x as number} y={y as number} />
              <text className={labelClass} x={(x as number) + 14} y={(y as number) + 16}>{label}</text>
            </g>
          ))}
        </svg>
      </div>
    );
  }

  if (slug === "ot-ics-security") {
    return (
      <div className={frameClass}>
        <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 320 150">
          <path d="M38 34h244M38 76h244M38 118h244" stroke="#fbbf24" strokeOpacity="0.22" strokeWidth="2" />
          {[
            [58, 21, 0, "IT"],
            [188, 21, 1, "DMZ"],
            [58, 63, 2, "SCADA"],
            [188, 63, 3, "ENG"],
            [58, 105, 4, "PLC"],
            [188, 105, 5, "HMI"],
          ].map(([x, y, index, label]) => (
            <g key={label as string}>
              <path
                d={`M${x as number} ${y as number}h70l12 12v22h-82z`}
                fill={Number(index) % 2 === 0 ? "#111827" : "#153428"}
                stroke={Number(index) % 2 === 0 ? "#fbbf24" : "#34d399"}
                strokeOpacity="0.45"
              />
              <circle cx={(x as number) + 13} cy={(y as number) + 17} fill="#fef3c7" r="4" opacity="0.75" />
              <text className={labelClass} x={(x as number) + 28} y={(y as number) + 21}>{label}</text>
            </g>
          ))}
          <path d="M151 33v86M169 33v86" stroke="#34d399" strokeDasharray="4 5" strokeOpacity="0.45" strokeWidth="2" />
        </svg>
      </div>
    );
  }

  if (slug === "sd-wan") {
    return (
      <div className={frameClass}>
        <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 320 150">
          <path d="M76 42C118 17 191 17 242 44M76 108c42 25 115 25 166-2" fill="none" stroke="#fbbf24" strokeDasharray="6 6" strokeWidth="2" />
          <path d="M76 75h168" stroke="#34d399" strokeDasharray="4 6" strokeOpacity="0.75" strokeWidth="2" />
          <g>
            <path d="M36 38h55l16 16v43L91 113H36L20 97V54z" fill="#111827" stroke="#fbbf24" strokeOpacity="0.55" />
            <text className={labelClass} x="43" y="80">BRANCH</text>
          </g>
          <g>
            <circle cx="160" cy="75" fill="#1c1917" r="34" stroke="#fbbf24" strokeWidth="2" />
            <path d="M143 75h34M160 58v34" stroke="#fef3c7" strokeLinecap="round" strokeWidth="4" />
            <text className={labelClass} x="143" y="119">SD-WAN</text>
          </g>
          <g>
            <path d="M233 52c5-18 37-21 47-4 21 0 27 28 8 40h-62c-20-8-14-35 7-36z" fill="#153428" stroke="#34d399" strokeOpacity="0.58" />
            <text className={labelClass} x="244" y="79">CLOUD</text>
          </g>
        </svg>
      </div>
    );
  }

  if (slug === "automation") {
    return (
      <div className={frameClass}>
        <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 320 150">
          <path d="M74 76h60M185 76h60M160 47v-25M160 103v25" stroke="#fbbf24" strokeDasharray="5 5" strokeWidth="2" />
          {[
            [34, 52, "API"],
            [122, 18, "GIT"],
            [122, 86, "RUN"],
            [236, 52, "REPORT"],
          ].map(([x, y, label]) => (
            <g key={label as string}>
              <path d={`M${x as number} ${y as number}h52l12 12v30h-64z`} fill="#111827" stroke="#ffffff" strokeOpacity="0.2" />
              <path d={`M${(x as number) + 12} ${(y as number) + 15}h27M${(x as number) + 12} ${(y as number) + 28}h38`} stroke="#f5f5f4" strokeOpacity="0.35" />
              <text className={labelClass} x={(x as number) + 14} y={(y as number) + 50}>{label}</text>
            </g>
          ))}
          <circle cx="160" cy="75" fill="#1c1917" r="27" stroke="#34d399" strokeWidth="2" />
          <path d="M148 76l8 8 17-20" fill="none" stroke="#d1fae5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </svg>
      </div>
    );
  }

  return (
    <div className={frameClass}>
      <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 320 150">
        <path d="M48 33h224a12 12 0 0 1 12 12v76H36V45a12 12 0 0 1 12-12z" fill="#111111" stroke="#ffffff" strokeOpacity="0.18" />
        <path d="M36 56h248" stroke="#ffffff" strokeOpacity="0.14" />
        <circle cx="56" cy="45" fill="#fbbf24" r="4" />
        <circle cx="70" cy="45" fill="#34d399" r="4" />
        <path d="M59 76h73v31H59z" fill="#3f2f08" stroke="#fbbf24" strokeOpacity="0.55" />
        <path d="M151 77h91M151 93h71M151 109h52" stroke="#f5f5f4" strokeLinecap="round" strokeOpacity="0.4" strokeWidth="7" />
        <path d="M132 130h56M112 140h96" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="4" />
        <text className={labelClass} x="70" y="96">SITE</text>
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.14),_transparent_30%),radial-gradient(circle_at_85%_15%,_rgba(16,185,129,0.1),_transparent_26%),linear-gradient(135deg,_#11100c_0%,_#181713_48%,_#050505_100%)] text-stone-50">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <Link
          href="#top"
          className="text-lg font-semibold tracking-[0.25em] text-stone-100 uppercase"
        >
          EnterpriseConfig
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-stone-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition hover:text-amber-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="rounded-full border border-amber-300/35 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-100 transition hover:bg-amber-400/20"
        >
          Schedule a Consultation
        </Link>
      </header>

      <main
        id="top"
        className="mx-auto flex max-w-7xl flex-col gap-24 px-6 pb-24 lg:px-8"
      >
        <section className="grid gap-10 rounded-[32px] border border-stone-200/10 bg-zinc-950/70 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] backdrop-blur xl:grid-cols-[1.1fr_0.9fr] xl:p-12">
          <div className="flex flex-col justify-center">
            <span className="mb-4 w-fit rounded-full border border-amber-300/30 bg-amber-400/10 px-3 py-1 text-sm font-medium text-amber-200">
              Engineering-led consulting
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Enterprise Network &amp; Cybersecurity Consulting
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-300">
              Design. Secure. Automate. EnterpriseConfig helps businesses build
              strong network foundations, modernize operations, and strengthen
              security in complex environments.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-amber-400 px-6 py-3 text-center text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
              >
                Schedule a Consultation
              </a>
              <a
                href="#services"
                className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-stone-200 transition hover:border-amber-300/45 hover:text-amber-100"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="rounded-[24px] border border-stone-200/10 bg-stone-100/5 p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-stone-400">
                Operational focus
              </p>
              <span className="rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
                Trusted delivery
              </span>
            </div>
            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-4">
                <p className="text-sm text-stone-400">Core capabilities</p>
                <p className="mt-2 text-xl font-semibold text-white">
                  Fortinet • Cisco • SD-WAN • Automation
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-4">
                  <p className="text-3xl font-semibold text-white">24/7</p>
                  <p className="mt-1 text-sm text-stone-400">
                    Operational awareness
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-4">
                  <p className="text-3xl font-semibold text-white">100%</p>
                  <p className="mt-1 text-sm text-stone-400">
                    Consulting-led approach
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[24px] border border-white/10 bg-zinc-950/50 px-6 py-8">
          <p className="text-center text-sm font-medium uppercase tracking-[0.25em] text-stone-400">
            Trusted technologies
          </p>
          <div className="mt-6 grid gap-3 text-center text-sm font-medium text-stone-200 sm:grid-cols-3 lg:grid-cols-6">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="rounded-full border border-white/10 bg-stone-100/5 px-4 py-3"
              >
                {tech}
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="space-y-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-300">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Focused expertise for networking, security, and growth.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {servicePages.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                aria-label={`Open ${service.shortTitle} details`}
                className="group flex min-h-[360px] flex-col rounded-[24px] border border-white/10 bg-zinc-950/60 p-5 transition duration-300 hover:-translate-y-1 hover:border-amber-300/35 hover:bg-zinc-900/80 hover:shadow-[0_24px_70px_rgba(0,0,0,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70"
              >
                <ServiceDrawing slug={service.slug} />
                <div className="mt-6 flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-white">
                      {service.shortTitle}
                    </h3>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-300/25 bg-amber-400/10 text-sm font-semibold text-amber-100 transition group-hover:border-amber-300/50 group-hover:bg-amber-400 group-hover:text-zinc-950">
                      Go
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-stone-400">
                    {service.summary}
                  </p>
                  <p className="mt-auto pt-6 text-sm font-semibold text-amber-200 transition group-hover:text-amber-100">
                    Open service details
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div
            id="web-development"
            className="rounded-[32px] border border-white/10 bg-zinc-950/60 p-6 lg:p-8"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-300">
                  Web development portfolio
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {webPortfolio.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-400">
                  {webPortfolio.description}
                </p>
              </div>
              <a
                href={webPortfolio.link}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-amber-300/30 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-100 transition hover:bg-amber-400/20"
              >
                Visit Website
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {webPortfolio.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-stone-100/5 px-3 py-1 text-sm text-stone-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="grid gap-8 rounded-[32px] border border-white/10 bg-zinc-950/60 p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10"
        >
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-300">
              Why EnterpriseConfig
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Technical depth with a clear business mindset.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-stone-400">
              The goal is not to sell noise. The goal is to help organizations
              make better infrastructure decisions, strengthen resilience, and
              move forward with confidence.
            </p>
          </div>
          <div className="space-y-4">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-2xl border border-white/10 bg-stone-100/5 p-5"
              >
                <h3 className="text-lg font-semibold text-white">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-stone-400">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-[32px] border border-white/10 bg-zinc-950/60 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-300">
              Meet the engineer
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              A hands-on technical partner behind the company.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-400">
              I’m Asela Wijesooriya, a Network &amp; Security Engineer based in
              the Netherlands. I help businesses design, secure, and automate
              infrastructure with a focus on practical delivery and long-term
              reliability.
            </p>
          </div>
          <div className="rounded-[24px] border border-emerald-300/25 bg-emerald-400/10 p-6">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-200">
              Areas of focus
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-stone-300">
              <li>• Fortinet, Cisco, and secure enterprise networking</li>
              <li>• OT / ICS security and operational resilience</li>
              <li>• SD-WAN, automation, and cloud-connected architecture</li>
              <li>• Python-based tooling and process modernization</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="space-y-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-300">
                Featured projects
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Selected work and future case studies.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-stone-400">
              This section will grow as new consulting engagements and
              implementation stories are published.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-[24px] border border-white/10 bg-zinc-950/60 p-6"
              >
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-400">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="blog" className="space-y-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-300">
                Latest technical articles
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Practical insights for modern infrastructure teams.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-stone-400">
              A long-term content layer for credibility, search visibility, and
              technical thought leadership.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.title}
                className="rounded-[24px] border border-white/10 bg-zinc-950/60 p-6"
              >
                <h3 className="text-xl font-semibold text-white">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-400">
                  {article.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="rounded-[32px] border border-amber-200/15 bg-gradient-to-br from-amber-400/15 to-emerald-500/10 p-8 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-200">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Let’s discuss your next network, security, or automation
                initiative.
              </h2>
              <p className="mt-4 text-lg leading-8 text-stone-300">
                Reach out for a consultation and start a practical conversation
                about your environment.
              </p>
              <a
                href={`mailto:${contactEmail}`}
                className="mt-8 inline-flex rounded-full bg-amber-400 px-6 py-3 text-center text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
              >
                Contact EnterpriseConfig
              </a>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-zinc-950/55 p-6">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-200">
                Business details
              </p>
              <dl className="mt-5 space-y-4">
                {businessDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex flex-col gap-1 border-b border-white/10 pb-4 last:border-b-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <dt className="text-sm text-stone-400">{detail.label}</dt>
                    <dd className="text-sm font-medium text-stone-100">
                      {detail.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <a
                href={`mailto:${contactEmail}`}
                className="mt-5 block text-sm font-medium text-amber-100 transition hover:text-amber-50"
              >
                {contactEmail}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-sm text-stone-400 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1">
            <p>© 2026 EnterpriseConfig</p>
            <p>KVK 98085956 · BTW NL005307322B79</p>
          </div>
          <div className="flex gap-4">
            <Link href="#services" className="transition hover:text-amber-300">
              Services
            </Link>
            <Link
              href="/services/web-development"
              className="transition hover:text-amber-300"
            >
              Web Development
            </Link>
            <Link href="#about" className="transition hover:text-amber-300">
              About
            </Link>
            <Link href="#contact" className="transition hover:text-amber-300">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
