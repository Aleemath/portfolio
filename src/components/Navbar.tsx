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
    <div className="navbar bg-white fixed top-0 z-40 w-full shadow-sm">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4 lg:gap-6 py-4">
          <a
            href="#about"
            className="inline-flex items-center gap-2 sm:gap-3 shrink-0"
            aria-label="Home"
          >
            <span
              className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-primary text-primary-content text-lg sm:text-xl font-bold"
              aria-hidden="true"
            >
              {logoInitial}
            </span>
            <span className="text-lg sm:text-xl text-primary font-semibold whitespace-nowrap">
              {logoText}
            </span>
          </a>
          <ul className="hidden lg:flex items-center gap-8 text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  className="text-neutral hover:text-primary transition-colors"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={cvPath}
            download={cvFileName}
            className="btn btn-outline btn-primary rounded-md border-2 px-3 sm:px-6 py-2 text-xs sm:text-base font-medium whitespace-nowrap shrink-0"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
