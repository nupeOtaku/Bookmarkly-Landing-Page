import DownloadSection from "./features/DownloadSection";
import FaqSection from "./features/FaqSection";
import { FeatureSection } from "./features/FeatureSection";
import Footer from "./features/Footer";
import { HeroSection } from "./features/HeroSection";
import { Navigation } from "./features/Navigation";
import NewsLetterSection from "./features/NewsLetterSection";

const App = () => {
  return (
    <>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeatureSection />

      {/* Download Section */}
      <DownloadSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Newsletter Section */}
      <NewsLetterSection />

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default App;
