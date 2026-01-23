import { Routes, Route } from "react-router-dom";
import "./css/style.css"
import Navbar from "./Navbar";
import Course from "../src/Course";
import Careers from "./Careers";
import Blogs from "./Blogs"
import Footer from "./Footer";
export default function Router() {
  return (
    <>
      {/* Navbar always visible */}
      <Navbar />
      <Course/>
      <Careers/>
      <Blogs/>
      <Footer/>

      {/* Routes */}
      <Routes>
        <Route path="/Course" element={<Course />} />
      </Routes>
    </>
  );
}
