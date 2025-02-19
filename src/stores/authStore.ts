import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import userAuthStoreType from "../types/store-types/userAuthStoreType";




export const UserAuthStore = create<userAuthStoreType>()(
  devtools(persist((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  role: "public",
  userLogin: (user, token, role) =>
    set(() => {
      return {
        user,
        token,
        isAuthenticated: true,
        role: role,
      };
    }),
  userLogout: () =>
    set(() => {
      return {
        user: null,
        token: null,
        isAuthenticated: false,
        role: "public",
      }
    }),
}), { name: "userAuth" }))
);
