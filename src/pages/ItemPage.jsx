// import { useState, useEffect } from "react";
// import {
//   Container,
//   Grid,
//   TextField,
//   Select,
//   MenuItem,
//   Box,
//   Typography,
// } from "@mui/material";
// import ProductGrid from "../components/ProductGrid";
// import food from "../assets/food.png";

// const allProducts = [
//   {
//     id: 1,
//     name: "Organic Bamboo Paper Towels",
//     price: 5.99,
//     image:
//       "/https://images.squarespace-cdn.com/content/v1/5ad395ba36099b72e4432660/1588514131963-WEH7NU4FT8NTUM6Z0G6D/image-asset.jpeg",
//     category: "household",
//     isEcoFriendly: true,
//     ecoLabels: ["Plastic-free", "Biodegradable"],
//     description:
//       "100% biodegradable paper towels made from sustainable bamboo.",
//   },
//   {
//     id: 2,
//     name: "Reusable Produce Bags",
//     price: 12.99,
//     image:
//       "/https://images.squarespace-cdn.com/content/v1/5ad395ba36099b72e4432660/1588514242296-DD9WTI1YPMPQZUYNDPNC/IMG_7402.jpg",
//     category: "household",
//     isEcoFriendly: true,
//     ecoLabels: ["Reusable", "Plastic-free"],
//     description: "Set of 5 mesh bags for plastic-free grocery shopping.",
//   },
//   {
//     id: 3,
//     name: "Organic Fair Trade Coffee",
//     price: 14.99,
//     image: "/placeholder.svg",
//     category: "beverages",
//     isEcoFriendly: true,
//     ecoLabels: ["Organic", "Fair Trade"],
//     description: "Shade-grown coffee beans from sustainable farms.",
//   },
//   {
//     id: 4,
//     name: "Whole Grain Bread",
//     price: 4.5,
//     image: "/placeholder.svg",
//     category: "bakery",
//     isEcoFriendly: false,
//     description: "Freshly baked whole grain bread.",
//   },
//   {
//     id: 5,
//     name: "Organic Spinach",
//     price: 2.99,
//     image: "/placeholder.svg",
//     category: "vegetables",
//     isEcoFriendly: false,
//     description: "Fresh organic spinach leaves.",
//   },
//   {
//     id: 6,
//     name: "Greek Yogurt",
//     price: 3.99,
//     image: "/placeholder.svg",
//     category: "dairy",
//     isEcoFriendly: false,
//     description: "Plain Greek yogurt, high in protein.",
//   },
// ];

// export default function ItemsPage() {
//   const [products, setProducts] = useState(allProducts);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortType, setSortType] = useState("featured");

//   useEffect(() => {
//     let filtered = allProducts.filter(
//       (product) =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         product.description.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setProducts(filtered);
//   }, [searchTerm]);

//   return (
//     <Container maxWidth="lg" sx={{ py: 6 }}>
//       <section style={{ marginBottom: "3rem" }}>
//         <div
//           style={{
//             backgroundColor: "#439136", // green-100
//             borderRadius: "1rem", // rounded-xl
//             padding: "1.5rem", // p-6
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "center",
//             gap: "1.5rem",
//           }}
//         >
//           <div style={{ flex: 1 }}>
//             <h2
//               style={{
//                 fontSize: "1.875rem", // text-3xl
//                 fontWeight: "bold",
//                 color: "white", // text-green-800
//                 marginBottom: "1rem",
//               }}
//             >
//               Shop Sustainably, Live Naturally
//             </h2>
//             <p
//               style={{
//                 color: "white", // text-green-700
//                 marginBottom: "1.5rem",
//               }}
//             >
//               Discover our curated selection of eco-friendly, organic, and
//               locally sourced foods that are good for you and the planet.
//             </p>

//             {/* Tags */}
//             <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
//               {[
//                 "Plastic-free",
//                 "Organic",
//                 "Local Produce",
//                 "Carbon Neutral",
//               ].map((label, index) => (
//                 <span
//                   key={index}
//                   style={{
//                     backgroundColor: "#bbf7d0", // bg-green-200
//                     color: "#065f46", // text-green-800
//                     padding: "0.25rem 0.75rem",
//                     borderRadius: "9999px", // rounded-full
//                     fontSize: "0.875rem",
//                     fontWeight: "500",
//                   }}
//                 >
//                   {label}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Image */}
//           <div style={{ width: "100%", maxWidth: "400px" }}>
//             <img
//               src={food}
//               alt="Eco-friendly groceries"
//               style={{
//                 borderRadius: "0.75rem", // rounded-lg
//                 width: "100%",
//                 height: "auto",
//               }}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Title */}
//       <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
//         🌿 Explore Eco Products
//       </Typography>

//       {/* Search and Filter Controls */}
//       <Grid
//         container
//         spacing={2}
//         alignItems="center"
//         justifyContent="center"
//         mb={6}
//       >
//         {/* Centered Search Bar */}
//         <Grid item xs={12} sm={8} md={6}>
//           <TextField
//             fullWidth
//             placeholder="Search products..."
//             variant="outlined"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             size="medium"
//           />
//         </Grid>

//         {/* Right-Aligned Sort Dropdown */}
//         <Grid item xs={12} sm={4} md={3}>
//           <Select
//             fullWidth
//             value={sortType}
//             onChange={(e) => setSortType(e.target.value)}
//             size="medium"
//             displayEmpty
//           >
//             <MenuItem value="featured" disabled>
//               Sort By
//             </MenuItem>
//             <MenuItem value="featured">Featured</MenuItem>
//             <MenuItem value="price-low">Price: Low to High</MenuItem>
//             <MenuItem value="price-high">Price: High to Low</MenuItem>
//             <MenuItem value="name">Name</MenuItem>
//           </Select>
//         </Grid>
//       </Grid>

//       {/* Products */}
//       <ProductGrid products={products} />
//     </Container>
//   );
// }

import { useState, useEffect } from "react";
import {
  Container,
  Grid,
  TextField,
  Select,
  MenuItem,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import axios from "axios"; // ✅ Import axios
import ProductGrid from "../components/ProductGrid";
import food from "../assets/food.png";

export default function ItemsPage({ cartItems, setCartItems, setCartCount }) {
  const [products, setProducts] = useState([]); // ✅ initially empty
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("featured");
  const [loading, setLoading] = useState(true); // ✅ loading state

  useEffect(() => {
    const fetchProducts = async () => {
      console.log("asdfasfdas");

      try {
        const res = await axios.get("http://localhost:8080/items"); // ✅ your backend endpoint
        setProducts(res.data);
        setLoading(false);
        console.log(res.data);
      } catch (err) {
        console.error("Failed to fetch items", err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (!products) {
    return null;
  }
  const filteredProducts = products.items?.filter(
    (product) =>
      product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Hero Section */}
      <section style={{ marginBottom: "3rem" }}>
        <div
          style={{
            backgroundColor: "#439136",
            borderRadius: "1rem",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <div style={{ flex: 1 }}>
            <h2
              style={{
                fontSize: "1.875rem",
                fontWeight: "bold",
                color: "white",
                marginBottom: "1rem",
              }}
            >
              Shop Sustainably, Live Naturally
            </h2>
            <p style={{ color: "white", marginBottom: "1.5rem" }}>
              Discover our curated selection of eco-friendly, organic, and
              locally sourced foods that are good for you and the planet.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {[
                "Plastic-free",
                "Organic",
                "Local Produce",
                "Carbon Neutral",
              ].map((label, index) => (
                <span
                  key={index}
                  style={{
                    backgroundColor: "#bbf7d0",
                    color: "#065f46",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Image */}
          <div style={{ width: "100%", maxWidth: "400px" }}>
            <img
              src={food}
              alt="Eco-friendly groceries"
              style={{
                borderRadius: "0.75rem",
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>

      {/* Title */}
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
        🌿 Explore Eco Products
      </Typography>

      {/* Search and Filter Controls */}
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        mb={6}
      >
        {/* Centered Search Bar */}
        <Grid item xs={12} sm={8} md={6}>
          <TextField
            fullWidth
            placeholder="Search products..."
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            size="medium"
          />
        </Grid>

        {/* Right-Aligned Sort Dropdown */}
        <Grid item xs={12} sm={4} md={3}>
          <Select
            fullWidth
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            size="medium"
            displayEmpty
          >
            <MenuItem value="featured" disabled>
              Sort By
            </MenuItem>
            <MenuItem value="featured">Featured</MenuItem>
            <MenuItem value="price-low">Price: Low to High</MenuItem>
            <MenuItem value="price-high">Price: High to Low</MenuItem>
            <MenuItem value="name">Name</MenuItem>
          </Select>
        </Grid>
      </Grid>

      {/* Products */}
      {loading ? (
        <Box textAlign="center" py={6}>
          <CircularProgress />
        </Box>
      ) : (
        <ProductGrid
          products={filteredProducts}
          cartItems={cartItems}
          setCartItems={setCartItems}
          setCartCount={setCartCount}
        />
      )}
    </Container>
  );
}
