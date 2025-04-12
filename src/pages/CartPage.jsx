import React, { useState } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper,
  Button,
  Box,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import axios from "axios";
import Confetti from "react-confetti"; // ✅ Install this: npm install react-confetti

const CartPage = ({ cartItems, setCartItems, setCartCount }) => {
  const [orderComplete, setOrderComplete] = useState(false); // ✅ New state
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleCountChange = (index, newCount) => {
    const updatedItems = [...cartItems];
    updatedItems[index].count = parseInt(newCount || 1);
    setCartItems(updatedItems);
  };

  const handleOrder = async () => {
    // ✅ Success
    localStorage.removeItem("cartItems");
    localStorage.removeItem("cartCount");
    setCartItems([]);
    setCartCount(0);
    setOrderComplete(true); // ✅ Show Confetti and popup!
  };

  const handleCloseDialog = () => {
    setOrderComplete(false); // ✅ Close popup after user clicks OK
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Your cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <>
          <Paper elevation={2}>
            <List>
              {cartItems.map((item, index) => (
                <React.Fragment key={item.id || index}>
                  <ListItem
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <ListItemText
                      primary={item.name}
                      secondary={`${item.price}원`}
                    />
                    <TextField
                      label="수량"
                      type="number"
                      inputProps={{ min: 1 }}
                      value={item.count || 1}
                      onChange={(e) => handleCountChange(index, e.target.value)}
                      sx={{ width: 80 }}
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Paper>

          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button variant="contained" color="primary" onClick={handleOrder}>
              Confirm Order
            </Button>
          </Box>
        </>
      )}

      {/* 🎉 Confetti and Dialog */}
      {orderComplete && (
        <>
          <Confetti />
          <Dialog open={orderComplete} onClose={handleCloseDialog}>
            <DialogTitle>🎉 Order Completed!</DialogTitle>
            <DialogContent>
              <Typography>
                Your eco-friendly order has been placed! 🌱
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color="primary">
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </Container>
  );
};

export default CartPage;
