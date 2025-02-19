import { ListItem, ListItemButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SidebarList({ category }: { category: String }) {
  let navigate = useNavigate();
  return (
    <>
      <ListItem>
        <ListItemButton
          onClick={() => {
            navigate(`/categorypage/${category}`);
          }}
        >
          {category}
        </ListItemButton>
      </ListItem>
    </>
  );
}
