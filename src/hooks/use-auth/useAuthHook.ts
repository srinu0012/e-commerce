import { useState } from "react";
import { loginUser } from "../../services/authService";
export const useAuth = () => {
  const [error, setError] = useState<string>("");
  const login = async (username: string, password: string) => {
    setError("");
    try {
      const data = await loginUser(username, password);
      return data;
    } catch (err: any) {
      setError(err.message);
    }
  };

  return { login, error };
};
