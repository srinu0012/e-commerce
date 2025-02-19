import { Box, Typography } from "@mui/material";
import Header from "../../components/header/Header";
import UserOrders from "../../components/user-orders/UserOrders";

export default function UserOrdersPage() {
  return (
    <>
      <Header />
      <Box>
        <Typography variant="h3"> Orders</Typography>
      </Box>
      <UserOrders />
    </>
  );
}
