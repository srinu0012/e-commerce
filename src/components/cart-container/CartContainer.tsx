import { Box, Grid, Typography } from "@mui/material";
import BuyNowButton from "../buttons/buy-now-button/BuyNowButton";
import CartItemCard from "../cart-item-card/CartItemCard";
import { CartStore } from "../../stores/cartStore";
import GoToProductsButton from "../buttons/go-to-products-button/GoToProductsButton";

export function CartContainer() {
  let cartProducts = CartStore((state) => state.cartProducts);

  return (
    <>
      <Box sx={{ padding: 2, textAlign: "center" }}>
        <Typography variant="h4" sx={{ margin: 2 }}>
          Shopping Cart
        </Typography>
        <Grid container spacing={2}>
          {cartProducts.map((product) => {
            return <CartItemCard product={product} />;
          })}
        </Grid>

        {cartProducts.length > 0 ? <BuyNowButton /> : <GoToProductsButton />}
      </Box>
    </>
  );
}
