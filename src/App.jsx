import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemPage from "./pages/ItemPage";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import AdminMembersPage from "./pages/AdminMembersPage";
import AdminOrdersPage from "./pages/AdminOrdersPage";
import MyPage from "./pages/MyPage";
// const App = () => {
//   const [cartCount, setCartCount] = useState(0);
//   const [cartItems, setCartItems] = useState([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("accessToken");
//     const role = localStorage.getItem("role");
//     if (token) {
//       setIsLoggedIn(true); // 토큰이 있으면 로그인 상태 유지
//     }
//   }, []);

//   return (
//     <Router>
//       <Header
//         cartCount={cartCount}
//         isLoggedIn={isLoggedIn}
//         setIsLoggedIn={setIsLoggedIn}
//       />

//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route
//           path="/items"
//           element={
//             <ItemPage
//               cartCount={cartCount}
//               setCartCount={setCartCount}
//               cartItems={cartItems}
//               setCartItems={setCartItems}
//               isLoggedIn={isLoggedIn}
//             />
//           }
//         />
//         <Route
//           path="/login"
//           element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
//         />
//         <Route
//           path="/cart"
//           element={
//             <CartPage
//               cartItems={cartItems}
//               setCartItems={setCartItems}
//               setCartCount={setCartCount}
//             />
//           }
//         />
//         <Route path="/admin/members" element={<AdminMembersPage />} />
//         <Route path="/admin/orders" element={<AdminOrdersPage />} />
//         <Route path="/mypage" element={<MyPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import { Box } from "@mui/material";
import backgroundImage from "./assets/background.jpg";

const App = () => {
  // const [cartCount, setCartCount] = useState(0);
  // const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [cartCount, setCartCount] = useState(() => {
    const savedCount = localStorage.getItem("cartCount");
    return savedCount ? JSON.parse(savedCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("cartCount", JSON.stringify(cartCount));
  }, [cartItems, cartCount]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const role = localStorage.getItem("role");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`, // ✅ Use imported image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Router>
        <Header
          cartCount={cartCount}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/items"
            element={
              <ItemPage
                cartCount={cartCount}
                setCartCount={setCartCount}
                cartItems={cartItems}
                setCartItems={setCartItems}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route
            path="/login"
            element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                setCartItems={setCartItems}
                setCartCount={setCartCount}
              />
            }
          />
          <Route path="/admin/members" element={<AdminMembersPage />} />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default App;
