import { Link } from "react-router-dom";
import logo from "../../assets/Images/Footer Logo.png";
// Social Meda Icons
import youtube from "./../../assets/Images/Icons/youtube.png";
import facebook from "./../../assets/Images/Icons/facebook.png";
import linkdin from "./../../assets/Images/Icons/linkdin.png";
import twitter from "./../../assets/Images/Icons/twitter.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer className="footer footer-center  pt-32 pb-10 bg-black text-white  ">
      <img
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="h-28"
        src={logo}
        alt="Enamul Haque website logo"
      />
      <h1 className="md:text-2xl text-base md:mb-4 font-medium">
        Proudly Serving
      </h1>
      <div className="grid w-full text-left md:text-center grid-cols-2 md:grid-cols-4 gap-10 text-base md:text-2xl font-medium">
        <div>
          Mississauga <br />
          Oakville <br />
          Brampton
        </div>
        <div>
          Markham
          <br />
          Vaughan
          <br />
          Richmond Hill
        </div>
        <div>
          Scarborough
          <br />
          Etobicoke
          <br />
          North York
        </div>
        <div>
          Pickering
          <br />
          Ajax
          <br />
          Oshawa
        </div>
      </div>
      <div className="border-2 border-x-0 w-full lg:w-full  md:w-1/2 border-y-2 py-10  border-white font-medium">
        <h1 className="md:text-2xl text-base mb-6">Contact Us</h1>
        <div className="text-base mb-4">
          <a href="tel:+1234567890">Phone: 416-742-8000</a> <br />
          <a href="mailto:example@example.com">enamulhaque@gmail.com</a>
        </div>
        <div className="grid grid-flow-col gap-4">
          <a
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
            href="https://twitter.com/"
          >
            <img src={twitter} alt="twitter" />
          </a>
          <a
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
            href="https://www.facebook.com/"
          >
            <img src={facebook} alt="facebook Logo" />
          </a>
          <a
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
            href="https://www.linkedin.com/"
          >
            <img src={linkdin} alt="linkdin Logo" />
          </a>
          <a
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
            href="https://www.youtube.com/"
          >
            <img src={youtube} alt="youtube Logo" />
          </a>
        </div>
        <nav className="flex flex-wrap justify-center mx-3  gap-4 mt-4 text-base">
          <Link to="" className="link link-hover">
            Terms & Conditions
          </Link>
          <Link to="" className="link link-hover">
            Carrer
          </Link>
          <Link to="/blog" className="link link-hover">
            Blogs
          </Link>
          <Link to="" className="link link-hover">
            Privacy Policy
          </Link>
        </nav>
      </div>
      <aside className="flex lg:gap-20 gap-5 -mt-6 text-sm md:text-base">
        <p>© copyright Enamul Haque 2024</p>
        <p>
          Powred by- <Link to="https://techplato.com/">TechPlato, inc.</Link>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
