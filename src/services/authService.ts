import api from "./api";

export const loginUser = async (username: string, password: string) => {
  try {
    const response = await api.post(
      "/auth/login",
      {
        username,
        password,
        expiresInMins: 30,
      }
    );

    return response.data;
  } catch (error:any) {
    throw new Error("invalid credientials");
  }
};
