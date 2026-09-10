import { useEffect, useState } from "react";
import { clinic, doctors, services, faqs } from "./content/site.js";
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

  // 데모 사이트 JSON-LD: Dentist + FAQ만. 후기/증례는 넣지 않음.
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Dentist",
          "@id": `${window.location.origin}/#dentist`,
          url: window.location.origin,
          name: clinic.name,
          description: clinic.subcopy,
          telephone: "+82-2-9999-9999",
          priceRange: "₩₩",
          address: {
            "@type": "PostalAddress",
            streetAddress: clinic.address,
            addressLocality: "강남구",
            addressRegion: "서울특별시",
            addressCountry: "KR",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 0,
            longitude: 0,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Wednesday", "Friday"],
              opens: "09:30",
              closes: "18:30",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Tuesday", "Thursday"],
              opens: "09:30",
              closes: "21:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Saturday"],
              opens: "09:30",
              closes: "14:00",
            },
          ],
          employee: doctors.map((doc) => ({
            "@type": "Physician",
            name: doc.name,
            jobTitle: doc.title,
            medicalSpecialty: doc.specialty,
            description: doc.quote,
            image: doc.photo,
          })),
          availableService: services.map((s) => ({
            "@type": "MedicalProcedure",
            name: s.name,
            description: s.tagline,
            procedureType: "https://schema.org/NoninvasiveProcedure",
          })),
        },
        {
          "@type": "FAQPage",
          "@id": `${window.location.origin}/#faq`,
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        },
      ],
    };

    const existing = document.getElementById("schema-ondam-gangnam-v5");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = "schema-ondam-gangnam-v5";
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("schema-ondam-gangnam-v5");
      if (el) el.remove();
    };
  }, []);

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
