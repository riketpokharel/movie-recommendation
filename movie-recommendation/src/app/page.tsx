import HeroSection from "./components/home/HeroSection";
import Movies from "./components/home/Movies";
import Navbar from "./components/navigation/Navbar";
import Trending from "./components/home/Trending";
import GoldenGlobe from "./components/home/GoldenGlobe";
import Series from "./components/home/Series";
import Packages from "./components/home/Packages";
import Collections from "./components/home/Collections";
import Charactors from "./components/home/Charactors";
import FamilyFriendly from "./components/home/FamilyFriendly";
import FAQs from "./components/home/FAQs";
import Studios from "./components/home/Studios";
import Footer from "./components/home/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Trending />
      <Movies />
      <GoldenGlobe />
      <Series />
      <Collections />
      <Charactors />
      <FamilyFriendly />
      <Studios />
      <Packages />
      <FAQs />
      <Footer />
    </main>
  );
}
