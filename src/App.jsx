import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Thems.js'
import Navbar from "./Components/Navbar/Navbar.jsx";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./Components/HeroSection/Hero.jsx";
import About from "./Components/About/About.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Projects from "./Components/Projects/Project.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Contact/Contact.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Education from "./Components/Education/Education.jsx";
import ProjectModal from "./Components/ProjectDetails/ProjectDetails.jsx";
import styled from "styled-components";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectModal openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
