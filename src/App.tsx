// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience'; // Import the Experience component

function App() {
  return (
    <Box sx={{ backgroundColor: '#1c1c1c', minHeight: '100vh', color: '#66fcf1' }}>
      <CssBaseline />
      <Router>
        <Header />
        <Box sx={{ padding: '16px 0' }}> {/* Optional padding to give space below Header */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} /> {/* Add route for Experience */}
          </Routes>
        </Box>
        <Footer />
      </Router>
    </Box>
  );
}

export default App;
