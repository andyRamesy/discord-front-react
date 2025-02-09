import LoginPage from "../pages/authPages/LoginPage/LoginPage";
import RegisterPage from "../pages/authPages/RegisterPage/RegisterPage";
import DashBoard from "../pages/DashBoard/DashBoard";

interface IPageData {
  path: String;
  element: Object;
  title: String;
}

const pagesData:IPageData[] = [
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
    path: "/dashboard",
    element: <DashBoard />,
    title: "dashboard",
  },
];

export default pagesData;
