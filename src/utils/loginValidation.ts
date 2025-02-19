export const validateLogin = (username: string, password: string) => {
  if (!username || !password) {
    return "Username and password are required!";
  }

  return "";
};
