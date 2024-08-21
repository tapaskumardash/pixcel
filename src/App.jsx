import { useState } from "react";
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Login from "./components/Auth/Login";
import NotFound from "./components/404/NotFound";

const COMPANY_NAME = "Pixcel";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("landscape");
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home company={COMPANY_NAME} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />
        <Route path="/about" element={<About company={COMPANY_NAME} />} />
        <Route path="/contact" element={<Contact company={COMPANY_NAME} />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {location.pathname !== "/login" && <Footer company={COMPANY_NAME} />}
    </>
  )
}

export default App
