import React from 'react';
import { Grid, Box, Typography, LinearProgress, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  // Resolve image path from the public folder
  const imagePath = `${process.env.PUBLIC_URL}/p1.png`;

  const skills = [
    { name: 'Java', proficiency: 85 },
    { name: 'React', proficiency: 90 },
    { name: 'TypeScript', proficiency: 80 },
    { name: 'HTML', proficiency: 95 },
    { name: 'Spring Boot', proficiency: 85 },
    { name: 'MySQL', proficiency: 80 },
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
              by the desire to learn and implement new technologies. With
              experience in the IT industry, I possess a robust skill set that
              includes expertise in Java, Spring Framework, React.js,
              JavaScript, and MySQL.
            </Typography>
          </Grid>

          {/* Skills Section */}
          <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
              Skills
            </Typography>
            <Box display="flex" flexDirection="column" gap={3}>
              {skills.map((skill, index) => (
                <Box key={index}>
                  <Typography>{skill.name}</Typography>
                  <Box sx={{ width: '100%' }}>
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
              onClick={() => navigate('/experience')}
            >
              View Experience
            </Button>
          </Grid>
        </Grid>
      </StyledBox>
    </Box>
  );
};

export default About;
