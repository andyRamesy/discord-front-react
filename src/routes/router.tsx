import { Route, Routes } from "react-router-dom";
import pagesData from "./routeData";
import { ReactNode } from "react";

// interface IRouteElement{
//   path: string,
//   title: string,
//   element : ReactNode
// }

const Router = () => {
  const pageRoutes = pagesData.map(
    ({ path, title, element }: any): ReactNode => {
      return <Route key={title} path={`/${path}`} element={element} />;
    }
  );

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
