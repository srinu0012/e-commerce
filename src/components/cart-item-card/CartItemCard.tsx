import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { CartStore } from "../../stores/cartStore";
import React from "react";

 function CartItemCard({ product }: { product: Record<string, any> }) {
  const countProducts = CartStore((state) => state.countProducts);
  return (
    <>
      <Grid item xs={12} sm={4} md={6} lg={3} key={product.id}>
        <Card
          sx={{
            width: "200px",
            height: "350px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            alt={product.title}
            height="50%"
            image={product.thumbnail}
            title={product.title}
          />

          <CardContent>
            <Typography variant="h6">{product.title}</Typography>
            <Typography variant="body2" color="textSecondary">
              ${product.price}
            </Typography>
          </CardContent>
          <Typography variant="h5" color="error">
            {countProducts[product.id]}
          </Typography>
        </Card>
      </Grid>
    </>
  );
}

export default React.memo(CartItemCard);
