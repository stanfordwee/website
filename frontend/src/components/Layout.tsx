import React from "react";
import WEELOGO from "../assets/logos/wee-logo-wh.svg";
import WEELOGOLONG from "../assets/logos/wee-logo-long.svg";
import { Link, useLocation } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";

export const Section: React.FC<
  React.PropsWithChildren<{ id?: string; className?: string }>
> = ({ id, className, children }) => (
  <section id={id} className={"relative py-16 md:py-24 " + (className || "")}>
    {children}
  </section>
);

export const Container: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ className, children }) => (
  <div
    className={
      "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 " + (className || "")
    }
  >
    {children}
  </div>
);

export const Navbar: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const links = [
    { label: "Home", to: "/" },
    { label: "Board", to: "/board" },
    { label: "Events", to: "/events" },
    { label: "Resources", to: "/resources" },
  ];

  return (
    <div className="absolute inset-x-0 top-0 z-20 bg-black/5 supports-[backdrop-filter]:bg-black/5">
      <Container className="relative flex items-center justify-between py-4 text-white">
        <div className="flex items-center justify-center text-white">
          <img src={WEELOGO} alt="WEE Logo" className="h-8 mt-5" />
        </div>
        <nav className="hidden gap-8 text-sm md:flex ">
          {links.map((link) => {
            const isActive = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={
                  "uppercase !font-bold !text-white hover:!underline " +
                  (isActive ? "underline decoration-2" : "")
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </Container>
      <div className="pointer-events-none absolute inset-x-0 -bottom-6 h-6 bg-gradient-to-b from-black/10 to-transparent" />
    </div>
  );
};

export const Footer: React.FC = () => (
  <footer className="mt-8 border-t border-gray-200 bg-white py-12 text-sm">
    <Container>
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={WEELOGOLONG} alt="WEE Logo" className="h-8" />
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
              <Link to="/" className="hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link to="/board" className="hover:text-gray-900">
                Board
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-gray-900">
                Events
              </Link>
            </li>
            <li>
              <Link to="/resources" className="hover:text-gray-900">
                Resources
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">Social media</h4>
          <ul className="mt-3 space-y-3 text-gray-600">
            <li>
              <a
                href="https://www.instagram.com/stanfordwee/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-gray-900"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/stanford-wee/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-gray-900"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">
            Subscribe to our mailing list
          </h4>
          <p className="mt-3 text-gray-600">
            Get the club's latest news, events, and stories.
          </p>         
            <button onClick={() => { window.location.href = 'https://mailman.stanford.edu/mailman/listinfo/wee-network' }} className="h-10 w-full mt-4 rounded-l-none bg-gray-900 px-4 py-2 text-sm font-semibold text-white">
              Subscribe
            </button>
          <p className="mt-6 text-xs text-gray-500">
            © 2025 Stanford Women in Electrical Engineering — Privacy Policy
          </p>
        </div>
      </div>
    </Container>
  </footer>
);
