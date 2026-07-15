import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TomorrowSection from './components/TomorrowSection';
import ProgressSection from './components/ProgressSection';
import OfferSection from './components/OfferSection';
import TestimonialSection from './components/TestimonialSection';
import SubscribeSection from './components/SubscribeSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TomorrowSection />
        <ProgressSection />
        <OfferSection />
        <TestimonialSection />
        <SubscribeSection />
      </main>
      <Footer />
    </>
  );
}
