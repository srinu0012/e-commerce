import { Home } from "@mui/icons-material";
import { Button } from "@mui/material";
import { usePageNavigation } from "../../../hooks/page-navigation-hook.ts/pageNavigation";

export default function HomeNavigationButton() {
  let GotoHome = usePageNavigation("");

  return (
    <>
      <Button onClick={GotoHome} startIcon={<Home />}>
        Home
      </Button>
    </>
  );
}
