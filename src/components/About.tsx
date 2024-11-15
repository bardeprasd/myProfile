// About.tsx
import React from 'react';
import { Grid, Avatar, Typography, Box, LinearProgress, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

// Custom styled Box for the dark background
const StyledBox = styled(Box)({
  backgroundColor: '#1c1c1c',
  color: '#66fcf1',
  padding: '32px',
  borderRadius: '8px',
});

const About: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const skills = [
    { name: 'Java', proficiency: 85 },
    { name: 'React', proficiency: 90 },
    { name: 'TypeScript', proficiency: 80 },
    { name: 'HTML', proficiency: 95 },
    { name: 'Spring Boot', proficiency: 85 },
    { name: 'MySQL', proficiency: 80 },
  ];

  return (
    <StyledBox display="flex" justifyContent="center" alignItems="center">
      <Grid container spacing={10} alignItems="center">
        {/* Profile Picture Section */}
        <Grid item xs={12} sm={4} display="flex" flexDirection="column" alignItems="center">
          <Avatar
            alt="Prasad Barde"
            src="/p1.png"
            sx={{ width: 150, height: 150, border: '3px solid #66fcf1' }}
          />
          
          {/* Text Section below the Avatar */}
          <Box textAlign="center" mt={2}> {/* Add margin-top for spacing */}
            <Typography variant="h4" gutterBottom style={{ color: '#66fcf1' }}>
              Prasad Barde
            </Typography>
            <Typography variant="subtitle1" gutterBottom style={{ color: '#66fcf1' }}>
              Java Full Stack Developer
            </Typography>
            <Typography variant="body1" paragraph style={{ color: '#cccccc' }}>
              Hello, I am Prasad Barde, a passionate Java Full Stack Developer driven by the desire to learn and implement new technologies. With experience in the IT industry, I possess a robust skill set that includes expertise in Java, Spring Framework, React.js, JavaScript, and MySQL.
            </Typography>
          </Box>
        </Grid>

        {/* Skills Section */}
        <Grid item xs={12} sm={8} >
          <Typography variant="h6" gutterBottom style={{ color: '#66fcf1' }}>
            Skills
          </Typography>
          <Box display="flex" flexDirection="column" gap={3}>
            {skills.map((skill, index) => (
              <Box key={index}>
                <Typography variant="body1" style={{ color: '#66fcf1' }}>
                  {skill.name}
                </Typography>
                <Box sx={{ width: '65%' }}>
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

          {/* Experience Button */}
          <Button
            variant="contained"
            sx={{
              marginTop: '30px',
              backgroundColor: '#66fcf1',
              color: '#1c1c1c',
              '&:hover': {
                backgroundColor: '#55b3d0', // Change color on hover
              },
            }}
            onClick={() => navigate('/experience')} // Navigate to Experience component
          >
            View Experience
          </Button>
        </Grid>
      </Grid>
    </StyledBox>
  );
};

export default About;
