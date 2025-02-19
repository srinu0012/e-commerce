import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { usePageNavigation } from "../../../hooks/page-navigation-hook.ts/pageNavigation";

export default function GoToProductsButton() {
  const GoToHome = usePageNavigation("");

  return (
    <>
      <Button
        endIcon={<AddShoppingCartIcon />}
        variant="contained"
        color="primary"
        onClick={GoToHome}
      >
        Order Some
      </Button>
    </>
  );
}
