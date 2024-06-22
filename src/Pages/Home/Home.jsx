import { Helmet } from "react-helmet-async";
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
      {/* Set document head */}
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Welcome to our home page where you can find all the information you need."
        />
        <meta name="keywords" content="home, services, blog, testimonials" />
      </Helmet>

      {/* Additional Components */}
      <HeroSection />
      <WhyChooseEnam />
      <OwnerSpeech />
      <Services />
      <ClientTestimonial />
      <FreeHomeValuation />

      {/* Heading  */}
      <h1
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="dm-sans-font text-center mt-32 text-3xl md:text-4xl dm-sans-font mb-3"
      >
        Recent News & Blog
      </h1>

      {/* Additional Components */}
      <Blogs />
      <ForConnected />
    </div>
  );
};

export default Home;
