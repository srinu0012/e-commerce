import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AddToCartButton from "../buttons/add-to-cart-button/AddToCartButton";
import React from "react";
import { CardSxStyles } from "../../styles/cardSxStyles";

function ProductCard({ product }: { product: any }) {
  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
        <Card sx={CardSxStyles}>
          <Link to={`/productpage/${product.id}`}>
            <CardMedia
              component="img"
              alt={product.title}
              height="50%"
              image={product.thumbnail}
              title={product.title}
            />
          </Link>

          <CardContent>
            <Typography variant="h6">{product.title}</Typography>
            <Typography variant="body2" color="textSecondary">
              ${product.price}
            </Typography>
          </CardContent>
          <AddToCartButton product={product} />
        </Card>
      </Grid>
    </>
  );
}

export default React.memo(ProductCard);
