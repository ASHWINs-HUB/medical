import React from 'react';
import { Container, Typography, Button } from '@material-ui/core';


function Home() {
  return (
    <Container className="home-container">
      <Typography variant="h2" className="home-title">Welcome to the Medical Store</Typography>
      <Button variant="contained" color="primary" className="home-button" href="/products">Shop Now</Button>
    </Container>
  );
}

export default Home;
