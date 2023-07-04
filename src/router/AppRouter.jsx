import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Agents from "../pages/Agents";
import Pricing from "../pages/Pricing";
import Partners from "../pages/Partners";
import AboutUs from "../pages/AboutUs";
import Blog from "../pages/Blog";
import Fqa from "../pages/Fqa";
import Support from "../pages/Support";
import ContactUs from "../pages/ContactUs";
import BuyAds from "../pages/BuyAds";
import Navbar from "../components/navbar/Navbar";
import Profile from "../pages/Profile";
import BuyAdvertisement from "../pages/BuyAdvertisement";
import AgentProfile from "../pages/AgentProfile";
import BeAgent from "../pages/BeAgent";

const AppRouter = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
        <Route path="/buyadvertisement" element={<BuyAdvertisement />} />
        <Route path="/agentprofile" element={<AgentProfile />} />
        <Route path="/beagent" element={<BeAgent />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/fqa" element={<Fqa />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/buyads" element={<BuyAds />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
