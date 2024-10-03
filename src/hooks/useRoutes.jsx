import { createBrowserRouter } from "react-router-dom";
// APP
import App from "../App";
// PAGES
import Home from "../routes/Home";
import Contact from "../routes/Contact";
import { ErrorPage } from "../routes/ErrorPage";
import Product from "../components/Product";
import Info from "../routes/info";
import Search from "../routes/Search";

export function useRoutes(){

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      // 3 - component base
      children:[
        {
        path: "/",
        element: <Home />
        },
        {
          path: "contact",
          element: <Contact />
        },
        // 7 - DINAMIC ROUTES
        {
          path: "products/:id",
          element: <Product />
        },
        //  8 - NESTED ROUTES
        {
          path: "products/:id/info",
          element: <Info />
        },
        // 9 - SEARCH PARAMS
        {
          path: "search",
          element: <Search />
        }
      ]
    },
  ])
  return { routes }
}