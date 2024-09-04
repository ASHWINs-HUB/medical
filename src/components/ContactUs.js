import React from 'react';
import { Container, Typography, TextField, Button } from '@material-ui/core';

function ContactUs() {
  return (
    <Container>
      <Typography variant="h4">Contact Us</Typography>
      <form noValidate autoComplete="off">
        <TextField label="Name" fullWidth margin="normal" />
        <TextField label="Email" type="email" fullWidth margin="normal" />
        <TextField label="Message" multiline rows={4} fullWidth margin="normal" />
        <Button variant="contained" color="primary">Send Message</Button>
      </form>
    </Container>
  );
}

export default ContactUs;
