import { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import Badges from "./components/Badges.jsx";
import About from "./components/About.jsx";
import Doctors from "./components/Doctors.jsx";
import Services from "./components/Services.jsx";
import Tech from "./components/Tech.jsx";
import Reviews from "./components/Reviews.jsx";
import CaseStories from "./components/CaseStories.jsx";
import Marquee from "./components/Marquee.jsx";
import CTA from "./components/CTA.jsx";
import FAQ from "./components/FAQ.jsx";
import Visit from "./components/Visit.jsx";
import Footer from "./components/Footer.jsx";
import NeoWiredContact from "./components/NeoWiredContact.jsx";
import BookingModal from "./components/BookingModal.jsx";
import FloatingCtas from "./components/FloatingCtas.jsx";

export default function App() {
  const [bookOpen, setBookOpen] = useState(false);

  const onBook = () => setBookOpen(true);
  const onKakao = () => {
    window.location.hash = "kakao";
  };

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <FloatingCtas onBook={onBook} onKakao={onKakao} />
      <main>
        <Hero onBook={onBook} />
        <Stats />
        <Badges />
        <About />
        <Doctors />
        <Services />
        <Tech />
        <Reviews />
        <CaseStories />
        <Marquee />
        <CTA onBook={onBook} />
        <FAQ />
        <Visit />
      </main>
      <Footer />
      <NeoWiredContact />
      <BookingModal open={bookOpen} onClose={() => setBookOpen(false)} />
    </div>
  );
}
