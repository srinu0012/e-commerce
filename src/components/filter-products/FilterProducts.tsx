import { Grid } from "@mui/material";
import ProductCard from "../product-card/ProductCard";
import { filterProductStore } from "../../stores/filterStore";
import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../services/apiServices";

function FilterProducts() {
  let filterProducts = filterProductStore((state) => state.filterProducts);
  const setFilterProducts = filterProductStore(
    (state) => state.setFilterProducts
  );

  let { category } = useParams();
  let products = useCallback(
    async (category: string) => {
      try {
        let response = await fetchProducts(`${category}`);
        setFilterProducts(response);
      } catch (error) {
        console.log(error);
      }
    },
    [category]
  );

  useEffect(() => {
    products(category!);
  }, [category]);

  return (
    <>
      <Grid container spacing={2}>
        {filterProducts.map((ele: Record<string, any>) => (
          <ProductCard key={ele.id} product={ele} />
        ))}
      </Grid>
    </>
  );
}

export default FilterProducts;
