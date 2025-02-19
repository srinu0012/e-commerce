import { AppBar } from "@mui/material";
import NavBar from "../toolbar/Toolbar";


function Header() {
  return (
    <>
      <AppBar position="sticky">
        <NavBar />
      </AppBar>
    </>
  );
}

export default Header;
