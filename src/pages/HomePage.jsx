import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { keyframes } from "@emotion/react";

const fadeSlideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const wiggle = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(2deg);
  }
  75% {
    transform: rotate(-2deg);
  }
`;

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* 구글 폰트 CDN 로드 */}
      <Box
        sx={{
          backgroundImage:
            "url(https://source.unsplash.com/featured/?pastel,sky,clouds)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
          "::before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "rgba(173, 216, 230, 0.4)",
            backdropFilter: "blur(6px)",
            zIndex: 1,
          },
        }}
      >
        <Container sx={{ zIndex: 2, animation: `${fadeSlideUp} 1s ease-out` }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Lobster'",
              fontSize: "10rem",
              fontWeight: 700,
              letterSpacing: "2px",
              color: "#87CEEB",
              textShadow: "3px 3px #ffffff",
              mb: 2,
            }}
          >
            At Hong
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 4,
              backgroundColor: "#B2EBF2",
              color: "#01579B",
              fontWeight: "bold",
              fontSize: "1.2rem",
              padding: "12px 30px",
              borderRadius: "25px",
              boxShadow: "0 0 15px #B2EBF2",
              animation: `${wiggle} 2s ease-in-out infinite`,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#4FC3F7",
                transform: "scale(1.1)",
              },
            }}
            onClick={() => navigate("/items")}
          >
            🌤️ 쇼핑하러 가기
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
