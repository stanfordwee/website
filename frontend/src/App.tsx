import React from "react";
import heroImg from "./assets/photos/events/1000019668.jpg";
import welcomeImg from "./assets/photos/events/20220922_122341.jpg";
import { motion } from "framer-motion";
import { Navbar, Footer, Section, Container } from "./components/Layout";
import Carousel from "./components/Carousel";
import {
  Users,
  Mail,
  Instagram,
  Linkedin,
} from "lucide-react";

// const stats = [
//   { label: "members", value: "128" },
//   { label: "races worldwide", value: "14" },
//   { label: "countries visited", value: "8" },
//   { label: "km on the road", value: "+20,000" },
//   { label: "positive vibez", value: "unlimited" },
// ];

// const Badge: React.FC<
//   React.PropsWithChildren<{ icon?: React.ReactNode; className?: string }>
// > = ({ icon, className, children }) => (
//   <span
//     className={
//       "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-md " +
//       (className || "")
//     }
//   >
//     {icon}
//     {children}
//   </span>
// );

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative">
      <div className="relative h-[calc(72vh+100px)] min-h-[604px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="WEE Group Photo"
          className="absolute inset-0 h-full w-full object-cover object-[30%_45%] origin-center transform-gpu scale-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stanford/70 via-black/50 to-black/60" />
        <Container className="relative z-10 flex h-full flex-col text-white">
          <div className="flex-1 flex items-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="pointer-events-none select-none text-6xl font-black leading-tight sm:text-4xl md:text-6xl"
            >
              Stanford Women in
              <span className="block">Electrical Engineering</span>
            </motion.p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs sm:grid-cols-3 md:grid-cols-5 pb-6 sm:pb-8 md:pb-10">
            {/* {stats.map((s) => (
              <Badge key={s.label} className="justify-center">
                <Star className="h-3.5 w-3.5" />
                <span className="font-semibold">{s.value}</span>
                <span className="opacity-80"> {s.label}</span>
              </Badge>
            ))} */}
          </div>
        </Container>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-white">
      <Container>
        <div className="flex flex-row gap-10 h-full">
          <div>
            {/* <p className="text-xs uppercase tracking-widest text-gray-400">
              About us
            </p> */}
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Welcome!
            </h2>
            <p className="mt-4 text-gray-600">
              Stanford’s Women in Electrical Engineering (WEE) student group was
              founded in 2004 and has grown in size and engagement throughout
              the years. The organization fosters a sense of community among EE
              students through programming that includes mentoring, community
              service, outreach, and social events. In addition, WEE provides
              opportunities for professional development and networking across
              all of the engineering disciplines. Anyone of any gender who
              supports these goals is welcome to attend events and join the
              group.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:bg-gray-50 hover:cursor-pointer" onClick={() => { window.location.href = 'https://mailman.stanford.edu/mailman/listinfo/wee-network' }}>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-stanford" />
                  <h3 className="font-semibold text-stanford">Join Mailing List</h3>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Join our mailing list for announcements about events and special programs.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:bg-gray-50 hover:cursor-pointer" onClick={() => { window.location.href = 'mailto:stanfordwee@gmail.com' }}>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-stanford" />
                  <h3 className="font-semibold text-stanford">Email Us</h3>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  E-mail us with any questions or comments via email at stanfordwee@gmail.com.
                </p>
              </div>
            </div>
            
            
            
          </div>

          <div className="relative md:row-span-2 md:h-full">
            <div className="overflow-hidden rounded-3xl md:h-full">
              <img
                className="aspect-[4/3] md:aspect-auto w-full h-full object-cover"
                src={welcomeImg}
                alt="WEE Image"
              />
            </div>
            <div className="md:col-span-2 flex flex-col items-start text-start">
            {/* <p className="text-sm text-gray-600 max-w-2xl mb-2">
              Follow our social media pages to stay up to date with the latest
              information.
            </p> */}
            <div className="mt-5 flex flex-wrap justify-center gap-3 w-full">
              {/* <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-[18px] border border-gray-200 shadow-sm bg-white px-4 py-2 text-sm font-semibold !text-gray-900 hover:bg-gray-50"
              >
                <Facebook className="h-8 w-4" />
                Facebook
              </a> */}
              <a
                href="https://www.instagram.com/wee.stanford/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-[18px] border border-gray-200 shadow-sm bg-white px-4 py-2 text-sm font-semibold !text-gray-900 hover:bg-gray-50"
              >
                <Instagram className="h-8 w-4" />
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/groups/14095057/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-[18px] border border-gray-200 shadow-sm bg-white px-4 py-2 text-sm font-semibold !text-gray-900 hover:bg-gray-50"
              >
                <Linkedin className="h-8 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
          </div>          
        </div>
      </Container>
    </Section>
  );
};

const Events: React.FC = () => (
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
);


// -------------------- page --------------------
const App: React.FC = () => {
  return (
    <div className="bg-gray-100 w-screen">
      <Navbar />
      <main className="space-y-0">
        <Hero />
        <Section className="bg-transparent">
          <Carousel />
        </Section>
        <About />
        <Events />
      </main>
      <Footer />
    </div>
  );
};

export default App;
