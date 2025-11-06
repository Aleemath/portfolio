import cvPdf from "../assets/pdf/aleemath-ranseena-fullstack-developer-uae.pdf";
import { NAV_LINKS } from "../data/constants";

interface NavbarProps {
  logoText?: string;
  logoInitial?: string;
  navLinks?: typeof NAV_LINKS;
  cvPath?: string;
  cvFileName?: string;
}

export default function Navbar({
  logoText = "Agency",
  logoInitial = "t",
  navLinks = NAV_LINKS,
  cvPath = cvPdf,
  cvFileName = "aleemath-ranseena-fullstack-developer-uae.pdf",
}: NavbarProps) {
  return (
    <div className="navbar bg-white fixed top-0 z-40 w-full">
      <div className="mx-auto w-full max-w-screen-2xl px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 py-3">
          <a
            href="#about"
            className="inline-flex items-center gap-3"
            aria-label="Home"
          >
            <span
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-content text-xl font-bold"
              aria-hidden="true"
            >
              {logoInitial}
            </span>
            <span className="text-xl text-primary font-semibold">
              {logoText}
            </span>
          </a>
          <ul className="hidden lg:flex items-center gap-8 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="link link-hover" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={cvPath}
            download={cvFileName}
            className="btn btn-outline btn-primary rounded-md border-2 p-2"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
