import { ReactElement } from "react";
import { UserAuthStore } from "../../stores/authStore";

function RequireAuthAdmin({ children }:{children:ReactElement}) {
  const { role } = UserAuthStore();
  if (role === "admin") {
    return <>{children}</>;
  }
  return (
    <>
      <h1>Un authorized</h1>
    </>
  );
}
export default RequireAuthAdmin;
