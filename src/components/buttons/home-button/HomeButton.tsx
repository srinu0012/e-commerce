import { Home as HomeIcon } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";
function HomeIconButton({ toHome }: { toHome: () => void }) {
  return (
    <>
      <Tooltip title="Home" arrow>
        <IconButton sx={{ color: "#fff" }} onClick={toHome}>
          <HomeIcon />
        </IconButton>
      </Tooltip>
    </>
  );
}

export default React.memo(HomeIconButton);
