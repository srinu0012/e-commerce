import { Grid, Box, Typography } from "@mui/material";
import CartItemCard from "../cart-item-card/CartItemCard";
import { CartStore } from "../../stores/cartStore";



export default function UserOrders() {
  const orderedProducts = CartStore((state) => state.orderedProducts);

  return (
    <>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "center", margin: 2 }}>
          <Typography variant="h4" color="primary">
            Orders
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {orderedProducts.map((product) => {
            return <CartItemCard product={product} />;
          })}
        </Grid>
      </Box>
    </>
  );
}



