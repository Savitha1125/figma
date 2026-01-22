import { Routes, Route } from "react-router-dom";
import "./css/style.css"
import Navbar from "./Navbar";
import Course from "../src/Course";

export default function Router() {
  return (
    <>
      {/* Navbar always visible */}
      <Navbar />
      <Course/>
      {/* Routes */}
      <Routes>
        <Route path="/Course" element={<Course />} />
      </Routes>
    </>
  );
}
