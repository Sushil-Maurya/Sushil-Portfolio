import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Education from "./components/Pages/Education";
import Projects from "./components/Pages/Projects";
import Skills from "./components/Pages/Skills";
import Resume from "./components/Pages/Resume";
function AllPages() {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/education' element={<Education />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/resume' element={<Resume />} />
    </Routes>
  );
}

export default AllPages;
