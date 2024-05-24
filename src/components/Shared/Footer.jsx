import { Link } from "react-router-dom";
import logo from "../../../public/Images/Footer Logo.png";
const Footer = () => {
  return (
    <footer className="footer footer-center md:py-20 pt-20 pb-10 bg-black text-white  ">
      <img className="h-28" src={logo} alt="" />
      <h1 className="md:text-2xl text-base md:mb-4 font-medium">
        Proudly Serving
      </h1>
      <div className="grid text-left md:text-center grid-cols-2 md:grid-cols-4 gap-10 text-base md:text-2xl font-medium">
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
      <div className="border-2 border-x-0 w-full md:w-1/2 border-y-2 py-10  border-white font-medium">
        <h1 className="md:text-2xl text-base mb-6">Contact Us</h1>
        <div className="text-base mb-4">
          <a href="tel:+1234567890">Phone: 416-742-8000</a> <br />
          <a href="mailto:example@example.com">enamulhaque@gmail.com</a>
        </div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://x.com/">
            <img
              src="https://uploads-ssl.webflow.com/63c3d5df23be3c7753f0e3fe/650ac0683b726557b1c77b5e_Group%2018497%20(1).png"
              alt=""
            />
          </a>
          <a href="https://www.facebook.com/">
            <img
              src="https://uploads-ssl.webflow.com/63c3d5df23be3c7753f0e3fe/650ac0607e17935cd2403be4_Group%2051%20(1).png"
              alt=""
            />
          </a>
          <a href="https://www.linkedin.com/">
            <img
              src="https://uploads-ssl.webflow.com/63c3d5df23be3c7753f0e3fe/650ac055b1b57e07c219c4cc_Group%2050%20(1).png"
              alt=""
            />
          </a>
          <a href="https://www.youtube.com/">
            <img
              src="https://uploads-ssl.webflow.com/63c3d5df23be3c7753f0e3fe/650ac04af47cf01adfdd3e60_Group%2049%20(1).png"
              alt=""
            />
          </a>
        </div>
        <nav className="grid grid-flow-col gap-4 mt-4 text-base">
          <Link to="" className="link link-hover">
            Terms & Conditions
          </Link>
          <Link to="" className="link link-hover">
            Carrer
          </Link>
          <Link to="/blog" className="link link-hover">
            Blog
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
