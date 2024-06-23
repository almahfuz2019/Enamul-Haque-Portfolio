import { Helmet } from "react-helmet-async";
import ContactForm from "../../components/Contact/ContactForm";
import ForConnected from "../../components/ForConnected/ForConnected";
const Contact = () => {
  return (
    <div className="overflow-hidden">
      {/* Set document head */}
      <Helmet>
        <title>Contact </title>
      </Helmet>
      {/* Additional Components */}
      <ContactForm />
      <ForConnected />
    </div>
  );
};
export default Contact;
