import ForConnected from "../../components/ForConnected/ForConnected";
import HeroSection from "../../components/Home/HeroSection";
import FreeHomeValuation from "../../components/Shared/FreeHomeValuation";
import OwnerSpeech from "../../components/Shared/OwnerSpeech";
import Services from "../../components/Shared/Services";
import WhyChooseEnam from "../../components/Shared/WhyChooseEnam";
import ClientTestimonial from "../../components/ClientTestimonial/ClientTestimonial";
import Blogs from "../../components/Blogs/Blogs";
const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <WhyChooseEnam />
      <OwnerSpeech />
      <Services />
      <ClientTestimonial />
      <FreeHomeValuation />
      <h1
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="dm-sans-font text-center mt-32 text-3xl md:text-4xl  dm-sans-font mb-3"
      >
        Recent News & Blog
      </h1>
      <Blogs />
      <ForConnected />
    </div>
  );
};
export default Home;
