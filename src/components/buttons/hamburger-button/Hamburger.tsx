import { Menu as MenuIcon } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { ActionStore } from "../../../stores/actionsStore";

export default function HamburgerIconButton() {
  let toggleHamburger = ActionStore((state) => state.toggleHamburger);
  return (
    <>
      <Tooltip title="Menu" arrow>
        <IconButton sx={{ color: "#fff" }} onClick={toggleHamburger}>
          <MenuIcon />
        </IconButton>
      </Tooltip>
    </>
  );
}
