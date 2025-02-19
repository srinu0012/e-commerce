import { Box } from "@mui/material";
import Header from "../../components/header/Header";
import Main from "../../components/main/MainPart";
import Sidebar from "../../components/sidebar/Sidebar";

function HomePage() {
  return (
    <>
      <Header />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Main />
      </Box>
    </>
  );
}

export default HomePage;
