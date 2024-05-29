import ForConnected from "../ForConnected/ForConnected";
import AllBlogs from "../Blogs/Blogs";
import WhyChooseEnam from "../Shared/WhyChooseEnam";
import OwnerSpeech from "../Shared/OwnerSpeech";
import Services from "../Shared/Services";
import FreeHomeValuation from "../Shared/FreeHomeValuation";
import ClientTestimonial from "../ClientTestimonial/ClientTestimonial";
import HeroSection from "./HeroSection";
const Home = () => {
  return (
    <div>
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
      <AllBlogs />
      <ForConnected />
    </div>
  );
};

export default Home;
