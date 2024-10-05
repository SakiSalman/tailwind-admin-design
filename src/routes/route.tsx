import { createBrowserRouter } from "react-router-dom";
import App from "../App.js";
import DefaultLayout from "../layout/DefaultLayout.js";
import Dashboard from "../pages/Dashboard/Dashboard.js";




export const router = createBrowserRouter([
  {
    element: <DefaultLayout/>,
    children:[
      {
          path:"/",
          element:<Dashboard/>,
      }
  ]
  },
]);
