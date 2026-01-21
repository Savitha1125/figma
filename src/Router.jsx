import { Routes, Route } from "react-router-dom";
import "./css/style.css"
import Navbar from "./Navbar";

export default function Router() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
    </>
  );
}
