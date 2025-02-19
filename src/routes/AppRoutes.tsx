import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuthAdmin from "./protected-routes/AdminRoutes";
import RequireAuthUser from "./protected-routes/UserRoute";
import AdminPage from "../pages/admin-page/AdminPage";
const HomePage = lazy(() => import("../pages/home/Home"));
const LoginPage = lazy(() => import("../pages/login-page/LoginPage"));
const CartPage = lazy(() => import("../pages/cart-page/CartPage"));
const CategoryPage = lazy(() => import("../pages/category-page/CategoryPage"));
const ProductItemPage = lazy(
  () => import("../pages/product-item-page/ProductItemPage")
);
const ProfilePage = lazy(() => import("../pages/profile-page/ProfilePage"));
const UserOrdersPage = lazy(
  () => import("../pages/user-ordered-products-page/UserOrderedProductsPage")
);

export default function AppRoutes() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/categorypage/:category" element={<CategoryPage />} />
          <Route path="/productpage/:productId" element={<ProductItemPage />} />
          <Route
            path="/profilepage"
            element={
              <RequireAuthUser>
                <ProfilePage />
              </RequireAuthUser>
            }
          />

          <Route
            path="/admindashbord"
            element={
              <RequireAuthAdmin>
                <AdminPage />
              </RequireAuthAdmin>
            }
          />

          <Route
            path="/orders"
            element={
              <RequireAuthUser>
                <UserOrdersPage />
              </RequireAuthUser>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}
