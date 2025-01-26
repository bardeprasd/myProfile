import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Grid,
} from '@mui/material';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const templateParams = {
      name,
      email,
      subject,
      message,
    };

    emailjs
      .send(
        'service_gyv5ylc', // Your Service ID
        'template_bfuh8eh', // Your Template ID
        templateParams,
        'lgSLBe_PMhJ5iukqM' // Your User ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSuccess(true);
          setError(false);
        },
        (err) => {
          console.error('FAILED...', err);
          setError(true);
          setSuccess(false);
        }
      );

    // Clear the form
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        bgcolor: '#121212',
        color: '#00FFFF',
        py: 8,
        boxShadow: '0px 6px 15px rgba(102, 252, 241, 0.8)',
        transform: 'translateY(-5px)',
        transition: 'all 0.3s ease-in-out',
        borderRadius: 2,
      }}
    >
      <Grid container spacing={4}>
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

        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            Drop a Line
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
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
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
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
          {success && (
            <Typography color="success" sx={{ mt: 2 }}>
              Your message was sent successfully!
            </Typography>
          )}
          {error && (
            <Typography color="error" sx={{ mt: 2 }}>
              There was an error sending your message. Please try again.
            </Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
