import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useAuth } from "../../hooks/use-auth/useAuthHook";
import { validateLogin } from "../../utils/loginValidation";
import { UserAuthStore } from "../../stores/authStore";
import { usePageNavigation } from "../../hooks/page-navigation-hook.ts/pageNavigation";

export default function LoginForm() {
  const GoToHome = usePageNavigation("");
  const GoToDashbord = usePageNavigation("admindashbord");
  const { login, error } = useAuth();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [formError, setFormError] = useState<string>("");

  const userLogin = UserAuthStore((state) => state.userLogin);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateLogin(username, password);
    if (validationError) {
      setFormError(validationError);
      return;
    }
    let getUser = await login(username, password);
    const getadmins: string[] | null = JSON.parse(
      localStorage.getItem("admins")!
    );

    if (getadmins?.includes(getUser.username)) {
      userLogin(getUser, getUser.accessToken, "admin");
      GoToDashbord();
    } else {
      userLogin(getUser, getUser.accessToken, "user");
      GoToHome();
    }
  };

  return (
    <>
      <Box
        sx={{
          maxWidth: 400,
          margin: "auto",
          marginTop: 10,
          padding: 3,
          border: "1px solid #ccc",
          borderRadius: 2,
        }}
      >
        <Typography variant="h5">Login</Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            margin="normal"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          {formError && <Typography color="error">{formError}</Typography>}

          {error && <Typography color="error">{error}</Typography>}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Login
          </Button>
        </form>
      </Box>
    </>
  );
}
