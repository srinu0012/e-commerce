import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
import { usePageNavigation } from "../../../hooks/page-navigation-hook.ts/pageNavigation";

export default function CartNavigationButton() {
  let GotoCart = usePageNavigation("cartpage");

  return (
    <>
      <Button onClick={GotoCart} startIcon={<ShoppingCartIcon />}>
        Cart
      </Button>
    </>
  );
}
