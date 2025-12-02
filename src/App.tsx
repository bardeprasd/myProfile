// App.tsx
import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
    <Box sx={{ backgroundColor: '#1c1c1c', minHeight: '100vh', color: '#66fcf1' }}>
      <CssBaseline />
      <Header />
      <Box component="main" sx={{ pt: '72px', pb: '96px' }}>
        <Box id="home">
          <Home />
        </Box>
        <Box id="about">
          <About />
        </Box>
        <Box id="projects">
          <Projects />
        </Box>
        <Box id="experience">
          <Experience />
        </Box>
        <Box id="contact">
          <Contact />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
