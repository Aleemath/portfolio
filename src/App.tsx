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
    <div className="relative bg-white min-h-screen">
      <Navbar />
      <main className="pt-20 relative z-10 bg-white">
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
