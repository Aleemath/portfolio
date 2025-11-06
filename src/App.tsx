import "./App.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Stats from "./components/Stats";
import WelcomeBanner from "./components/WelcomeBanner";
import Contact from "./components/Contact";
import {
  STATS,
  TESTIMONIALS,
  PORTFOLIO_IMAGES,
  PERSONAL_INFO,
} from "./data/constants";

export default function App() {
  return (
    <div className="relative">
      {/* Left side green background with pattern */}
      <div className="fixed left-0 top-0 bottom-0 w-[25px] bg-primary/10 hidden lg:block pointer-events-none z-0">
        {/* Vertical green accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
        {/* Dense vertical dot pattern */}
        <div className="absolute left-2 top-0 bottom-0 w-full">
          {Array.from({ length: 50 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/40 rounded-full"
              style={{ top: `${i * 2}%`, left: `${(i % 3) * 8}px` }}
            />
          ))}
        </div>
      </div>

      {/* Right side green background with blue edge */}
      <div className="fixed right-0 top-0 bottom-0 w-[25px] bg-primary hidden lg:block pointer-events-none z-0">
        {/* Thin light blue strip on extreme right edge */}
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-blue-400"></div>
      </div>

      <Navbar />
      <main className="mx-auto max-w-screen-2xl px-6 lg:px-8 pt-20 relative z-10">
        <WelcomeBanner />
        <Stats stats={STATS} />
        <Skills />
        <Portfolio images={PORTFOLIO_IMAGES} />
        <Testimonials testimonials={TESTIMONIALS} />
        <Contact
          phone={PERSONAL_INFO.phone}
          email={PERSONAL_INFO.email}
          address={PERSONAL_INFO.address}
        />
        <Footer />
      </main>
    </div>
  );
}
