import { Typography } from "@mui/material";
import SidebarList from "../sidebar-list/SidebarList";
import { useCallback, useEffect, useState } from "react";
import { categoryList } from "../../services/apiServices";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  let productItemList = useCallback(async () => {
    try {
      let response = await categoryList();
      setCategories(response);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    productItemList();
  }, []);

  return (
    <>
      <Typography variant="h6">Categories</Typography>

      {categories.map((category, ind) => {
        return <SidebarList category={category} key={ind} />;
      })}
    </>
  );
}


