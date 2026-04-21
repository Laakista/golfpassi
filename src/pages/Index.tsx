import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { TripCategories } from "@/components/home/TripCategories";
import { FeaturedTrips } from "@/components/home/FeaturedTrips";
import { BookingEmbed } from "@/components/home/BookingEmbed";
import { WhyUs } from "@/components/home/WhyUs";
import { Newsletter } from "@/components/home/Newsletter";
import "./Index.css";

const Index = () => {
  return (
    <div className="index-page">
      <Header />
      <main className="index-main">
        <HeroCarousel />
        <TripCategories />
        <FeaturedTrips />
        <BookingEmbed />
        <WhyUs />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
