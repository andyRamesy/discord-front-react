import LoginPage from "../pages/authPages/LoginPage/LoginPage";
import RegisterPage from "../pages/authPages/RegisterPage/RegisterPage";
import DashBoard from "../pages/DashBoard/DashBoard";

const pagesData = [
  {
    path: "/login",
    element: <LoginPage />,
    title: "login",
  },
  {
    path: "/register",
    element: <RegisterPage />,
    title: "register",
  },
  {
    path: "/dasboard",
    element: <DashBoard />,
    title: "dashboard",
  },
  {
    path: "/",
    element :  <DashBoard />,
    title : "dashboard"
  }
];

export default pagesData;
