import { useCallback, useEffect, useState } from "react";
import ProductCard from "../product-card/ProductCard";
import { MoreStore } from "../../stores/moreProductsStore";
import { limitFetchProducts } from "../../services/apiServices";
import ViewMoreButton from "../buttons/viewMoreButton/ViewMoreButton";
import { Grid } from "@mui/material";

export default function Products() {
  const Products = MoreStore((state) => state.Products);
  const viewMore = MoreStore((state) => state.viewMore);

  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    limitFetchProducts(currentPage, viewMore);
  }, [currentPage]);

  const handleNextItems = useCallback(() => {
    setCurrentPage(currentPage + 1);
  }, [currentPage]);

  return (
    <>
      <Grid container spacing={2}>
        {Products.map((ele: Record<string, any>, ind: number) => (
          <ProductCard key={ind} product={ele} />
        ))}
      </Grid>
      <ViewMoreButton handleNextItems={handleNextItems} />
    </>
  );
}
