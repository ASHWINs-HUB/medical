import React, { useState, useEffect } from 'react';
import { Container, List, ListItem, ListItemText, Button, Typography } from '@material-ui/core';
import { useCart } from '../context/CartContext'; // Import useCart

function Cart() {
  const { cart, removeFromCart } = useCart(); // Get cart and removeFromCart from context
  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate the total price
  useEffect(() => {
    const total = cart.reduce((sum, item) => {
      const itemPrice = item.price || 0; 
      const itemQuantity = item.quantity || 1;
      return sum + itemPrice * itemQuantity;
    }, 0);
    setTotalPrice(total);
  }, [cart]);

  return (
    <Container>
      <h2>Items Ready For Checkout</h2>
      <List>
        {cart.map(item => (
          <ListItem key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: '50px', height: 'auto', marginRight: '16px' }}
            />
            <ListItemText
              primary={`${item.name} (x${item.quantity || 1})`}
              secondary={`${item.description} - $${(item.price || 0).toFixed(2)}`}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
      <Typography variant="h6">Total Price: {totalPrice.toFixed(2)} Rs</Typography>
      <Button variant="contained" color="primary">
        Checkout
      </Button>
    </Container>
  );
}

export default Cart;
