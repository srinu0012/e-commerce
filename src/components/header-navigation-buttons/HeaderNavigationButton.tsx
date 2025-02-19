import { Box } from "@mui/material";
import HomeIconButton from "../buttons/home-button/HomeButton";
import CartIconButton from "../buttons/header-cart-button/HeaderCartButton";
import { usePageNavigation } from "../../hooks/page-navigation-hook.ts/pageNavigation";
import ShowOrdersButton from "../buttons/show-orders-button/ShowOrdersButton";
import { UserAuthStore } from "../../stores/authStore";

export default function HeaderNavigationButtons() {
  const GoToCart = usePageNavigation("cartpage");
  const GoToHome = usePageNavigation("");
  const GoToOrders = usePageNavigation("orders");
  const role = UserAuthStore((state) => state.role);

  return (
    <>
      <Box>
        <HomeIconButton toHome={GoToHome} />
        <CartIconButton toCart={GoToCart} />
        {(role == "admin" || role == "user") && (
          <ShowOrdersButton toOrders={GoToOrders} />
        )}
      </Box>
    </>
  );
}
