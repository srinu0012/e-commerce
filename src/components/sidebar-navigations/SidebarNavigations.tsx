import { Box } from "@mui/material";
import { UserAuthStore } from "../../stores/authStore";
import LogoutButton from "../buttons/logout-button/LogoutButton";
import HomeNavigationButton from "../buttons/sidebar-navigation-buttons/HomeNavigationButton";
import CartNavigationButton from "../buttons/sidebar-navigation-buttons/CartNavigationButton";

export default function SidebarNavigationContainer() {
  const isAuthenticated = UserAuthStore((state) => state.isAuthenticated);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <HomeNavigationButton />
        <CartNavigationButton />
        {isAuthenticated && <LogoutButton />}
      </Box>
    </>
  );
}
