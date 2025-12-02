import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
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
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        px: 2,
        py: { xs: 6, md: 8 },
        background: 'radial-gradient(circle at 20% 20%, rgba(102,252,241,0.08), transparent 35%), radial-gradient(circle at 80% 0%, rgba(102,252,241,0.12), transparent 30%)',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 1100,
          bgcolor: 'rgba(12,12,12,0.85)',
          borderRadius: 3,
          border: '1px solid rgba(102,252,241,0.25)',
          boxShadow: '0 15px 40px rgba(0,0,0,0.45), 0 0 24px rgba(102,252,241,0.25)',
          p: { xs: 3, md: 5 },
          color: '#e8f7f6',
          backdropFilter: 'blur(6px)',
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#66fcf1' }}>
              Current Location
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Pune, Maharashtra, India
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Email: bardeprasad2019@gmail.com
            </Typography>
            <Typography variant="body1" sx={{ mt: 3, color: '#b7dedc' }}>
              Open to collaboration on frontend engineering, data-rich dashboards, and cloud-backed web apps.
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#66fcf1' }}>
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
                  input: { color: '#e8f7f6' },
                  label: { color: '#66fcf1' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(102,252,241,0.4)' },
                    '&:hover fieldset': { borderColor: '#66fcf1' },
                    '&.Mui-focused fieldset': { borderColor: '#66fcf1', boxShadow: '0 0 0 2px rgba(102,252,241,0.25)' },
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
                  input: { color: '#e8f7f6' },
                  label: { color: '#66fcf1' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(102,252,241,0.4)' },
                    '&:hover fieldset': { borderColor: '#66fcf1' },
                    '&.Mui-focused fieldset': { borderColor: '#66fcf1', boxShadow: '0 0 0 2px rgba(102,252,241,0.25)' },
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
                  input: { color: '#e8f7f6' },
                  label: { color: '#66fcf1' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(102,252,241,0.4)' },
                    '&:hover fieldset': { borderColor: '#66fcf1' },
                    '&.Mui-focused fieldset': { borderColor: '#66fcf1', boxShadow: '0 0 0 2px rgba(102,252,241,0.25)' },
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
                  input: { color: '#e8f7f6' },
                  label: { color: '#66fcf1' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(102,252,241,0.4)' },
                    '&:hover fieldset': { borderColor: '#66fcf1' },
                    '&.Mui-focused fieldset': { borderColor: '#66fcf1', boxShadow: '0 0 0 2px rgba(102,252,241,0.25)' },
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
                  bgcolor: '#10e7d7',
                  color: '#0a0a0a',
                  fontWeight: 700,
                  letterSpacing: 0.5,
                  '&:hover': { bgcolor: '#0fc4b8' },
                }}
              >
                SEND
              </Button>
            </Box>
            {success && (
              <Typography color="success" sx={{ mt: 1.5 }}>
                Your message was sent successfully!
              </Typography>
            )}
            {error && (
              <Typography color="error" sx={{ mt: 1.5 }}>
                There was an error sending your message. Please try again.
              </Typography>
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
