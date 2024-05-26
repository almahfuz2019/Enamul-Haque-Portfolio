import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import ScrollToTop from "../components/Shared/ScrollToTop";
import LoadingBarProvider from "../components/Shared/LoadingBarProvider";
const Layout = () => {
  return (
    <div>
        <LoadingBarProvider>

      <ScrollToTop />
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
        </LoadingBarProvider>
    </div>
  );
};

export default Layout;
