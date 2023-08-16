
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Categories from "../components/categories/Categories";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Categories></Categories>,
      },
    ],
  },
]);