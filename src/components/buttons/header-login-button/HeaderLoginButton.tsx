import { Login } from "@mui/icons-material";
import { Box, Button, Tooltip } from "@mui/material";
import React from "react";

function HeaderLoginButton({ linkto }: { linkto: () => void }) {
  return (
    <>
      <Box>
        <Tooltip title="Login" arrow>
          <Button
            startIcon={<Login />}
            onClick={linkto}
            variant="contained"
            color="primary"
            sx={{
              borderRadius: 10,
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            }}
          >
            Login
          </Button>
        </Tooltip>
      </Box>
    </>
  );
}

export default React.memo(HeaderLoginButton);
