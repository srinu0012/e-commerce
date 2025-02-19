import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ActionStore } from "../../../stores/actionsStore";

export default function CloseButton() {
  let toggleHamburger = ActionStore((state) => state.toggleHamburger);

  return (
    <>
      <IconButton
        onClick={toggleHamburger}
        children={<CloseIcon color="error" />}
      />
    </>
  );
}
