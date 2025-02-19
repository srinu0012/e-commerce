import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";
import { Badge, IconButton, Tooltip } from "@mui/material";
import { CartStore } from "../../../stores/cartStore";
import React from "react";

function CartIconButton({ toCart }: { toCart: () => void }) {
  const cartProducts = CartStore((state) => state.cartProducts);

  return (
    <>
      <Tooltip title="Cart" arrow>
        <Badge badgeContent={cartProducts.length} color="error">
          <IconButton sx={{ color: "#fff" }} onClick={toCart}>
            <ShoppingCartIcon />
          </IconButton>
        </Badge>
      </Tooltip>
    </>
  );
}

export default React.memo(CartIconButton);
