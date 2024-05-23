import './App.css'
import AboutUs from './components/AboutUs/AboutUs';
import SingleBlog from './components/Blogs/SingleBlog';
import ContactForm from './components/Contact/ContactForm';
import Demo from './components/Demo';
import ForConnected from './components/ForConnected/ForConnected';
import Footer from './components/Shared/Footer';
import { Navbar } from './components/Shared/Navbar';
const App = () => {
  return (
    <div>
      <Navbar/>
      <ContactForm/>
      <AboutUs/>
      <Demo/>
      <SingleBlog/>
      <ForConnected/>
      <Footer/>
    </div>
  );
};

export default App;