import { Box, Button } from "@mui/material";
import { CartStore } from "../../../stores/cartStore";
import { UserAuthStore } from "../../../stores/authStore";
import { useCallback } from "react";
import { usePageNavigation } from "../../../hooks/page-navigation-hook.ts/pageNavigation";
import { globalStore } from "../../../stores/globalAdminStore";

export default function BuyNowButton() {
  const GoToLogin = usePageNavigation("loginpage");
  const orderedProducts = CartStore((state) => state.orderedProducts);
  const buyNow = CartStore((state) => state.buyNow);
  const user = UserAuthStore((state) => state.user);
  const isAuthenticated = UserAuthStore((state) => state.isAuthenticated);
  const setGlobalProducts = globalStore((state) => state.setGlobalProducts);

  let handleBuynow = useCallback((): void => {
    if (!isAuthenticated) {
      GoToLogin();
    } else {
      buyNow();
      setGlobalProducts(user?.username, orderedProducts);
    }
  }, []);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" onClick={handleBuynow}>
          Buy Now
        </Button>
      </Box>
    </>
  );
}
