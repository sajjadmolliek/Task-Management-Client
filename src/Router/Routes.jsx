import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Components/ErrorPage";
import Logins from "../Pages/Logins/Logins";
import Resister from "../Pages/Resister/Resister";
import AllAssignment from "../Pages/AllAssignment/AllAssignment";
import PrivateRoute from "../Private/PrivateRoute";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import MyAssignment from "../Pages/MyAssignment/MyAssignment";
import SubmittedAssignment from "../Pages/SubmittedAssignment/SubmittedAssignment";
import Details from "../Components/DetailsAssignment/Details";
import UpdateAssignment from "../Components/Update-Assignment/UpdateAssignment";
import GiveMarks from "../Components/GiveMarks/GiveMarks";



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
        path: "/All-Assignment",
        element: <AllAssignment></AllAssignment>,
      },
      {
        path: "/Create-Assignment",
        element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>,
       
      },
      {
        path: "/My-Assignment",
        element: <PrivateRoute><MyAssignment></MyAssignment></PrivateRoute>,
       
      },
      {
        path: "/Submitted-Assignment",
        element: <PrivateRoute><SubmittedAssignment></SubmittedAssignment></PrivateRoute>,
        loader: ()=>fetch('https://online-study-explore.vercel.app/SubmitAssignment',{ credentials: "include" })
       
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader:({params})=>fetch(`https://online-study-explore.vercel.app/details/${params.id}`,{ credentials: "include" }),
       
      },
      {
        path: "/GiveMarks/:id",
        element: <PrivateRoute><GiveMarks></GiveMarks></PrivateRoute>,
        loader:({params})=>fetch(`https://online-study-explore.vercel.app/SubmitAssignment/${params.id}`,{ credentials: "include" }),
       
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
