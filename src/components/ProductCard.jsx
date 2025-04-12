import { Box, Typography, Button, Chip, Modal } from "@mui/material";
import { useState } from "react";

export default function ProductCard({
  product,
  cartItems,
  setCartItems,
  setCartCount,
}) {
  const [openModal, setOpenModal] = useState(false);

  const handleAddToCart = () => {
    const exists = cartItems.find((item) => item.id === product.id);

    if (exists) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, count: item.count + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, count: 1 }]);
    }

    setCartCount((prev) => prev + 1);
    setOpenModal(true);
    setTimeout(() => setOpenModal(false), 1500);
  };

  if (!product) return null;

  return (
    <>
      <div
        style={{
          backgroundColor: product.isEcoFriendly ? "#f0fdf4" : "#ffffff",
          border: `1px solid ${product.isEcoFriendly ? "#86efac" : "#e0e0e0"}`,
          borderRadius: "12px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          width: "350px",
          minHeight: "150px",
          height: "100%",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
          transition: "box-shadow 0.3s ease",
          padding: "16px", // ✅ Added padding
        }}
      >
        {/* Top Badges */}
        <Box display="flex" justifyContent="space-between" mb={2}>
          {/* Carbon Saved Badge */}
          <Box
            sx={{
              backgroundColor: "#15803d",
              color: "white",
              fontSize: "12px",
              px: 1,
              py: 0.5,
              borderRadius: "8px",
              fontWeight: "bold",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
            }}
          >
            {product.price}g Carbon Saved!
          </Box>

          {/* CO2 Badge if available */}
          {product.co2Saved && (
            <Box
              sx={{
                backgroundColor: "#22c55e",
                color: "white",
                fontSize: "12px",
                px: 1,
                py: 0.5,
                borderRadius: "8px",
                fontWeight: "bold",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
              }}
            >
              Saves {product.co2Saved} CO₂
            </Box>
          )}
        </Box>

        {/* Name */}
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: "1.1rem",
            overflowWrap: "break-word",
            wordBreak: "break-word",
          }}
        >
          {product.name}
        </Typography>

        {/* Description */}
        <Box
          sx={{
            flexGrow: 0,
            minHeight: "50px",
            maxHeight: "50px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              wordBreak: "break-word",
            }}
          >
            {product.description}
          </Typography>
        </Box>

        {/* Category Label */}
        <Box display="flex" flexWrap="wrap" gap={0.5} mt={2}>
          <Chip
            label={product.category}
            size="small"
            color="primary"
            variant="outlined"
          />
        </Box>

        {/* Footer Section */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt="auto"
        >
          <Typography fontWeight="bold">
            ${(product.carbon / 10).toFixed(2)}
          </Typography>

          <Button
            variant="contained"
            color="success"
            size="small"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </Box>
      </div>

      {/* Modal for Confirmation */}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="cart-modal-title"
        aria-describedby="cart-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            boxShadow: 24,
            p: 4,
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <Typography
            id="cart-modal-title"
            variant="h6"
            component="h2"
            color="success.main"
          >
            🎉 Item Added to Cart!
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
