import React, { useEffect, useMemo, useState } from 'react';
import { Box, Typography, Button, Slide } from "@mui/material";
import { Link } from 'react-router-dom';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function Home() {
  const [init, setInit] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);

  useEffect(() => {
    console.log("Home component mounted or re-rendered");

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    const interval = setInterval(() => {
      setSlideIn(false); // Slide out the current text

      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textCarousel.length);
        setSlideIn(true); // Slide in the new text
      }, 500); // Adjust timing for slide out/in transition

    }, 5000); // Change text every 5 seconds

    return () => {
      console.log("Home component will unmount");
      clearInterval(interval); // Clear interval on unmount
    };
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#1c1c1c",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#66fcf1",
        },
        links: {
          color: "#66fcf1",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  const textCarousel = [
    "Welcome to my portfolio! I'm a Full Stack Developer passionate about solving problems with intensity, Ownership and Clarity.",
    "I love building beautiful and functional web applications using the latest technologies.",
    "Feel free to explore my projects and learn more about my journey in tech.",
    "Let's connect and build something amazing together!",
  ];

  return (
    <Box sx={{ position: 'absolute', minHeight: '100vh', overflow: 'hidden' }}>
      {init && (
        <>
          <div style={{ 
            position: "absolute", 
            top: 0, 
            left: 0, 
            width: "100%", 
            height: "100%", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            zIndex: -1 
          }} />
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
            style={{ 
              position: "absolute", 
              top: 0, 
              left: 0, 
              width: "100%", 
              height: "100%", 
              overflow: "hidden" 
            }} 
          />
        </>
      )}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: '#ffffff',
          padding: 4,
          boxSizing: 'border-box',
          zIndex: 1,
        }}
      >
        <Typography variant="h3" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
          Hi, I'm PRASAD 
        </Typography>
        <Slide in={slideIn} direction="right"> 
          <Typography variant="h6" sx={{ mb: 2, lineHeight: 1.6 }}>
            {textCarousel[currentTextIndex]}
          </Typography>
        </Slide>
        <Link to="/about" style={{ textDecoration: 'none', marginTop: '16px' }}>
          <Button variant="contained" sx={{ backgroundColor: '#66fcf1', color: '#1c1c1c' }}>
            Read More
          </Button>
        </Link>
      </Box>
    </Box>
  );
}