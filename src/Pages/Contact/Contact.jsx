import { Helmet } from "react-helmet-async";
import ContactForm from "../../components/Contact/ContactForm";
import ForConnected from "../../components/ForConnected/ForConnected";
const Contact = () => {
  return (
    <div className="overflow-hidden">
      {/* Set document head */}
      <Helmet>
        <title>Contact </title>
        <meta
          name="description"
          content="Welcome to our home page where you can find all the information you need."
        />
        <meta name="keywords" content="home, services, blog, testimonials" />
      </Helmet>
      {/* Additional Components */}
      <ContactForm />
      <ForConnected />
    </div>
  );
};
export default Contact;
