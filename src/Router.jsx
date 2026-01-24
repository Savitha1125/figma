import { Routes, Route } from "react-router-dom";
import "./css/style.css";
import Navbar from "./Navbar";
import Course from "../src/Course";
import Careers from "./Careers";
import Blogs from "./Blogs";
import Footer from "./Footer";
import FullStackPage from "./FullStackPage";
import FlutterPage from "./FlutterPage";
import PythonPage from "./PythonPage";
import DigitalPage from "./DigitalPage";
import Home from "./Home";

export default function Router() {
  return (
    <>
      {/* Navbar always visible */}
      <Navbar />

      {/* Routing */}
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
            <Home/>
              <Course />
              <Careers />
              <Blogs />
              <Footer/>
            </>
          }
        />

        {/* Individual course pages */}
        <Route path="/fullstack" element={<FullStackPage />} />
        <Route path="/flutter" element={<FlutterPage />} />
        <Route path="/python" element={<PythonPage />} />
        <Route path="/digital" element={<DigitalPage />} />
      </Routes>
    </>
  );
}
