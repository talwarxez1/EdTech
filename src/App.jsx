import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route,Routes, BrowserRouter } from 'react-router-dom';
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import MiniChatbot from "./components/ChatBot";
import Course1 from "./components/Courses/Course1"
import ScrollToTop from "./components/ScrollToTop";
import Course2 from "./components/Courses/Course2"
import Course3 from "./components/Courses/Course3"
import Course4 from "./components/Courses/Course4"

const App = () => {
  return (
    <>
    <BrowserRouter>
     <NavBar /> 
     <MiniChatbot />
     <ScrollToTop />
     <Routes>
     
     <Route path="*" element={<NotFound/>} />
     <Route path="/" element={<Home/>} />
     <Route path="/course1" element={<Course1/>} />
     <Route path="/course2" element={<Course2/>} />
     <Route path="/course3" element={<Course3/>} />
     <Route path="/course4" element={<Course4/>} />
    </Routes>
    </BrowserRouter>
    <section className='bottom-0'>
      <Footer/>
      </section>
     </>
  );
};

export default App;
