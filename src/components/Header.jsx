import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Badge,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = ({ cartCount, isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#1e6e10", // 🌿 Dark Green
        boxShadow: "none",
        borderBottom: "2px solid #065f46", // Slightly lighter green
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo / Home Link */}
        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            letterSpacing: "1px",
            "&:hover": {
              color: "white", // Light green hover
            },
          }}
        >
          MGM
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Button
            component={Link}
            to="/items"
            sx={{
              color: "white",
              fontWeight: "bold",
              "&:hover": { color: "white" },
            }}
          >
            Explore
          </Button>

          {role === "ADMIN" && (
            <>
              <Button
                component={Link}
                to="/admin/members"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  "&:hover": { color: "white" },
                }}
              >
                회원 조회
              </Button>
              <Button
                component={Link}
                to="/admin/orders"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  "&:hover": { color: "white" },
                }}
              >
                주문 전체 조회
              </Button>
            </>
          )}

          {isLoggedIn ? (
            <Button
              onClick={handleLogout}
              sx={{
                color: "white",
                fontWeight: "bold",
                "&:hover": { color: "#bbf7d0" },
              }}
            >
              Logout
            </Button>
          ) : (
            <Button
              component={Link}
              to="/login"
              sx={{
                color: "white",
                fontWeight: "bold",
                "&:hover": { color: "#bbf7d0" },
              }}
            >
              Login
            </Button>
          )}

          {/* Cart Icon */}
          <IconButton component={Link} to="/cart" sx={{ color: "white" }}>
            <Badge badgeContent={cartCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
