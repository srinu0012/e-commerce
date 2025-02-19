import { Box, Typography } from "@mui/material";
import { HeaderLogoPropTypes } from "../../types/headerLogoType";
import { BoxSxProperties } from "../../styles/boxSxProperties";
import React from "react";



 function HeaderLogo({ logo,size,hover }:HeaderLogoPropTypes) {
  return (
    <>
      <Box sx={BoxSxProperties}>
        <Typography variant={size||"inherit"}  sx={hover?{"&:hover": { color: "#ffcccb" }}:{}}>{logo}</Typography>
      </Box>
    </>
  );
}

export default React.memo(HeaderLogo);
