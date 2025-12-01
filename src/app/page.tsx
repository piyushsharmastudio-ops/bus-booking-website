import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Brands from "@/components/Brands";
import WhereToNext from "@/components/WhereToNext";
import ContentSection from "@/components/ContentSection";
import PopularCities from "@/components/PopularCities";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <Features />
      <Brands />
      <WhereToNext />
      <ContentSection />
      <PopularCities />
      <Footer />
    </main>
  );
}
