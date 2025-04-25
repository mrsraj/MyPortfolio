import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Thems.js'
import { Suspense, lazy } from "react";
import './App.css';

import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Loading from "./LoadingComponent/Loading.jsx";
import styled from "styled-components";



const HeroSection = lazy(() => import("./Components/HeroSection/Hero.jsx"));
const Skills = lazy(() => import("./Components/Skills/Skills.jsx"));
const Experience = lazy(() => import("./Components/Experience/Experience.jsx"));
const Projects = lazy(() => import("./Components/Projects/Project.jsx"));
const Education = lazy(() => import("./Components/Education/Education.jsx"));
const Contact = lazy(() => import("./Components/Contact/Contact.jsx"));
const ProjectModal = lazy(() => import("./Components/ProjectDetails/ProjectDetails.jsx"));

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

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Suspense fallback={<Loading/>}>
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

            {openModal.state && (<ProjectModal openModal={openModal} setOpenModal={setOpenModal}/>
            )}

          </Body>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}


export default App;
