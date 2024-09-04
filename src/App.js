import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails'; // Import ProductDetails component
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Medical Store
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Products
          </Button>
          <Button color="inherit" component={Link} to="/cart">
            Cart
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductDetails />} /> {/* Route for product details */}
      </Routes>
    </Router>
  );
}

export default App;
