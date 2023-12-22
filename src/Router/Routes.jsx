import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Components/ErrorPage";
import Logins from "../Pages/Logins/Logins";
import Resister from "../Pages/Resister/Resister";
import Dashboard from "../Pages/AllAssignment/Dashboard";
import PrivateRoute from "../Private/PrivateRoute";
import UpdateAssignment from "../Components/Update-Assignment/UpdateAssignment";




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
        path: "/Dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/update/:id",
        element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
        loader:({params})=>fetch(`https://online-study-explore.vercel.app/details/${params.id}`,{ credentials: "include" }),
       
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
