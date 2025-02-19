import { Toolbar } from "@mui/material";
import HeaderLogo from "../logos/HeaderLogo";
import { HeaderSearchBar } from "../header-search-bar/HeaderSearchBar";
import HamburgerIconButton from "../buttons/hamburger-button/Hamburger";
import HeaderNavigationButtons from "../header-navigation-buttons/HeaderNavigationButton";
import HeaderProfileButton from "../buttons/header-profile-button/HeaderProfileButton";
import HeaderPopup from "../profile-logout/ProfileLogoutButtons";
import  HeaderLoginButton  from "../buttons/header-login-button/HeaderLoginButton";
import useMediaQueries from "../../themes/basic-theme/mediaQuires";
import { usePageNavigation } from "../../hooks/page-navigation-hook.ts/pageNavigation";
import { UserAuthStore } from "../../stores/authStore";
import { useRef, useState } from "react";

export default function NavBar() {
  let mobileScreen = useMediaQueries();
  let GoToPage = usePageNavigation("loginpage");
  let isAuthenticated = UserAuthStore((state) => state.isAuthenticated);
  const [popup, setPopup] = useState<boolean>(false);
  const anchorEl = useRef(null);

  const handleMenuClose = (): void => {
    setPopup(false);
  };
  const handleProfileLogout = (): void => {
    setPopup(!popup);
  };
  return (
    <>
      <Toolbar sx={{ padding: 1 }}>
        <HeaderLogo logo="E-commerce" size="h5" hover={true} />
        <HeaderSearchBar />

        {mobileScreen ? (
          <HamburgerIconButton />
        ) : (
          <>
            <HeaderNavigationButtons />
            {isAuthenticated ? (
              <>
                <HeaderProfileButton
                  handleProfileLogout={handleProfileLogout}
                  anchorEl={anchorEl}
                />
                <HeaderPopup
                  handleMenuClose={handleMenuClose}
                  popup={popup}
                  anchorEl={anchorEl.current}
                />
              </>
            ) : (
              <HeaderLoginButton linkto={GoToPage} />
            )}
          </>
        )}
      </Toolbar>
    </>
  );
}
