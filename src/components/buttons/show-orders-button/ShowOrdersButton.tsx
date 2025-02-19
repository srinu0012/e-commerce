import { IconButton, Tooltip } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import React from "react";

 function ShowOrdersButton({toOrders}: {toOrders: () => void;}) {
  return (
    <>
      <Tooltip title="Orders" arrow>
        <IconButton sx={{ color: "#fff" }} onClick={toOrders}>
          <ShoppingBagIcon />
        </IconButton>
      </Tooltip>
    </>
  );
}

export default React.memo(ShowOrdersButton);
