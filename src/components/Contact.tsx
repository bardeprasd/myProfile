import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Grid,
} from '@mui/material';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form submitted:', { name, email, subject, message });
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        bgcolor: '#121212',
        color: '#00FFFF',
        py: 8,
        boxShadow: '0px 6px 15px rgba(102, 252, 241, 0.8)', // Add shadow by default
        transform: 'translateY(-5px)', // Add lift effect by default
        transition: 'all 0.3s ease-in-out', // Smooth animation
        borderRadius: 2, // Rounded corners
      }}
    >
      <Grid container spacing={4}>
        {/* Current Location Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            Current Location
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Pune
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Maharashtra
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            India
          </Typography>
          <Typography variant="body1">
            Email: bardeprasad2019@gmail.com
          </Typography>
        </Grid>

        {/* Drop a Line Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            Drop a Line
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            {/* Name Input */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{
                input: { color: '#00FFFF' },
                label: { color: '#00FFFF' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#00FFFF' },
                  '&:hover fieldset': { borderColor: '#00FFFF' },
                  '&.Mui-focused fieldset': { borderColor: '#00FFFF' },
                },
              }}
            />

            {/* Email Input */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                input: { color: '#00FFFF' },
                label: { color: '#00FFFF' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#00FFFF' },
                  '&:hover fieldset': { borderColor: '#00FFFF' },
                  '&.Mui-focused fieldset': { borderColor: '#00FFFF' },
                },
              }}
            />

            {/* Subject Input */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="subject"
              label="Subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              sx={{
                input: { color: '#00FFFF' },
                label: { color: '#00FFFF' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#00FFFF' },
                  '&:hover fieldset': { borderColor: '#00FFFF' },
                  '&.Mui-focused fieldset': { borderColor: '#00FFFF' },
                },
              }}
            />

            {/* Message Input */}
            <TextField
              margin="normal"
              required
              fullWidth
              name="message"
              label="Message"
              id="message"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{
                input: { color: '#00FFFF' },
                label: { color: '#00FFFF' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#00FFFF' },
                  '&:hover fieldset': { borderColor: '#00FFFF' },
                  '&.Mui-focused fieldset': { borderColor: '#00FFFF' },
                },
              }}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: '#00FFFF',
                color: '#121212',
                '&:hover': { bgcolor: '#00BFFF' },
              }}
            >
              SEND
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
