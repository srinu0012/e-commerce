import { Box, Button } from "@mui/material";
import React from "react";

function ViewMoreButton({ handleNextItems }: { handleNextItems: () => void }) {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
        <Button variant="contained" onClick={handleNextItems}>
          View More
        </Button>
      </Box>
    </>
  );
}

export default React.memo(ViewMoreButton);
