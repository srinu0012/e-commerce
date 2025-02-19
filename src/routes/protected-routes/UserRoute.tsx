import { ReactElement } from "react";
import { UserAuthStore } from "../../stores/authStore";

function RequireAuthUser({ children }:{children:ReactElement}) {
  const { role } = UserAuthStore();
  if (role === "user" || role === "admin") {
    return <>{children}</>;
  }
  return (
    <>
      <h1>Un authorized</h1>
    </>
  );
}
export default RequireAuthUser;
