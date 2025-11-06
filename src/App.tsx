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
