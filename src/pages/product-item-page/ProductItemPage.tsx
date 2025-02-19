import { Box } from "@mui/material";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import ProductItem from "../../components/product-item/ProductItem";

export default function ProductItemPage() {
  return (
    <>
      <Header />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <ProductItem />
      </Box>
    </>
  );
}
