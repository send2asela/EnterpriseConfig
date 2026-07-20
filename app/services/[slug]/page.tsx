import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getServicePage, servicePages } from "../service-data";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return servicePages.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | EnterpriseConfig`,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.13),_transparent_30%),radial-gradient(circle_at_88%_10%,_rgba(16,185,129,0.1),_transparent_28%),linear-gradient(135deg,_#11100c_0%,_#171510_48%,_#050505_100%)] text-stone-50">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold uppercase tracking-[0.25em] text-stone-100"
        >
          EnterpriseConfig
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-stone-300 md:flex">
          <Link href="/#services" className="transition hover:text-amber-300">
            Services
          </Link>
          <Link href="/#projects" className="transition hover:text-amber-300">
            Projects
          </Link>
          <Link href="/#about" className="transition hover:text-amber-300">
            About
          </Link>
          <Link href="/#contact" className="transition hover:text-amber-300">
            Contact
          </Link>
        </nav>
        <Link
          href="/#contact"
          className="rounded-full border border-amber-300/35 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-100 transition hover:bg-amber-400/20"
        >
          Schedule a Consultation
        </Link>
      </header>

      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 pb-24 lg:px-8">
        <section className="grid gap-10 rounded-[32px] border border-stone-200/10 bg-zinc-950/70 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] backdrop-blur lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
          <div>
            <Link
              href="/#services"
              className="text-sm font-medium text-amber-200 transition hover:text-amber-100"
            >
              Back to services
            </Link>
            <p className="mt-8 text-sm font-medium uppercase tracking-[0.25em] text-amber-300">
              {service.eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
              {service.description}
            </p>
          </div>

          <div className="grid content-start gap-3">
            {service.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-2xl border border-white/10 bg-stone-100/5 p-5"
              >
                <p className="text-sm leading-7 text-stone-200">{highlight}</p>
              </div>
            ))}
          </div>
        </section>

        {service.design ? (
          <section className="grid gap-8 rounded-[32px] border border-white/10 bg-zinc-950/60 p-8 lg:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-300">
                {service.design.title}
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Full HA enterprise network layout.
              </h2>
              <p className="mt-4 text-lg leading-8 text-stone-400">
                {service.design.description}
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {service.design.zones.map((zone, index) => (
                <div
                  key={zone.label}
                  className="relative rounded-[24px] border border-white/10 bg-stone-100/5 p-5"
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-sm font-semibold text-zinc-950">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {zone.label}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-stone-400">
                    {zone.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-[28px] border border-emerald-300/20 bg-emerald-400/10 p-6">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-200">
                Traffic flow
              </p>
              <div className="mt-5 grid gap-3 text-sm font-medium text-stone-100 md:grid-cols-6">
                {[
                  "Users",
                  "Cisco Access",
                  "Cisco Core",
                  "Fortinet HA",
                  "VPN / Cloud",
                  "Apps + DC",
                ].map((step) => (
                  <div
                    key={step}
                    className="rounded-full border border-white/10 bg-zinc-950/55 px-4 py-3 text-center"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {service.samples ? (
          <section className="grid gap-8 rounded-[32px] border border-white/10 bg-zinc-950/60 p-8 lg:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-300">
                Sample network designs
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Practical patterns for real environments.
              </h2>
              <p className="mt-4 text-lg leading-8 text-stone-400">
                These examples show how the same principles can be shaped for a
                single office, branch network, hybrid cloud, or remote access
                requirement.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {service.samples.map((sample) => (
                <article
                  key={sample.title}
                  className="rounded-[28px] border border-white/10 bg-stone-100/5 p-6"
                >
                  <h3 className="text-2xl font-semibold text-white">
                    {sample.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-stone-400">
                    {sample.description}
                  </p>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-stone-300">
                    {sample.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {service.portfolio ? (
          <section className="grid gap-8 rounded-[32px] border border-amber-200/15 bg-zinc-950/60 p-8 lg:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-300">
                Web development portfolio
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Selected website work.
              </h2>
              <p className="mt-4 text-lg leading-8 text-stone-400">
                Examples of customer-facing sites built around clear branding,
                responsive presentation, and simple conversion paths.
              </p>
            </div>

            <div className="grid gap-5">
              {service.portfolio.map((project) => (
                <article
                  key={project.title}
                  className="grid gap-6 rounded-[28px] border border-white/10 bg-stone-100/5 p-6 lg:grid-cols-[1fr_auto] lg:items-center"
                >
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-stone-400">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-zinc-950/60 px-3 py-1 text-sm text-stone-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-amber-300/30 bg-amber-400/10 px-5 py-3 text-center text-sm font-semibold text-amber-100 transition hover:bg-amber-400 hover:text-zinc-950"
                  >
                    Visit Website
                  </a>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="grid gap-6 lg:grid-cols-2">
          {service.sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[28px] border border-white/10 bg-zinc-950/60 p-6 lg:p-8"
            >
              <h2 className="text-2xl font-semibold text-white">
                {section.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-stone-400">
                {section.body}
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-stone-300">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="rounded-[32px] border border-white/10 bg-zinc-950/60 p-8 lg:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-300">
            Technology stack
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {service.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-stone-100/5 px-4 py-2 text-sm font-medium text-stone-200"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-[32px] border border-amber-200/15 bg-gradient-to-br from-amber-400/15 to-emerald-500/10 p-8 lg:p-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-200">
                Next step
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Discuss a design for your environment.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-300">
                Share your current topology, pain points, cloud plans, and
                security goals. EnterpriseConfig can turn that into a practical
                design and implementation path.
              </p>
            </div>
            <Link
              href="/#contact"
              className="rounded-full bg-amber-400 px-6 py-3 text-center text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
            >
              Contact EnterpriseConfig
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
