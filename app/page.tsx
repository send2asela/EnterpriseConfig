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
  const nodeClass =
    "flex h-9 w-9 items-center justify-center rounded-full border border-amber-200/30 bg-amber-400/15 text-[10px] font-semibold text-amber-100";
  const lineClass = "h-px flex-1 bg-gradient-to-r from-amber-300/40 to-emerald-300/35";

  if (slug === "enterprise-networking") {
    return (
      <div className="flex h-32 items-center gap-3 rounded-2xl border border-white/10 bg-stone-100/5 p-4">
        <div className="grid gap-2">
          <span className={nodeClass}>ISP</span>
          <span className={nodeClass}>ISP</span>
        </div>
        <span className={lineClass} />
        <div className="grid gap-2">
          <span className="rounded-xl border border-emerald-300/30 bg-emerald-400/15 px-3 py-2 text-center text-[10px] font-semibold text-emerald-100">
            HA
          </span>
          <span className="rounded-xl border border-white/10 bg-zinc-950/70 px-3 py-2 text-center text-[10px] font-semibold text-stone-200">
            Core
          </span>
        </div>
        <span className={lineClass} />
        <div className="grid grid-cols-2 gap-2">
          {["LAN", "DC", "VPN", "AZ"].map((label) => (
            <span
              key={label}
              className="rounded-lg border border-white/10 bg-zinc-950/70 px-2 py-2 text-center text-[10px] font-semibold text-stone-200"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (slug === "network-security") {
    return (
      <div className="grid h-32 grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-2xl border border-white/10 bg-stone-100/5 p-4">
        <div className="grid gap-2">
          {["Users", "Guest", "Cloud"].map((label) => (
            <span
              key={label}
              className="rounded-lg border border-white/10 bg-zinc-950/70 px-3 py-2 text-[10px] font-semibold text-stone-300"
            >
              {label}
            </span>
          ))}
        </div>
        <div className="flex h-20 w-16 items-center justify-center rounded-2xl border border-amber-300/35 bg-amber-400/15 text-xs font-semibold text-amber-100">
          FW
        </div>
        <div className="grid gap-2">
          {["Apps", "DC", "OT"].map((label) => (
            <span
              key={label}
              className="rounded-lg border border-emerald-300/20 bg-emerald-400/10 px-3 py-2 text-[10px] font-semibold text-emerald-100"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (slug === "ot-ics-security") {
    return (
      <div className="h-32 rounded-2xl border border-white/10 bg-stone-100/5 p-4">
        <div className="grid h-full grid-rows-3 gap-2">
          {[
            ["IT", "DMZ"],
            ["SCADA", "ENG"],
            ["PLC", "HMI"],
          ].map((row) => (
            <div key={row.join("-")} className="grid grid-cols-2 gap-2">
              {row.map((label) => (
                <span
                  key={label}
                  className="rounded-lg border border-white/10 bg-zinc-950/70 px-3 py-2 text-center text-[10px] font-semibold text-stone-200"
                >
                  {label}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (slug === "sd-wan") {
    return (
      <div className="flex h-32 items-center justify-between rounded-2xl border border-white/10 bg-stone-100/5 p-4">
        <div className="grid gap-2">
          {["ISP A", "ISP B"].map((label) => (
            <span
              key={label}
              className="rounded-lg border border-white/10 bg-zinc-950/70 px-3 py-2 text-[10px] font-semibold text-stone-200"
            >
              {label}
            </span>
          ))}
        </div>
        <div className="relative h-20 w-28">
          <span className="absolute left-0 top-5 h-px w-full rotate-12 bg-amber-300/45" />
          <span className="absolute left-0 top-12 h-px w-full -rotate-12 bg-emerald-300/40" />
          <span className="absolute left-9 top-7 rounded-full border border-amber-300/35 bg-amber-400/15 px-3 py-2 text-[10px] font-semibold text-amber-100">
            SD
          </span>
        </div>
        <div className="grid gap-2">
          {["HQ", "AZ"].map((label) => (
            <span
              key={label}
              className="rounded-lg border border-emerald-300/20 bg-emerald-400/10 px-3 py-2 text-[10px] font-semibold text-emerald-100"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (slug === "automation") {
    return (
      <div className="grid h-32 grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-2xl border border-white/10 bg-stone-100/5 p-4">
        <div className="grid gap-2">
          {["API", "Git"].map((label) => (
            <span
              key={label}
              className="rounded-lg border border-white/10 bg-zinc-950/70 px-3 py-2 text-center text-[10px] font-semibold text-stone-200"
            >
              {label}
            </span>
          ))}
        </div>
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-amber-300/35 bg-amber-400/15 text-xs font-semibold text-amber-100">
          PY
        </div>
        <div className="grid gap-2">
          {["Backup", "Report"].map((label) => (
            <span
              key={label}
              className="rounded-lg border border-emerald-300/20 bg-emerald-400/10 px-3 py-2 text-center text-[10px] font-semibold text-emerald-100"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-32 rounded-2xl border border-white/10 bg-stone-100/5 p-4">
      <div className="flex h-full flex-col rounded-xl border border-white/10 bg-zinc-950/70">
        <div className="flex gap-1 border-b border-white/10 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-amber-300" />
          <span className="h-2 w-2 rounded-full bg-emerald-300" />
          <span className="h-2 w-2 rounded-full bg-stone-500" />
        </div>
        <div className="grid flex-1 grid-cols-[0.7fr_1fr] gap-3 p-3">
          <div className="rounded-lg bg-amber-300/20" />
          <div className="grid gap-2">
            <span className="rounded-full bg-stone-200/25" />
            <span className="rounded-full bg-stone-200/15" />
            <span className="w-2/3 rounded-full bg-emerald-300/25" />
          </div>
        </div>
      </div>
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
