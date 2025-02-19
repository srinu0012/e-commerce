import { Box } from "@mui/material";
import Curosal from "../carousel/Carousel";
import Products from "../products/Products";

export default function Main() {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Curosal />
        <Products />
      </Box>
    </>
  );
}
