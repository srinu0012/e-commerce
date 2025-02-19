import { Grid, Box, Typography } from "@mui/material";
import CartItemCard from "../cart-item-card/CartItemCard";
import { globalStore } from "../../stores/globalAdminStore";

export default function AdminProducts() {
  let globalProducts = globalStore((state) => state.globalProducts);

  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h2">Orders</Typography>
        {Object.keys(globalProducts).map((username: string) => (
          <>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h5">{username}</Typography>
            </Box>
            <Grid container spacing={2}>
              {globalProducts[username].map((product: Record<string, any>) => (
                <>
                  <CartItemCard product={product} />
                </>
              ))}
            </Grid>
          </>
        ))}
      </Box>
    </>
  );
}
