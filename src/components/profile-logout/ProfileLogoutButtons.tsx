import { Menu, MenuItem, PopoverVirtualElement } from "@mui/material";
import { UserAuthStore } from "../../stores/authStore";
import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { linkStyle } from "../../styles/linkStyles";
import { usePageNavigation } from "../../hooks/page-navigation-hook.ts/pageNavigation";


 function HeaderPopup({
  handleMenuClose,
  anchorEl,
  popup,
}: {
  handleMenuClose: () => void;
  anchorEl: null | PopoverVirtualElement;
  popup: boolean;
}) {
  const userLogout = UserAuthStore((state) => state.userLogout);
  const role = UserAuthStore((state) => state.role);

  const GoToHome = usePageNavigation("");

  const handleLogut = useCallback(() => {
    userLogout();
    handleMenuClose();
    GoToHome()
  }, []);

  return (
    <>
      <Menu
        anchorEl={anchorEl}
        open={popup}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link to={"/profilepage"} style={linkStyle}>
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        </Link>
        <MenuItem onClick={handleLogut}>Logout</MenuItem>

        {role == "admin" && (
          <Link to={"/admindashbord"} style={linkStyle}>
            <MenuItem>Dashbord</MenuItem>
          </Link>
        )}
      </Menu>
    </>
  );
}


export default React.memo(HeaderPopup)