import React from 'react';
import { Grid, Box, Typography, LinearProgress, Button, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import { Link as ScrollLink } from 'react-scroll';

// Custom styled Box for the dark background
const StyledBox = styled(Box)({
  backgroundColor: '#1c1c1c',
  color: '#66fcf1',
  padding: '32px',
  borderRadius: '8px',
  boxShadow: '0px 6px 15px rgba(102, 252, 241, 0.8)', // Add shadow by default
  transform: 'translateY(-5px)', // Apply lift effect by default
  transition: 'all 0.3s ease-in-out', // Smooth animation
});

// Custom styled image container
const ImageContainer = styled(Box)({
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  overflow: 'hidden',
  border: '3px solid #66fcf1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
});

const About: React.FC = () => {
  // Resolve image path from the public folder
  const imagePath = `${process.env.PUBLIC_URL}/mypic.jpg`;

  const skills = [
    {
      name: 'React',
      proficiency: 90,
      color: '#0a0a0a',
      initials: 'R',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
    },
    {
      name: 'TypeScript',
      proficiency: 88,
      color: '#0a0a0a',
      initials: 'TS',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
    },
    {
      name: 'Express',
      proficiency: 82,
      color: '#0a0a0a',
      initials: 'Ex',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
    },
    {
      name: 'MongoDB',
      proficiency: 84,
      color: '#0a0a0a',
      initials: 'Mg',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
    },
    {
      name: 'Next.js',
      proficiency: 82,
      color: '#0a0a0a',
      initials: 'Nx',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
    },
    {
      name: 'Git',
      proficiency: 86,
      color: '#0a0a0a',
      initials: 'G',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
    },
    {
      name: 'CI/CD',
      proficiency: 80,
      color: '#0a0a0a',
      initials: 'CI',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg',
    },
    {
      name: 'AWS',
      proficiency: 76,
      color: '#0a0a0a',
      initials: 'A',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg',
    },
  ];

  return (
    <Box
      sx={{
        paddingTop: '80px', // Accounts for the fixed header
        backgroundColor: '#121212',
        minHeight: '100vh',
      }}
    >
      <StyledBox sx={{ maxWidth: '900px', margin: '0 auto' }}>
        <Grid container spacing={4} alignItems="center">
          {/* Profile Picture Section */}
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <ImageContainer>
              <img
                src={imagePath}
                alt="Prasad Barde"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </ImageContainer>
            <Typography variant="h4" gutterBottom sx={{ marginTop: '16px' }}>
              Prasad Barde
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Front End Developer
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: '#cccccc' }}>
              Hello, I am Prasad Barde, a passionate Front End Developer driven
              by the desire to learn and implement new technologies. My focus
              is on building performant web apps with React, TypeScript, and
              modern cloud-backed stacks using Express, MongoDB, Next.js,
              AWS, Git, and CI/CD pipelines.
            </Typography>
          </Grid>

          {/* Skills Section */}
          <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
              Skills
            </Typography>
            <Box display="flex" flexDirection="column" gap={3}>
              {skills.map((skill, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar
                    src={skill.logo}
                    alt={skill.name}
                    sx={{
                      bgcolor: '#ffffff',
                      color: '#0a0a0a',
                      width: 36,
                      height: 36,
                      fontSize: 14,
                      fontWeight: 'bold',
                      border: '1px solid #303030',
                    }}
                  >
                    {skill.initials}
                  </Avatar>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography sx={{ fontWeight: 600 }}>{skill.name}</Typography>
                    <LinearProgress
                      variant="determinate"
                      value={skill.proficiency}
                      sx={{
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: '#3e3e3e',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: '#66fcf1',
                        },
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
            <ScrollLink to="experience" smooth duration={500} offset={-72} style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                sx={{
                  marginTop: '30px',
                  backgroundColor: '#66fcf1',
                  color: '#1c1c1c',
                  '&:hover': {
                    backgroundColor: '#55b3d0',
                  },
                }}
              >
                View Experience
              </Button>
            </ScrollLink>
          </Grid>
        </Grid>
      </StyledBox>
    </Box>
  );
};

export default About;
