import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductItemType } from "../../types/productItemType";
import AddToCartButton from "../buttons/add-to-cart-button/AddToCartButton";
import { fetchProductItem } from "../../services/apiServices";

export default function ProductItem() {
  const [product, setProduct] = useState<ProductItemType | null>(null);
  let { productId } = useParams();

  async function getProduct(id: string) {
    let data = await fetchProductItem(id);
    setProduct(data);
  }

  useEffect(() => {
    getProduct(productId!);
  }, []);

  return (
    <>
      <Grid container justifyContent="center" spacing={2} sx={{ marginTop: 5 }}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardMedia
              component="img"
              height="400"
              image={product?.thumbnail}
              alt={product?.title}
              sx={{ objectFit: "contain" }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {product?.title}
              </Typography>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                ${product?.price}{" "}
                <span style={{ color: "green" }}>
                  {"  "}
                  {product?.discountPercentage}% OFF
                </span>
              </Typography>

              <Typography variant="body1">
                <strong>Category:</strong> {product?.category}
              </Typography>

              <Typography variant="body1">
                <strong>Brand:</strong> {product?.brand}
              </Typography>

              <Typography variant="body1">
                <strong>Dimensions:</strong> {product?.dimensions.width} x{" "}
                {product?.dimensions.height} x {product?.dimensions.depth} cm
              </Typography>

              <Typography variant="body1">
                <strong>Availability:</strong> {product?.availabilityStatus} -{" "}
                {product?.stock} items in stock
              </Typography>

              <Typography variant="body1">
                <strong>Shipping Info:</strong> {product?.shippingInformation}
              </Typography>

              <Typography variant="body1">
                <strong>Return Policy:</strong> {product?.returnPolicy}
              </Typography>

              <Typography variant="body1">
                <strong>Warranty Info:</strong> {product?.warrantyInformation}
              </Typography>

              <Divider sx={{ marginY: 2 }} />

              <Typography variant="h6" gutterBottom>
                <strong>Rating:</strong>
              </Typography>
              <Rating name="read-only" value={product?.rating} readOnly />
              <Typography variant="body2" color="textSecondary">
                {product?.reviews.length} Reviews
              </Typography>

              <Divider sx={{ marginY: 2 }} />

              <AddToCartButton product={product!} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sx={{ marginTop: 5 }}>
          <Typography variant="h6">Customer Reviews:</Typography>
          {product?.reviews.map((review, index) => (
            <Box key={index} sx={{ marginBottom: 2 }}>
              <Typography variant="body1">
                <strong>{review.reviewerName}</strong> -{" "}
                <Rating value={review.rating} readOnly precision={0.1} />
              </Typography>
              <Typography variant="body2">{review.comment}</Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
