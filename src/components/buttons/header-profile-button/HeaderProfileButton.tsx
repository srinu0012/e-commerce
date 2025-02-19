import { Avatar, IconButton, Tooltip } from "@mui/material";
import React from "react";

function HeaderProfileButton({
  handleProfileLogout,
  anchorEl,
}: {
  handleProfileLogout: () => void;
  anchorEl: React.Ref<HTMLButtonElement>;
}) {
  return (
    <>
      <Tooltip title="Profile">
        <IconButton onClick={handleProfileLogout} ref={anchorEl}>
          <Avatar src="" alt="profile" sx={{ "&:hover": { boxShadow: 6 } }} />
        </IconButton>
      </Tooltip>
    </>
  );
}

export default React.memo(HeaderProfileButton);
