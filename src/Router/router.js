import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/OverviewPage/Home";
import Order from "../Pages/Home/OverviewPage/OrderPage/Order";
import Addproducts from "../Pages/Products/AddProducts/Addproducts";
import Products from "../Pages/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/productmanagement",
        element: <Products></Products>,
      },
      {
        path: "/productmanagement/addproducts",
        element: <Addproducts></Addproducts>,
      },
      {
        path: "productmanagement/allproducts",
        element: <Products></Products>,
      },
      {
        path: "ordermanagement/allproducts",
        element: <Order></Order>,
      },
    ],
  },
]);

export default router;
