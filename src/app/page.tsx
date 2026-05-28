const ACCOUNTS = [
  "Salesforce",
  "Capgemini",
  "The New York Times",
  "NASA",
  "Whitehouse.gov",
];

const STATS = [
  { value: "$6M+", label: "in pipeline influenced" },
  { value: "27%", label: "higher average ACV moving upmarket" },
  { value: "$500K+", label: "closed-won from a single white paper" },
  { value: "12 yrs", label: "building B2B SaaS demand" },
];

const PRINCIPLES = [
  "Done beats perfect",
  "If it’s broken, let’s fix it",
  "Work smarter, not harder",
  "Kill the channel that isn’t earning its slot",
];

const SKILLS = [
  {
    title: "Go-to-Market Strategy",
    body: "I own enterprise GTM end to end. Vertical takeout campaigns against incumbents like Adobe AEM and Sitecore, product launches, the GTM calendar, and the sales enablement that makes any of it convert.",
    tags: ["Vertical takeouts", "Product launches", "GTM calendar", "Sales enablement"],
  },
  {
    title: "Demand & Lifecycle",
    body: "I capture intent the moment an account goes in market, then nurture it across the funnel. My lifecycle programs at WordPress VIP lifted engagement and shortened the time from lead to opportunity.",
    tags: ["Lifecycle & nurture", "Intent capture", "Pipeline", "Funnel analytics"],
  },
  {
    title: "ABM & Intent",
    body: "I stood up Demandbase at Zilliant from integration through intent triggers and nurtures, built the high-value account segments, and got sales and marketing running on the same plays.",
    tags: ["Demandbase", "Account scoring", "Intent triggers", "ABM"],
  },
  {
    title: "Email & Automation",
    body: "I started at iContact, an email service provider, so I learned email from the inside. Deliverability, segmentation, behavioral triggers, and multi-step journeys. I build the logic up front so the system runs itself.",
    tags: ["Deliverability", "Segmentation", "Behavioral triggers", "Marketo / HubSpot"],
  },
  {
    title: "Paid Media & Sponsorships",
    body: "Most of my paid budget lives outside social and search. Sponsored newsletters, podcasts, Spotify audio, CTV, OOH, and content syndication, which has been my highest-ROI channel. I hold publishers to CPL, CAC, and ROAS, not vanity numbers.",
    tags: ["Sponsorships", "Spotify / Podcast", "CTV & OOH", "Syndication", "LinkedIn", "Google", "Reddit", "Meta"],
  },
  {
    title: "AI-Enabled Marketing Ops",
    body: "I build the AI systems a marketing team runs on. Claude Code agents, MCP integrations, and workflows for campaign ops, content, and reporting. It’s also how I drove our early bet on AEO and GEO content.",
    tags: ["Claude Code", "MCP", "AEO / GEO", "Automation"],
  },
];

const TOOLS = ["HubSpot", "Marketo", "Salesforce", "Demandbase", "Google Analytics", "WordPress", "Claude Code"];

const WORK = [
  {
    company: "WordPress VIP",
    title: "Catching the AI-native web wave",
    challenge:
      "The market shifted to an AI-native web almost overnight. We had a short window to own the conversation before everyone else did.",
    approach:
      "I moved fast and built a body of content around it, anchored by a white paper on why WordPress is the CMS to future-proof your content for AI. Then I put it everywhere our buyers were.",
    metrics: [
      { value: "$500K+", label: "in attributed closed-won revenue" },
      { value: "#1", label: "most SQLs of any content in my tenure" },
    ],
  },
  {
    company: "WordPress VIP",
    title: "Moving the enterprise segment upmarket",
    challenge:
      "Winning bigger, more technical deals meant building demand in verticals where we had no presence, against incumbents like Adobe AEM and Sitecore.",
    approach:
      "I built takeout and new-vertical campaigns from scratch. Messaging, creative, paid, content, and sales enablement, with the website working as our growth engine and account-based programs reaching the full buying committee.",
    metrics: [
      { value: "27%", label: "higher average ACV" },
      { value: "$6M+", label: "in pipeline influenced" },
    ],
  },
  {
    company: "Zilliant",
    title: "Standing up an ABM engine",
    challenge:
      "Sales and marketing needed to spend their time on the accounts actually in market, not spray and pray.",
    approach:
      "I rolled out Demandbase from integration through intent triggers and nurtures, built the high-value segments, and added a content syndication program that turned into a major low-cost lead driver.",
    metrics: [
      { value: "+12%", label: "email open rate" },
      { value: "+15%", label: "click-to-open rate" },
    ],
  },
  {
    company: "iContact",
    title: "Learning email from inside the platform",
    challenge:
      "My first marketing job was at an email service provider, where customers buy deliverability and segmentation. It rewired how I think about automation.",
    approach:
      "I built behavioral triggers and multi-step nurtures so the system handles the repetitive work. One subject line guide pulled more downloads than anything else we had, and I was running the team within three months.",
    metrics: [
      { value: "8K+", label: "downloads at sub-$1 CPL" },
      { value: "3 mo", label: "to promotion to team lead" },
    ],
  },
];

const PROJECTS = [
  {
    name: "ATX Block Party",
    domain: "atxblockparty.com",
    href: "https://atxblockparty.com",
    status: "Live",
    live: true,
    description: "Everything you need to throw a block party in Austin, permits included.",
  },
  {
    name: "The Hippo Solution",
    domain: "thehipposolution.com",
    href: "https://thehipposolution.com",
    status: "Launching soon",
    live: false,
    description: "Here purely because it’s a fascinating story. I’ll share it soon.",
  },
  {
    name: "Upcoming Construction",
    domain: "upcomingconstruction.com",
    href: "https://upcomingconstruction.com",
    status: "Coming soon",
    live: false,
    description: "Me, finally working for myself. Spoiler: it’s exactly what it sounds like.",
  },
];

const HOBBIES = [
  "Musician",
  "Gardener",
  "Rosarian",
  "Flower farmer",
  "Sourdough baker",
  "Pressed-flower artist",
  "Photographer",
  "Professional hot dog enthusiast",
];

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative isolate inline-block">
      <span
        aria-hidden
        className="absolute inset-x-[-0.1em] bottom-[0.08em] z-0 h-[0.42em] -rotate-1 bg-brand-yellow"
      />
      <span className="relative z-10">{children}</span>
    </span>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-pink">
      <span className="h-2 w-2 rounded-full bg-brand-pink" />
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <div className="font-sans">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg font-extrabold tracking-tight">
            Christina&nbsp;Child
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#about" className="transition hover:text-brand-pink">About</a>
            <a href="#expertise" className="transition hover:text-brand-pink">Expertise</a>
            <a href="#work" className="transition hover:text-brand-pink">Work</a>
            <a href="#building" className="transition hover:text-brand-pink">Building</a>
            <a href="#life" className="transition hover:text-brand-pink">Life</a>
            <a href="#contact" className="transition hover:text-brand-pink">Contact</a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-paper transition hover:bg-brand-pink"
          >
            Get in touch
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-pink-soft blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-brand-yellow-soft blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pt-28">
          <Eyebrow>Marketing &amp; GTM Leader</Eyebrow>
          <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl">
            Enterprise marketing that goes{" "}
            <Highlight>up and to the right.</Highlight>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/80 sm:text-xl">
            I’m Christina Child. I’ve spent 12 years turning marketing into real
            pipeline for B2B SaaS, and for the last five I’ve run enterprise
            go-to-market at WordPress VIP. I own the strategy and lead the team
            behind it, marketing to the engineering leaders and the marketers who
            deploy on the platform at companies like Salesforce, NASA, and The New
            York Times.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition hover:-translate-y-0.5 hover:bg-brand-pink"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-ink px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-brand-yellow"
            >
              Get in touch
            </a>
            <a
              href="#building"
              className="inline-flex items-center justify-center px-2 py-3 text-sm font-semibold text-ink/70 underline decoration-brand-pink decoration-2 underline-offset-4 transition hover:text-ink"
            >
              What I’m building
            </a>
          </div>
        </div>

        {/* Account marquee */}
        <div className="border-y border-ink/10 bg-ink py-5 text-paper">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="flex w-max animate-marquee items-center gap-12 pr-12">
              {[...ACCOUNTS, ...ACCOUNTS, ...ACCOUNTS, ...ACCOUNTS].map((name, i) => (
                <span key={i} className="flex items-center gap-12 whitespace-nowrap text-lg font-semibold tracking-tight text-paper/70">
                  {name}
                  <span className="text-brand-pink">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-ink/10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-6 py-16 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="px-2">
              <div className="font-display text-4xl font-extrabold text-brand-pink sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 max-w-[12rem] text-sm leading-snug text-ink/70">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <Eyebrow>About</Eyebrow>
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr]">
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            I run the whole play, and I have a good time doing it.
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              At WordPress VIP I lead enterprise go-to-market for a developer-led
              CMS. Half the job is marketing to developers, the engineering
              leaders and technical architects evaluating the platform. The other
              half is marketing to the marketers who buy alongside them. I run it
              end to end: market research, campaign concepts, the GTM calendar,
              the assets, sales enablement, and the outbound that actually
              converts.
            </p>
            <p>
              I came up in scrappy startups in Raleigh before I moved into
              enterprise, so I’m comfortable when the org chart changes every
              quarter. I lead a high-performing team and coordinate a demand pod
              across PMM, customer marketing, partner marketing, RevOps, Sales,
              and the executive team. I earned my first promotion to team lead
              three months into the job, and leading people has been the best part
              of the work ever since.
            </p>
            <p>
              The newest piece is the AI infrastructure I build for marketing.
              I’m in Claude Code every day building agents, integrations, and
              workflows that take over campaign ops, content prep, scoring, and
              reporting. We get more output at the same headcount. Every manual
              process is a future workflow, and working smarter beats working
              harder every time.
            </p>
          </div>
        </div>
        <ul className="mt-12 flex flex-wrap gap-3">
          {PRINCIPLES.map((p) => (
            <li
              key={p}
              className="rounded-full border-2 border-ink bg-paper px-5 py-2 text-sm font-semibold"
            >
              {p}
            </li>
          ))}
        </ul>
      </section>

      {/* Expertise */}
      <section id="expertise" className="bg-brand-pink-soft/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Eyebrow>Expertise</Eyebrow>
          <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            What I do
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((s) => (
              <div
                key={s.title}
                className="flex flex-col rounded-3xl border-2 border-ink bg-paper p-7 transition hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--ink)]"
              >
                <h3 className="font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-3 flex-1 text-ink/75">{s.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-ink/5 px-3 py-1 text-xs font-semibold text-ink/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-4">
            <p className="max-w-3xl text-lg leading-relaxed text-ink/80">
              I market to developers and the technical buyers who evaluate
              enterprise platforms, and to the marketers who buy alongside them.
              B2B, B2B2C, SaaS, and startups.
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold text-ink/60">
              {TOOLS.map((t, i) => (
                <span key={t} className="flex items-center gap-3">
                  {i > 0 && <span className="text-brand-pink">·</span>}
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-24">
        <Eyebrow>Selected work</Eyebrow>
        <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          A few things I’m proud of
        </h2>
        <div className="mt-12 space-y-6">
          {WORK.map((w) => (
            <article
              key={w.title}
              className="rounded-3xl border-2 border-ink bg-paper p-8 sm:p-10"
            >
              <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
                <div>
                  <span className="inline-block rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold uppercase tracking-wide">
                    {w.company}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-bold leading-tight">
                    {w.title}
                  </h3>
                  {w.metrics.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-6">
                      {w.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="font-display text-3xl font-extrabold text-brand-pink">
                            {m.value}
                          </div>
                          <div className="mt-1 max-w-[10rem] text-sm text-ink/70">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="space-y-4 text-lg leading-relaxed text-ink/80">
                  <p>
                    <span className="font-semibold text-ink">The challenge.</span>{" "}
                    {w.challenge}
                  </p>
                  <p>
                    <span className="font-semibold text-ink">What I did.</span>{" "}
                    {w.approach}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Building / side projects */}
      <section id="building" className="bg-brand-yellow-soft/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Eyebrow>On the side</Eyebrow>
          <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            What I’m building right now
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/80">
            When I’m not running campaigns I’m vibe coding. Here’s what I’ve got
            going at the moment.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <div
                key={p.name}
                className="flex flex-col rounded-3xl border-2 border-ink bg-paper p-7 transition hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--ink)]"
              >
                <span
                  className={`self-start rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
                    p.live
                      ? "bg-brand-pink text-paper"
                      : "border-2 border-ink/30 text-ink/60"
                  }`}
                >
                  {p.status}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold">{p.name}</h3>
                {p.description && (
                  <p className="mt-2 text-ink/75">{p.description}</p>
                )}
                <div className="mt-auto pt-6">
                  {p.live ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-brand-pink underline decoration-2 underline-offset-4 transition hover:text-ink"
                    >
                      {p.domain} ↗
                    </a>
                  ) : (
                    <span className="text-sm font-semibold text-ink/50">
                      {p.domain}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Off the clock */}
      <section id="life" className="bg-brand-pink-soft/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Eyebrow>Off the clock</Eyebrow>
          <div className="grid gap-12 md:grid-cols-[1.1fr_1fr]">
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              A few things you won’t find on my résumé.
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-ink/80">
              <p>
                I grew up on the coast of North Carolina with five older
                brothers, so I’m a tough cookie who can put you in a figure-four
                leg lock until you tap. {'<insert Ric Flair "Woooo!">'} I don’t take myself too seriously,
                and I see a lot of live stand-up.
              </p>
              <p>
                I have two daughters, almost 5 and almost 3, and I’m married to an
                ER doctor, which is very convenient. We live in Austin. On my last
                maternity leave I got bored and built a UNC sports print-on-demand
                shop, tarheelshirts.com, now lovingly neglected.
              </p>
            </div>
          </div>
          <ul className="mt-12 flex flex-wrap gap-3">
            {HOBBIES.map((h) => (
              <li
                key={h}
                className="rounded-full border-2 border-ink bg-paper px-5 py-2 text-sm font-semibold"
              >
                {h}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/80">
            Ask me about my David Austin roses. And no, despite all of these
            homestead-y hobbies, I am not a trad wife.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Eyebrow>Contact</Eyebrow>
          <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Let’s <span className="text-brand-yellow">talk.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70">
            I’m looking for director and senior IC roles in growth, demand gen,
            and GTM at B2B and enterprise companies. Email is the fastest way to
            reach me.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="mailto:christina.l.child@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-brand-pink px-6 py-3 text-sm font-semibold text-paper transition hover:-translate-y-0.5 hover:brightness-110"
            >
              christina.l.child@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/christinachild/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-paper px-6 py-3 text-sm font-semibold text-paper transition hover:-translate-y-0.5 hover:bg-paper hover:text-ink"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-paper/60">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 border-t border-paper/10 px-6 py-8 text-sm sm:flex-row sm:items-center">
          <span className="font-display font-bold text-paper">Christina Child</span>
          <span>Austin, TX · © {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
