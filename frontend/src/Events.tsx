import type { FC } from "react";
import { Navbar, Footer, Section, Container } from "./components/Layout";
import Carousel from "./components/Carousel";
import mentorshipImg from "./assets/photos/events/11351455_896516067038564_8032021226658817384_n_edited.jpg";
import facultyImg from "./assets/photos/events/IMG_7817.jpg";
import socialsImg from "./assets/photos/events/13001079_1054980234525479_8421730553247660152_n_edited.jpg";
import industryImg from "./assets/photos/events/Women of Impact Lunch.jpg";
import outreachImg from "./assets/photos/events/20220922_122341.jpg";

const programming = [
  {
    title: "Mentorship Program",
    description:
      "Our mentorship program is designed to help incoming graduate students navigate Stanford. Mentors help students get acquainted with the university and EE program, provide advice on topics such as joining research groups, and serve as friendly faces to ease the transition to graduate life.",
    image: mentorshipImg,
  },
  {
    title: "Faculty Lunches",
    description:
      "These informal lunches give graduate students an opportunity to share a meal with faculty, learn about their career paths, and hear candid perspectives on work/life balance and academia.",
    image: facultyImg,
  },
  {
    title: "Socials",
    description:
      "Social events strengthen our community by fostering personal and professional networks among students and alumnae. Expect boba, board games, crafts, and more every quarter!",
    image: socialsImg,
  },
  {
    title: "Industry Events",
    description:
      "We host leaders across industries to help students discover careers outside academia, promote networking, and get inspired. Join us for meals, fireside chats, and technical career conversations.",
    image: industryImg,
  },
  {
    title: "Outreach",
    description:
      "Participate in community service that introduces youth to STEM and sparks curiosity. Outreach programs make it possible to give back while representing WEE in the broader community.",
    image: outreachImg,
  },
];

const Events: FC = () => {
  return (
    <div className="min-h-screen min-w-screen bg-gray-100">
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-black via-stanford/70 to-stanford/80 text-white">
        <Navbar />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-gray-100/80" />
        <div className="relative pt-32 pb-20">
          <Container className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.4em] text-white/70">
              Programming
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
              Events & Experiences
            </h1>
            <p className="mt-6 max-w-3xl text-base text-white/80 sm:text-lg">
              From mentorship and faculty connections to socials, industry spotlights,
              and outreach, WEE events keep our community energized and connected.
              Explore highlights from recent gatherings and discover what's coming up.
            </p>
          </Container>
        </div>
      </div>

      <main className="relative z-10 space-y-0">
        <Section className="bg-transparent">
          <Carousel />
        </Section>

        <Section className="bg-white">
          <Container>
            <div className="flex flex-col gap-4 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-stanford">
                  Programming Overview
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                  What we host throughout the year
                </h2>
              </div>
              <span className="rounded-full border border-gray-200 bg-white px-4 py-1 text-sm font-medium text-gray-600 shadow-sm">
                {programming.length} key tracks
              </span>
            </div>

            <div className="flex flex-col gap-6">
              {programming.map((item) => (
                <article
                  key={item.title}
                  className="flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg md:flex-row"
                >
                  <div className="relative aspect-[4/3] w-full shrink-0 md:aspect-auto md:w-64 lg:w-72">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-50 w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-3 text-base text-gray-600">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="bg-gray-50">
          <Container className="max-w-5xl">
            <div className="flex flex-col gap-4 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-stanford">
                  Upcoming Events
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                  Stay in-sync with our calendar
                </h2>
                <p className="mt-3 text-base text-gray-600">
                  Subscribe or check back often to stay up to date with all things WEE.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-lg">
              <iframe
                title="Stanford WEE Calendar"
                src="https://calendar.google.com/calendar/embed?src=stanfordwee%40gmail.com&ctz=America%2FLos_Angeles"
                className="h-[720px] w-full border-0"
                loading="lazy"
              />
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
