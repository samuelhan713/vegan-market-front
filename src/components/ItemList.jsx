// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   Button,
//   CircularProgress,
//   Alert,
//   Checkbox,
//   FormControlLabel,
//   Box,
//   TextField,
//   MenuItem,
// } from "@mui/material";
// import { useNavigate, useLocation } from "react-router-dom";

// const ItemList = ({
//   cartCount,
//   setCartCount,
//   cartItems,
//   setCartItems,
//   isLoggedIn,
// }) => {
//   const [items, setItems] = useState([]);
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchType, setSearchType] = useState("name");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isSearched, setIsSearched] = useState(false); // ✅ 검색 상태
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//   const navigate = useNavigate();
//   const location = useLocation();

//   const fetchItems = async (type = "", term = "") => {
//     setLoading(true);
//     try {
//       const params = {};
//       if (type && term) {
//         params[type] = term;
//       }
//       const res = await axios.get(`${API_BASE_URL}/items`, { params });
//       setItems(res.data);
//       setLoading(false);
//       console.log(res.data);
//     } catch (err) {
//       setError("상품을 불러오는 데 실패했어요.");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchItems(); // 초기 로딩
//   }, [location.pathname]);

//   const handleSearch = () => {
//     fetchItems(searchType, searchTerm);
//     setIsSearched(true);
//   };

//   const handleReset = () => {
//     setSearchTerm("");
//     setIsSearched(false);
//     navigate("/items"); // ✅ URL 리셋
//     fetchItems(); // 전체 상품 다시 불러오기
//   };

//   const handleSelect = (itemId) => {
//     const exists = selectedItems.find((item) => item.id === itemId);
//     if (exists) {
//       setSelectedItems((prev) => prev.filter((item) => item.id !== itemId));
//     } else {
//       setSelectedItems((prev) => [...prev, { id: itemId, count: 1 }]);
//     }
//   };

//   const handleCountChange = (itemId, count) => {
//     setSelectedItems((prev) =>
//       prev.map((item) =>
//         item.id === itemId ? { ...item, count: parseInt(count || 1) } : item
//       )
//     );
//   };

//   const handleAddToCart = () => {
//     const selectedData = selectedItems.map((selected) => {
//       const found = items.find((item) => item.id === selected.id);
//       return { ...found, count: selected.count };
//     });

//     setCartItems([...cartItems, ...selectedData]);
//     setCartCount(cartCount + selectedData.length);
//     setSelectedItems([]);
//   };

//   const isSelected = (itemId) =>
//     selectedItems.some((item) => item.id === itemId);

//   const getCount = (itemId) =>
//     selectedItems.find((item) => item.id === itemId)?.count || 1;

//   if (loading) return <CircularProgress />;
//   if (error) return <Alert severity="error">{error}</Alert>;

//   return (
//     <>
//       <Box
//         sx={{
//           display: "flex",
//           gap: 2,
//           mb: 2,
//         }}
//       >
//         <TextField
//           select
//           label="검색 기준"
//           value={searchType}
//           onChange={(e) => setSearchType(e.target.value)}
//           size="small"
//           sx={{ width: 120 }}
//         >
//           <MenuItem value="name">상품명</MenuItem>
//           <MenuItem value="category">카테고리</MenuItem>
//         </TextField>
//         <TextField
//           label="검색어 입력"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           size="small"
//         />
//         <Button variant="contained" onClick={handleSearch}>
//           검색
//         </Button>
//         {isSearched && (
//           <Button variant="outlined" onClick={handleReset}>
//             전체 항목 보기
//           </Button>
//         )}
//       </Box>

//       <Grid container spacing={4}>
//         {items.map((item) => (
//           <Grid item xs={12} sm={6} md={4} key={item.id}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={`${API_BASE_URL}/item/${item.id}/image`}
//               />
//               <CardContent>
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       checked={isSelected(item.id)}
//                       onChange={() => handleSelect(item.id)}
//                     />
//                   }
//                   label="선택"
//                 />
//                 {isSelected(item.id) && (
//                   <TextField
//                     label="수량"
//                     type="number"
//                     value={getCount(item.id)}
//                     onChange={(e) => handleCountChange(item.id, e.target.value)}
//                     size="small"
//                     sx={{ mb: 1 }}
//                     fullWidth
//                   />
//                 )}
//                 <Typography variant="h6">{item.name}</Typography>
//                 <Typography>{item.category}</Typography>
//                 <Typography>{item.price}원</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       <Box
//         sx={{
//           position: "fixed",
//           bottom: 20,
//           right: 20,
//           zIndex: 1000,
//         }}
//       >
//         {isLoggedIn ? (
//           <Button
//             variant="contained"
//             onClick={handleAddToCart}
//             disabled={selectedItems.length === 0}
//           >
//             장바구니에 담기 ({selectedItems.length})
//           </Button>
//         ) : (
//           <></>
//         )}
//       </Box>
//     </>
//   );
// };

// export default ItemList;

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Grid,
  Typography,
  Button,
  CircularProgress,
  Alert,
  Checkbox,
  FormControlLabel,
  Box,
  TextField,
  MenuItem,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";

const ItemList = ({
  cartCount,
  setCartCount,
  cartItems,
  setCartItems,
  isLoggedIn,
}) => {
  const [categories, setCategories] = useState([]); // ✅ Notice: categories now
  const [selectedItems, setSelectedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchType, setSearchType] = useState("name");
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearched, setIsSearched] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const location = useLocation();

  const fetchItems = async (type = "", term = "") => {
    setLoading(true);
    try {
      const params = {};
      if (type && term) {
        params[type] = term;
      }
      const res = await axios.get(`${API_BASE_URL}/items`, { params });
      setCategories(res.data); // ✅ categories now
      setLoading(false);
      console.log(res.data);
    } catch (err) {
      setError("상품을 불러오는 데 실패했어요.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [location.pathname]);

  const handleSearch = () => {
    fetchItems(searchType, searchTerm);
    setIsSearched(true);
  };

  const handleReset = () => {
    setSearchTerm("");
    setIsSearched(false);
    navigate("/items");
    fetchItems();
  };

  const handleSelect = (productName) => {
    const exists = selectedItems.find((item) => item.name === productName);
    if (exists) {
      setSelectedItems((prev) =>
        prev.filter((item) => item.name !== productName)
      );
    } else {
      setSelectedItems((prev) => [...prev, { name: productName, count: 1 }]);
    }
  };

  const handleCountChange = (productName, count) => {
    setSelectedItems((prev) =>
      prev.map((item) =>
        item.name === productName
          ? { ...item, count: parseInt(count || 1) }
          : item
      )
    );
  };

  const handleAddToCart = () => {
    const selectedData = [];

    categories.forEach((category) => {
      category.products.forEach((product) => {
        if (selectedItems.find((item) => item.name === product.name)) {
          selectedData.push({ ...product });
        }
      });
    });

    setCartItems([...cartItems, ...selectedData]);
    setCartCount(cartCount + selectedData.length);
    setSelectedItems([]);
  };

  const isSelected = (productName) =>
    selectedItems.some((item) => item.name === productName);

  const getCount = (productName) =>
    selectedItems.find((item) => item.name === productName)?.count || 1;

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <>
      {/* Search Filters */}
      <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
        <TextField
          select
          label="검색 기준"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          size="small"
          sx={{ width: 120 }}
        >
          <MenuItem value="name">상품명</MenuItem>
          <MenuItem value="category">카테고리</MenuItem>
        </TextField>

        <TextField
          label="검색어 입력"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
        />

        <Button variant="contained" color="success" onClick={handleSearch}>
          검색
        </Button>

        {isSearched && (
          <Button variant="outlined" onClick={handleReset}>
            전체 항목 보기
          </Button>
        )}
      </Box>

      {/* Products grouped by category */}
      {categories.map((category) => (
        <Box key={category.category} mb={6}>
          <Typography variant="h5" fontWeight="bold" mb={3} color="green">
            🌿 {category.category}
          </Typography>

          <Grid container spacing={4}>
            {category.products.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <div style={{ position: "relative" }}>
                  {/* Checkbox to select */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 8,
                      left: 8,
                      backgroundColor: "rgba(255,255,255,0.8)",
                      borderRadius: "8px",
                      zIndex: 2,
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={isSelected(product.name)}
                          onChange={() => handleSelect(product.name)}
                          sx={{ p: 0.5 }}
                        />
                      }
                      label=""
                    />
                  </Box>

                  {/* ProductCard */}
                  <ProductCard
                    product={{
                      name: product.name,
                      price: product.price,
                      co2Saved: product.carbon, // ✅ Save carbon info
                      image: "/placeholder.svg", // Replace if you have image
                      category: category.category,
                      isEcoFriendly: true, // Assume all are eco-friendly now
                      ecoLabels: [],
                      description: `Saves ${product.carbon}kg of CO₂`,
                    }}
                  />
                </div>

                {/* Quantity Input */}
                {isSelected(product.name) && (
                  <Box sx={{ mt: 1 }}>
                    <TextField
                      label="수량"
                      type="number"
                      value={getCount(product.name)}
                      onChange={(e) =>
                        handleCountChange(product.name, e.target.value)
                      }
                      size="small"
                      fullWidth
                    />
                  </Box>
                )}
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}

      {/* Floating Add to Cart Button */}
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1000,
        }}
      >
        {isLoggedIn && (
          <Button
            variant="contained"
            color="success"
            onClick={handleAddToCart}
            disabled={selectedItems.length === 0}
          >
            장바구니에 담기 ({selectedItems.length})
          </Button>
        )}
      </Box>
    </>
  );
};

export default ItemList;
