import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "./components/Home_Page/homePage";
import ShopPage from "./components/Shop_Page/shopPage";
import CartPage from "./components/Cart_Page/cartPage";
import ErrorPage from "./components/errorPage";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "Shop",
        element: <ShopPage></ShopPage>,
      },
      {
        path: "Cart",
        element: <CartPage></CartPage>,
      },
    ],
  },
]);

export default route;
