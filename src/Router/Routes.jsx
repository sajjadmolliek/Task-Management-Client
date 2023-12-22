import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Components/ErrorPage";
import Logins from "../Pages/Logins/Logins";
import Resister from "../Pages/Resister/Resister";
import PrivateRoute from "../Private/PrivateRoute";
import UpdateAssignment from "../Components/Update-Assignment/UpdateAssignment";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Feature from "../Pages/Home/Feature/Feature";




const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
       
      },
      {
        path: "/feature",
        element: <Feature/>,
       
      },
      {
        path: "/Dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      },
      
      {
        path: "/update/:id",
        element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
        loader:({params})=>fetch(`https://task-management-weld-pi.vercel.app/details/${params.id}`,{ credentials: "include" }),
       
      },
      {
        path: "/logins",
        element: <Logins></Logins>,
      },
      {
        path: "/resister",
        element: <Resister></Resister>,
      },
     
    ],
  },
]);

export default Routes;
