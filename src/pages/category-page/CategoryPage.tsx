import { Box } from "@mui/system";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import FilterProducts from "../../components/filter-products/FilterProducts";

export default function CategoryPage() {
  return (
    <>
      <Header />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <FilterProducts />
      </Box>
    </>
  );
}
