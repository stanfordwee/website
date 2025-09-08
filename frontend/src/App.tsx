import React from "react";
import heroImg from "./assets/photos/events/1000019668.jpg";
import welcomeImg from "./assets/photos/events/20220922_122341.jpg";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ArrowRight,
  Users,
  Crown,
  Shield,
  Star,
  Quote,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  MoveLeft,
  MoveRight,
  X,
  Fuel,
  Gauge,
  Car,
  Zap,
  BadgeCheck,
} from "lucide-react";

/**
 * TrueStreet Club – single‑file React UI built with TailwindCSS
 * ------------------------------------------------------------
 * This file renders a full responsive landing page inspired by the provided mockup:
 * - Sticky navbar
 * - Hero with background image, giant typography, and stat chips
 * - About + feature cards with image
 * - Logo ribbon
 * - Vehicles gallery
 * - Testimonial carousel
 * - Upcoming events
 * - Contact/Enquiries banner
 * - Footer
 *
 * Notes:
 * - All images use unsplash placeholders; swap for your assets.
 * - No data fetching—pure UI with local sample data.
 * - Animations: Framer Motion for subtle fades & slides.
 */

// -------------------- mock data --------------------
const stats = [
  { label: "members", value: "128" },
  { label: "races worldwide", value: "14" },
  { label: "countries visited", value: "8" },
  { label: "km on the road", value: "+20,000" },
  { label: "positive vibez", value: "unlimited" },
];

const vehicles = [
  {
    id: 1,
    name: "Porsche 911 GT3 RS",
    price: "$150,000",
    year: 2023,
    miles: "12,000 mi",
    fuel: "Petrol",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "BMW M5",
    price: "$100,000",
    year: 2022,
    miles: "64,000 mi",
    fuel: "Petrol",
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Nissan GT‑R (R35)",
    price: "$150,000",
    year: 2023,
    miles: "12,000 mi",
    fuel: "Petrol",
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Porsche Cayman GTS",
    price: "$90,000",
    year: 2021,
    miles: "18,300 mi",
    fuel: "Petrol",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop",
  },
];


const events = [
  {
    id: 1,
    date: "May 02",
    title: "Event 1",
    location: "1234 Main St, City, State",
    link: "#",
  },
  {
    id: 2,
    date: "Nov 10",
    title: "Event 2",
    location: "5678 Market St, City, State",
    link: "#",
  },
  {
    id: 3,
    date: "Dec 02",
    title: "Historic Queensland",
    location: "228 Old Stanthorpe Rd, Morgan Park",
    link: "#",
  },
];

const Section: React.FC<
  React.PropsWithChildren<{ id?: string; className?: string }>
> = ({ id, className, children }) => (
  <section id={id} className={"relative py-16 md:py-24 " + (className || "")}>
    {children}
  </section>
);

const Container: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  className,
  children,
}) => (
  <div
    className={
      "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 " + (className || "")
    }
  >
    {children}
  </div>
);

const Badge: React.FC<
  React.PropsWithChildren<{ icon?: React.ReactNode; className?: string }>
> = ({ icon, className, children }) => (
  <span
    className={
      "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-md " +
      (className || "")
    }
  >
    {icon}
    {children}
  </span>
);

const Navbar: React.FC = () => {
  return (
    <div className="absolute inset-x-0 top-0 z-20 bg-black/5 supports-[backdrop-filter]:bg-black/5">
      <Container className="relative flex items-center justify-between py-4 text-white">
        <div className="flex items-center gap-3 text-white">
          <div className="h-8 w-8 rounded-full bg-red-600" />
          <span className="font-semibold tracking-tight">WEE</span>
        </div>
        <nav className="hidden gap-8 text-sm md:flex ">
          <a
            href="#home"
            className="!text-white !font-bold hover:!underline uppercase"
          >
            Home
          </a>
          <a
            href="#board"
            className="!text-white !font-bold hover:!underline uppercase"
          >
            Board
          </a>
          <a
            href="#events"
            className="!text-white !font-bold hover:!underline uppercase"
          >
            Events
          </a>
          <a
            href="#resources"
            className="!text-white !font-bold hover:!underline uppercase"
          >
            Resources
          </a>
        </nav>
      </Container>
      <div className="pointer-events-none absolute inset-x-0 -bottom-6 h-6 bg-gradient-to-b from-black/10 to-transparent" />
    </div>
  );
};

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
            {stats.map((s) => (
              <Badge key={s.label} className="justify-center">
                <Star className="h-3.5 w-3.5" />
                <span className="font-semibold">{s.value}</span>
                <span className="opacity-80"> {s.label}</span>
              </Badge>
            ))}
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
                  <h3 className="font-semibold">Join Mailing List</h3>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Join our mailing list for announcements about events and special programs.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:bg-gray-50 hover:cursor-pointer" onClick={() => { window.location.href = 'mailto:stanfordwee@gmail.com' }}>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-stanford" />
                  <h3 className="font-semibold">Email Us</h3>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  E-mail us with any questions or comments.
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
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-[18px] border border-gray-200 shadow-sm bg-white px-4 py-2 text-sm font-semibold !text-gray-900 hover:bg-gray-50"
              >
                <Facebook className="h-8 w-4" />
                Facebook
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-[18px] border border-gray-200 shadow-sm bg-white px-4 py-2 text-sm font-semibold !text-gray-900 hover:bg-gray-50"
              >
                <Instagram className="h-8 w-4" />
                Instagram
              </a>
              <a
                href="#"
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

const Carousel: React.FC = () => {
  const images = React.useMemo(() => {
    const modules = import.meta.glob(
      "./assets/photos/events/*.{jpg,jpeg,png,webp}",
      { eager: true, import: "default" }
    ) as Record<string, string>;
    return Object.keys(modules)
      .sort()
      .map((k) => modules[k]);
  }, []);

  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const [slide, setSlide] = React.useState(0);
  const [animate, setAnimate] = React.useState(true);
  const [paused, setPaused] = React.useState(false);
  const itemRef = React.useRef<HTMLButtonElement | null>(null);
  const [itemW, setItemW] = React.useState(0);
  const gap = 0; // no gap between items

  React.useEffect(() => {
    const measure = () => {
      if (itemRef.current) {
        const rect = itemRef.current.getBoundingClientRect();
        setItemW(rect.width);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  React.useEffect(() => {
    if (paused || images.length === 0 || itemW === 0) return;
    const id = window.setInterval(() => {
      setSlide((s) => s + 1);
    }, 2500);
    return () => window.clearInterval(id);
  }, [paused, images.length, itemW]);

  React.useEffect(() => {
    if (images.length === 0) return;
    if (slide >= images.length) {
      setAnimate(false);
      setSlide(0);
      requestAnimationFrame(() => setAnimate(true));
    }
  }, [slide, images.length]);

  const openAt = (i: number) => {
    if (!images.length) return;
    const safe = ((i % images.length) + images.length) % images.length;
    setIndex(safe);
    setOpen(true);
  };
  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const translate = -(slide * (itemW + gap));

  return (
    <Section className="bg-transparent">
      <div className="relative left-1/2 right-1/2 w-screen -mx-[50vw] overflow-hidden">
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            type="button"
            onClick={() => setSlide((s) => Math.max(0, s - 1))}
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 px-1 text-3xl font-bold leading-none text-black hover:text-gray-700"
            aria-label="Previous"
          >
            <span>&lt;</span>
          </button>
          <button
            type="button"
            onClick={() => setSlide((s) => s + 1)}
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 px-1 text-3xl font-bold leading-none text-black hover:text-gray-700"
            aria-label="Next"
          >
            <span>&gt;</span>
          </button>

          <div
            className={
              "flex w-full select-none gap-3 " +
              (animate ? "transition-transform duration-700 ease-out" : "transition-none")
            }
            style={{ transform: `translateX(${translate}px)` }}
          >
            {[...images, ...images].map((src, i) => (
              <button
                ref={i === 0 ? itemRef : undefined}
                key={`${src}-${i}`}
                type="button"
                onClick={() => openAt(i % images.length)}
                className="relative !p-0 h-64 sm:h-72 md:h-80 w-[26rem] sm:w-[28rem] md:w-[32rem] shrink-0 overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Event ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {open && images[index] && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setOpen(false)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-black hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-black hover:bg-white/20"
              aria-label="Previous"
            >
              <MoveLeft className="h-6 w-6" />
            </button>
            <img
              src={images[index]}
              alt="Selected event"
              className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-black hover:bg-white/20"
              aria-label="Next"
            >
              <MoveRight className="h-6 w-6" />
            </button>
          </div>
        )}
      </div>
    </Section>
  );
};

const Events: React.FC = () => (
  <Section id="events" className="bg-gray-50">
    <Container>
      <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">
        Upcoming events
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {events.map((e) => (
          <div
            key={e.id}
            className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <div className="absolute right-5 top-5 rounded-full bg-gray-900 px-2.5 py-1 text-xs font-semibold text-white">
              {e.date}
            </div>
            <div className="mt-10 space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">{e.title}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4" /> {e.location}
              </div>
              <a
                href={e.link}
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:underline"
              >
                Visit event page <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <button className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          View all events <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </Container>
  </Section>
);


const Footer: React.FC = () => (
  <footer className="mt-8 border-t border-gray-200 bg-white py-12 text-sm">
    <Container>
      <div className="grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-red-600" />
            <span className="text-lg font-semibold">WEE</span>
          </div>
          <p className="mt-4 text-gray-600">
            Empower women in electrical engineering at Stanford through community,
            mentorship, and professional growth.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">Navigation</h4>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li>
              <a href="#home" className="hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-900">
                About us
              </a>
            </li>
            <li>
              <a href="#events" className="hover:text-gray-900">
                Event
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-900">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">Social media</h4>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <Facebook className="h-4 w-4" />{" "}
              <a href="#" className="hover:text-gray-900">
                Facebook
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="h-4 w-4" />{" "}
              <a href="#" className="hover:text-gray-900">
                Instagram
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Twitter className="h-4 w-4" />{" "}
              <a href="#" className="hover:text-gray-900">
                Twitter
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" />{" "}
              <a href="#" className="hover:text-gray-900">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">
            Subscribe to our newsletter
          </h4>
          <p className="mt-3 text-gray-600">
            Get the club's latest news, events, and stories.
          </p>
          <form className="mt-4 flex max-w-sm items-center overflow-hidden rounded-full border border-gray-300">
            <input
              className="w-full px-4 py-2 text-sm outline-none"
              placeholder="Enter your email"
            />
            <button className="h-full rounded-l-none bg-gray-900 px-4 py-2 text-sm font-semibold text-white">
              Subscribe
            </button>
          </form>
          <p className="mt-6 text-xs text-gray-500">
            © 2025 Stanford Women in Electrical Engineering — Privacy Policy
          </p>
        </div>
      </div>
    </Container>
  </footer>
);

// -------------------- page --------------------
const App: React.FC = () => {
  return (
    <div className="bg-gray-100 w-screen">
      <Navbar />
      <main className="space-y-0">
        <Hero />
        <Carousel />
        <About />
        <Events />
      </main>
      <Footer />
    </div>
  );
};

export default App;
