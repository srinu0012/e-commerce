import { Logout } from "@mui/icons-material";
import { Button } from "@mui/material";
import { UserAuthStore } from "../../../stores/authStore";
import { usePageNavigation } from "../../../hooks/page-navigation-hook.ts/pageNavigation";

export default function LogoutButton() {
  let userLogout = UserAuthStore((state) => state.userLogout);
  let goToHome = usePageNavigation("");
  let handleLogout = () => {
    userLogout();
    goToHome();
  };

  return (
    <>
      <Button onClick={handleLogout} startIcon={<Logout />}>
        logout
      </Button>
    </>
  );
}
