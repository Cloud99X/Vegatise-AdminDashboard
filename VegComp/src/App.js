import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Signup from "./pages/Signup";
import Analytics from "./pages/Analytics";
import LogIn from "./pages/LogIn1";
import GettingStarted04 from "./pages/GettingStarted04";
import DriverProfileDetail from "./pages/DriverProfileDetail";
import BillingInvoice from "./pages/BillingInvoice";
import Billing from "./pages/Billing";
import Retargetting from "./pages/Retargetting";
import Setting from "./pages/Setting";
import ComingSoon from "./pages/ComingSoon";
import Attribution from "./pages/Attribution";
import AboutCampaign from "./pages/AboutCampaign";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/analytics":
        title = "";
        metaDescription = "";
        break;
      case "/log-in":
        title = "";
        metaDescription = "";
        break;
      case "/getting-started-04":
        title = "";
        metaDescription = "";
        break;
      case "/driver-profile-detail":
        title = "";
        metaDescription = "";
        break;
      case "/billing-invoice":
        title = "";
        metaDescription = "";
        break;
      case "/billing":
        title = "";
        metaDescription = "";
        break;
      case "/retargetting":
        title = "";
        metaDescription = "";
        break;
      case "/setting":
        title = "";
        metaDescription = "";
        break;
      case "/coming-soon":
        title = "";
        metaDescription = "";
        break;
      case "/attribution":
        title = "";
        metaDescription = "";
        break;
      case "/about-campaign":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/getting-started-04" element={<GettingStarted04 />} />
      <Route path="/driver-profile-detail" element={<DriverProfileDetail />} />
      <Route path="/billing-invoice" element={<BillingInvoice />} />
      <Route path="/billing" element={<Billing />} />
      <Route path="/retargetting" element={<Retargetting />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="/attribution" element={<Attribution />} />
      <Route path="/about-campaign" element={<AboutCampaign />} />
    </Routes>
  );
}
export default App;
