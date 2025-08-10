import SiteHeader from "@/components/sections/SiteHeader";
import ServicesHero from "@/components/sections/ServicesHero";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import BookingCTA from "@/components/sections/BookingCTA";
import SiteFooter from "@/components/sections/SiteFooter";

const Index = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Luxe Bloom Makeup Studio",
    url: "/",
    description: "Premium makeup artistry for weddings, events, and editorials.",
    image: "/hero-makeup.jpg",
    telephone: "+1-000-000-0000",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Your City",
      addressCountry: "Your Country",
    },
    sameAs: ["https://instagram.com/"],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main>
        <ServicesHero />
        <Services />
        <Gallery />
        <Testimonials />
        <BookingCTA />
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
};

export default Index;
