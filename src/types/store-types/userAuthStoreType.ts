export default interface userAuthStoreType {
  user: Record<string, any> | null;
  token: string | null;
  isAuthenticated: boolean;
  role: "user" | "admin" | "public";
  userLogin: (
    user: Record<string, any>|null,
    token: string,
    role: "user" | "admin" | "public"
  ) => void;
  userLogout:()=>void
}