import type { FC } from "react";
import { Navbar, Footer, Section, Container } from "./components/Layout";

type ResourceItem = {
  name: string;
  href?: string;
  description?: string;
};

type ResourceGroup = {
  title: string;
  blurb?: string;
  items: ResourceItem[];
};

const resourceGroups: ResourceGroup[] = [
  {
    title: "Stanford Women's Resources",
    blurb: "Campus groups offering mentorship, community, and support for women across engineering.",
    items: [
      {
        name: "WCC - Women's Community Center",
        href: "https://wcc.stanford.edu/",
      },
      {
        name: "WiCS - Women in Computer Science",
        href: "http://web.stanford.edu/group/wics/",
      },
      {
        name: "ME Women's Group",
        href: "http://stanfordmewomen.weebly.com/",
      },
      {
        name: "SWE - Society of Women Engineers",
        href: "http://swe.stanford.edu",
      },
      {
        name: "WISE Groups - Women in Science and Engineering Small Groups",
        href: "https://vpge.stanford.edu/events/programs/wise-and-wissh-groups-women",
      },
      {
        name: "VMware Women's Leadership Innovation Lab",
        href: "https://womensleadership.stanford.edu",
      },
      {
        name: "SPRC Women in Science",
        href: "https://photonics.stanford.edu/events/women-in-science",
      },
      {
        name: "AWIS - Association for Women in Science",
        href: "https://awis.org/AWIScollegiaterep",
      },
    ],
  },
  {
    title: "External Women's Organizations",
    blurb: "National and regional communities to expand your network beyond the Farm.",
    items: [
      {
        name: "WIE - IEEE Women in Engineering",
        href: "http://www.ieee.org/membership_services/membership/women/index.html",
      },
      {
        name: "WICSE - Women in CS and EE at Berkeley",
        href: "http://www-inst.eecs.berkeley.edu/~wicse/",
      },
      {
        name: "MentorNet",
        href: "http://www.mentornet.net/",
      },
      {
        name: "WEPAN - Women Engineering ProActive Network",
        href: "http://www.wepan.org/",
      },
      {
        name: "SWE - Society of Women Engineers",
        href: "http://societyofwomenengineers.swe.org/",
      },
      {
        name: "AWIS Palo Alto Chapter",
        href: "http://pa-awis.weebly.com/",
      },
    ],
  },
  {
    title: "Career Resources",
    blurb: "Career development, mentoring, and professional growth resources tailored for engineers.",
    items: [
      {
        name: "BEAM: Stanford Career Education",
        href: "https://beam.stanford.edu/",
      },
      {
        name: "Stanford Computer Forum",
        href: "http://forum.stanford.edu/index.php",
        description:
          "EECS-focused career fairs, workshops, company info sessions, and more.",
      },
      {
        name: "VPGE: Office of the Vice Provost for Graduate Education",
        href: "https://vpge.stanford.edu/",
        description: "Mentoring programs, leadership workshops, and guidance for graduate students.",
      },
      {
        name: "Stanford Teaching Commons",
        href: "https://teachingcommons.stanford.edu/",
        description: "Resources for teaching and learning across the university.",
      },
      {
        name: "STVP: Stanford Technology Ventures Program",
        href: "http://stvp.stanford.edu/",
        description: "Entrepreneurship programs, courses, and seminars.",
      },
      {
        name: "Additional EE Career Resources",
        href: "https://ee.stanford.edu/student-resources/career-resources",
      },
      {
        name: "AfterCollege Job Board",
        href: "https://www.aftercollege.com/career-networks/stanford-university/women-in-electrical-engineering/",
      },
    ],
  },
  {
    title: "In Pursuit of Equality",
    blurb: "Stories, initiatives, and organizations championing a more inclusive future in STEM.",
    items: [
      {
        name: "Lean In",
        href: "http://leanin.org/",
      },
      {
        name: "Makers - The largest video collection of women's stories",
        href: "http://www.makers.com/",
      },
      {
        name: "Women of Silicon Valley",
        href: "https://medium.com/@WomenOfSiliconValley",
      },
      {
        name: "Wogrammer",
        href: "http://www.wogrammer.org/",
      },
      {
        name: "Miss CEO",
        href: "http://www.missceo.org",
        description:
          "Leadership education, mentorship, and career exploration programs that empower young women.",
      },
      {
        name: "Breaking the Glass Ceiling Early On: How to Empower Girls in STEM",
        href: "https://bootcamp.pe.gatech.edu/blog/how-to-empower-girls-in-stem/",
      },
    ],
  },
];

const Resources: FC = () => {
  return (
    <div className="min-h-screen min-w-screen bg-gray-100">
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-black via-stanford/70 to-stanford/80 text-white">
        <Navbar />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-gray-100/80" />
        <div className="relative pt-32 pb-20">
          <Container className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.4em] text-white/70">
              Resources
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
              Fuel your journey
            </h1>
            <p className="mt-6 max-w-3xl text-base text-white/80 sm:text-lg">
              Navigate Stanford and the broader engineering community with curated links
              to mentorship, advocacy groups, and career support aimed at uplifting women
              in electrical engineering and beyond.
            </p>
          </Container>
        </div>
      </div>

      <main className="relative z-10 space-y-0">
        {resourceGroups.map((group, index) => (
          <Section
            key={group.title}
            id={group.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
            className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
          >
            <Container className="max-w-5xl">
              <div className="flex flex-col gap-4 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-stanford">
                    Resource Spotlight
                  </p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                    {group.title}
                  </h2>
                  {group.blurb && (
                    <p className="mt-3 text-base text-gray-600">{group.blurb}</p>
                  )}
                </div>
                <span className="rounded-full border border-gray-200 bg-white px-4 py-1 text-sm font-medium text-gray-600 shadow-sm">
                  {group.items.length} resources
                </span>
              </div>

              <div className="grid gap-4">
                {group.items.map((item) => (
                  <article
                    key={item.name}
                    className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-stanford/40 hover:shadow-lg sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="max-w-3xl">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                      )}
                    </div>
                    {item.href && (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center justify-center rounded-full border border-stanford/40 px-4 py-2 text-sm font-semibold text-stanford transition hover:bg-stanford hover:text-white sm:mt-0"
                      >
                        Visit site
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </Container>
          </Section>
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
