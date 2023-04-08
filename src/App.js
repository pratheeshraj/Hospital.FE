import "./index.css";
import Home from "./Components/home";
import About from "./Components/about";
import OurTeam from "./Components/ourteam";
import Booking from "./Components/booking";

import Login from "./Components/login";
import Service from "./Components/service";
import Report from "./Components/Report";
import { Routes, Route } from "react-router-dom";

import Register from "./Components/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
     
      <Route path="/ourteam" element={<OurTeam />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/service" element={<Service />} />
      <Route path="/Report" element={<Report />} />
    
    </Routes>
  );
}

export default App;
