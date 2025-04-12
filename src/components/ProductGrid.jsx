import { Grid, Typography, Box } from "@mui/material";
import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
  cartItems,
  setCartItems,
  setCartCount,
}) {
  const ecoFriendlyProducts = products.filter((p) => p.isEcoFriendly);
  const regularProducts = products.filter((p) => !p.isEcoFriendly);
  console.log("REG", regularProducts);

  return (
    <Box py={4}>
      {/* All Regular Products */}
      {regularProducts.length > 0 && (
        <Box>
          <Typography variant="h5" color="green.800" fontWeight="bold" mb={3}>
            All Products
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {regularProducts.map((category, catIndex) =>
              category.products.map((product, prodIndex) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={`${catIndex}-${prodIndex}`}
                >
                  <ProductCard
                    product={{ ...product, category: category.category }} // Pass category too if needed
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                    setCartCount={setCartCount}
                  />
                </Grid>
              ))
            )}
          </Grid>
        </Box>
      )}
      {/* Empty State */}
      {products.length === 0 && (
        <Box textAlign="center" py={10}>
          <Typography variant="h6" color="text.secondary" mb={2}>
            No products found
          </Typography>
        </Box>
      )}
    </Box>
  );
}
